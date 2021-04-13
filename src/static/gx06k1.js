/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:30:0.0
*/
gx.evt.autoSkip = false;
gx.define('gx06k1', false, function () {
   this.ServerClass =  "gx06k1" ;
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
      this.AV12pDepartamentoEmpresaId=gx.fn.getControlValue("vPDEPARTAMENTOEMPRESAID") ;
      this.AV13pDepartamentoCodigo=gx.fn.getControlValue("vPDEPARTAMENTOCODIGO") ;
   };
   this.e131m12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141m11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06k1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2248,48,"DEPARTAMENTOCODIGO","Código","","DepartamentoCodigo","svchar",0,"px",15,15,"left",null,[],2248,"DepartamentoCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2249,49,"DEPARTAMENTONOME","Nome","Selecionar","DepartamentoNome","svchar",0,"px",40,40,"left",null,[],2249,"DepartamentoNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2250,50,"DEPARTAMENTOUSUARIOALT","Usuário Alteração","","DepartamentoUsuarioAlt","char",0,"px",12,12,"left",null,[],2250,"DepartamentoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2251,51,"DEPARTAMENTODATAHORAALT","Data/Hora Última Alteração","","DepartamentoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2251,"DepartamentoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2280,52,"RESPONSAVELPATEMPRESAID","Empresa","","ResponsavelPatEmpresaId","char",0,"px",10,10,"left",null,[],2280,"ResponsavelPatEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2281,53,"RESPONSAVELPATID","Código","","ResponsavelPatId","int",0,"px",4,4,"right",null,[],2281,"ResponsavelPatId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2247,54,"DEPARTAMENTOEMPRESAID","Empresa","","DepartamentoEmpresaId","char",0,"px",10,10,"left",null,[],2247,"DepartamentoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDEPARTAMENTOCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPARTAMENTOCODIGO",gxz:"ZV6cDepartamentoCodigo",gxold:"OV6cDepartamentoCodigo",gxvar:"AV6cDepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV6cDepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vCDEPARTAMENTOCODIGO",gx.O.AV6cDepartamentoCodigo,0)},c2v:function(){gx.O.AV6cDepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKDEPARTAMENTONOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPARTAMENTONOME",gxz:"ZV7cDepartamentoNome",gxold:"OV7cDepartamentoNome",gxvar:"AV7cDepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cDepartamentoNome=Value},v2z:function(Value){gx.O.ZV7cDepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vCDEPARTAMENTONOME",gx.O.AV7cDepartamentoNome,0)},c2v:function(){gx.O.AV7cDepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vCDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKDEPARTAMENTOUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPARTAMENTOUSUARIOALT",gxz:"ZV8cDepartamentoUsuarioAlt",gxold:"OV8cDepartamentoUsuarioAlt",gxvar:"AV8cDepartamentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cDepartamentoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cDepartamentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCDEPARTAMENTOUSUARIOALT",gx.O.AV8cDepartamentoUsuarioAlt,0)},c2v:function(){gx.O.AV8cDepartamentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCDEPARTAMENTOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKDEPARTAMENTODATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPARTAMENTODATAHORAALT",gxz:"ZV9cDepartamentoDataHoraAlt",gxold:"OV9cDepartamentoDataHoraAlt",gxvar:"AV9cDepartamentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cDepartamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cDepartamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCDEPARTAMENTODATAHORAALT",gx.O.AV9cDepartamentoDataHoraAlt,0)},c2v:function(){gx.O.AV9cDepartamentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCDEPARTAMENTODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKRESPONSAVELPATEMPRESAID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRESPONSAVELPATEMPRESAID",gxz:"ZV10cResponsavelPatEmpresaId",gxold:"OV10cResponsavelPatEmpresaId",gxvar:"AV10cResponsavelPatEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cResponsavelPatEmpresaId=Value},v2z:function(Value){gx.O.ZV10cResponsavelPatEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCRESPONSAVELPATEMPRESAID",gx.O.AV10cResponsavelPatEmpresaId,0)},c2v:function(){gx.O.AV10cResponsavelPatEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCRESPONSAVELPATEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKRESPONSAVELPATID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRESPONSAVELPATID",gxz:"ZV11cResponsavelPatId",gxold:"OV11cResponsavelPatId",gxvar:"AV11cResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cResponsavelPatId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCRESPONSAVELPATID",gx.O.AV11cResponsavelPatId,0)},c2v:function(){gx.O.AV11cResponsavelPatId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCRESPONSAVELPATID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOCODIGO",gxz:"Z2248DepartamentoCodigo",gxold:"O2248DepartamentoCodigo",gxvar:"A2248DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2248DepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2248DepartamentoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A2248DepartamentoCodigo,0)},c2v:function(){gx.O.A2248DepartamentoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTONOME",gxz:"Z2249DepartamentoNome",gxold:"O2249DepartamentoNome",gxvar:"A2249DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2249DepartamentoNome=Value},v2z:function(Value){gx.O.Z2249DepartamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(46),gx.O.A2249DepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2249DepartamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOUSUARIOALT",gxz:"Z2250DepartamentoUsuarioAlt",gxold:"O2250DepartamentoUsuarioAlt",gxvar:"A2250DepartamentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2250DepartamentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2250DepartamentoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A2250DepartamentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2250DepartamentoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTODATAHORAALT",gxz:"Z2251DepartamentoDataHoraAlt",gxold:"O2251DepartamentoDataHoraAlt",gxvar:"A2251DepartamentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2251DepartamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2251DepartamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTODATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A2251DepartamentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2251DepartamentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("DEPARTAMENTODATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATEMPRESAID",gxz:"Z2280ResponsavelPatEmpresaId",gxold:"O2280ResponsavelPatEmpresaId",gxvar:"A2280ResponsavelPatEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2280ResponsavelPatEmpresaId=Value},v2z:function(Value){gx.O.Z2280ResponsavelPatEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A2280ResponsavelPatEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2280ResponsavelPatEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELPATEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATID",gxz:"Z2281ResponsavelPatId",gxold:"O2281ResponsavelPatId",gxvar:"A2281ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2281ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2281ResponsavelPatId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(46),gx.O.A2281ResponsavelPatId,0)},c2v:function(){gx.O.A2281ResponsavelPatId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOEMPRESAID",gxz:"Z2247DepartamentoEmpresaId",gxold:"O2247DepartamentoEmpresaId",gxvar:"A2247DepartamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2247DepartamentoEmpresaId=Value},v2z:function(Value){gx.O.Z2247DepartamentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A2247DepartamentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2247DepartamentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLE4",grid:0};
   this.AV6cDepartamentoCodigo = "" ;
   this.ZV6cDepartamentoCodigo = "" ;
   this.OV6cDepartamentoCodigo = "" ;
   this.AV7cDepartamentoNome = "" ;
   this.ZV7cDepartamentoNome = "" ;
   this.OV7cDepartamentoNome = "" ;
   this.AV8cDepartamentoUsuarioAlt = "" ;
   this.ZV8cDepartamentoUsuarioAlt = "" ;
   this.OV8cDepartamentoUsuarioAlt = "" ;
   this.AV9cDepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cDepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.OV9cDepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.AV10cResponsavelPatEmpresaId = "" ;
   this.ZV10cResponsavelPatEmpresaId = "" ;
   this.OV10cResponsavelPatEmpresaId = "" ;
   this.AV11cResponsavelPatId = 0 ;
   this.ZV11cResponsavelPatId = 0 ;
   this.OV11cResponsavelPatId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2248DepartamentoCodigo = "" ;
   this.O2248DepartamentoCodigo = "" ;
   this.Z2249DepartamentoNome = "" ;
   this.O2249DepartamentoNome = "" ;
   this.Z2250DepartamentoUsuarioAlt = "" ;
   this.O2250DepartamentoUsuarioAlt = "" ;
   this.Z2251DepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.O2251DepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.Z2280ResponsavelPatEmpresaId = "" ;
   this.O2280ResponsavelPatEmpresaId = "" ;
   this.Z2281ResponsavelPatId = 0 ;
   this.O2281ResponsavelPatId = 0 ;
   this.Z2247DepartamentoEmpresaId = "" ;
   this.O2247DepartamentoEmpresaId = "" ;
   this.AV6cDepartamentoCodigo = "" ;
   this.AV7cDepartamentoNome = "" ;
   this.AV8cDepartamentoUsuarioAlt = "" ;
   this.AV9cDepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.AV10cResponsavelPatEmpresaId = "" ;
   this.AV11cResponsavelPatId = 0 ;
   this.AV12pDepartamentoEmpresaId = "" ;
   this.AV13pDepartamentoCodigo = "" ;
   this.AV5LinkSelection = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2249DepartamentoNome = "" ;
   this.A2250DepartamentoUsuarioAlt = "" ;
   this.A2251DepartamentoDataHoraAlt = gx.date.nullDate() ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.Events = {"e131m12_client": ["ENTER", true] ,"e141m11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDepartamentoCodigo',fld:'vCDEPARTAMENTOCODIGO'},{av:'AV7cDepartamentoNome',fld:'vCDEPARTAMENTONOME'},{av:'AV8cDepartamentoUsuarioAlt',fld:'vCDEPARTAMENTOUSUARIOALT'},{av:'AV9cDepartamentoDataHoraAlt',fld:'vCDEPARTAMENTODATAHORAALT'},{av:'AV10cResponsavelPatEmpresaId',fld:'vCRESPONSAVELPATEMPRESAID'},{av:'AV11cResponsavelPatId',fld:'vCRESPONSAVELPATID'},{av:'AV12pDepartamentoEmpresaId',fld:'vPDEPARTAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'}],[{av:'AV13pDepartamentoCodigo',fld:'vPDEPARTAMENTOCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDepartamentoCodigo',fld:'vCDEPARTAMENTOCODIGO'},{av:'AV7cDepartamentoNome',fld:'vCDEPARTAMENTONOME'},{av:'AV8cDepartamentoUsuarioAlt',fld:'vCDEPARTAMENTOUSUARIOALT'},{av:'AV9cDepartamentoDataHoraAlt',fld:'vCDEPARTAMENTODATAHORAALT'},{av:'AV10cResponsavelPatEmpresaId',fld:'vCRESPONSAVELPATEMPRESAID'},{av:'AV11cResponsavelPatId',fld:'vCRESPONSAVELPATID'},{av:'AV12pDepartamentoEmpresaId',fld:'vPDEPARTAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDepartamentoCodigo',fld:'vCDEPARTAMENTOCODIGO'},{av:'AV7cDepartamentoNome',fld:'vCDEPARTAMENTONOME'},{av:'AV8cDepartamentoUsuarioAlt',fld:'vCDEPARTAMENTOUSUARIOALT'},{av:'AV9cDepartamentoDataHoraAlt',fld:'vCDEPARTAMENTODATAHORAALT'},{av:'AV10cResponsavelPatEmpresaId',fld:'vCRESPONSAVELPATEMPRESAID'},{av:'AV11cResponsavelPatId',fld:'vCRESPONSAVELPATID'},{av:'AV12pDepartamentoEmpresaId',fld:'vPDEPARTAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDepartamentoCodigo',fld:'vCDEPARTAMENTOCODIGO'},{av:'AV7cDepartamentoNome',fld:'vCDEPARTAMENTONOME'},{av:'AV8cDepartamentoUsuarioAlt',fld:'vCDEPARTAMENTOUSUARIOALT'},{av:'AV9cDepartamentoDataHoraAlt',fld:'vCDEPARTAMENTODATAHORAALT'},{av:'AV10cResponsavelPatEmpresaId',fld:'vCRESPONSAVELPATEMPRESAID'},{av:'AV11cResponsavelPatId',fld:'vCRESPONSAVELPATID'},{av:'AV12pDepartamentoEmpresaId',fld:'vPDEPARTAMENTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDepartamentoCodigo',fld:'vCDEPARTAMENTOCODIGO'},{av:'AV7cDepartamentoNome',fld:'vCDEPARTAMENTONOME'},{av:'AV8cDepartamentoUsuarioAlt',fld:'vCDEPARTAMENTOUSUARIOALT'},{av:'AV9cDepartamentoDataHoraAlt',fld:'vCDEPARTAMENTODATAHORAALT'},{av:'AV10cResponsavelPatEmpresaId',fld:'vCRESPONSAVELPATEMPRESAID'},{av:'AV11cResponsavelPatId',fld:'vCRESPONSAVELPATID'},{av:'AV12pDepartamentoEmpresaId',fld:'vPDEPARTAMENTOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pDepartamentoEmpresaId", "vPDEPARTAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV13pDepartamentoCodigo", "vPDEPARTAMENTOCODIGO", 0, "svchar");
   this.setVCMap("AV12pDepartamentoEmpresaId", "vPDEPARTAMENTOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pDepartamentoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06k1());