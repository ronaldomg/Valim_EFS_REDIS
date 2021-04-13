/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:19.80
*/
gx.evt.autoSkip = false;
gx.define('gx0lq0', false, function () {
   this.ServerClass =  "gx0lq0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV11pUsuarioFornecedorCodigo=gx.fn.getIntegerValue("vPUSUARIOFORNECEDORCODIGO",'.') ;
   };
   this.e1327n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1427n1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,49];
   this.GXLastCtrlId =49;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0lq0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10558,43,"USUARIOFORNECEDORCODIGO","Fornecedor Codigo","","UsuarioFornecedorCodigo","int",0,"px",9,9,"right",null,[],10558,"UsuarioFornecedorCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10559,44,"USUARIOFORNECEDOREMPRESA","Fornecedor Empresa","Selecionar","UsuarioFornecedorEmpresa","char",0,"px",10,10,"left",null,[],10559,"UsuarioFornecedorEmpresa",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10562,45,"USUARIOFORNECEDORPESSOAID","Pessoa Id","","UsuarioFornecedorPessoaId","int",0,"px",7,7,"right",null,[],10562,"UsuarioFornecedorPessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10560,46,"USUARIOFORNECEDORSENHA","Fornecedor Senha","","UsuarioFornecedorSenha","char",0,"px",32,32,"left",null,[],10560,"UsuarioFornecedorSenha",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKUSUARIOFORNECEDORCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOFORNECEDORCODIGO",gxz:"ZV6cUsuarioFornecedorCodigo",gxold:"OV6cUsuarioFornecedorCodigo",gxvar:"AV6cUsuarioFornecedorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cUsuarioFornecedorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cUsuarioFornecedorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCUSUARIOFORNECEDORCODIGO",gx.O.AV6cUsuarioFornecedorCodigo,0)},c2v:function(){gx.O.AV6cUsuarioFornecedorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUSUARIOFORNECEDORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKUSUARIOFORNECEDOREMPRESA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOFORNECEDOREMPRESA",gxz:"ZV7cUsuarioFornecedorEmpresa",gxold:"OV7cUsuarioFornecedorEmpresa",gxvar:"AV7cUsuarioFornecedorEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cUsuarioFornecedorEmpresa=Value},v2z:function(Value){gx.O.ZV7cUsuarioFornecedorEmpresa=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOFORNECEDOREMPRESA",gx.O.AV7cUsuarioFornecedorEmpresa,0)},c2v:function(){gx.O.AV7cUsuarioFornecedorEmpresa=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOFORNECEDOREMPRESA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKUSUARIOFORNECEDORPESSOAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOFORNECEDORPESSOAID",gxz:"ZV8cUsuarioFornecedorPessoaId",gxold:"OV8cUsuarioFornecedorPessoaId",gxvar:"AV8cUsuarioFornecedorPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cUsuarioFornecedorPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cUsuarioFornecedorPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCUSUARIOFORNECEDORPESSOAID",gx.O.AV8cUsuarioFornecedorPessoaId,0)},c2v:function(){gx.O.AV8cUsuarioFornecedorPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUSUARIOFORNECEDORPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKUSUARIOFORNECEDORSENHA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOFORNECEDORSENHA",gxz:"ZV9cUsuarioFornecedorSenha",gxold:"OV9cUsuarioFornecedorSenha",gxvar:"AV9cUsuarioFornecedorSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cUsuarioFornecedorSenha=Value},v2z:function(Value){gx.O.ZV9cUsuarioFornecedorSenha=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOFORNECEDORSENHA",gx.O.AV9cUsuarioFornecedorSenha,0)},c2v:function(){gx.O.AV9cUsuarioFornecedorSenha=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOFORNECEDORSENHA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKUSUARIOFORNECEDORSENHABRANCO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOFORNECEDORSENHABRANCO",gxz:"ZV10cUsuarioFornecedorSenhaBranco",gxold:"OV10cUsuarioFornecedorSenhaBranco",gxvar:"AV10cUsuarioFornecedorSenhaBranco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cUsuarioFornecedorSenhaBranco=Value},v2z:function(Value){gx.O.ZV10cUsuarioFornecedorSenhaBranco=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOFORNECEDORSENHABRANCO",gx.O.AV10cUsuarioFornecedorSenhaBranco,0)},c2v:function(){gx.O.AV10cUsuarioFornecedorSenhaBranco=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOFORNECEDORSENHABRANCO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORCODIGO",gxz:"Z10558UsuarioFornecedorCodigo",gxold:"O10558UsuarioFornecedorCodigo",gxvar:"A10558UsuarioFornecedorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10558UsuarioFornecedorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10558UsuarioFornecedorCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("USUARIOFORNECEDORCODIGO",row || gx.fn.currentGridRowImpl(41),gx.O.A10558UsuarioFornecedorCodigo,0)},c2v:function(){gx.O.A10558UsuarioFornecedorCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("USUARIOFORNECEDORCODIGO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDOREMPRESA",gxz:"Z10559UsuarioFornecedorEmpresa",gxold:"O10559UsuarioFornecedorEmpresa",gxvar:"A10559UsuarioFornecedorEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10559UsuarioFornecedorEmpresa=Value},v2z:function(Value){gx.O.Z10559UsuarioFornecedorEmpresa=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFORNECEDOREMPRESA",row || gx.fn.currentGridRowImpl(41),gx.O.A10559UsuarioFornecedorEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10559UsuarioFornecedorEmpresa=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFORNECEDOREMPRESA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORPESSOAID",gxz:"Z10562UsuarioFornecedorPessoaId",gxold:"O10562UsuarioFornecedorPessoaId",gxvar:"A10562UsuarioFornecedorPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10562UsuarioFornecedorPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10562UsuarioFornecedorPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("USUARIOFORNECEDORPESSOAID",row || gx.fn.currentGridRowImpl(41),gx.O.A10562UsuarioFornecedorPessoaId,0)},c2v:function(){gx.O.A10562UsuarioFornecedorPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("USUARIOFORNECEDORPESSOAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:32,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFORNECEDORSENHA",gxz:"Z10560UsuarioFornecedorSenha",gxold:"O10560UsuarioFornecedorSenha",gxvar:"A10560UsuarioFornecedorSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10560UsuarioFornecedorSenha=Value},v2z:function(Value){gx.O.Z10560UsuarioFornecedorSenha=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFORNECEDORSENHA",row || gx.fn.currentGridRowImpl(41),gx.O.A10560UsuarioFornecedorSenha,0)},c2v:function(){gx.O.A10560UsuarioFornecedorSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFORNECEDORSENHA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   this.AV6cUsuarioFornecedorCodigo = 0 ;
   this.ZV6cUsuarioFornecedorCodigo = 0 ;
   this.OV6cUsuarioFornecedorCodigo = 0 ;
   this.AV7cUsuarioFornecedorEmpresa = "" ;
   this.ZV7cUsuarioFornecedorEmpresa = "" ;
   this.OV7cUsuarioFornecedorEmpresa = "" ;
   this.AV8cUsuarioFornecedorPessoaId = 0 ;
   this.ZV8cUsuarioFornecedorPessoaId = 0 ;
   this.OV8cUsuarioFornecedorPessoaId = 0 ;
   this.AV9cUsuarioFornecedorSenha = "" ;
   this.ZV9cUsuarioFornecedorSenha = "" ;
   this.OV9cUsuarioFornecedorSenha = "" ;
   this.AV10cUsuarioFornecedorSenhaBranco = "" ;
   this.ZV10cUsuarioFornecedorSenhaBranco = "" ;
   this.OV10cUsuarioFornecedorSenhaBranco = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10558UsuarioFornecedorCodigo = 0 ;
   this.O10558UsuarioFornecedorCodigo = 0 ;
   this.Z10559UsuarioFornecedorEmpresa = "" ;
   this.O10559UsuarioFornecedorEmpresa = "" ;
   this.Z10562UsuarioFornecedorPessoaId = 0 ;
   this.O10562UsuarioFornecedorPessoaId = 0 ;
   this.Z10560UsuarioFornecedorSenha = "" ;
   this.O10560UsuarioFornecedorSenha = "" ;
   this.AV6cUsuarioFornecedorCodigo = 0 ;
   this.AV7cUsuarioFornecedorEmpresa = "" ;
   this.AV8cUsuarioFornecedorPessoaId = 0 ;
   this.AV9cUsuarioFornecedorSenha = "" ;
   this.AV10cUsuarioFornecedorSenhaBranco = "" ;
   this.AV11pUsuarioFornecedorCodigo = 0 ;
   this.A10561UsuarioFornecedorSenhaBranco = "" ;
   this.AV5LinkSelection = "" ;
   this.A10558UsuarioFornecedorCodigo = 0 ;
   this.A10559UsuarioFornecedorEmpresa = "" ;
   this.A10562UsuarioFornecedorPessoaId = 0 ;
   this.A10560UsuarioFornecedorSenha = "" ;
   this.Events = {"e1327n2_client": ["ENTER", true] ,"e1427n1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFornecedorCodigo',fld:'vCUSUARIOFORNECEDORCODIGO'},{av:'AV7cUsuarioFornecedorEmpresa',fld:'vCUSUARIOFORNECEDOREMPRESA'},{av:'AV8cUsuarioFornecedorPessoaId',fld:'vCUSUARIOFORNECEDORPESSOAID'},{av:'AV9cUsuarioFornecedorSenha',fld:'vCUSUARIOFORNECEDORSENHA'},{av:'AV10cUsuarioFornecedorSenhaBranco',fld:'vCUSUARIOFORNECEDORSENHABRANCO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10558UsuarioFornecedorCodigo',fld:'USUARIOFORNECEDORCODIGO'}],[{av:'AV11pUsuarioFornecedorCodigo',fld:'vPUSUARIOFORNECEDORCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFornecedorCodigo',fld:'vCUSUARIOFORNECEDORCODIGO'},{av:'AV7cUsuarioFornecedorEmpresa',fld:'vCUSUARIOFORNECEDOREMPRESA'},{av:'AV8cUsuarioFornecedorPessoaId',fld:'vCUSUARIOFORNECEDORPESSOAID'},{av:'AV9cUsuarioFornecedorSenha',fld:'vCUSUARIOFORNECEDORSENHA'},{av:'AV10cUsuarioFornecedorSenhaBranco',fld:'vCUSUARIOFORNECEDORSENHABRANCO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFornecedorCodigo',fld:'vCUSUARIOFORNECEDORCODIGO'},{av:'AV7cUsuarioFornecedorEmpresa',fld:'vCUSUARIOFORNECEDOREMPRESA'},{av:'AV8cUsuarioFornecedorPessoaId',fld:'vCUSUARIOFORNECEDORPESSOAID'},{av:'AV9cUsuarioFornecedorSenha',fld:'vCUSUARIOFORNECEDORSENHA'},{av:'AV10cUsuarioFornecedorSenhaBranco',fld:'vCUSUARIOFORNECEDORSENHABRANCO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFornecedorCodigo',fld:'vCUSUARIOFORNECEDORCODIGO'},{av:'AV7cUsuarioFornecedorEmpresa',fld:'vCUSUARIOFORNECEDOREMPRESA'},{av:'AV8cUsuarioFornecedorPessoaId',fld:'vCUSUARIOFORNECEDORPESSOAID'},{av:'AV9cUsuarioFornecedorSenha',fld:'vCUSUARIOFORNECEDORSENHA'},{av:'AV10cUsuarioFornecedorSenhaBranco',fld:'vCUSUARIOFORNECEDORSENHABRANCO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFornecedorCodigo',fld:'vCUSUARIOFORNECEDORCODIGO'},{av:'AV7cUsuarioFornecedorEmpresa',fld:'vCUSUARIOFORNECEDOREMPRESA'},{av:'AV8cUsuarioFornecedorPessoaId',fld:'vCUSUARIOFORNECEDORPESSOAID'},{av:'AV9cUsuarioFornecedorSenha',fld:'vCUSUARIOFORNECEDORSENHA'},{av:'AV10cUsuarioFornecedorSenhaBranco',fld:'vCUSUARIOFORNECEDORSENHABRANCO'}],[]];
   this.setVCMap("AV11pUsuarioFornecedorCodigo", "vPUSUARIOFORNECEDORCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0lq0());