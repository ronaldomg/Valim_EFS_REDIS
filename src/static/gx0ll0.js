/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:10.7
*/
gx.evt.autoSkip = false;
gx.define('gx0ll0', false, function () {
   this.ServerClass =  "gx0ll0" ;
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
      this.AV12pExecucaoRecalculoEmpresaId=gx.fn.getControlValue("vPEXECUCAORECALCULOEMPRESAID") ;
      this.AV13pExecucaoRecalculoSequencia=gx.fn.getIntegerValue("vPEXECUCAORECALCULOSEQUENCIA",'.') ;
   };
   this.e132712_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142711_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ll0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10446,48,"EXECUCAORECALCULOEMPRESAID","Empresa Id","","ExecucaoRecalculoEmpresaId","char",0,"px",10,10,"left",null,[],10446,"ExecucaoRecalculoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10447,49,"EXECUCAORECALCULOSEQUENCIA","Recalculo Sequencia","","ExecucaoRecalculoSequencia","int",0,"px",10,10,"right",null,[],10447,"ExecucaoRecalculoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10451,50,"EXECUCAORECALCULOUSUARIO","Recalculo Usuario","Selecionar","ExecucaoRecalculoUsuario","char",0,"px",12,12,"left",null,[],10451,"ExecucaoRecalculoUsuario",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10452,51,"EXECUCAORECALCULODATAHORA","Data Hora","","ExecucaoRecalculoDataHora","dtime",0,"px",16,16,"right",null,[],10452,"ExecucaoRecalculoDataHora",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEXECUCAORECALCULOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEXECUCAORECALCULOEMPRESAID",gxz:"ZV6cExecucaoRecalculoEmpresaId",gxold:"OV6cExecucaoRecalculoEmpresaId",gxvar:"AV6cExecucaoRecalculoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cExecucaoRecalculoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cExecucaoRecalculoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEXECUCAORECALCULOEMPRESAID",gx.O.AV6cExecucaoRecalculoEmpresaId,0)},c2v:function(){gx.O.AV6cExecucaoRecalculoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEXECUCAORECALCULOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKEXECUCAORECALCULOSEQUENCIA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEXECUCAORECALCULOSEQUENCIA",gxz:"ZV7cExecucaoRecalculoSequencia",gxold:"OV7cExecucaoRecalculoSequencia",gxvar:"AV7cExecucaoRecalculoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cExecucaoRecalculoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cExecucaoRecalculoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCEXECUCAORECALCULOSEQUENCIA",gx.O.AV7cExecucaoRecalculoSequencia,0)},c2v:function(){gx.O.AV7cExecucaoRecalculoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCEXECUCAORECALCULOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKEXECUCAORECALCULOUSUARIO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEXECUCAORECALCULOUSUARIO",gxz:"ZV8cExecucaoRecalculoUsuario",gxold:"OV8cExecucaoRecalculoUsuario",gxvar:"AV8cExecucaoRecalculoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cExecucaoRecalculoUsuario=Value},v2z:function(Value){gx.O.ZV8cExecucaoRecalculoUsuario=Value},v2c:function(){gx.fn.setControlValue("vCEXECUCAORECALCULOUSUARIO",gx.O.AV8cExecucaoRecalculoUsuario,0)},c2v:function(){gx.O.AV8cExecucaoRecalculoUsuario=this.val()},val:function(){return gx.fn.getControlValue("vCEXECUCAORECALCULOUSUARIO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKEXECUCAORECALCULODATAHORA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEXECUCAORECALCULODATAHORA",gxz:"ZV9cExecucaoRecalculoDataHora",gxold:"OV9cExecucaoRecalculoDataHora",gxvar:"AV9cExecucaoRecalculoDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCEXECUCAORECALCULODATAHORA",gx.O.AV9cExecucaoRecalculoDataHora,0)},c2v:function(){gx.O.AV9cExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCEXECUCAORECALCULODATAHORA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKEXECUCAORECALCULOPROGSISTEMA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEXECUCAORECALCULOPROGSISTEMA",gxz:"ZV10cExecucaoRecalculoProgSistema",gxold:"OV10cExecucaoRecalculoProgSistema",gxvar:"AV10cExecucaoRecalculoProgSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cExecucaoRecalculoProgSistema=Value},v2z:function(Value){gx.O.ZV10cExecucaoRecalculoProgSistema=Value},v2c:function(){gx.fn.setControlValue("vCEXECUCAORECALCULOPROGSISTEMA",gx.O.AV10cExecucaoRecalculoProgSistema,0)},c2v:function(){gx.O.AV10cExecucaoRecalculoProgSistema=this.val()},val:function(){return gx.fn.getControlValue("vCEXECUCAORECALCULOPROGSISTEMA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKEXECUCAORECALCULOPROGID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEXECUCAORECALCULOPROGID",gxz:"ZV11cExecucaoRecalculoProgId",gxold:"OV11cExecucaoRecalculoProgId",gxvar:"AV11cExecucaoRecalculoProgId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cExecucaoRecalculoProgId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cExecucaoRecalculoProgId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCEXECUCAORECALCULOPROGID",gx.O.AV11cExecucaoRecalculoProgId,0)},c2v:function(){gx.O.AV11cExecucaoRecalculoProgId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCEXECUCAORECALCULOPROGID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOEMPRESAID",gxz:"Z10446ExecucaoRecalculoEmpresaId",gxold:"O10446ExecucaoRecalculoEmpresaId",gxvar:"A10446ExecucaoRecalculoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10446ExecucaoRecalculoEmpresaId=Value},v2z:function(Value){gx.O.Z10446ExecucaoRecalculoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EXECUCAORECALCULOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A10446ExecucaoRecalculoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10446ExecucaoRecalculoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EXECUCAORECALCULOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOSEQUENCIA",gxz:"Z10447ExecucaoRecalculoSequencia",gxold:"O10447ExecucaoRecalculoSequencia",gxvar:"A10447ExecucaoRecalculoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10447ExecucaoRecalculoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10447ExecucaoRecalculoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EXECUCAORECALCULOSEQUENCIA",row || gx.fn.currentGridRowImpl(46),gx.O.A10447ExecucaoRecalculoSequencia,0)},c2v:function(){gx.O.A10447ExecucaoRecalculoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EXECUCAORECALCULOSEQUENCIA",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULOUSUARIO",gxz:"Z10451ExecucaoRecalculoUsuario",gxold:"O10451ExecucaoRecalculoUsuario",gxvar:"A10451ExecucaoRecalculoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10451ExecucaoRecalculoUsuario=Value},v2z:function(Value){gx.O.Z10451ExecucaoRecalculoUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("EXECUCAORECALCULOUSUARIO",row || gx.fn.currentGridRowImpl(46),gx.O.A10451ExecucaoRecalculoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10451ExecucaoRecalculoUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("EXECUCAORECALCULOUSUARIO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAORECALCULODATAHORA",gxz:"Z10452ExecucaoRecalculoDataHora",gxold:"O10452ExecucaoRecalculoDataHora",gxvar:"A10452ExecucaoRecalculoDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10452ExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10452ExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("EXECUCAORECALCULODATAHORA",row || gx.fn.currentGridRowImpl(46),gx.O.A10452ExecucaoRecalculoDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10452ExecucaoRecalculoDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("EXECUCAORECALCULODATAHORA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   this.AV6cExecucaoRecalculoEmpresaId = "" ;
   this.ZV6cExecucaoRecalculoEmpresaId = "" ;
   this.OV6cExecucaoRecalculoEmpresaId = "" ;
   this.AV7cExecucaoRecalculoSequencia = 0 ;
   this.ZV7cExecucaoRecalculoSequencia = 0 ;
   this.OV7cExecucaoRecalculoSequencia = 0 ;
   this.AV8cExecucaoRecalculoUsuario = "" ;
   this.ZV8cExecucaoRecalculoUsuario = "" ;
   this.OV8cExecucaoRecalculoUsuario = "" ;
   this.AV9cExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.ZV9cExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.OV9cExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.AV10cExecucaoRecalculoProgSistema = "" ;
   this.ZV10cExecucaoRecalculoProgSistema = "" ;
   this.OV10cExecucaoRecalculoProgSistema = "" ;
   this.AV11cExecucaoRecalculoProgId = 0 ;
   this.ZV11cExecucaoRecalculoProgId = 0 ;
   this.OV11cExecucaoRecalculoProgId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10446ExecucaoRecalculoEmpresaId = "" ;
   this.O10446ExecucaoRecalculoEmpresaId = "" ;
   this.Z10447ExecucaoRecalculoSequencia = 0 ;
   this.O10447ExecucaoRecalculoSequencia = 0 ;
   this.Z10451ExecucaoRecalculoUsuario = "" ;
   this.O10451ExecucaoRecalculoUsuario = "" ;
   this.Z10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.O10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.AV6cExecucaoRecalculoEmpresaId = "" ;
   this.AV7cExecucaoRecalculoSequencia = 0 ;
   this.AV8cExecucaoRecalculoUsuario = "" ;
   this.AV9cExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.AV10cExecucaoRecalculoProgSistema = "" ;
   this.AV11cExecucaoRecalculoProgId = 0 ;
   this.AV12pExecucaoRecalculoEmpresaId = "" ;
   this.AV13pExecucaoRecalculoSequencia = 0 ;
   this.A10449ExecucaoRecalculoProgId = 0 ;
   this.A10448ExecucaoRecalculoProgSistema = "" ;
   this.AV5LinkSelection = "" ;
   this.A10446ExecucaoRecalculoEmpresaId = "" ;
   this.A10447ExecucaoRecalculoSequencia = 0 ;
   this.A10451ExecucaoRecalculoUsuario = "" ;
   this.A10452ExecucaoRecalculoDataHora = gx.date.nullDate() ;
   this.Events = {"e132712_client": ["ENTER", true] ,"e142711_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cExecucaoRecalculoEmpresaId',fld:'vCEXECUCAORECALCULOEMPRESAID'},{av:'AV7cExecucaoRecalculoSequencia',fld:'vCEXECUCAORECALCULOSEQUENCIA'},{av:'AV8cExecucaoRecalculoUsuario',fld:'vCEXECUCAORECALCULOUSUARIO'},{av:'AV9cExecucaoRecalculoDataHora',fld:'vCEXECUCAORECALCULODATAHORA'},{av:'AV10cExecucaoRecalculoProgSistema',fld:'vCEXECUCAORECALCULOPROGSISTEMA'},{av:'AV11cExecucaoRecalculoProgId',fld:'vCEXECUCAORECALCULOPROGID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10446ExecucaoRecalculoEmpresaId',fld:'EXECUCAORECALCULOEMPRESAID'},{av:'A10447ExecucaoRecalculoSequencia',fld:'EXECUCAORECALCULOSEQUENCIA'}],[{av:'AV12pExecucaoRecalculoEmpresaId',fld:'vPEXECUCAORECALCULOEMPRESAID'},{av:'AV13pExecucaoRecalculoSequencia',fld:'vPEXECUCAORECALCULOSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cExecucaoRecalculoEmpresaId',fld:'vCEXECUCAORECALCULOEMPRESAID'},{av:'AV7cExecucaoRecalculoSequencia',fld:'vCEXECUCAORECALCULOSEQUENCIA'},{av:'AV8cExecucaoRecalculoUsuario',fld:'vCEXECUCAORECALCULOUSUARIO'},{av:'AV9cExecucaoRecalculoDataHora',fld:'vCEXECUCAORECALCULODATAHORA'},{av:'AV10cExecucaoRecalculoProgSistema',fld:'vCEXECUCAORECALCULOPROGSISTEMA'},{av:'AV11cExecucaoRecalculoProgId',fld:'vCEXECUCAORECALCULOPROGID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cExecucaoRecalculoEmpresaId',fld:'vCEXECUCAORECALCULOEMPRESAID'},{av:'AV7cExecucaoRecalculoSequencia',fld:'vCEXECUCAORECALCULOSEQUENCIA'},{av:'AV8cExecucaoRecalculoUsuario',fld:'vCEXECUCAORECALCULOUSUARIO'},{av:'AV9cExecucaoRecalculoDataHora',fld:'vCEXECUCAORECALCULODATAHORA'},{av:'AV10cExecucaoRecalculoProgSistema',fld:'vCEXECUCAORECALCULOPROGSISTEMA'},{av:'AV11cExecucaoRecalculoProgId',fld:'vCEXECUCAORECALCULOPROGID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cExecucaoRecalculoEmpresaId',fld:'vCEXECUCAORECALCULOEMPRESAID'},{av:'AV7cExecucaoRecalculoSequencia',fld:'vCEXECUCAORECALCULOSEQUENCIA'},{av:'AV8cExecucaoRecalculoUsuario',fld:'vCEXECUCAORECALCULOUSUARIO'},{av:'AV9cExecucaoRecalculoDataHora',fld:'vCEXECUCAORECALCULODATAHORA'},{av:'AV10cExecucaoRecalculoProgSistema',fld:'vCEXECUCAORECALCULOPROGSISTEMA'},{av:'AV11cExecucaoRecalculoProgId',fld:'vCEXECUCAORECALCULOPROGID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cExecucaoRecalculoEmpresaId',fld:'vCEXECUCAORECALCULOEMPRESAID'},{av:'AV7cExecucaoRecalculoSequencia',fld:'vCEXECUCAORECALCULOSEQUENCIA'},{av:'AV8cExecucaoRecalculoUsuario',fld:'vCEXECUCAORECALCULOUSUARIO'},{av:'AV9cExecucaoRecalculoDataHora',fld:'vCEXECUCAORECALCULODATAHORA'},{av:'AV10cExecucaoRecalculoProgSistema',fld:'vCEXECUCAORECALCULOPROGSISTEMA'},{av:'AV11cExecucaoRecalculoProgId',fld:'vCEXECUCAORECALCULOPROGID'}],[]];
   this.setVCMap("AV12pExecucaoRecalculoEmpresaId", "vPEXECUCAORECALCULOEMPRESAID", 0, "char");
   this.setVCMap("AV13pExecucaoRecalculoSequencia", "vPEXECUCAORECALCULOSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ll0());