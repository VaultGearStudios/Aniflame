var searchV = document.getElementById("search").innerHTML;

let sEngA = ['9Anime','AnimeFox','Animepahe','BiliBili','Crunchyroll','Enime','GogoAnime','Zoro'];

let storedE;
let pageN = 1;

function engineStorage(x){
	storedE = sEngA[x]
}

function searchWE(){
	switch(storedE) {
  		case '9Anime':
			const url1 = "https://api.consumet.org/anime/9anime/info/"+searchV;
			const data1 = async () => {
   				 try {
      			 	const { data1 } = await axios.get(url1, {params: {id: searchV}});
      				return data1;
   				 } catch (err) {
        			throw new Error(err.message);
    			}
			};
 
			console.log(data1);
    		break;
			
		case 'AnimeFox':
   			const url2 = "https://api.consumet.org/anime/animefox/info?id=" + searchV;
			const data2 = async () => {
   				 try {
        			const { data2 } = await axios.get(url2, { params: { id: searchV } });
        			return data2;
    			} catch (err) {
        			throw new Error(err.message);
    			}
			};
 
			console.log(data2);
    		break;
			
		case 'Animepahe':/*
   			const url3 = "https://api.consumet.org/anime/animepahe/info/99318885-5a76-cfa6-3b99-57007bbb7673";
				const data = async () => {
  			  		try {
        				const { data } = await axios.get(url3);
        				return data3;
    				} catch (err) {
        				throw new Error(err.message);
    				}
				};
 
			console.log(data);*/
    		break;
			
		case 'BiliBili':
   			// Currently No Doccumentation 4
    		break;
			
		case 'Crunchyroll':
   			// Extra Param 5
    		break;
			
		case 'Enime':
   			// Different type of val 6
    		break;
			
		case 'GogoAnime':
   				const url7 = "https://api.consumet.org/anime/gogoanime/info/" + searchV;
				const data7 = async () => {
    				try {
       					 const { data7 } = await axios.get(url7);
        				 return data7;
    				} catch (err) {
        				throw new Error(err.message);
    				}
				};
 
			console.log(data7);
    		break;
			
		case 'Zoro':
   			const url8 = "https://api.consumet.org/anime/zoro/info?id=" + searchV;
			const data8 = async () => {
    			try {
       				 const { data8 } = await axios.get(url8, {params: {id: searchV}});
        			 return data8;
    			} catch (err) {
        			throw new Error(err.message);
    			}
			};
 
			console.log(data8);
    		break;
			
		default:
			break;
	}
}