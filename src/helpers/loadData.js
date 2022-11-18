import { db } from "../firebase/config-firebase";

export const loadData = async (uid) => {
  const response = await db.collection(`${uid}/Pausas/pausas`).get();

  const data = [];
  
  response.forEach((pausas) => {
    const pausasData = pausas.data();
    
    data.push({
      id: pausas.id,
      ...pausasData,
    });
  });
  console.log("soy la perdida",data);
  return data;
};
