/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:54:29.73
*/
gx.evt.autoSkip = false;
gx.define('hregistrartelevendatelefone', false, function () {
   this.ServerClass =  "hregistrartelevendatelefone" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV17PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.AV11SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV14PessoaCliente=gx.fn.getControlValue("vPESSOACLIENTE") ;
      this.AV9TransacaoSaidaClienteSusp=gx.fn.getControlValue("vTRANSACAOSAIDACLIENTESUSP") ;
      this.AV15PessoaSituacao=gx.fn.getControlValue("vPESSOASITUACAO") ;
      this.AV8TransacaoSaidaClienteCanc=gx.fn.getControlValue("vTRANSACAOSAIDACLIENTECANC") ;
      this.AV16PessoaPermiteCompraCond=gx.fn.getControlValue("vPESSOAPERMITECOMPRACOND") ;
      this.AV10TransacaoSaidaTipoPreVenda=gx.fn.getControlValue("vTRANSACAOSAIDATIPOPREVENDA") ;
      this.AV6PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV5PessoaTelefone=gx.fn.getControlValue("vPESSOATELEFONE") ;
   };
   this.e1225m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1325m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1125m2_client=function()
   {
      this.executeServerEvent("'NOVO'", false, null, false, false);
   };
   this.e1525m2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e1825m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11,12];
   this.GXLastCtrlId =12;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrartelevendatelefone",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(72,6,"PESSOATELEFONE","Telefone","","PessoaTelefone","svchar",0,"px",15,15,"left","e1225m2_client",[],72,"PessoaTelefone",true,0,false,false,"AttributePrompt",1,"");
   Grid1Container.addSingleLineEdit(71,7,"PESSOAFANTASIA","Nome do cliente","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",8,0,"px",17,"px","e1525m2_client","","","Image","");
   Grid1Container.addSingleLineEdit(69,9,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(445,10,"PESSOACLIENTE","Cliente","","PessoaCliente","char",0,"px",1,1,"left",null,[],445,"PessoaCliente",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(443,11,"PESSOASITUACAO","Situação","PessoaSituacao","char",null,0,false,false,0,"px","");
   Grid1Container.addSingleLineEdit(3206,12,"PESSOAPERMITECOMPRACOND","Pessoa Permite Compra Cond","","PessoaPermiteCompraCond","char",0,"px",1,1,"left",null,[],3206,"PessoaPermiteCompraCond",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATELEFONE",gxz:"Z72PessoaTelefone",gxold:"O72PessoaTelefone",gxvar:"A72PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A72PessoaTelefone=Value},v2z:function(Value){gx.O.Z72PessoaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(5),gx.O.A72PessoaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A72PessoaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(5),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(5),gx.O.AV7bmpAlt,gx.O.AV21Bmpalt_GXI)},c2v:function(){gx.O.AV21Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV21Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(5),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOACLIENTE",gxz:"Z445PessoaCliente",gxold:"O445PessoaCliente",gxvar:"A445PessoaCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A445PessoaCliente=Value},v2z:function(Value){gx.O.Z445PessoaCliente=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOACLIENTE",row || gx.fn.currentGridRowImpl(5),gx.O.A445PessoaCliente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A445PessoaCliente=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOACLIENTE",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOASITUACAO",gxz:"Z443PessoaSituacao",gxold:"O443PessoaSituacao",gxvar:"A443PessoaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A443PessoaSituacao=Value},v2z:function(Value){gx.O.Z443PessoaSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PESSOASITUACAO",row || gx.fn.currentGridRowImpl(5),gx.O.A443PessoaSituacao)},c2v:function(){gx.O.A443PessoaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOASITUACAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAPERMITECOMPRACOND",gxz:"Z3206PessoaPermiteCompraCond",gxold:"O3206PessoaPermiteCompraCond",gxvar:"A3206PessoaPermiteCompraCond",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3206PessoaPermiteCompraCond=Value},v2z:function(Value){gx.O.Z3206PessoaPermiteCompraCond=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAPERMITECOMPRACOND",row || gx.fn.currentGridRowImpl(5),gx.O.A3206PessoaPermiteCompraCond,0)},c2v:function(){gx.O.A3206PessoaPermiteCompraCond=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAPERMITECOMPRACOND",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   this.Z72PessoaTelefone = "" ;
   this.O72PessoaTelefone = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z445PessoaCliente = "" ;
   this.O445PessoaCliente = "" ;
   this.Z443PessoaSituacao = "" ;
   this.O443PessoaSituacao = "" ;
   this.Z3206PessoaPermiteCompraCond = "" ;
   this.O3206PessoaPermiteCompraCond = "" ;
   this.AV5PessoaTelefone = "" ;
   this.AV9TransacaoSaidaClienteSusp = "" ;
   this.AV8TransacaoSaidaClienteCanc = "" ;
   this.AV10TransacaoSaidaTipoPreVenda = "" ;
   this.A72PessoaTelefone = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV7bmpAlt = "" ;
   this.A69PessoaId = 0 ;
   this.A445PessoaCliente = "" ;
   this.A443PessoaSituacao = "" ;
   this.A3206PessoaPermiteCompraCond = "" ;
   this.AV17PessoaEmpresaId = "" ;
   this.AV11SnErro = "" ;
   this.AV14PessoaCliente = "" ;
   this.AV15PessoaSituacao = "" ;
   this.AV16PessoaPermiteCompraCond = "" ;
   this.AV6PessoaId = 0 ;
   this.Events = {"e1225m2_client": ["ENTER", true] ,"e1325m2_client": ["'FECHAR'", true] ,"e1125m2_client": ["'NOVO'", true] ,"e1525m2_client": ["'ALTERAR'", true] ,"e1825m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID',hsh:true},{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV14PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV9TransacaoSaidaClienteSusp',fld:'vTRANSACAOSAIDACLIENTESUSP',hsh:true},{av:'AV15PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV8TransacaoSaidaClienteCanc',fld:'vTRANSACAOSAIDACLIENTECANC',hsh:true},{av:'AV16PessoaPermiteCompraCond',fld:'vPESSOAPERMITECOMPRACOND'},{av:'AV10TransacaoSaidaTipoPreVenda',fld:'vTRANSACAOSAIDATIPOPREVENDA',hsh:true},{av:'AV6PessoaId',fld:'vPESSOAID'}],[{av:'AV6PessoaId',fld:'vPESSOAID'},{av:'AV18PessoaTelefoneAux',fld:'vPESSOATELEFONEAUX'},{av:'AV16PessoaPermiteCompraCond',fld:'vPESSOAPERMITECOMPRACOND'},{av:'AV15PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV14PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV11SnErro',fld:'vSNERRO'}]];
   this.EvtParms["ENTER"] = [[{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A3206PessoaPermiteCompraCond',fld:'PESSOAPERMITECOMPRACOND'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV14PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV9TransacaoSaidaClienteSusp',fld:'vTRANSACAOSAIDACLIENTESUSP',hsh:true},{av:'AV15PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV8TransacaoSaidaClienteCanc',fld:'vTRANSACAOSAIDACLIENTECANC',hsh:true},{av:'AV16PessoaPermiteCompraCond',fld:'vPESSOAPERMITECOMPRACOND'},{av:'AV10TransacaoSaidaTipoPreVenda',fld:'vTRANSACAOSAIDATIPOPREVENDA',hsh:true},{av:'AV6PessoaId',fld:'vPESSOAID'}],[{av:'AV14PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV15PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV16PessoaPermiteCompraCond',fld:'vPESSOAPERMITECOMPRACOND'},{av:'AV18PessoaTelefoneAux',fld:'vPESSOATELEFONEAUX'},{av:'AV6PessoaId',fld:'vPESSOAID'},{av:'AV11SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID',hsh:true},{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV14PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV9TransacaoSaidaClienteSusp',fld:'vTRANSACAOSAIDACLIENTESUSP',hsh:true},{av:'AV15PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV8TransacaoSaidaClienteCanc',fld:'vTRANSACAOSAIDACLIENTECANC',hsh:true},{av:'AV16PessoaPermiteCompraCond',fld:'vPESSOAPERMITECOMPRACOND'},{av:'AV10TransacaoSaidaTipoPreVenda',fld:'vTRANSACAOSAIDATIPOPREVENDA',hsh:true},{av:'AV6PessoaId',fld:'vPESSOAID'},{av:'AV5PessoaTelefone',fld:'vPESSOATELEFONE',hsh:true}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV17PessoaEmpresaId',fld:'vPESSOAEMPRESAID',hsh:true},{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV14PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV9TransacaoSaidaClienteSusp',fld:'vTRANSACAOSAIDACLIENTESUSP',hsh:true},{av:'AV15PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV8TransacaoSaidaClienteCanc',fld:'vTRANSACAOSAIDACLIENTECANC',hsh:true},{av:'AV16PessoaPermiteCompraCond',fld:'vPESSOAPERMITECOMPRACOND'},{av:'AV10TransacaoSaidaTipoPreVenda',fld:'vTRANSACAOSAIDATIPOPREVENDA',hsh:true},{av:'AV6PessoaId',fld:'vPESSOAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'A69PessoaId',fld:'PESSOAID'}]];
   this.EnterCtrl = ["PESSOATELEFONE"];
   this.setVCMap("AV17PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV11SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV14PessoaCliente", "vPESSOACLIENTE", 0, "char");
   this.setVCMap("AV9TransacaoSaidaClienteSusp", "vTRANSACAOSAIDACLIENTESUSP", 0, "char");
   this.setVCMap("AV15PessoaSituacao", "vPESSOASITUACAO", 0, "char");
   this.setVCMap("AV8TransacaoSaidaClienteCanc", "vTRANSACAOSAIDACLIENTECANC", 0, "char");
   this.setVCMap("AV16PessoaPermiteCompraCond", "vPESSOAPERMITECOMPRACOND", 0, "char");
   this.setVCMap("AV10TransacaoSaidaTipoPreVenda", "vTRANSACAOSAIDATIPOPREVENDA", 0, "char");
   this.setVCMap("AV6PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV5PessoaTelefone", "vPESSOATELEFONE", 0, "svchar");
   this.setVCMap("AV17PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV11SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV14PessoaCliente", "vPESSOACLIENTE", 0, "char");
   this.setVCMap("AV9TransacaoSaidaClienteSusp", "vTRANSACAOSAIDACLIENTESUSP", 0, "char");
   this.setVCMap("AV15PessoaSituacao", "vPESSOASITUACAO", 0, "char");
   this.setVCMap("AV8TransacaoSaidaClienteCanc", "vTRANSACAOSAIDACLIENTECANC", 0, "char");
   this.setVCMap("AV16PessoaPermiteCompraCond", "vPESSOAPERMITECOMPRACOND", 0, "char");
   this.setVCMap("AV10TransacaoSaidaTipoPreVenda", "vTRANSACAOSAIDATIPOPREVENDA", 0, "char");
   this.setVCMap("AV6PessoaId", "vPESSOAID", 0, "int");
   Grid1Container.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17PessoaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11SnErro"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14PessoaCliente"});
   Grid1Container.addRefreshingVar({rfrVar:"AV9TransacaoSaidaClienteSusp"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15PessoaSituacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV8TransacaoSaidaClienteCanc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV16PessoaPermiteCompraCond"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10TransacaoSaidaTipoPreVenda"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6PessoaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartelevendatelefone());
