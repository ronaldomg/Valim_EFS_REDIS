/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:37:33.83
*/
gx.evt.autoSkip = false;
gx.define('gx0cv0', false, function () {
   this.ServerClass =  "gx0cv0" ;
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
      this.AV11pModeloContratoEmpresaId=gx.fn.getControlValue("vPMODELOCONTRATOEMPRESAID") ;
      this.AV12pModeloContratoId=gx.fn.getIntegerValue("vPMODELOCONTRATOID",'.') ;
   };
   this.e131rv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141rv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cv0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5336,43,"MODELOCONTRATOEMPRESAID","Empresa","","ModeloContratoEmpresaId","char",0,"px",10,10,"left",null,[],5336,"ModeloContratoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5337,44,"MODELOCONTRATOID","Código do Modelo","","ModeloContratoId","int",0,"px",3,3,"right",null,[],5337,"ModeloContratoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5333,45,"MODELOCONTRATODESCRICAO","Descrição do Modelo","Selecionar","ModeloContratoDescricao","svchar",0,"px",40,40,"left",null,[],5333,"ModeloContratoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5334,46,"MODELOCONTRATOUSUARIOALT","Usuário Alteração","","ModeloContratoUsuarioAlt","char",0,"px",12,12,"left",null,[],5334,"ModeloContratoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5335,47,"MODELOCONTRATODATAHORAALT","Data/Hora Alteração","","ModeloContratoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],5335,"ModeloContratoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMODELOCONTRATOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOEMPRESAID",gxz:"ZV6cModeloContratoEmpresaId",gxold:"OV6cModeloContratoEmpresaId",gxvar:"AV6cModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cModeloContratoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOEMPRESAID",gx.O.AV6cModeloContratoEmpresaId,0)},c2v:function(){gx.O.AV6cModeloContratoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCMODELOCONTRATOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMODELOCONTRATOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOID",gxz:"ZV7cModeloContratoId",gxold:"OV7cModeloContratoId",gxvar:"AV7cModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOID",gx.O.AV7cModeloContratoId,0)},c2v:function(){gx.O.AV7cModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMODELOCONTRATODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATODESCRICAO",gxz:"ZV8cModeloContratoDescricao",gxold:"OV8cModeloContratoDescricao",gxvar:"AV8cModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cModeloContratoDescricao=Value},v2z:function(Value){gx.O.ZV8cModeloContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATODESCRICAO",gx.O.AV8cModeloContratoDescricao,0)},c2v:function(){gx.O.AV8cModeloContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCMODELOCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMODELOCONTRATOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOUSUARIOALT",gxz:"ZV9cModeloContratoUsuarioAlt",gxold:"OV9cModeloContratoUsuarioAlt",gxvar:"AV9cModeloContratoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cModeloContratoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cModeloContratoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOUSUARIOALT",gx.O.AV9cModeloContratoUsuarioAlt,0)},c2v:function(){gx.O.AV9cModeloContratoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCMODELOCONTRATOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMODELOCONTRATODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATODATAHORAALT",gxz:"ZV10cModeloContratoDataHoraAlt",gxold:"OV10cModeloContratoDataHoraAlt",gxvar:"AV10cModeloContratoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATODATAHORAALT",gx.O.AV10cModeloContratoDataHoraAlt,0)},c2v:function(){gx.O.AV10cModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCMODELOCONTRATODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOEMPRESAID",gxz:"Z5336ModeloContratoEmpresaId",gxold:"O5336ModeloContratoEmpresaId",gxvar:"A5336ModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5336ModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5336ModeloContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A5336ModeloContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5336ModeloContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(41),gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATODESCRICAO",gxz:"Z5333ModeloContratoDescricao",gxold:"O5333ModeloContratoDescricao",gxvar:"A5333ModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5333ModeloContratoDescricao=Value},v2z:function(Value){gx.O.Z5333ModeloContratoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A5333ModeloContratoDescricao,0)},c2v:function(){gx.O.A5333ModeloContratoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOUSUARIOALT",gxz:"Z5334ModeloContratoUsuarioAlt",gxold:"O5334ModeloContratoUsuarioAlt",gxvar:"A5334ModeloContratoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5334ModeloContratoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5334ModeloContratoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A5334ModeloContratoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5334ModeloContratoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATOUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATODATAHORAALT",gxz:"Z5335ModeloContratoDataHoraAlt",gxold:"O5335ModeloContratoDataHoraAlt",gxvar:"A5335ModeloContratoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5335ModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5335ModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A5335ModeloContratoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5335ModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MODELOCONTRATODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cModeloContratoEmpresaId = "" ;
   this.ZV6cModeloContratoEmpresaId = "" ;
   this.OV6cModeloContratoEmpresaId = "" ;
   this.AV7cModeloContratoId = 0 ;
   this.ZV7cModeloContratoId = 0 ;
   this.OV7cModeloContratoId = 0 ;
   this.AV8cModeloContratoDescricao = "" ;
   this.ZV8cModeloContratoDescricao = "" ;
   this.OV8cModeloContratoDescricao = "" ;
   this.AV9cModeloContratoUsuarioAlt = "" ;
   this.ZV9cModeloContratoUsuarioAlt = "" ;
   this.OV9cModeloContratoUsuarioAlt = "" ;
   this.AV10cModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5336ModeloContratoEmpresaId = "" ;
   this.O5336ModeloContratoEmpresaId = "" ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.Z5333ModeloContratoDescricao = "" ;
   this.O5333ModeloContratoDescricao = "" ;
   this.Z5334ModeloContratoUsuarioAlt = "" ;
   this.O5334ModeloContratoUsuarioAlt = "" ;
   this.Z5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.O5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cModeloContratoEmpresaId = "" ;
   this.AV7cModeloContratoId = 0 ;
   this.AV8cModeloContratoDescricao = "" ;
   this.AV9cModeloContratoUsuarioAlt = "" ;
   this.AV10cModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.AV11pModeloContratoEmpresaId = "" ;
   this.AV12pModeloContratoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5333ModeloContratoDescricao = "" ;
   this.A5334ModeloContratoUsuarioAlt = "" ;
   this.A5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131rv2_client": ["ENTER", true] ,"e141rv1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV9cModeloContratoUsuarioAlt',fld:'vCMODELOCONTRATOUSUARIOALT'},{av:'AV10cModeloContratoDataHoraAlt',fld:'vCMODELOCONTRATODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'}],[{av:'AV11pModeloContratoEmpresaId',fld:'vPMODELOCONTRATOEMPRESAID'},{av:'AV12pModeloContratoId',fld:'vPMODELOCONTRATOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV9cModeloContratoUsuarioAlt',fld:'vCMODELOCONTRATOUSUARIOALT'},{av:'AV10cModeloContratoDataHoraAlt',fld:'vCMODELOCONTRATODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV9cModeloContratoUsuarioAlt',fld:'vCMODELOCONTRATOUSUARIOALT'},{av:'AV10cModeloContratoDataHoraAlt',fld:'vCMODELOCONTRATODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV9cModeloContratoUsuarioAlt',fld:'vCMODELOCONTRATOUSUARIOALT'},{av:'AV10cModeloContratoDataHoraAlt',fld:'vCMODELOCONTRATODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoDescricao',fld:'vCMODELOCONTRATODESCRICAO'},{av:'AV9cModeloContratoUsuarioAlt',fld:'vCMODELOCONTRATOUSUARIOALT'},{av:'AV10cModeloContratoDataHoraAlt',fld:'vCMODELOCONTRATODATAHORAALT'}],[]];
   this.setVCMap("AV11pModeloContratoEmpresaId", "vPMODELOCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV12pModeloContratoId", "vPMODELOCONTRATOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cv0());
