/**@preserve  GeneXus Java 10_3_12-110051 on January 29, 2021 21:28:39.5
*/
gx.evt.autoSkip=!1;gx.define("halteraclienteos",!1,function(){this.ServerClass="halteraclienteos";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Pessoaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Ordemservicoid=function(){try{var n=gx.util.balloon.getNew("vORDEMSERVICOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pessoaempresaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Ordemservicoempresaid=function(){try{var n=gx.util.balloon.getNew("vORDEMSERVICOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s126_client=function(){gx.fn.setCtrlProperty("TABLEFORM","Visible",0);this.addMessage("Suas permissões não permitem alterar o cliente desta OS");this.addMessage(this.AV19MsgErro)};this.e132f32_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e142f32_client=function(){this.executeServerEvent("VPESSOAID.ISVALID",!0,null,!1,!0)};this.e162f31_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.e172f31_client=function(){this.executeServerEvent("PROMPT_PESSOAID.GXPROMPT",!0,null,!1,!0)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,16,26,29,32,34,37,39,42,44,47,49,52,54,57,59,60,61,62,63];this.GXLastCtrlId=63;n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLEFORM",grid:0};n[8]={fld:"TEXTBLOCK9",format:0,grid:0};n[10]={fld:"LBLCLIENTEATUAL",format:0,grid:0};n[13]={fld:"TEXTBLOCK10",format:0,grid:0};n[15]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:"e142f32_client",rgrid:[],fld:"vPESSOAID",gxz:"ZV8pessoaid",gxold:"OV8pessoaid",gxvar:"AV8pessoaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8pessoaid=gx.num.intval(n)},v2z:function(n){gx.O.ZV8pessoaid=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV8pessoaid,0)},c2v:function(){gx.O.AV8pessoaid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",".")},nac:gx.falseFn};n[16]={fld:"LBLNOMECLIENTE",format:0,grid:0};n[26]={fld:"TABLEVARS",grid:0};n[29]={fld:"TABLE3",grid:0};n[32]={fld:"TEXTBLOCK2",format:0,grid:0};n[34]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV5filialid",gxold:"OV5filialid",gxvar:"AV5filialid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5filialid=gx.num.intval(n)},v2z:function(n){gx.O.ZV5filialid=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV5filialid,0)},c2v:function(){gx.O.AV5filialid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCK4",format:0,grid:0};n[39]={lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV6ordemservicoid",gxold:"OV6ordemservicoid",gxvar:"AV6ordemservicoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6ordemservicoid=gx.num.intval(n)},v2z:function(n){gx.O.ZV6ordemservicoid=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV6ordemservicoid,0)},c2v:function(){gx.O.AV6ordemservicoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",".")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCK5",format:0,grid:0};n[44]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV7PessoaEmpresaid",gxold:"OV7PessoaEmpresaid",gxvar:"AV7PessoaEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7PessoaEmpresaid=n},v2z:function(n){gx.O.ZV7PessoaEmpresaid=n},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV7PessoaEmpresaid,0)},c2v:function(){gx.O.AV7PessoaEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};n[47]={fld:"TEXTBLOCK6",format:0,grid:0};n[49]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:"e142f32_client",rgrid:[],fld:"vPESSOAID",gxz:"ZV8pessoaid",gxold:"OV8pessoaid",gxvar:"AV8pessoaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8pessoaid=gx.num.intval(n)},v2z:function(n){gx.O.ZV8pessoaid=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV8pessoaid,0)},c2v:function(){gx.O.AV8pessoaid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",".")},nac:gx.falseFn};n[52]={fld:"TEXTBLOCK7",format:0,grid:0};n[54]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoempresaid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOEMPRESAID",gxz:"ZV10OrdemServicoEmpresaid",gxold:"OV10OrdemServicoEmpresaid",gxvar:"AV10OrdemServicoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10OrdemServicoEmpresaid=n},v2z:function(n){gx.O.ZV10OrdemServicoEmpresaid=n},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOEMPRESAID",gx.O.AV10OrdemServicoEmpresaid,0)},c2v:function(){gx.O.AV10OrdemServicoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOEMPRESAID")},nac:gx.falseFn};n[57]={fld:"TEXTBLOCK8",format:0,grid:0};n[59]={lvl:0,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV13SNErro",gxold:"OV13SNErro",gxvar:"AV13SNErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13SNErro=n},v2z:function(n){gx.O.ZV13SNErro=n},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV13SNErro,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV13SNErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};this.declareDomainHdlr(59,function(){});n[60]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANOME",gxz:"ZV14pessoanome",gxold:"OV14pessoanome",gxvar:"AV14pessoanome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14pessoanome=n},v2z:function(n){gx.O.ZV14pessoanome=n},v2c:function(){gx.fn.setControlValue("vPESSOANOME",gx.O.AV14pessoanome,0)},c2v:function(){gx.O.AV14pessoanome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOANOME")},nac:gx.falseFn};n[61]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDORID",gxz:"ZV18OrdemServicoVendedorId",gxold:"OV18OrdemServicoVendedorId",gxvar:"AV18OrdemServicoVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18OrdemServicoVendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV18OrdemServicoVendedorId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORID",gx.O.AV18OrdemServicoVendedorId,0)},c2v:function(){gx.O.AV18OrdemServicoVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOVENDEDORID",".")},nac:gx.falseFn};n[62]={fld:"PROMPT_PESSOAID",grid:0};n[63]={fld:"PROMPT_PESSOAID",grid:0};this.AV8pessoaid=0;this.ZV8pessoaid=0;this.OV8pessoaid=0;this.AV5filialid=0;this.ZV5filialid=0;this.OV5filialid=0;this.AV6ordemservicoid=0;this.ZV6ordemservicoid=0;this.OV6ordemservicoid=0;this.AV7PessoaEmpresaid="";this.ZV7PessoaEmpresaid="";this.OV7PessoaEmpresaid="";this.AV10OrdemServicoEmpresaid="";this.ZV10OrdemServicoEmpresaid="";this.OV10OrdemServicoEmpresaid="";this.AV13SNErro="";this.ZV13SNErro="";this.OV13SNErro="";this.AV14pessoanome="";this.ZV14pessoanome="";this.OV14pessoanome="";this.AV18OrdemServicoVendedorId=0;this.ZV18OrdemServicoVendedorId=0;this.OV18OrdemServicoVendedorId=0;this.AV8pessoaid=0;this.AV5filialid=0;this.AV6ordemservicoid=0;this.AV7PessoaEmpresaid="";this.AV10OrdemServicoEmpresaid="";this.AV13SNErro="";this.AV14pessoanome="";this.AV18OrdemServicoVendedorId=0;this.A8791OrdemServicoEmpresaId="";this.A8792OrdemServicoId=0;this.A9308OrdemServicoVendedorId=0;this.A227EmpresaPessoasEmpresaId="";this.A69PessoaId=0;this.A70PessoaRazaoSocial="";this.A71PessoaFantasia="";this.A445PessoaCliente="";this.A8717OrdemServicoFilialId=0;this.AV19MsgErro="";this.Events={e132f32_client:["ENTER",!0],e142f32_client:["VPESSOAID.ISVALID",!0],e162f31_client:["CANCEL",!0],e172f31_client:["PROMPT_PESSOAID.GXPROMPT",!0]};this.EvtParms.REFRESH=[[{av:"AV8pessoaid",fld:"vPESSOAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A70PessoaRazaoSocial",fld:"PESSOARAZAOSOCIAL"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A445PessoaCliente",fld:"PESSOACLIENTE"}],[{av:"AV25GXLvl21",fld:"vGXLVL21"},{av:"AV14pessoanome",fld:"vPESSOANOME"},{av:'gx.fn.getCtrlProperty("LBLNOMECLIENTE","Caption")',ctrl:"LBLNOMECLIENTE",prop:"Caption"},{av:"AV8pessoaid",fld:"vPESSOAID"},{av:"AV13SNErro",fld:"vSNERRO"}]];this.EvtParms.ENTER=[[{av:"AV8pessoaid",fld:"vPESSOAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV7PessoaEmpresaid",fld:"vPESSOAEMPRESAID"},{av:"A70PessoaRazaoSocial",fld:"PESSOARAZAOSOCIAL"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A445PessoaCliente",fld:"PESSOACLIENTE"},{av:"AV13SNErro",fld:"vSNERRO"},{av:"AV6ordemservicoid",fld:"vORDEMSERVICOID",hsh:!0},{av:"AV10OrdemServicoEmpresaid",fld:"vORDEMSERVICOEMPRESAID"},{av:"AV5filialid",fld:"vFILIALID"}],[{av:"AV26GXLvl44",fld:"vGXLVL44"},{av:"AV14pessoanome",fld:"vPESSOANOME"},{av:"AV13SNErro",fld:"vSNERRO"},{av:"AV11registraordemservico",fld:"vREGISTRAORDEMSERVICO"},{av:'gx.fn.getCtrlProperty("LBLCLIENTEATUAL","Caption")',ctrl:"LBLCLIENTEATUAL",prop:"Caption"},{av:'gx.fn.getCtrlProperty("LBLNOMECLIENTE","Caption")',ctrl:"LBLNOMECLIENTE",prop:"Caption"},{av:"AV8pessoaid",fld:"vPESSOAID"}]];this.EvtParms["VPESSOAID.ISVALID"]=[[],[]];this.setPrompt("PROMPT_PESSOAID",[15,49]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new halteraclienteos)