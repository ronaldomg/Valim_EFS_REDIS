/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:26:13.78
*/
gx.evt.autoSkip = false;
gx.define('gx01k1', false, function () {
   this.ServerClass =  "gx01k1" ;
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
      this.AV11pEmpresaRateioEmpresaId=gx.fn.getControlValue("vPEMPRESARATEIOEMPRESAID") ;
      this.AV12pRateioId=gx.fn.getIntegerValue("vPRATEIOID",'.') ;
   };
   this.e131ja2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ja1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,51];
   this.GXLastCtrlId =51;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01k1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(170,43,"RATEIOID","Código do Rateio","","RateioId","int",0,"px",7,7,"right",null,[],170,"RateioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(177,44,"RATEIODESCRICAO","Descrição do Rateio","Selecionar","RateioDescricao","svchar",0,"px",35,35,"left",null,[],177,"RateioDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(511,45,"RATEIOULTIMOFATOR","Rateio Ultimo Fator","","RateioUltimoFator","int",0,"px",4,4,"right",null,[],511,"RateioUltimoFator",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(787,46,"RATEIOUSUARIOID","Usuário","","RateioUsuarioId","char",0,"px",12,12,"left",null,[],787,"RateioUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(788,47,"RATEIODATAHORAALT","Data/Hora última alteração","","RateioDataHoraAlt","dtime",0,"px",16,16,"right",null,[],788,"RateioDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(169,48,"EMPRESARATEIOEMPRESAID","Empresa Rateio Empresa Id","","EmpresaRateioEmpresaId","char",0,"px",10,10,"left",null,[],169,"EmpresaRateioEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKRATEIOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRATEIOID",gxz:"ZV6cRateioId",gxold:"OV6cRateioId",gxvar:"AV6cRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cRateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCRATEIOID",gx.O.AV6cRateioId,0)},c2v:function(){gx.O.AV6cRateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCRATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKRATEIODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRATEIODESCRICAO",gxz:"ZV7cRateioDescricao",gxold:"OV7cRateioDescricao",gxvar:"AV7cRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRateioDescricao=Value},v2z:function(Value){gx.O.ZV7cRateioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCRATEIODESCRICAO",gx.O.AV7cRateioDescricao,0)},c2v:function(){gx.O.AV7cRateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCRATEIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKRATEIOULTIMOFATOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRATEIOULTIMOFATOR",gxz:"ZV8cRateioUltimoFator",gxold:"OV8cRateioUltimoFator",gxvar:"AV8cRateioUltimoFator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cRateioUltimoFator=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cRateioUltimoFator=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCRATEIOULTIMOFATOR",gx.O.AV8cRateioUltimoFator,0)},c2v:function(){gx.O.AV8cRateioUltimoFator=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCRATEIOULTIMOFATOR",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKRATEIOUSUARIOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRATEIOUSUARIOID",gxz:"ZV9cRateioUsuarioId",gxold:"OV9cRateioUsuarioId",gxvar:"AV9cRateioUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cRateioUsuarioId=Value},v2z:function(Value){gx.O.ZV9cRateioUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCRATEIOUSUARIOID",gx.O.AV9cRateioUsuarioId,0)},c2v:function(){gx.O.AV9cRateioUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCRATEIOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKRATEIODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRATEIODATAHORAALT",gxz:"ZV10cRateioDataHoraAlt",gxold:"OV10cRateioDataHoraAlt",gxvar:"AV10cRateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCRATEIODATAHORAALT",gx.O.AV10cRateioDataHoraAlt,0)},c2v:function(){gx.O.AV10cRateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCRATEIODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOID",gxz:"Z170RateioId",gxold:"O170RateioId",gxvar:"A170RateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A170RateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z170RateioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RATEIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A170RateioId,0)},c2v:function(){gx.O.A170RateioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RATEIOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RATEIODESCRICAO",gxz:"Z177RateioDescricao",gxold:"O177RateioDescricao",gxvar:"A177RateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A177RateioDescricao=Value},v2z:function(Value){gx.O.Z177RateioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("RATEIODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A177RateioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A177RateioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("RATEIODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOULTIMOFATOR",gxz:"Z511RateioUltimoFator",gxold:"O511RateioUltimoFator",gxvar:"A511RateioUltimoFator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A511RateioUltimoFator=gx.num.intval(Value)},v2z:function(Value){gx.O.Z511RateioUltimoFator=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RATEIOULTIMOFATOR",row || gx.fn.currentGridRowImpl(41),gx.O.A511RateioUltimoFator,0)},c2v:function(){gx.O.A511RateioUltimoFator=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RATEIOULTIMOFATOR",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOUSUARIOID",gxz:"Z787RateioUsuarioId",gxold:"O787RateioUsuarioId",gxvar:"A787RateioUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A787RateioUsuarioId=Value},v2z:function(Value){gx.O.Z787RateioUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("RATEIOUSUARIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A787RateioUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A787RateioUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("RATEIOUSUARIOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RATEIODATAHORAALT",gxz:"Z788RateioDataHoraAlt",gxold:"O788RateioDataHoraAlt",gxvar:"A788RateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A788RateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z788RateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("RATEIODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A788RateioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A788RateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("RATEIODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESARATEIOEMPRESAID",gxz:"Z169EmpresaRateioEmpresaId",gxold:"O169EmpresaRateioEmpresaId",gxvar:"A169EmpresaRateioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A169EmpresaRateioEmpresaId=Value},v2z:function(Value){gx.O.Z169EmpresaRateioEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESARATEIOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A169EmpresaRateioEmpresaId,0)},c2v:function(){gx.O.A169EmpresaRateioEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESARATEIOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   this.AV6cRateioId = 0 ;
   this.ZV6cRateioId = 0 ;
   this.OV6cRateioId = 0 ;
   this.AV7cRateioDescricao = "" ;
   this.ZV7cRateioDescricao = "" ;
   this.OV7cRateioDescricao = "" ;
   this.AV8cRateioUltimoFator = 0 ;
   this.ZV8cRateioUltimoFator = 0 ;
   this.OV8cRateioUltimoFator = 0 ;
   this.AV9cRateioUsuarioId = "" ;
   this.ZV9cRateioUsuarioId = "" ;
   this.OV9cRateioUsuarioId = "" ;
   this.AV10cRateioDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cRateioDataHoraAlt = gx.date.nullDate() ;
   this.OV10cRateioDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z170RateioId = 0 ;
   this.O170RateioId = 0 ;
   this.Z177RateioDescricao = "" ;
   this.O177RateioDescricao = "" ;
   this.Z511RateioUltimoFator = 0 ;
   this.O511RateioUltimoFator = 0 ;
   this.Z787RateioUsuarioId = "" ;
   this.O787RateioUsuarioId = "" ;
   this.Z788RateioDataHoraAlt = gx.date.nullDate() ;
   this.O788RateioDataHoraAlt = gx.date.nullDate() ;
   this.Z169EmpresaRateioEmpresaId = "" ;
   this.O169EmpresaRateioEmpresaId = "" ;
   this.AV6cRateioId = 0 ;
   this.AV7cRateioDescricao = "" ;
   this.AV8cRateioUltimoFator = 0 ;
   this.AV9cRateioUsuarioId = "" ;
   this.AV10cRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV11pEmpresaRateioEmpresaId = "" ;
   this.AV12pRateioId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A170RateioId = 0 ;
   this.A177RateioDescricao = "" ;
   this.A511RateioUltimoFator = 0 ;
   this.A787RateioUsuarioId = "" ;
   this.A788RateioDataHoraAlt = gx.date.nullDate() ;
   this.A169EmpresaRateioEmpresaId = "" ;
   this.Events = {"e131ja2_client": ["ENTER", true] ,"e141ja1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRateioId',fld:'vCRATEIOID'},{av:'AV7cRateioDescricao',fld:'vCRATEIODESCRICAO'},{av:'AV8cRateioUltimoFator',fld:'vCRATEIOULTIMOFATOR'},{av:'AV9cRateioUsuarioId',fld:'vCRATEIOUSUARIOID'},{av:'AV10cRateioDataHoraAlt',fld:'vCRATEIODATAHORAALT'},{av:'AV11pEmpresaRateioEmpresaId',fld:'vPEMPRESARATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A170RateioId',fld:'RATEIOID'}],[{av:'AV12pRateioId',fld:'vPRATEIOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRateioId',fld:'vCRATEIOID'},{av:'AV7cRateioDescricao',fld:'vCRATEIODESCRICAO'},{av:'AV8cRateioUltimoFator',fld:'vCRATEIOULTIMOFATOR'},{av:'AV9cRateioUsuarioId',fld:'vCRATEIOUSUARIOID'},{av:'AV10cRateioDataHoraAlt',fld:'vCRATEIODATAHORAALT'},{av:'AV11pEmpresaRateioEmpresaId',fld:'vPEMPRESARATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRateioId',fld:'vCRATEIOID'},{av:'AV7cRateioDescricao',fld:'vCRATEIODESCRICAO'},{av:'AV8cRateioUltimoFator',fld:'vCRATEIOULTIMOFATOR'},{av:'AV9cRateioUsuarioId',fld:'vCRATEIOUSUARIOID'},{av:'AV10cRateioDataHoraAlt',fld:'vCRATEIODATAHORAALT'},{av:'AV11pEmpresaRateioEmpresaId',fld:'vPEMPRESARATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRateioId',fld:'vCRATEIOID'},{av:'AV7cRateioDescricao',fld:'vCRATEIODESCRICAO'},{av:'AV8cRateioUltimoFator',fld:'vCRATEIOULTIMOFATOR'},{av:'AV9cRateioUsuarioId',fld:'vCRATEIOUSUARIOID'},{av:'AV10cRateioDataHoraAlt',fld:'vCRATEIODATAHORAALT'},{av:'AV11pEmpresaRateioEmpresaId',fld:'vPEMPRESARATEIOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRateioId',fld:'vCRATEIOID'},{av:'AV7cRateioDescricao',fld:'vCRATEIODESCRICAO'},{av:'AV8cRateioUltimoFator',fld:'vCRATEIOULTIMOFATOR'},{av:'AV9cRateioUsuarioId',fld:'vCRATEIOUSUARIOID'},{av:'AV10cRateioDataHoraAlt',fld:'vCRATEIODATAHORAALT'},{av:'AV11pEmpresaRateioEmpresaId',fld:'vPEMPRESARATEIOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV11pEmpresaRateioEmpresaId", "vPEMPRESARATEIOEMPRESAID", 0, "char");
   this.setVCMap("AV12pRateioId", "vPRATEIOID", 0, "int");
   this.setVCMap("AV11pEmpresaRateioEmpresaId", "vPEMPRESARATEIOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pEmpresaRateioEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01k1());
