/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:25.46
*/
gx.evt.autoSkip = false;
gx.define('gx0fp0', false, function () {
   this.ServerClass =  "gx0fp0" ;
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
      this.AV12pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV13pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
      this.AV14pSaidaCCESeq=gx.fn.getIntegerValue("vPSAIDACCESEQ",'.') ;
   };
   this.e132g72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142g71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fp0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4306,48,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,49,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7394,50,"SAIDACCESEQ","Sequência","","SaidaCCESeq","int",0,"px",3,3,"right",null,[],7394,"SaidaCCESeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7391,51,"SAIDACCEDATAHORA","Data/Hora da Correção","Selecionar","SaidaCCEDataHora","dtime",0,"px",16,16,"right",null,[],7391,"SaidaCCEDataHora",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7392,52,"SAIDACCEUSUARIOALT","Usuário de Alteração","","SaidaCCEUsuarioAlt","char",0,"px",12,12,"left",null,[],7392,"SaidaCCEUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7393,53,"SAIDACCEDATAHORAALT","Data/Hora de Alteração","","SaidaCCEDataHoraAlt","dtime",0,"px",16,16,"right",null,[],7393,"SaidaCCEDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAEMPRESAID",gxz:"ZV6cSaidaEmpresaId",gxold:"OV6cSaidaEmpresaId",gxvar:"AV6cSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAEMPRESAID",gx.O.AV6cSaidaEmpresaId,0)},c2v:function(){gx.O.AV6cSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAID",gxz:"ZV7cSaidaId",gxold:"OV7cSaidaId",gxvar:"AV7cSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAID",gx.O.AV7cSaidaId,0)},c2v:function(){gx.O.AV7cSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDACCESEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDACCESEQ",gxz:"ZV8cSaidaCCESeq",gxold:"OV8cSaidaCCESeq",gxvar:"AV8cSaidaCCESeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaCCESeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSaidaCCESeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDACCESEQ",gx.O.AV8cSaidaCCESeq,0)},c2v:function(){gx.O.AV8cSaidaCCESeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDACCESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDACCEDATAHORA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDACCEDATAHORA",gxz:"ZV9cSaidaCCEDataHora",gxold:"OV9cSaidaCCEDataHora",gxvar:"AV9cSaidaCCEDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cSaidaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDACCEDATAHORA",gx.O.AV9cSaidaCCEDataHora,0)},c2v:function(){gx.O.AV9cSaidaCCEDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSAIDACCEDATAHORA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDACCEUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDACCEUSUARIOALT",gxz:"ZV10cSaidaCCEUsuarioAlt",gxold:"OV10cSaidaCCEUsuarioAlt",gxvar:"AV10cSaidaCCEUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaCCEUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cSaidaCCEUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCSAIDACCEUSUARIOALT",gx.O.AV10cSaidaCCEUsuarioAlt,0)},c2v:function(){gx.O.AV10cSaidaCCEUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDACCEUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDACCEDATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDACCEDATAHORAALT",gxz:"ZV11cSaidaCCEDataHoraAlt",gxold:"OV11cSaidaCCEDataHoraAlt",gxvar:"AV11cSaidaCCEDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cSaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDACCEDATAHORAALT",gx.O.AV11cSaidaCCEDataHoraAlt,0)},c2v:function(){gx.O.AV11cSaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSAIDACCEDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(46),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCESEQ",gxz:"Z7394SaidaCCESeq",gxold:"O7394SaidaCCESeq",gxvar:"A7394SaidaCCESeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7394SaidaCCESeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7394SaidaCCESeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDACCESEQ",row || gx.fn.currentGridRowImpl(46),gx.O.A7394SaidaCCESeq,0)},c2v:function(){gx.O.A7394SaidaCCESeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDACCESEQ",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCEDATAHORA",gxz:"Z7391SaidaCCEDataHora",gxold:"O7391SaidaCCEDataHora",gxvar:"A7391SaidaCCEDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7391SaidaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7391SaidaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDACCEDATAHORA",row || gx.fn.currentGridRowImpl(46),gx.O.A7391SaidaCCEDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7391SaidaCCEDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDACCEDATAHORA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCEUSUARIOALT",gxz:"Z7392SaidaCCEUsuarioAlt",gxold:"O7392SaidaCCEUsuarioAlt",gxvar:"A7392SaidaCCEUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7392SaidaCCEUsuarioAlt=Value},v2z:function(Value){gx.O.Z7392SaidaCCEUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDACCEUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A7392SaidaCCEUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7392SaidaCCEUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDACCEUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCEDATAHORAALT",gxz:"Z7393SaidaCCEDataHoraAlt",gxold:"O7393SaidaCCEDataHoraAlt",gxvar:"A7393SaidaCCEDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7393SaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7393SaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDACCEDATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A7393SaidaCCEDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7393SaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDACCEDATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cSaidaEmpresaId = "" ;
   this.ZV6cSaidaEmpresaId = "" ;
   this.OV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.ZV7cSaidaId = 0 ;
   this.OV7cSaidaId = 0 ;
   this.AV8cSaidaCCESeq = 0 ;
   this.ZV8cSaidaCCESeq = 0 ;
   this.OV8cSaidaCCESeq = 0 ;
   this.AV9cSaidaCCEDataHora = gx.date.nullDate() ;
   this.ZV9cSaidaCCEDataHora = gx.date.nullDate() ;
   this.OV9cSaidaCCEDataHora = gx.date.nullDate() ;
   this.AV10cSaidaCCEUsuarioAlt = "" ;
   this.ZV10cSaidaCCEUsuarioAlt = "" ;
   this.OV10cSaidaCCEUsuarioAlt = "" ;
   this.AV11cSaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cSaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.OV11cSaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.Z7394SaidaCCESeq = 0 ;
   this.O7394SaidaCCESeq = 0 ;
   this.Z7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.O7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.Z7392SaidaCCEUsuarioAlt = "" ;
   this.O7392SaidaCCEUsuarioAlt = "" ;
   this.Z7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.O7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.AV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.AV8cSaidaCCESeq = 0 ;
   this.AV9cSaidaCCEDataHora = gx.date.nullDate() ;
   this.AV10cSaidaCCEUsuarioAlt = "" ;
   this.AV11cSaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.AV12pSaidaEmpresaId = "" ;
   this.AV13pSaidaId = 0 ;
   this.AV14pSaidaCCESeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A7394SaidaCCESeq = 0 ;
   this.A7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.A7392SaidaCCEUsuarioAlt = "" ;
   this.A7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e132g72_client": ["ENTER", true] ,"e142g71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaCCESeq',fld:'vCSAIDACCESEQ'},{av:'AV9cSaidaCCEDataHora',fld:'vCSAIDACCEDATAHORA'},{av:'AV10cSaidaCCEUsuarioAlt',fld:'vCSAIDACCEUSUARIOALT'},{av:'AV11cSaidaCCEDataHoraAlt',fld:'vCSAIDACCEDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A7394SaidaCCESeq',fld:'SAIDACCESEQ'}],[{av:'AV12pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID'},{av:'AV13pSaidaId',fld:'vPSAIDAID'},{av:'AV14pSaidaCCESeq',fld:'vPSAIDACCESEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaCCESeq',fld:'vCSAIDACCESEQ'},{av:'AV9cSaidaCCEDataHora',fld:'vCSAIDACCEDATAHORA'},{av:'AV10cSaidaCCEUsuarioAlt',fld:'vCSAIDACCEUSUARIOALT'},{av:'AV11cSaidaCCEDataHoraAlt',fld:'vCSAIDACCEDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaCCESeq',fld:'vCSAIDACCESEQ'},{av:'AV9cSaidaCCEDataHora',fld:'vCSAIDACCEDATAHORA'},{av:'AV10cSaidaCCEUsuarioAlt',fld:'vCSAIDACCEUSUARIOALT'},{av:'AV11cSaidaCCEDataHoraAlt',fld:'vCSAIDACCEDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaCCESeq',fld:'vCSAIDACCESEQ'},{av:'AV9cSaidaCCEDataHora',fld:'vCSAIDACCEDATAHORA'},{av:'AV10cSaidaCCEUsuarioAlt',fld:'vCSAIDACCEUSUARIOALT'},{av:'AV11cSaidaCCEDataHoraAlt',fld:'vCSAIDACCEDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaCCESeq',fld:'vCSAIDACCESEQ'},{av:'AV9cSaidaCCEDataHora',fld:'vCSAIDACCEDATAHORA'},{av:'AV10cSaidaCCEUsuarioAlt',fld:'vCSAIDACCEUSUARIOALT'},{av:'AV11cSaidaCCEDataHoraAlt',fld:'vCSAIDACCEDATAHORAALT'}],[]];
   this.setVCMap("AV12pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV13pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV14pSaidaCCESeq", "vPSAIDACCESEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fp0());