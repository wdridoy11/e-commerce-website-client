const url = "http://localhost:5000";

export const getData = async(path)=>{
    const respons = await fetch(`${url}/${path}`)
    const data = await respons.json();
    return data
}