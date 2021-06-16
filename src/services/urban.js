import urban_dict from 'urban-dictionary';

export default function urbanDictionary(query) {
	// Get the meaning of the query word and return
	return urban_dict.define(query.join('-'))
		.then(result => {
			const resp = {
				status: 'success',
				markdown: `🔰 Urban Dictionary\n\n` + 
							`*Word:*\t ${query.join(" ")}\n\n` + 
							`*Definition:*\n${result[0].definition}\n\n` + 
							`*Example[s]:*\n${result[0].example}`
			}
			return resp;
		})
		.catch(err => {
			const resp = {
				status: 'fail',
				markdown: '😡 No such word or phrase!'
			};
			return resp;
		})
}	