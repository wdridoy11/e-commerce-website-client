const url = "https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app";

export const getData = async(path)=>{
    const respons = await fetch(`${url}/${path}`)
    const data = await respons.json();
    return data
}