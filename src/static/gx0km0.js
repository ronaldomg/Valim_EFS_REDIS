/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:38.7
*/
gx.evt.autoSkip = false;
gx.define('gx0km0', false, function () {
   this.ServerClass =  "gx0km0" ;
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
      this.AV13pBFConnectionId=gx.fn.getIntegerValue("vPBFCONNECTIONID",'.') ;
   };
   this.Validv_Cbfconnectiontipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCBFCONNECTIONTIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cBFConnectionTipo == "I" || this.AV10cBFConnectionTipo == "G" || this.AV10cBFConnectionTipo == "C" || (""==this.AV10cBFConnectionTipo) ) )
         {
            try {
               gxballoon.setError("Campo cBFConnectionTipo fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e132ds2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142ds1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0km0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9921,53,"BFCONNECTIONID","Código","","BFConnectionId","int",0,"px",8,8,"right",null,[],9921,"BFConnectionId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(9926,54,"BFCONNECTIONPENDENTE","Pendente","","BFConnectionPendente","boolean","true","false",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(9927,55,"BFCONNECTIONIMPRESSORA","Impressora","","BFConnectionImpressora","svchar",0,"px",100,80,"left",null,[],9927,"BFConnectionImpressora",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(9931,56,"BFCONNECTIONTIPO","Ação","BFConnectionTipo","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBFCONNECTIONID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONID",gxz:"ZV6cBFConnectionId",gxold:"OV6cBFConnectionId",gxvar:"AV6cBFConnectionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBFConnectionId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cBFConnectionId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBFCONNECTIONID",gx.O.AV6cBFConnectionId,0)},c2v:function(){gx.O.AV6cBFConnectionId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBFCONNECTIONID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBFCONNECTIONPENDENTE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONPENDENTE",gxz:"ZV7cBFConnectionPendente",gxold:"OV7cBFConnectionPendente",gxvar:"AV7cBFConnectionPendente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV7cBFConnectionPendente=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV7cBFConnectionPendente=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCBFCONNECTIONPENDENTE",gx.O.AV7cBFConnectionPendente,true)},c2v:function(){gx.O.AV7cBFConnectionPendente=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCBFCONNECTIONPENDENTE")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[22]={fld:"TEXTBLOCKBFCONNECTIONIMPRESSORA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONIMPRESSORA",gxz:"ZV8cBFConnectionImpressora",gxold:"OV8cBFConnectionImpressora",gxvar:"AV8cBFConnectionImpressora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBFConnectionImpressora=Value},v2z:function(Value){gx.O.ZV8cBFConnectionImpressora=Value},v2c:function(){gx.fn.setControlValue("vCBFCONNECTIONIMPRESSORA",gx.O.AV8cBFConnectionImpressora,0)},c2v:function(){gx.O.AV8cBFConnectionImpressora=this.val()},val:function(){return gx.fn.getControlValue("vCBFCONNECTIONIMPRESSORA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKBFCONNECTIONIP", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONIP",gxz:"ZV9cBFConnectionIP",gxold:"OV9cBFConnectionIP",gxvar:"AV9cBFConnectionIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cBFConnectionIP=Value},v2z:function(Value){gx.O.ZV9cBFConnectionIP=Value},v2c:function(){gx.fn.setControlValue("vCBFCONNECTIONIP",gx.O.AV9cBFConnectionIP,0)},c2v:function(){gx.O.AV9cBFConnectionIP=this.val()},val:function(){return gx.fn.getControlValue("vCBFCONNECTIONIP")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKBFCONNECTIONTIPO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cbfconnectiontipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONTIPO",gxz:"ZV10cBFConnectionTipo",gxold:"OV10cBFConnectionTipo",gxvar:"AV10cBFConnectionTipo",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cBFConnectionTipo=Value},v2z:function(Value){gx.O.ZV10cBFConnectionTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCBFCONNECTIONTIPO",gx.O.AV10cBFConnectionTipo)},c2v:function(){gx.O.AV10cBFConnectionTipo=this.val()},val:function(){return gx.fn.getControlValue("vCBFCONNECTIONTIPO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKBFCONNECTIONCOMANDO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONCOMANDO",gxz:"ZV11cBFConnectionComando",gxold:"OV11cBFConnectionComando",gxvar:"AV11cBFConnectionComando",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cBFConnectionComando=Value},v2z:function(Value){gx.O.ZV11cBFConnectionComando=Value},v2c:function(){gx.fn.setControlValue("vCBFCONNECTIONCOMANDO",gx.O.AV11cBFConnectionComando,0)},c2v:function(){gx.O.AV11cBFConnectionComando=this.val()},val:function(){return gx.fn.getControlValue("vCBFCONNECTIONCOMANDO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKBFCONNECTIONUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBFCONNECTIONUSUARIOID",gxz:"ZV12cBFConnectionUsuarioId",gxold:"OV12cBFConnectionUsuarioId",gxvar:"AV12cBFConnectionUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cBFConnectionUsuarioId=Value},v2z:function(Value){gx.O.ZV12cBFConnectionUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCBFCONNECTIONUSUARIOID",gx.O.AV12cBFConnectionUsuarioId,0)},c2v:function(){gx.O.AV12cBFConnectionUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCBFCONNECTIONUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONID",gxz:"Z9921BFConnectionId",gxold:"O9921BFConnectionId",gxvar:"A9921BFConnectionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9921BFConnectionId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9921BFConnectionId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BFCONNECTIONID",row || gx.fn.currentGridRowImpl(51),gx.O.A9921BFConnectionId,0)},c2v:function(){gx.O.A9921BFConnectionId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BFCONNECTIONID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONPENDENTE",gxz:"Z9926BFConnectionPendente",gxold:"O9926BFConnectionPendente",gxvar:"A9926BFConnectionPendente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A9926BFConnectionPendente=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.Z9926BFConnectionPendente=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("BFCONNECTIONPENDENTE",row || gx.fn.currentGridRowImpl(51),gx.O.A9926BFConnectionPendente,true)},c2v:function(){gx.O.A9926BFConnectionPendente=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("BFCONNECTIONPENDENTE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[55]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONIMPRESSORA",gxz:"Z9927BFConnectionImpressora",gxold:"O9927BFConnectionImpressora",gxvar:"A9927BFConnectionImpressora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9927BFConnectionImpressora=Value},v2z:function(Value){gx.O.Z9927BFConnectionImpressora=Value},v2c:function(row){gx.fn.setGridControlValue("BFCONNECTIONIMPRESSORA",row || gx.fn.currentGridRowImpl(51),gx.O.A9927BFConnectionImpressora,0)},c2v:function(){gx.O.A9927BFConnectionImpressora=this.val()},val:function(row){return gx.fn.getGridControlValue("BFCONNECTIONIMPRESSORA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONTIPO",gxz:"Z9931BFConnectionTipo",gxold:"O9931BFConnectionTipo",gxvar:"A9931BFConnectionTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A9931BFConnectionTipo=Value},v2z:function(Value){gx.O.Z9931BFConnectionTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("BFCONNECTIONTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A9931BFConnectionTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9931BFConnectionTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("BFCONNECTIONTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cBFConnectionId = 0 ;
   this.ZV6cBFConnectionId = 0 ;
   this.OV6cBFConnectionId = 0 ;
   this.AV7cBFConnectionPendente = false ;
   this.ZV7cBFConnectionPendente = false ;
   this.OV7cBFConnectionPendente = false ;
   this.AV8cBFConnectionImpressora = "" ;
   this.ZV8cBFConnectionImpressora = "" ;
   this.OV8cBFConnectionImpressora = "" ;
   this.AV9cBFConnectionIP = "" ;
   this.ZV9cBFConnectionIP = "" ;
   this.OV9cBFConnectionIP = "" ;
   this.AV10cBFConnectionTipo = "" ;
   this.ZV10cBFConnectionTipo = "" ;
   this.OV10cBFConnectionTipo = "" ;
   this.AV11cBFConnectionComando = "" ;
   this.ZV11cBFConnectionComando = "" ;
   this.OV11cBFConnectionComando = "" ;
   this.AV12cBFConnectionUsuarioId = "" ;
   this.ZV12cBFConnectionUsuarioId = "" ;
   this.OV12cBFConnectionUsuarioId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9921BFConnectionId = 0 ;
   this.O9921BFConnectionId = 0 ;
   this.Z9926BFConnectionPendente = false ;
   this.O9926BFConnectionPendente = false ;
   this.Z9927BFConnectionImpressora = "" ;
   this.O9927BFConnectionImpressora = "" ;
   this.Z9931BFConnectionTipo = "" ;
   this.O9931BFConnectionTipo = "" ;
   this.AV6cBFConnectionId = 0 ;
   this.AV7cBFConnectionPendente = false ;
   this.AV8cBFConnectionImpressora = "" ;
   this.AV9cBFConnectionIP = "" ;
   this.AV10cBFConnectionTipo = "" ;
   this.AV11cBFConnectionComando = "" ;
   this.AV12cBFConnectionUsuarioId = "" ;
   this.AV13pBFConnectionId = 0 ;
   this.A9929BFConnectionUsuarioId = "" ;
   this.A9932BFConnectionComando = "" ;
   this.A9928BFConnectionIP = "" ;
   this.AV5LinkSelection = "" ;
   this.A9921BFConnectionId = 0 ;
   this.A9926BFConnectionPendente = false ;
   this.A9927BFConnectionImpressora = "" ;
   this.A9931BFConnectionTipo = "" ;
   this.Events = {"e132ds2_client": ["ENTER", true] ,"e142ds1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBFConnectionId',fld:'vCBFCONNECTIONID'},{av:'AV7cBFConnectionPendente',fld:'vCBFCONNECTIONPENDENTE'},{av:'AV8cBFConnectionImpressora',fld:'vCBFCONNECTIONIMPRESSORA'},{av:'AV9cBFConnectionIP',fld:'vCBFCONNECTIONIP'},{av:'AV10cBFConnectionTipo',fld:'vCBFCONNECTIONTIPO'},{av:'AV11cBFConnectionComando',fld:'vCBFCONNECTIONCOMANDO'},{av:'AV12cBFConnectionUsuarioId',fld:'vCBFCONNECTIONUSUARIOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9921BFConnectionId',fld:'BFCONNECTIONID'}],[{av:'AV13pBFConnectionId',fld:'vPBFCONNECTIONID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBFConnectionId',fld:'vCBFCONNECTIONID'},{av:'AV7cBFConnectionPendente',fld:'vCBFCONNECTIONPENDENTE'},{av:'AV8cBFConnectionImpressora',fld:'vCBFCONNECTIONIMPRESSORA'},{av:'AV9cBFConnectionIP',fld:'vCBFCONNECTIONIP'},{av:'AV10cBFConnectionTipo',fld:'vCBFCONNECTIONTIPO'},{av:'AV11cBFConnectionComando',fld:'vCBFCONNECTIONCOMANDO'},{av:'AV12cBFConnectionUsuarioId',fld:'vCBFCONNECTIONUSUARIOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBFConnectionId',fld:'vCBFCONNECTIONID'},{av:'AV7cBFConnectionPendente',fld:'vCBFCONNECTIONPENDENTE'},{av:'AV8cBFConnectionImpressora',fld:'vCBFCONNECTIONIMPRESSORA'},{av:'AV9cBFConnectionIP',fld:'vCBFCONNECTIONIP'},{av:'AV10cBFConnectionTipo',fld:'vCBFCONNECTIONTIPO'},{av:'AV11cBFConnectionComando',fld:'vCBFCONNECTIONCOMANDO'},{av:'AV12cBFConnectionUsuarioId',fld:'vCBFCONNECTIONUSUARIOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBFConnectionId',fld:'vCBFCONNECTIONID'},{av:'AV7cBFConnectionPendente',fld:'vCBFCONNECTIONPENDENTE'},{av:'AV8cBFConnectionImpressora',fld:'vCBFCONNECTIONIMPRESSORA'},{av:'AV9cBFConnectionIP',fld:'vCBFCONNECTIONIP'},{av:'AV10cBFConnectionTipo',fld:'vCBFCONNECTIONTIPO'},{av:'AV11cBFConnectionComando',fld:'vCBFCONNECTIONCOMANDO'},{av:'AV12cBFConnectionUsuarioId',fld:'vCBFCONNECTIONUSUARIOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBFConnectionId',fld:'vCBFCONNECTIONID'},{av:'AV7cBFConnectionPendente',fld:'vCBFCONNECTIONPENDENTE'},{av:'AV8cBFConnectionImpressora',fld:'vCBFCONNECTIONIMPRESSORA'},{av:'AV9cBFConnectionIP',fld:'vCBFCONNECTIONIP'},{av:'AV10cBFConnectionTipo',fld:'vCBFCONNECTIONTIPO'},{av:'AV11cBFConnectionComando',fld:'vCBFCONNECTIONCOMANDO'},{av:'AV12cBFConnectionUsuarioId',fld:'vCBFCONNECTIONUSUARIOID'}],[]];
   this.setVCMap("AV13pBFConnectionId", "vPBFCONNECTIONID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0km0());
