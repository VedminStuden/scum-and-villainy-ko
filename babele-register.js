Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'scum-and-villainy-ko',
			lang: 'ko',
			dir: 'compendium'
		}); 
  } // END if(typeof Babele  
});
