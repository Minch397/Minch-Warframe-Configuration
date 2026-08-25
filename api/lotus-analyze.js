const fs = require('fs');
const path = require('path');
const boards={
  warframe:['all warframe mods 1.png','all warframe mods 2.png','all warframe mods 3.png','all warframe mods 4.png'],
  principale:['all principale mods 1.png','all principale mods 2.png'],
  secondaire:['all secondaire mods 1.png','all secondaire mods 2.png'],
  melee:['all melee mods 1.png','all melee mods 2.png'],
  compagnon:['all sentinelle mods 1.png','all kubrow mods 1.png','all kavat mods 1.png'],
  armeCompagnon:['all griffes mods 1.png','all armes sentinelle mods 1.png','all armes sentinelle mods 2.png'],
  exaltee1:['all principale mods 1.png','all principale mods 2.png','all secondaire mods 1.png','all secondaire mods 2.png','all melee mods 1.png','all melee mods 2.png'],
  exaltee2:['all principale mods 1.png','all principale mods 2.png','all secondaire mods 1.png','all secondaire mods 2.png','all melee mods 1.png','all melee mods 2.png'],
  exaltee3:['all principale mods 1.png','all principale mods 2.png','all secondaire mods 1.png','all secondaire mods 2.png','all melee mods 1.png','all melee mods 2.png']
};
const arcaneBoards=['all arcanes 1.png','all arcanes 2.png','all arcanes 3.png','all arcanes 4.png'];
function imageData(file){return 'data:image/png;base64,'+fs.readFileSync(path.join(process.cwd(),'reference_boards',file)).toString('base64')}
function send(res,status,obj){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(obj))}
function mime(p){return ({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'}[path.extname(p).toLowerCase()]||'application/octet-stream')}
async function body(req){return new Promise((resolve,reject)=>{let d='';req.on('data',c=>{d+=c;if(d.length>45_000_000){reject(new Error('Requête trop grosse'));req.destroy()}});req.on('end',()=>resolve(d));req.on('error',reject)})}
function extractJson(text){
  text=(text||'').trim().replace(/^```json\s*/i,'').replace(/```$/,'').trim();
  const a=text.indexOf('{'),b=text.lastIndexOf('}'); if(a>=0&&b>a) text=text.slice(a,b+1);
  return JSON.parse(text);
}
async function analyzeSlot(slot, customReferences=[]){
  const key=process.env.OPENAI_API_KEY; if(!key) throw new Error('Clé API absente : ouvre le fichier .env et colle ta clé après OPENAI_API_KEY=');
  const refs=[...(boards[slot.id]||[]),...arcaneBoards];
  const content=[
    {type:'input_text',text:`Tu es Lotus, assistant d'un site Warframe français. Analyse le SCREEN DE CONFIGURATION ci-dessous pour « ${slot.name||slot.label} » (${slot.label}). Lis uniquement les NOMS des mods et arcanes équipés visibles. Ensuite compare chaque nom aux PLANCHES DE RÉFÉRENCE fournies après le screen. Pour chaque élément trouvé dans les planches, recopie fidèlement ses statistiques/conditions chiffrées et transforme-les en une explication française courte et précise. N'invente JAMAIS une valeur absente ou illisible. Si un nom du build est détecté mais sa carte de référence n'est pas trouvée/lisible, mets-le dans missing. Respecte l'ordre visible du build. Le texte final doit commencer par « ⚙️ Explication des mods de ${slot.name||slot.label} » puis une ligne par mod sous la forme « Nom → description ». Mets UNE VRAIE LIGNE VIDE après chaque titre et UNE VRAIE LIGNE VIDE entre chaque mod/arcane. N’utilise aucun Markdown, aucun **, aucun <br>, aucun [br] ni caractère de mise en forme. S'il y a un ou plusieurs arcanes, ajoute « 🔮 Explication de l’Arcane de ${slot.name||slot.label} » (ou « des Arcanes ») et leurs descriptions. Réponds UNIQUEMENT en JSON valide: {"recognized":nombre,"total":nombre,"modsRecognized":nombre,"modsTotal":nombre,"arcanesRecognized":nombre,"arcanesTotal":nombre,"missing":["..."],"text":"..."}.`},
    {type:'input_text',text:'SCREEN DE CONFIGURATION À ANALYSER :'},
    {type:'input_image',image_url:slot.image.dataUrl},
    {type:'input_text',text:'PLANCHES DE RÉFÉRENCE :'}
  ];
  for(const f of refs){content.push({type:'input_text',text:`Référence : ${f}`},{type:'input_image',image_url:imageData(f)})}
  for(const ref of (customReferences||[]).slice(0,20)){
    if(ref?.url || ref?.dataUrl) content.push({type:'input_text',text:`Référence ajoutée par l'utilisateur : ${ref.name||'planche personnalisée'}`},{type:'input_image',image_url:ref.url||ref.dataUrl});
  }
  const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.LOTUS_MODEL||'gpt-5.6-luna',input:[{role:'user',content}],max_output_tokens:3500})});
  const data=await r.json(); if(!r.ok) throw new Error(data?.error?.message||`OpenAI HTTP ${r.status}`);
  const txt=data.output_text || (data.output||[]).flatMap(x=>x.content||[]).map(x=>x.text||'').join('');
  const out=extractJson(txt);
  const mods=`${out.modsRecognized??0}/${out.modsTotal??0} mods`;
  const arcs=(out.arcanesTotal??0)>0?` — ${out.arcanesRecognized??0}/${out.arcanesTotal??0} arcane${out.arcanesTotal>1?'s':''}`:'';
  return {name:slot.name||slot.label,label:slot.label,recognized:out.recognized,total:out.total,missing:out.missing||[],text:out.text||'',summary:mods+arcs};
}


module.exports = async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS') return res.status(204).end();
  if(req.method==='GET') return res.status(200).json({ok:true,service:'Lotus',endpoint:'/api/lotus-analyze'});
  if(req.method!=='POST') return res.status(405).json({error:'POST uniquement'});
  try{
    const data = typeof req.body==='string' ? JSON.parse(req.body) : (req.body||{});
    const slots=(data.slots||[]).filter(s=>s?.image?.dataUrl);
    if(!slots.length) return res.status(400).json({error:'Aucun screen reçu.'});
    const customReferences=(data.customReferences||[]).filter(r=>r?.url||r?.dataUrl);
    const results=[];
    for(const slot of slots) results.push(await analyzeSlot(slot,customReferences));
    return res.status(200).json({results});
  }catch(e){
    console.error(e);
    return res.status(500).json({error:e.message||'Erreur Lotus'});
  }
};
