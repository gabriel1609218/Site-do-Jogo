

const scriptsInEvents = {

	async FolhaDeEventos1_Event10_Act2(runtime, localVars)
	{
		let cura = runtime.globalVars.cura
		cura --;
		runtime.globalVars.cura = cura;
		if (cura <= 0) {
			runtime.goToLayout("obrigado");
		}
	},

	async FolhaDeEventos1_Event12_Act5(runtime, localVars)
	{
		let vidas = runtime.globalVars.vidas;
		vidas --;
		runtime.globalVars.vidas = vidas;
		if (vidas <=  0) {
			runtime.goToLayout("GamerOver");
		}
	},

	async FolhaDeEventos1_Event14_Act5(runtime, localVars)
	{
		let vidas = runtime.globalVars.vidas;
		vidas --;
		runtime.globalVars.vidas = vidas;
		if (vidas <=  0) {
			runtime.goToLayout("GamerOver");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
