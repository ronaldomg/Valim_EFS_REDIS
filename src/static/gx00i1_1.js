/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:25:18.45
*/
gx.evt.autoSkip = false;
gx.define('gx00i1_1', false, function () {
   this.ServerClass =  "gx00i1_1" ;
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
      this.AV11pSistemaId=gx.fn.getControlValue("vPSISTEMAID") ;
      this.AV10pEmpresaId=gx.fn.getControlValue("vPEMPRESAID") ;
   };
   this.e131il2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141il1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,45];
   this.GXLastCtrlId =45;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00i1_1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(138,38,"EMPRESAID","Empresa","","EmpresaId","char",0,"px",10,10,"left",null,[],138,"EmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(214,39,"SISTEMAEMPRESAVENCIMENTO","Data Vencimento do Sistema","","SistemaEmpresaVencimento","date",0,"px",10,10,"right",null,[],214,"SistemaEmpresaVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(215,40,"SISTEMABLOQUEARACESSOSIMULTANE","Bloquear Acesso Simultâneo","Selecionar","SistemaBloquearAcessoSimultane","char",0,"px",1,1,"left",null,[],215,"SistemaBloquearAcessoSimultane",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4303,41,"SISTEMAEMPRESASOMA","AutoSoma","","SistemaEmpresaSoma","int",0,"px",10,10,"right",null,[],4303,"SistemaEmpresaSoma",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(140,42,"SISTEMAID","Sistema","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAID",gxz:"ZV6cEmpresaId",gxold:"OV6cEmpresaId",gxvar:"AV6cEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAID",gx.O.AV6cEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSISTEMAEMPRESAVENCIMENTO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSISTEMAEMPRESAVENCIMENTO",gxz:"ZV7cSistemaEmpresaVencimento",gxold:"OV7cSistemaEmpresaVencimento",gxvar:"AV7cSistemaEmpresaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSistemaEmpresaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cSistemaEmpresaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSISTEMAEMPRESAVENCIMENTO",gx.O.AV7cSistemaEmpresaVencimento,0)},c2v:function(){gx.O.AV7cSistemaEmpresaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCSISTEMAEMPRESAVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSISTEMABLOQUEARACESSOSIMULTANEO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSISTEMABLOQUEARACESSOSIMULTANEO",gxz:"ZV8cSistemaBloquearAcessoSimultaneo",gxold:"OV8cSistemaBloquearAcessoSimultaneo",gxvar:"AV8cSistemaBloquearAcessoSimultaneo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSistemaBloquearAcessoSimultaneo=Value},v2z:function(Value){gx.O.ZV8cSistemaBloquearAcessoSimultaneo=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMABLOQUEARACESSOSIMULTANEO",gx.O.AV8cSistemaBloquearAcessoSimultaneo,0)},c2v:function(){gx.O.AV8cSistemaBloquearAcessoSimultaneo=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMABLOQUEARACESSOSIMULTANEO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSISTEMAEMPRESASOMA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSISTEMAEMPRESASOMA",gxz:"ZV9cSistemaEmpresaSoma",gxold:"OV9cSistemaEmpresaSoma",gxvar:"AV9cSistemaEmpresaSoma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSistemaEmpresaSoma=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cSistemaEmpresaSoma=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSISTEMAEMPRESASOMA",gx.O.AV9cSistemaEmpresaSoma,0)},c2v:function(){gx.O.AV9cSistemaEmpresaSoma=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSISTEMAEMPRESASOMA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAEMPRESAVENCIMENTO",gxz:"Z214SistemaEmpresaVencimento",gxold:"O214SistemaEmpresaVencimento",gxvar:"A214SistemaEmpresaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A214SistemaEmpresaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z214SistemaEmpresaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SISTEMAEMPRESAVENCIMENTO",row || gx.fn.currentGridRowImpl(36),gx.O.A214SistemaEmpresaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A214SistemaEmpresaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SISTEMAEMPRESAVENCIMENTO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMABLOQUEARACESSOSIMULTANE",gxz:"Z215SistemaBloquearAcessoSimultane",gxold:"O215SistemaBloquearAcessoSimultane",gxvar:"A215SistemaBloquearAcessoSimultane",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A215SistemaBloquearAcessoSimultane=Value},v2z:function(Value){gx.O.Z215SistemaBloquearAcessoSimultane=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMABLOQUEARACESSOSIMULTANE",row || gx.fn.currentGridRowImpl(36),gx.O.A215SistemaBloquearAcessoSimultane,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A215SistemaBloquearAcessoSimultane=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMABLOQUEARACESSOSIMULTANE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAEMPRESASOMA",gxz:"Z4303SistemaEmpresaSoma",gxold:"O4303SistemaEmpresaSoma",gxvar:"A4303SistemaEmpresaSoma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4303SistemaEmpresaSoma=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4303SistemaEmpresaSoma=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SISTEMAEMPRESASOMA",row || gx.fn.currentGridRowImpl(36),gx.O.A4303SistemaEmpresaSoma,0)},c2v:function(){gx.O.A4303SistemaEmpresaSoma=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SISTEMAEMPRESASOMA",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(36),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaId = "" ;
   this.ZV6cEmpresaId = "" ;
   this.OV6cEmpresaId = "" ;
   this.AV7cSistemaEmpresaVencimento = gx.date.nullDate() ;
   this.ZV7cSistemaEmpresaVencimento = gx.date.nullDate() ;
   this.OV7cSistemaEmpresaVencimento = gx.date.nullDate() ;
   this.AV8cSistemaBloquearAcessoSimultaneo = "" ;
   this.ZV8cSistemaBloquearAcessoSimultaneo = "" ;
   this.OV8cSistemaBloquearAcessoSimultaneo = "" ;
   this.AV9cSistemaEmpresaSoma = 0 ;
   this.ZV9cSistemaEmpresaSoma = 0 ;
   this.OV9cSistemaEmpresaSoma = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.Z214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.O214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.Z215SistemaBloquearAcessoSimultane = "" ;
   this.O215SistemaBloquearAcessoSimultane = "" ;
   this.Z4303SistemaEmpresaSoma = 0 ;
   this.O4303SistemaEmpresaSoma = 0 ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.AV6cEmpresaId = "" ;
   this.AV7cSistemaEmpresaVencimento = gx.date.nullDate() ;
   this.AV8cSistemaBloquearAcessoSimultaneo = "" ;
   this.AV9cSistemaEmpresaSoma = 0 ;
   this.AV10pEmpresaId = "" ;
   this.AV11pSistemaId = "" ;
   this.AV5LinkSelection = "" ;
   this.A138EmpresaId = "" ;
   this.A214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.A215SistemaBloquearAcessoSimultane = "" ;
   this.A4303SistemaEmpresaSoma = 0 ;
   this.A140SistemaId = "" ;
   this.Events = {"e131il2_client": ["ENTER", true] ,"e141il1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cSistemaEmpresaVencimento',fld:'vCSISTEMAEMPRESAVENCIMENTO'},{av:'AV8cSistemaBloquearAcessoSimultaneo',fld:'vCSISTEMABLOQUEARACESSOSIMULTANEO'},{av:'AV9cSistemaEmpresaSoma',fld:'vCSISTEMAEMPRESASOMA'},{av:'AV11pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'}],[{av:'AV10pEmpresaId',fld:'vPEMPRESAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cSistemaEmpresaVencimento',fld:'vCSISTEMAEMPRESAVENCIMENTO'},{av:'AV8cSistemaBloquearAcessoSimultaneo',fld:'vCSISTEMABLOQUEARACESSOSIMULTANEO'},{av:'AV9cSistemaEmpresaSoma',fld:'vCSISTEMAEMPRESASOMA'},{av:'AV11pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cSistemaEmpresaVencimento',fld:'vCSISTEMAEMPRESAVENCIMENTO'},{av:'AV8cSistemaBloquearAcessoSimultaneo',fld:'vCSISTEMABLOQUEARACESSOSIMULTANEO'},{av:'AV9cSistemaEmpresaSoma',fld:'vCSISTEMAEMPRESASOMA'},{av:'AV11pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cSistemaEmpresaVencimento',fld:'vCSISTEMAEMPRESAVENCIMENTO'},{av:'AV8cSistemaBloquearAcessoSimultaneo',fld:'vCSISTEMABLOQUEARACESSOSIMULTANEO'},{av:'AV9cSistemaEmpresaSoma',fld:'vCSISTEMAEMPRESASOMA'},{av:'AV11pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cSistemaEmpresaVencimento',fld:'vCSISTEMAEMPRESAVENCIMENTO'},{av:'AV8cSistemaBloquearAcessoSimultaneo',fld:'vCSISTEMABLOQUEARACESSOSIMULTANEO'},{av:'AV9cSistemaEmpresaSoma',fld:'vCSISTEMAEMPRESASOMA'},{av:'AV11pSistemaId',fld:'vPSISTEMAID',hsh:true}],[]];
   this.setVCMap("AV11pSistemaId", "vPSISTEMAID", 0, "char");
   this.setVCMap("AV10pEmpresaId", "vPEMPRESAID", 0, "char");
   this.setVCMap("AV11pSistemaId", "vPSISTEMAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pSistemaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00i1_1());