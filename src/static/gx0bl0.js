/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:40.15
*/
gx.evt.autoSkip = false;
gx.define('gx0bl0', false, function () {
   this.ServerClass =  "gx0bl0" ;
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
      this.AV13pSolicitanteEmpresaId=gx.fn.getControlValue("vPSOLICITANTEEMPRESAID") ;
      this.AV14pSolicitanteCodigo=gx.fn.getIntegerValue("vPSOLICITANTECODIGO",'.') ;
   };
   this.e131q62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141q61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0bl0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4027,53,"SOLICITANTEEMPRESAID","Empresa Solicitante","","SolicitanteEmpresaId","char",0,"px",10,10,"left",null,[],4027,"SolicitanteEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4028,54,"SOLICITANTECODIGO","Código Solicitante","","SolicitanteCodigo","int",0,"px",4,4,"right",null,[],4028,"SolicitanteCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4060,55,"SOLICITANTENOME","Nome Solicitante","Selecionar","SolicitanteNome","svchar",0,"px",50,50,"left",null,[],4060,"SolicitanteNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4063,56,"SOLICITANTETELEFONE","Telefone","","SolicitanteTelefone","svchar",0,"px",15,15,"left",null,[],4063,"SolicitanteTelefone",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4064,57,"SOLICITANTERAMAL","Ramal","","SolicitanteRamal","svchar",0,"px",4,4,"left",null,[],4064,"SolicitanteRamal",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4066,58,"SOLICITANTEUSUARIOALT","Usuário Alteração","","SolicitanteUsuarioAlt","char",0,"px",12,12,"left",null,[],4066,"SolicitanteUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSOLICITANTEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTEEMPRESAID",gxz:"ZV6cSolicitanteEmpresaId",gxold:"OV6cSolicitanteEmpresaId",gxvar:"AV6cSolicitanteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSolicitanteEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSolicitanteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITANTEEMPRESAID",gx.O.AV6cSolicitanteEmpresaId,0)},c2v:function(){gx.O.AV6cSolicitanteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITANTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSOLICITANTECODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTECODIGO",gxz:"ZV7cSolicitanteCodigo",gxold:"OV7cSolicitanteCodigo",gxvar:"AV7cSolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSOLICITANTECODIGO",gx.O.AV7cSolicitanteCodigo,0)},c2v:function(){gx.O.AV7cSolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSOLICITANTENOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTENOME",gxz:"ZV8cSolicitanteNome",gxold:"OV8cSolicitanteNome",gxvar:"AV8cSolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSolicitanteNome=Value},v2z:function(Value){gx.O.ZV8cSolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITANTENOME",gx.O.AV8cSolicitanteNome,0)},c2v:function(){gx.O.AV8cSolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSOLICITANTECONTATO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTECONTATO",gxz:"ZV9cSolicitanteContato",gxold:"OV9cSolicitanteContato",gxvar:"AV9cSolicitanteContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSolicitanteContato=Value},v2z:function(Value){gx.O.ZV9cSolicitanteContato=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITANTECONTATO",gx.O.AV9cSolicitanteContato,0)},c2v:function(){gx.O.AV9cSolicitanteContato=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITANTECONTATO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSOLICITANTETELEFONE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTETELEFONE",gxz:"ZV10cSolicitanteTelefone",gxold:"OV10cSolicitanteTelefone",gxvar:"AV10cSolicitanteTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSolicitanteTelefone=Value},v2z:function(Value){gx.O.ZV10cSolicitanteTelefone=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITANTETELEFONE",gx.O.AV10cSolicitanteTelefone,0)},c2v:function(){gx.O.AV10cSolicitanteTelefone=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITANTETELEFONE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSOLICITANTERAMAL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTERAMAL",gxz:"ZV11cSolicitanteRamal",gxold:"OV11cSolicitanteRamal",gxvar:"AV11cSolicitanteRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSolicitanteRamal=Value},v2z:function(Value){gx.O.ZV11cSolicitanteRamal=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITANTERAMAL",gx.O.AV11cSolicitanteRamal,0)},c2v:function(){gx.O.AV11cSolicitanteRamal=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITANTERAMAL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSOLICITANTEEMAIL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITANTEEMAIL",gxz:"ZV12cSolicitanteEmail",gxold:"OV12cSolicitanteEmail",gxvar:"AV12cSolicitanteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSolicitanteEmail=Value},v2z:function(Value){gx.O.ZV12cSolicitanteEmail=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITANTEEMAIL",gx.O.AV12cSolicitanteEmail,0)},c2v:function(){gx.O.AV12cSolicitanteEmail=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITANTEEMAIL")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTEEMPRESAID",gxz:"Z4027SolicitanteEmpresaId",gxold:"O4027SolicitanteEmpresaId",gxvar:"A4027SolicitanteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4027SolicitanteEmpresaId=Value},v2z:function(Value){gx.O.Z4027SolicitanteEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4027SolicitanteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4027SolicitanteEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTECODIGO",gxz:"Z4028SolicitanteCodigo",gxold:"O4028SolicitanteCodigo",gxvar:"A4028SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4028SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4028SolicitanteCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A4028SolicitanteCodigo,0)},c2v:function(){gx.O.A4028SolicitanteCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTENOME",gxz:"Z4060SolicitanteNome",gxold:"O4060SolicitanteNome",gxvar:"A4060SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4060SolicitanteNome=Value},v2z:function(Value){gx.O.Z4060SolicitanteNome=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(51),gx.O.A4060SolicitanteNome,0)},c2v:function(){gx.O.A4060SolicitanteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTETELEFONE",gxz:"Z4063SolicitanteTelefone",gxold:"O4063SolicitanteTelefone",gxvar:"A4063SolicitanteTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4063SolicitanteTelefone=Value},v2z:function(Value){gx.O.Z4063SolicitanteTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTETELEFONE",row || gx.fn.currentGridRowImpl(51),gx.O.A4063SolicitanteTelefone,0)},c2v:function(){gx.O.A4063SolicitanteTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTETELEFONE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:4,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTERAMAL",gxz:"Z4064SolicitanteRamal",gxold:"O4064SolicitanteRamal",gxvar:"A4064SolicitanteRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4064SolicitanteRamal=Value},v2z:function(Value){gx.O.Z4064SolicitanteRamal=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTERAMAL",row || gx.fn.currentGridRowImpl(51),gx.O.A4064SolicitanteRamal,0)},c2v:function(){gx.O.A4064SolicitanteRamal=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTERAMAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTEUSUARIOALT",gxz:"Z4066SolicitanteUsuarioAlt",gxold:"O4066SolicitanteUsuarioAlt",gxvar:"A4066SolicitanteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4066SolicitanteUsuarioAlt=Value},v2z:function(Value){gx.O.Z4066SolicitanteUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTEUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A4066SolicitanteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4066SolicitanteUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTEUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cSolicitanteEmpresaId = "" ;
   this.ZV6cSolicitanteEmpresaId = "" ;
   this.OV6cSolicitanteEmpresaId = "" ;
   this.AV7cSolicitanteCodigo = 0 ;
   this.ZV7cSolicitanteCodigo = 0 ;
   this.OV7cSolicitanteCodigo = 0 ;
   this.AV8cSolicitanteNome = "" ;
   this.ZV8cSolicitanteNome = "" ;
   this.OV8cSolicitanteNome = "" ;
   this.AV9cSolicitanteContato = "" ;
   this.ZV9cSolicitanteContato = "" ;
   this.OV9cSolicitanteContato = "" ;
   this.AV10cSolicitanteTelefone = "" ;
   this.ZV10cSolicitanteTelefone = "" ;
   this.OV10cSolicitanteTelefone = "" ;
   this.AV11cSolicitanteRamal = "" ;
   this.ZV11cSolicitanteRamal = "" ;
   this.OV11cSolicitanteRamal = "" ;
   this.AV12cSolicitanteEmail = "" ;
   this.ZV12cSolicitanteEmail = "" ;
   this.OV12cSolicitanteEmail = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4027SolicitanteEmpresaId = "" ;
   this.O4027SolicitanteEmpresaId = "" ;
   this.Z4028SolicitanteCodigo = 0 ;
   this.O4028SolicitanteCodigo = 0 ;
   this.Z4060SolicitanteNome = "" ;
   this.O4060SolicitanteNome = "" ;
   this.Z4063SolicitanteTelefone = "" ;
   this.O4063SolicitanteTelefone = "" ;
   this.Z4064SolicitanteRamal = "" ;
   this.O4064SolicitanteRamal = "" ;
   this.Z4066SolicitanteUsuarioAlt = "" ;
   this.O4066SolicitanteUsuarioAlt = "" ;
   this.AV6cSolicitanteEmpresaId = "" ;
   this.AV7cSolicitanteCodigo = 0 ;
   this.AV8cSolicitanteNome = "" ;
   this.AV9cSolicitanteContato = "" ;
   this.AV10cSolicitanteTelefone = "" ;
   this.AV11cSolicitanteRamal = "" ;
   this.AV12cSolicitanteEmail = "" ;
   this.AV13pSolicitanteEmpresaId = "" ;
   this.AV14pSolicitanteCodigo = 0 ;
   this.A4065SolicitanteEmail = "" ;
   this.A4062SolicitanteContato = "" ;
   this.AV5LinkSelection = "" ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4060SolicitanteNome = "" ;
   this.A4063SolicitanteTelefone = "" ;
   this.A4064SolicitanteRamal = "" ;
   this.A4066SolicitanteUsuarioAlt = "" ;
   this.Events = {"e131q62_client": ["ENTER", true] ,"e141q61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitanteEmpresaId',fld:'vCSOLICITANTEEMPRESAID'},{av:'AV7cSolicitanteCodigo',fld:'vCSOLICITANTECODIGO'},{av:'AV8cSolicitanteNome',fld:'vCSOLICITANTENOME'},{av:'AV9cSolicitanteContato',fld:'vCSOLICITANTECONTATO'},{av:'AV10cSolicitanteTelefone',fld:'vCSOLICITANTETELEFONE'},{av:'AV11cSolicitanteRamal',fld:'vCSOLICITANTERAMAL'},{av:'AV12cSolicitanteEmail',fld:'vCSOLICITANTEEMAIL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4027SolicitanteEmpresaId',fld:'SOLICITANTEEMPRESAID'},{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'}],[{av:'AV13pSolicitanteEmpresaId',fld:'vPSOLICITANTEEMPRESAID'},{av:'AV14pSolicitanteCodigo',fld:'vPSOLICITANTECODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitanteEmpresaId',fld:'vCSOLICITANTEEMPRESAID'},{av:'AV7cSolicitanteCodigo',fld:'vCSOLICITANTECODIGO'},{av:'AV8cSolicitanteNome',fld:'vCSOLICITANTENOME'},{av:'AV9cSolicitanteContato',fld:'vCSOLICITANTECONTATO'},{av:'AV10cSolicitanteTelefone',fld:'vCSOLICITANTETELEFONE'},{av:'AV11cSolicitanteRamal',fld:'vCSOLICITANTERAMAL'},{av:'AV12cSolicitanteEmail',fld:'vCSOLICITANTEEMAIL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitanteEmpresaId',fld:'vCSOLICITANTEEMPRESAID'},{av:'AV7cSolicitanteCodigo',fld:'vCSOLICITANTECODIGO'},{av:'AV8cSolicitanteNome',fld:'vCSOLICITANTENOME'},{av:'AV9cSolicitanteContato',fld:'vCSOLICITANTECONTATO'},{av:'AV10cSolicitanteTelefone',fld:'vCSOLICITANTETELEFONE'},{av:'AV11cSolicitanteRamal',fld:'vCSOLICITANTERAMAL'},{av:'AV12cSolicitanteEmail',fld:'vCSOLICITANTEEMAIL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitanteEmpresaId',fld:'vCSOLICITANTEEMPRESAID'},{av:'AV7cSolicitanteCodigo',fld:'vCSOLICITANTECODIGO'},{av:'AV8cSolicitanteNome',fld:'vCSOLICITANTENOME'},{av:'AV9cSolicitanteContato',fld:'vCSOLICITANTECONTATO'},{av:'AV10cSolicitanteTelefone',fld:'vCSOLICITANTETELEFONE'},{av:'AV11cSolicitanteRamal',fld:'vCSOLICITANTERAMAL'},{av:'AV12cSolicitanteEmail',fld:'vCSOLICITANTEEMAIL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitanteEmpresaId',fld:'vCSOLICITANTEEMPRESAID'},{av:'AV7cSolicitanteCodigo',fld:'vCSOLICITANTECODIGO'},{av:'AV8cSolicitanteNome',fld:'vCSOLICITANTENOME'},{av:'AV9cSolicitanteContato',fld:'vCSOLICITANTECONTATO'},{av:'AV10cSolicitanteTelefone',fld:'vCSOLICITANTETELEFONE'},{av:'AV11cSolicitanteRamal',fld:'vCSOLICITANTERAMAL'},{av:'AV12cSolicitanteEmail',fld:'vCSOLICITANTEEMAIL'}],[]];
   this.setVCMap("AV13pSolicitanteEmpresaId", "vPSOLICITANTEEMPRESAID", 0, "char");
   this.setVCMap("AV14pSolicitanteCodigo", "vPSOLICITANTECODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0bl0());