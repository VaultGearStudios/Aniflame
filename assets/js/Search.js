import axios from "axios";

let sEngA = [
	'9Anime'
	'AnimeFox'
	'Animepahe'
	'BiliBili'
	'Crunchyroll'
	'Enime'
	'GogoAnime'
	'Zoro'
];

let storedE;
let pageN = 1;

function engineStorage(x){
	storedE = sEngA[x]
}

function searchWE(searchV){
	switch(storedE) {
  		case '9Anime':
			const url = "https://api.consumet.org/anime/9anime/info/"+searchV;
			const data = async () => {
   				 try {
      			 	const { data } = await axios.get(url, {params: {id: searchV}});
      				return data;
   				 } catch (err) {
        			throw new Error(err.message);
    			}
			};
 
			console.log(data);
    		break;
			
		case 'AnimeFox':
   			const url = "https://api.consumet.org/anime/animefox/info?id="searchV;
			const data = async () => {
   				 try {
        			const { data } = await axios.get(url, { params: { id: searchV } });
        			return data;
    			} catch (err) {
        			throw new Error(err.message);
    			}
			};
 
			console.log(data);
    		break;
			
		case 'Animepahe':/*
   			const url = "https://api.consumet.org/anime/animepahe/info/99318885-5a76-cfa6-3b99-57007bbb7673";
				const data = async () => {
  			  		try {
        				const { data } = await axios.get(url);
        				return data;
    				} catch (err) {
        				throw new Error(err.message);
    				}
				};
 
			console.log(data);*/
    		break;
			
		case 'BiliBili':
   			// Currently No Doccumentation
    		break;
			
		case 'Crunchyroll':
   			// Extra Param
    		break;
			
		case 'Enime':
   			// Different type of val
    		break;
			
		case 'GogoAnime':
   				const url = "https://api.consumet.org/anime/gogoanime/info/"searchV;
				const data = async () => {
    				try {
       					 const { data } = await axios.get(url);
        				 return data;
    				} catch (err) {
        				throw new Error(err.message);
    				}
				};
 
			console.log(data);
    		break;
			
		case 'Zoro':
   			const url = "https://api.consumet.org/anime/zoro/info?id=spy-x-family-17977";
			const data = async () => {
    			try {
       				 const { data } = await axios.get(url, {params: {id: "spy-x-family-17977"}});
        			 return data;
    			} catch (err) {
        			throw new Error(err.message);
    			}
			};
 
			console.log(data);
    		break;
			
		default:
			break;
	}
}