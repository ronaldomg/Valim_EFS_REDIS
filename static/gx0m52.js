/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:46.82
*/
gx.evt.autoSkip = false;
gx.define('gx0m52', false, function () {
   this.ServerClass =  "gx0m52" ;
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
      this.AV11pEntregaEmpresaId=gx.fn.getControlValue("vPENTREGAEMPRESAID") ;
      this.AV12pEntregaNumero=gx.fn.getIntegerValue("vPENTREGANUMERO",'.') ;
      this.AV13pEntregaOcorrenciaSequencia=gx.fn.getIntegerValue("vPENTREGAOCORRENCIASEQUENCIA",'.') ;
   };
   this.e1329k2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1429k1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,51];
   this.GXLastCtrlId =51;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0m52",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10823,43,"ENTREGAOCORRENCIASEQUENCIA","Ocorrencia Sequencia","","EntregaOcorrenciaSequencia","int",0,"px",4,4,"right",null,[],10823,"EntregaOcorrenciaSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10824,44,"ENTREGAOCORRENCIAUSUARIOID","do Usuário","","EntregaOcorrenciaUsuarioId","char",0,"px",12,12,"left",null,[],10824,"EntregaOcorrenciaUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10856,45,"ENTREGAOCORRENCIADATAHORA","Data Hora","","EntregaOcorrenciaDataHora","dtime",0,"px",16,16,"right",null,[],10856,"EntregaOcorrenciaDataHora",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10857,46,"ENTREGAOCORRENCIASITUACAO","Ocorrencia Situacao","","EntregaOcorrenciaSituacao","char",0,"px",2,2,"left",null,[],10857,"EntregaOcorrenciaSituacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10808,47,"ENTREGAEMPRESAID","Entrega Empresa Id","","EntregaEmpresaId","char",0,"px",10,10,"left",null,[],10808,"EntregaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10809,48,"ENTREGANUMERO","Entrega Numero","","EntregaNumero","int",0,"px",10,10,"right",null,[],10809,"EntregaNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTREGAOCORRENCIASEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTREGAOCORRENCIASEQUENCIA",gxz:"ZV6cEntregaOcorrenciaSequencia",gxold:"OV6cEntregaOcorrenciaSequencia",gxvar:"AV6cEntregaOcorrenciaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntregaOcorrenciaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cEntregaOcorrenciaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTREGAOCORRENCIASEQUENCIA",gx.O.AV6cEntregaOcorrenciaSequencia,0)},c2v:function(){gx.O.AV6cEntregaOcorrenciaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTREGAOCORRENCIASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTREGAOCORRENCIAUSUARIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTREGAOCORRENCIAUSUARIOID",gxz:"ZV7cEntregaOcorrenciaUsuarioId",gxold:"OV7cEntregaOcorrenciaUsuarioId",gxvar:"AV7cEntregaOcorrenciaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntregaOcorrenciaUsuarioId=Value},v2z:function(Value){gx.O.ZV7cEntregaOcorrenciaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCENTREGAOCORRENCIAUSUARIOID",gx.O.AV7cEntregaOcorrenciaUsuarioId,0)},c2v:function(){gx.O.AV7cEntregaOcorrenciaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCENTREGAOCORRENCIAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTREGAOCORRENCIADATAHORA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTREGAOCORRENCIADATAHORA",gxz:"ZV8cEntregaOcorrenciaDataHora",gxold:"OV8cEntregaOcorrenciaDataHora",gxvar:"AV8cEntregaOcorrenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cEntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCENTREGAOCORRENCIADATAHORA",gx.O.AV8cEntregaOcorrenciaDataHora,0)},c2v:function(){gx.O.AV8cEntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCENTREGAOCORRENCIADATAHORA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKENTREGAOCORRENCIASITUACAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTREGAOCORRENCIASITUACAO",gxz:"ZV9cEntregaOcorrenciaSituacao",gxold:"OV9cEntregaOcorrenciaSituacao",gxvar:"AV9cEntregaOcorrenciaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEntregaOcorrenciaSituacao=Value},v2z:function(Value){gx.O.ZV9cEntregaOcorrenciaSituacao=Value},v2c:function(){gx.fn.setControlValue("vCENTREGAOCORRENCIASITUACAO",gx.O.AV9cEntregaOcorrenciaSituacao,0)},c2v:function(){gx.O.AV9cEntregaOcorrenciaSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCENTREGAOCORRENCIASITUACAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKENTREGAOCORRENCIAUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTREGAOCORRENCIAUSUARIOALT",gxz:"ZV10cEntregaOcorrenciaUsuarioAlt",gxold:"OV10cEntregaOcorrenciaUsuarioAlt",gxvar:"AV10cEntregaOcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cEntregaOcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cEntregaOcorrenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCENTREGAOCORRENCIAUSUARIOALT",gx.O.AV10cEntregaOcorrenciaUsuarioAlt,0)},c2v:function(){gx.O.AV10cEntregaOcorrenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCENTREGAOCORRENCIAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIASEQUENCIA",gxz:"Z10823EntregaOcorrenciaSequencia",gxold:"O10823EntregaOcorrenciaSequencia",gxvar:"A10823EntregaOcorrenciaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10823EntregaOcorrenciaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10823EntregaOcorrenciaSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIASEQUENCIA",row || gx.fn.currentGridRowImpl(41),gx.O.A10823EntregaOcorrenciaSequencia,0)},c2v:function(){gx.O.A10823EntregaOcorrenciaSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTREGAOCORRENCIASEQUENCIA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIAUSUARIOID",gxz:"Z10824EntregaOcorrenciaUsuarioId",gxold:"O10824EntregaOcorrenciaUsuarioId",gxvar:"A10824EntregaOcorrenciaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10824EntregaOcorrenciaUsuarioId=Value},v2z:function(Value){gx.O.Z10824EntregaOcorrenciaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIAUSUARIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A10824EntregaOcorrenciaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10824EntregaOcorrenciaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAOCORRENCIAUSUARIOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIADATAHORA",gxz:"Z10856EntregaOcorrenciaDataHora",gxold:"O10856EntregaOcorrenciaDataHora",gxvar:"A10856EntregaOcorrenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10856EntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10856EntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIADATAHORA",row || gx.fn.currentGridRowImpl(41),gx.O.A10856EntregaOcorrenciaDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10856EntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTREGAOCORRENCIADATAHORA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIASITUACAO",gxz:"Z10857EntregaOcorrenciaSituacao",gxold:"O10857EntregaOcorrenciaSituacao",gxvar:"A10857EntregaOcorrenciaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10857EntregaOcorrenciaSituacao=Value},v2z:function(Value){gx.O.Z10857EntregaOcorrenciaSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIASITUACAO",row || gx.fn.currentGridRowImpl(41),gx.O.A10857EntregaOcorrenciaSituacao,0)},c2v:function(){gx.O.A10857EntregaOcorrenciaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAOCORRENCIASITUACAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAEMPRESAID",gxz:"Z10808EntregaEmpresaId",gxold:"O10808EntregaEmpresaId",gxvar:"A10808EntregaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10808EntregaEmpresaId=Value},v2z:function(Value){gx.O.Z10808EntregaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A10808EntregaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10808EntregaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGANUMERO",gxz:"Z10809EntregaNumero",gxold:"O10809EntregaNumero",gxvar:"A10809EntregaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10809EntregaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10809EntregaNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGANUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A10809EntregaNumero,0)},c2v:function(){gx.O.A10809EntregaNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTREGANUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   this.AV6cEntregaOcorrenciaSequencia = 0 ;
   this.ZV6cEntregaOcorrenciaSequencia = 0 ;
   this.OV6cEntregaOcorrenciaSequencia = 0 ;
   this.AV7cEntregaOcorrenciaUsuarioId = "" ;
   this.ZV7cEntregaOcorrenciaUsuarioId = "" ;
   this.OV7cEntregaOcorrenciaUsuarioId = "" ;
   this.AV8cEntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.ZV8cEntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.OV8cEntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.AV9cEntregaOcorrenciaSituacao = "" ;
   this.ZV9cEntregaOcorrenciaSituacao = "" ;
   this.OV9cEntregaOcorrenciaSituacao = "" ;
   this.AV10cEntregaOcorrenciaUsuarioAlt = "" ;
   this.ZV10cEntregaOcorrenciaUsuarioAlt = "" ;
   this.OV10cEntregaOcorrenciaUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10823EntregaOcorrenciaSequencia = 0 ;
   this.O10823EntregaOcorrenciaSequencia = 0 ;
   this.Z10824EntregaOcorrenciaUsuarioId = "" ;
   this.O10824EntregaOcorrenciaUsuarioId = "" ;
   this.Z10856EntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.O10856EntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.Z10857EntregaOcorrenciaSituacao = "" ;
   this.O10857EntregaOcorrenciaSituacao = "" ;
   this.Z10808EntregaEmpresaId = "" ;
   this.O10808EntregaEmpresaId = "" ;
   this.Z10809EntregaNumero = 0 ;
   this.O10809EntregaNumero = 0 ;
   this.AV6cEntregaOcorrenciaSequencia = 0 ;
   this.AV7cEntregaOcorrenciaUsuarioId = "" ;
   this.AV8cEntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.AV9cEntregaOcorrenciaSituacao = "" ;
   this.AV10cEntregaOcorrenciaUsuarioAlt = "" ;
   this.AV11pEntregaEmpresaId = "" ;
   this.AV12pEntregaNumero = 0 ;
   this.AV13pEntregaOcorrenciaSequencia = 0 ;
   this.A10858EntregaOcorrenciaUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A10823EntregaOcorrenciaSequencia = 0 ;
   this.A10824EntregaOcorrenciaUsuarioId = "" ;
   this.A10856EntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.A10857EntregaOcorrenciaSituacao = "" ;
   this.A10808EntregaEmpresaId = "" ;
   this.A10809EntregaNumero = 0 ;
   this.Events = {"e1329k2_client": ["ENTER", true] ,"e1429k1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntregaOcorrenciaSequencia',fld:'vCENTREGAOCORRENCIASEQUENCIA'},{av:'AV7cEntregaOcorrenciaUsuarioId',fld:'vCENTREGAOCORRENCIAUSUARIOID'},{av:'AV8cEntregaOcorrenciaDataHora',fld:'vCENTREGAOCORRENCIADATAHORA'},{av:'AV9cEntregaOcorrenciaSituacao',fld:'vCENTREGAOCORRENCIASITUACAO'},{av:'AV10cEntregaOcorrenciaUsuarioAlt',fld:'vCENTREGAOCORRENCIAUSUARIOALT'},{av:'AV11pEntregaEmpresaId',fld:'vPENTREGAEMPRESAID',hsh:true},{av:'AV12pEntregaNumero',fld:'vPENTREGANUMERO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10823EntregaOcorrenciaSequencia',fld:'ENTREGAOCORRENCIASEQUENCIA'}],[{av:'AV13pEntregaOcorrenciaSequencia',fld:'vPENTREGAOCORRENCIASEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntregaOcorrenciaSequencia',fld:'vCENTREGAOCORRENCIASEQUENCIA'},{av:'AV7cEntregaOcorrenciaUsuarioId',fld:'vCENTREGAOCORRENCIAUSUARIOID'},{av:'AV8cEntregaOcorrenciaDataHora',fld:'vCENTREGAOCORRENCIADATAHORA'},{av:'AV9cEntregaOcorrenciaSituacao',fld:'vCENTREGAOCORRENCIASITUACAO'},{av:'AV10cEntregaOcorrenciaUsuarioAlt',fld:'vCENTREGAOCORRENCIAUSUARIOALT'},{av:'AV11pEntregaEmpresaId',fld:'vPENTREGAEMPRESAID',hsh:true},{av:'AV12pEntregaNumero',fld:'vPENTREGANUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntregaOcorrenciaSequencia',fld:'vCENTREGAOCORRENCIASEQUENCIA'},{av:'AV7cEntregaOcorrenciaUsuarioId',fld:'vCENTREGAOCORRENCIAUSUARIOID'},{av:'AV8cEntregaOcorrenciaDataHora',fld:'vCENTREGAOCORRENCIADATAHORA'},{av:'AV9cEntregaOcorrenciaSituacao',fld:'vCENTREGAOCORRENCIASITUACAO'},{av:'AV10cEntregaOcorrenciaUsuarioAlt',fld:'vCENTREGAOCORRENCIAUSUARIOALT'},{av:'AV11pEntregaEmpresaId',fld:'vPENTREGAEMPRESAID',hsh:true},{av:'AV12pEntregaNumero',fld:'vPENTREGANUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntregaOcorrenciaSequencia',fld:'vCENTREGAOCORRENCIASEQUENCIA'},{av:'AV7cEntregaOcorrenciaUsuarioId',fld:'vCENTREGAOCORRENCIAUSUARIOID'},{av:'AV8cEntregaOcorrenciaDataHora',fld:'vCENTREGAOCORRENCIADATAHORA'},{av:'AV9cEntregaOcorrenciaSituacao',fld:'vCENTREGAOCORRENCIASITUACAO'},{av:'AV10cEntregaOcorrenciaUsuarioAlt',fld:'vCENTREGAOCORRENCIAUSUARIOALT'},{av:'AV11pEntregaEmpresaId',fld:'vPENTREGAEMPRESAID',hsh:true},{av:'AV12pEntregaNumero',fld:'vPENTREGANUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntregaOcorrenciaSequencia',fld:'vCENTREGAOCORRENCIASEQUENCIA'},{av:'AV7cEntregaOcorrenciaUsuarioId',fld:'vCENTREGAOCORRENCIAUSUARIOID'},{av:'AV8cEntregaOcorrenciaDataHora',fld:'vCENTREGAOCORRENCIADATAHORA'},{av:'AV9cEntregaOcorrenciaSituacao',fld:'vCENTREGAOCORRENCIASITUACAO'},{av:'AV10cEntregaOcorrenciaUsuarioAlt',fld:'vCENTREGAOCORRENCIAUSUARIOALT'},{av:'AV11pEntregaEmpresaId',fld:'vPENTREGAEMPRESAID',hsh:true},{av:'AV12pEntregaNumero',fld:'vPENTREGANUMERO',hsh:true}],[]];
   this.setVCMap("AV11pEntregaEmpresaId", "vPENTREGAEMPRESAID", 0, "char");
   this.setVCMap("AV12pEntregaNumero", "vPENTREGANUMERO", 0, "int");
   this.setVCMap("AV13pEntregaOcorrenciaSequencia", "vPENTREGAOCORRENCIASEQUENCIA", 0, "int");
   this.setVCMap("AV11pEntregaEmpresaId", "vPENTREGAEMPRESAID", 0, "char");
   this.setVCMap("AV12pEntregaNumero", "vPENTREGANUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pEntregaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pEntregaNumero"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0m52());