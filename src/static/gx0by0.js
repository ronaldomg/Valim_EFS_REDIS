/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:54.79
*/
gx.evt.autoSkip = false;
gx.define('gx0by0', false, function () {
   this.ServerClass =  "gx0by0" ;
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
      this.AV13pSpedUsuarioId=gx.fn.getControlValue("vPSPEDUSUARIOID") ;
      this.AV14pSpedData=gx.fn.getDateValue("vPSPEDDATA") ;
      this.AV15pSpedTpRegistro=gx.fn.getIntegerValue("vPSPEDTPREGISTRO",'.') ;
      this.AV16pSpedCContabilId=gx.fn.getControlValue("vPSPEDCCONTABILID") ;
   };
   this.e131qe2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141qe1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0by0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4219,53,"SPEDUSUARIOID","Sped Usuario Id","","SpedUsuarioId","char",0,"px",12,12,"left",null,[],4219,"SpedUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4220,54,"SPEDDATA","Sped Data","","SpedData","date",0,"px",10,10,"right",null,[],4220,"SpedData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4221,55,"SPEDTPREGISTRO","Sped Tp Registro","","SpedTpRegistro","int",0,"px",1,1,"right",null,[],4221,"SpedTpRegistro",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4222,56,"SPEDCCONTABILID","Sped CContabil Id","","SpedCContabilId","svchar",0,"px",30,30,"left",null,[],4222,"SpedCContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4214,57,"SPEDCCONTABILNATUREZA","Sped CContabil Natureza","","SpedCContabilNatureza","int",0,"px",1,1,"right",null,[],4214,"SpedCContabilNatureza",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4215,58,"SPEDCCONTABILNIVEL","Sped CContabil Nivel","","SpedCContabilNivel","int",0,"px",4,4,"right",null,[],4215,"SpedCContabilNivel",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSPEDUSUARIOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDUSUARIOID",gxz:"ZV6cSpedUsuarioId",gxold:"OV6cSpedUsuarioId",gxvar:"AV6cSpedUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSpedUsuarioId=Value},v2z:function(Value){gx.O.ZV6cSpedUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCSPEDUSUARIOID",gx.O.AV6cSpedUsuarioId,0)},c2v:function(){gx.O.AV6cSpedUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCSPEDUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSPEDDATA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDDATA",gxz:"ZV7cSpedData",gxold:"OV7cSpedData",gxvar:"AV7cSpedData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSpedData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cSpedData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSPEDDATA",gx.O.AV7cSpedData,0)},c2v:function(){gx.O.AV7cSpedData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCSPEDDATA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSPEDTPREGISTRO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDTPREGISTRO",gxz:"ZV8cSpedTpRegistro",gxold:"OV8cSpedTpRegistro",gxvar:"AV8cSpedTpRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSpedTpRegistro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSpedTpRegistro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSPEDTPREGISTRO",gx.O.AV8cSpedTpRegistro,0)},c2v:function(){gx.O.AV8cSpedTpRegistro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSPEDTPREGISTRO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSPEDCCONTABILID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDCCONTABILID",gxz:"ZV9cSpedCContabilId",gxold:"OV9cSpedCContabilId",gxvar:"AV9cSpedCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSpedCContabilId=Value},v2z:function(Value){gx.O.ZV9cSpedCContabilId=Value},v2c:function(){gx.fn.setControlValue("vCSPEDCCONTABILID",gx.O.AV9cSpedCContabilId,0)},c2v:function(){gx.O.AV9cSpedCContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCSPEDCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSPEDCCONTABILNOME", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDCCONTABILNOME",gxz:"ZV10cSpedCContabilNome",gxold:"OV10cSpedCContabilNome",gxvar:"AV10cSpedCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSpedCContabilNome=Value},v2z:function(Value){gx.O.ZV10cSpedCContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCSPEDCCONTABILNOME",gx.O.AV10cSpedCContabilNome,0)},c2v:function(){gx.O.AV10cSpedCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCSPEDCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSPEDCCONTABILNATUREZA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDCCONTABILNATUREZA",gxz:"ZV11cSpedCContabilNatureza",gxold:"OV11cSpedCContabilNatureza",gxvar:"AV11cSpedCContabilNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSpedCContabilNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cSpedCContabilNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSPEDCCONTABILNATUREZA",gx.O.AV11cSpedCContabilNatureza,0)},c2v:function(){gx.O.AV11cSpedCContabilNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSPEDCCONTABILNATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSPEDCCONTABILNIVEL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSPEDCCONTABILNIVEL",gxz:"ZV12cSpedCContabilNivel",gxold:"OV12cSpedCContabilNivel",gxvar:"AV12cSpedCContabilNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSpedCContabilNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cSpedCContabilNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSPEDCCONTABILNIVEL",gx.O.AV12cSpedCContabilNivel,0)},c2v:function(){gx.O.AV12cSpedCContabilNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSPEDCCONTABILNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDUSUARIOID",gxz:"Z4219SpedUsuarioId",gxold:"O4219SpedUsuarioId",gxvar:"A4219SpedUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4219SpedUsuarioId=Value},v2z:function(Value){gx.O.Z4219SpedUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("SPEDUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A4219SpedUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4219SpedUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("SPEDUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDDATA",gxz:"Z4220SpedData",gxold:"O4220SpedData",gxvar:"A4220SpedData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4220SpedData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4220SpedData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SPEDDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A4220SpedData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4220SpedData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SPEDDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDTPREGISTRO",gxz:"Z4221SpedTpRegistro",gxold:"O4221SpedTpRegistro",gxvar:"A4221SpedTpRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4221SpedTpRegistro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4221SpedTpRegistro=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SPEDTPREGISTRO",row || gx.fn.currentGridRowImpl(51),gx.O.A4221SpedTpRegistro,0)},c2v:function(){gx.O.A4221SpedTpRegistro=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SPEDTPREGISTRO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCCONTABILID",gxz:"Z4222SpedCContabilId",gxold:"O4222SpedCContabilId",gxvar:"A4222SpedCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4222SpedCContabilId=Value},v2z:function(Value){gx.O.Z4222SpedCContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("SPEDCCONTABILID",row || gx.fn.currentGridRowImpl(51),gx.O.A4222SpedCContabilId,0)},c2v:function(){gx.O.A4222SpedCContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("SPEDCCONTABILID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCCONTABILNATUREZA",gxz:"Z4214SpedCContabilNatureza",gxold:"O4214SpedCContabilNatureza",gxvar:"A4214SpedCContabilNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4214SpedCContabilNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4214SpedCContabilNatureza=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SPEDCCONTABILNATUREZA",row || gx.fn.currentGridRowImpl(51),gx.O.A4214SpedCContabilNatureza,0)},c2v:function(){gx.O.A4214SpedCContabilNatureza=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SPEDCCONTABILNATUREZA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SPEDCCONTABILNIVEL",gxz:"Z4215SpedCContabilNivel",gxold:"O4215SpedCContabilNivel",gxvar:"A4215SpedCContabilNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4215SpedCContabilNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4215SpedCContabilNivel=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SPEDCCONTABILNIVEL",row || gx.fn.currentGridRowImpl(51),gx.O.A4215SpedCContabilNivel,0)},c2v:function(){gx.O.A4215SpedCContabilNivel=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SPEDCCONTABILNIVEL",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cSpedUsuarioId = "" ;
   this.ZV6cSpedUsuarioId = "" ;
   this.OV6cSpedUsuarioId = "" ;
   this.AV7cSpedData = gx.date.nullDate() ;
   this.ZV7cSpedData = gx.date.nullDate() ;
   this.OV7cSpedData = gx.date.nullDate() ;
   this.AV8cSpedTpRegistro = 0 ;
   this.ZV8cSpedTpRegistro = 0 ;
   this.OV8cSpedTpRegistro = 0 ;
   this.AV9cSpedCContabilId = "" ;
   this.ZV9cSpedCContabilId = "" ;
   this.OV9cSpedCContabilId = "" ;
   this.AV10cSpedCContabilNome = "" ;
   this.ZV10cSpedCContabilNome = "" ;
   this.OV10cSpedCContabilNome = "" ;
   this.AV11cSpedCContabilNatureza = 0 ;
   this.ZV11cSpedCContabilNatureza = 0 ;
   this.OV11cSpedCContabilNatureza = 0 ;
   this.AV12cSpedCContabilNivel = 0 ;
   this.ZV12cSpedCContabilNivel = 0 ;
   this.OV12cSpedCContabilNivel = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4219SpedUsuarioId = "" ;
   this.O4219SpedUsuarioId = "" ;
   this.Z4220SpedData = gx.date.nullDate() ;
   this.O4220SpedData = gx.date.nullDate() ;
   this.Z4221SpedTpRegistro = 0 ;
   this.O4221SpedTpRegistro = 0 ;
   this.Z4222SpedCContabilId = "" ;
   this.O4222SpedCContabilId = "" ;
   this.Z4214SpedCContabilNatureza = 0 ;
   this.O4214SpedCContabilNatureza = 0 ;
   this.Z4215SpedCContabilNivel = 0 ;
   this.O4215SpedCContabilNivel = 0 ;
   this.AV6cSpedUsuarioId = "" ;
   this.AV7cSpedData = gx.date.nullDate() ;
   this.AV8cSpedTpRegistro = 0 ;
   this.AV9cSpedCContabilId = "" ;
   this.AV10cSpedCContabilNome = "" ;
   this.AV11cSpedCContabilNatureza = 0 ;
   this.AV12cSpedCContabilNivel = 0 ;
   this.AV13pSpedUsuarioId = "" ;
   this.AV14pSpedData = gx.date.nullDate() ;
   this.AV15pSpedTpRegistro = 0 ;
   this.AV16pSpedCContabilId = "" ;
   this.A4213SpedCContabilNome = "" ;
   this.AV5LinkSelection = "" ;
   this.A4219SpedUsuarioId = "" ;
   this.A4220SpedData = gx.date.nullDate() ;
   this.A4221SpedTpRegistro = 0 ;
   this.A4222SpedCContabilId = "" ;
   this.A4214SpedCContabilNatureza = 0 ;
   this.A4215SpedCContabilNivel = 0 ;
   this.Events = {"e131qe2_client": ["ENTER", true] ,"e141qe1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedUsuarioId',fld:'vCSPEDUSUARIOID'},{av:'AV7cSpedData',fld:'vCSPEDDATA'},{av:'AV8cSpedTpRegistro',fld:'vCSPEDTPREGISTRO'},{av:'AV9cSpedCContabilId',fld:'vCSPEDCCONTABILID'},{av:'AV10cSpedCContabilNome',fld:'vCSPEDCCONTABILNOME'},{av:'AV11cSpedCContabilNatureza',fld:'vCSPEDCCONTABILNATUREZA'},{av:'AV12cSpedCContabilNivel',fld:'vCSPEDCCONTABILNIVEL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4219SpedUsuarioId',fld:'SPEDUSUARIOID'},{av:'A4220SpedData',fld:'SPEDDATA'},{av:'A4221SpedTpRegistro',fld:'SPEDTPREGISTRO'},{av:'A4222SpedCContabilId',fld:'SPEDCCONTABILID'}],[{av:'AV13pSpedUsuarioId',fld:'vPSPEDUSUARIOID'},{av:'AV14pSpedData',fld:'vPSPEDDATA'},{av:'AV15pSpedTpRegistro',fld:'vPSPEDTPREGISTRO'},{av:'AV16pSpedCContabilId',fld:'vPSPEDCCONTABILID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedUsuarioId',fld:'vCSPEDUSUARIOID'},{av:'AV7cSpedData',fld:'vCSPEDDATA'},{av:'AV8cSpedTpRegistro',fld:'vCSPEDTPREGISTRO'},{av:'AV9cSpedCContabilId',fld:'vCSPEDCCONTABILID'},{av:'AV10cSpedCContabilNome',fld:'vCSPEDCCONTABILNOME'},{av:'AV11cSpedCContabilNatureza',fld:'vCSPEDCCONTABILNATUREZA'},{av:'AV12cSpedCContabilNivel',fld:'vCSPEDCCONTABILNIVEL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedUsuarioId',fld:'vCSPEDUSUARIOID'},{av:'AV7cSpedData',fld:'vCSPEDDATA'},{av:'AV8cSpedTpRegistro',fld:'vCSPEDTPREGISTRO'},{av:'AV9cSpedCContabilId',fld:'vCSPEDCCONTABILID'},{av:'AV10cSpedCContabilNome',fld:'vCSPEDCCONTABILNOME'},{av:'AV11cSpedCContabilNatureza',fld:'vCSPEDCCONTABILNATUREZA'},{av:'AV12cSpedCContabilNivel',fld:'vCSPEDCCONTABILNIVEL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedUsuarioId',fld:'vCSPEDUSUARIOID'},{av:'AV7cSpedData',fld:'vCSPEDDATA'},{av:'AV8cSpedTpRegistro',fld:'vCSPEDTPREGISTRO'},{av:'AV9cSpedCContabilId',fld:'vCSPEDCCONTABILID'},{av:'AV10cSpedCContabilNome',fld:'vCSPEDCCONTABILNOME'},{av:'AV11cSpedCContabilNatureza',fld:'vCSPEDCCONTABILNATUREZA'},{av:'AV12cSpedCContabilNivel',fld:'vCSPEDCCONTABILNIVEL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSpedUsuarioId',fld:'vCSPEDUSUARIOID'},{av:'AV7cSpedData',fld:'vCSPEDDATA'},{av:'AV8cSpedTpRegistro',fld:'vCSPEDTPREGISTRO'},{av:'AV9cSpedCContabilId',fld:'vCSPEDCCONTABILID'},{av:'AV10cSpedCContabilNome',fld:'vCSPEDCCONTABILNOME'},{av:'AV11cSpedCContabilNatureza',fld:'vCSPEDCCONTABILNATUREZA'},{av:'AV12cSpedCContabilNivel',fld:'vCSPEDCCONTABILNIVEL'}],[]];
   this.setVCMap("AV13pSpedUsuarioId", "vPSPEDUSUARIOID", 0, "char");
   this.setVCMap("AV14pSpedData", "vPSPEDDATA", 0, "date");
   this.setVCMap("AV15pSpedTpRegistro", "vPSPEDTPREGISTRO", 0, "int");
   this.setVCMap("AV16pSpedCContabilId", "vPSPEDCCONTABILID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0by0());