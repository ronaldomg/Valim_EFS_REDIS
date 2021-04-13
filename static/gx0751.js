/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:39.33
*/
gx.evt.autoSkip = false;
gx.define('gx0751', false, function () {
   this.ServerClass =  "gx0751" ;
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
      this.AV12pTipoLicitacaoEmpresaId=gx.fn.getControlValue("vPTIPOLICITACAOEMPRESAID") ;
      this.AV13pTipoLicitacaoId=gx.fn.getIntegerValue("vPTIPOLICITACAOID",'.') ;
   };
   this.e131l42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141l41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0751",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2472,48,"TIPOLICITACAOID","Código Tipo Licitacao","","TipoLicitacaoId","int",0,"px",3,3,"right",null,[],2472,"TipoLicitacaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2473,49,"TIPOLICITACAODESCRICAO","Descrição Tipo Licitacao","Selecionar","TipoLicitacaoDescricao","svchar",0,"px",25,25,"left",null,[],2473,"TipoLicitacaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2474,50,"TIPOLICITACAOUSUARIOALT","Usuário Alteração","","TipoLicitacaoUsuarioAlt","char",0,"px",12,12,"left",null,[],2474,"TipoLicitacaoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2475,51,"TIPOLICITACAODATAHORAALT","Data/Hora Alteração","","TipoLicitacaoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2475,"TipoLicitacaoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(2476,52,"TIPOLICITACAOSNEXIGENUMERO","Exige Número de Licitação","Exigir Número da Licitação","TipoLicitacaoSnExigeNumero","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2471,53,"TIPOLICITACAOEMPRESAID","Empresa Tipo Licitacao","","TipoLicitacaoEmpresaId","char",0,"px",10,10,"left",null,[],2471,"TipoLicitacaoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOLICITACAOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOID",gxz:"ZV6cTipoLicitacaoId",gxold:"OV6cTipoLicitacaoId",gxvar:"AV6cTipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOID",gx.O.AV6cTipoLicitacaoId,0)},c2v:function(){gx.O.AV6cTipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOLICITACAODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAODESCRICAO",gxz:"ZV7cTipoLicitacaoDescricao",gxold:"OV7cTipoLicitacaoDescricao",gxvar:"AV7cTipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.ZV7cTipoLicitacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAODESCRICAO",gx.O.AV7cTipoLicitacaoDescricao,0)},c2v:function(){gx.O.AV7cTipoLicitacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOLICITACAOUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOUSUARIOALT",gxz:"ZV8cTipoLicitacaoUsuarioAlt",gxold:"OV8cTipoLicitacaoUsuarioAlt",gxvar:"AV8cTipoLicitacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoLicitacaoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cTipoLicitacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOUSUARIOALT",gx.O.AV8cTipoLicitacaoUsuarioAlt,0)},c2v:function(){gx.O.AV8cTipoLicitacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOLICITACAODATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAODATAHORAALT",gxz:"ZV9cTipoLicitacaoDataHoraAlt",gxold:"OV9cTipoLicitacaoDataHoraAlt",gxvar:"AV9cTipoLicitacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cTipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAODATAHORAALT",gx.O.AV9cTipoLicitacaoDataHoraAlt,0)},c2v:function(){gx.O.AV9cTipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPOLICITACAODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOLICITACAOSNEXIGENUMERO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOSNEXIGENUMERO",gxz:"ZV10cTipoLicitacaoSnExigeNumero",gxold:"OV10cTipoLicitacaoSnExigeNumero",gxvar:"AV10cTipoLicitacaoSnExigeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV10cTipoLicitacaoSnExigeNumero=Value},v2z:function(Value){gx.O.ZV10cTipoLicitacaoSnExigeNumero=Value},v2c:function(){gx.fn.setCheckBoxValue("vCTIPOLICITACAOSNEXIGENUMERO",gx.O.AV10cTipoLicitacaoSnExigeNumero,"S")},c2v:function(){gx.O.AV10cTipoLicitacaoSnExigeNumero=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOSNEXIGENUMERO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOLICITACAOSNEXIGEDADOS", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOSNEXIGEDADOS",gxz:"ZV11cTipoLicitacaoSnExigeDados",gxold:"OV11cTipoLicitacaoSnExigeDados",gxvar:"AV11cTipoLicitacaoSnExigeDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTipoLicitacaoSnExigeDados=Value},v2z:function(Value){gx.O.ZV11cTipoLicitacaoSnExigeDados=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOSNEXIGEDADOS",gx.O.AV11cTipoLicitacaoSnExigeDados,0)},c2v:function(){gx.O.AV11cTipoLicitacaoSnExigeDados=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOSNEXIGEDADOS")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOID",gxz:"Z2472TipoLicitacaoId",gxold:"O2472TipoLicitacaoId",gxvar:"A2472TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2472TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2472TipoLicitacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOID",row || gx.fn.currentGridRowImpl(46),gx.O.A2472TipoLicitacaoId,0)},c2v:function(){gx.O.A2472TipoLicitacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLICITACAOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAODESCRICAO",gxz:"Z2473TipoLicitacaoDescricao",gxold:"O2473TipoLicitacaoDescricao",gxvar:"A2473TipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2473TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.Z2473TipoLicitacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A2473TipoLicitacaoDescricao,0)},c2v:function(){gx.O.A2473TipoLicitacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOUSUARIOALT",gxz:"Z2474TipoLicitacaoUsuarioAlt",gxold:"O2474TipoLicitacaoUsuarioAlt",gxvar:"A2474TipoLicitacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2474TipoLicitacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2474TipoLicitacaoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A2474TipoLicitacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2474TipoLicitacaoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAODATAHORAALT",gxz:"Z2475TipoLicitacaoDataHoraAlt",gxold:"O2475TipoLicitacaoDataHoraAlt",gxvar:"A2475TipoLicitacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAODATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A2475TipoLicitacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPOLICITACAODATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOSNEXIGENUMERO",gxz:"Z2476TipoLicitacaoSnExigeNumero",gxold:"O2476TipoLicitacaoSnExigeNumero",gxvar:"A2476TipoLicitacaoSnExigeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2476TipoLicitacaoSnExigeNumero=Value},v2z:function(Value){gx.O.Z2476TipoLicitacaoSnExigeNumero=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("TIPOLICITACAOSNEXIGENUMERO",row || gx.fn.currentGridRowImpl(46),gx.O.A2476TipoLicitacaoSnExigeNumero,"S")},c2v:function(){gx.O.A2476TipoLicitacaoSnExigeNumero=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAOSNEXIGENUMERO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOEMPRESAID",gxz:"Z2471TipoLicitacaoEmpresaId",gxold:"O2471TipoLicitacaoEmpresaId",gxvar:"A2471TipoLicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2471TipoLicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z2471TipoLicitacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A2471TipoLicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2471TipoLicitacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cTipoLicitacaoId = 0 ;
   this.ZV6cTipoLicitacaoId = 0 ;
   this.OV6cTipoLicitacaoId = 0 ;
   this.AV7cTipoLicitacaoDescricao = "" ;
   this.ZV7cTipoLicitacaoDescricao = "" ;
   this.OV7cTipoLicitacaoDescricao = "" ;
   this.AV8cTipoLicitacaoUsuarioAlt = "" ;
   this.ZV8cTipoLicitacaoUsuarioAlt = "" ;
   this.OV8cTipoLicitacaoUsuarioAlt = "" ;
   this.AV9cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.OV9cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV10cTipoLicitacaoSnExigeNumero = "" ;
   this.ZV10cTipoLicitacaoSnExigeNumero = "" ;
   this.OV10cTipoLicitacaoSnExigeNumero = "" ;
   this.AV11cTipoLicitacaoSnExigeDados = "" ;
   this.ZV11cTipoLicitacaoSnExigeDados = "" ;
   this.OV11cTipoLicitacaoSnExigeDados = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2472TipoLicitacaoId = 0 ;
   this.O2472TipoLicitacaoId = 0 ;
   this.Z2473TipoLicitacaoDescricao = "" ;
   this.O2473TipoLicitacaoDescricao = "" ;
   this.Z2474TipoLicitacaoUsuarioAlt = "" ;
   this.O2474TipoLicitacaoUsuarioAlt = "" ;
   this.Z2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.O2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z2476TipoLicitacaoSnExigeNumero = "" ;
   this.O2476TipoLicitacaoSnExigeNumero = "" ;
   this.Z2471TipoLicitacaoEmpresaId = "" ;
   this.O2471TipoLicitacaoEmpresaId = "" ;
   this.AV6cTipoLicitacaoId = 0 ;
   this.AV7cTipoLicitacaoDescricao = "" ;
   this.AV8cTipoLicitacaoUsuarioAlt = "" ;
   this.AV9cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV10cTipoLicitacaoSnExigeNumero = "" ;
   this.AV11cTipoLicitacaoSnExigeDados = "" ;
   this.AV12pTipoLicitacaoEmpresaId = "" ;
   this.AV13pTipoLicitacaoId = 0 ;
   this.A3120TipoLicitacaoSnExigeDados = "" ;
   this.AV5LinkSelection = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.A2474TipoLicitacaoUsuarioAlt = "" ;
   this.A2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.Events = {"e131l42_client": ["ENTER", true] ,"e141l41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV7cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV8cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV9cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV10cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV11cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'},{av:'AV12pTipoLicitacaoEmpresaId',fld:'vPTIPOLICITACAOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'}],[{av:'AV13pTipoLicitacaoId',fld:'vPTIPOLICITACAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV7cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV8cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV9cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV10cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV11cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'},{av:'AV12pTipoLicitacaoEmpresaId',fld:'vPTIPOLICITACAOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV7cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV8cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV9cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV10cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV11cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'},{av:'AV12pTipoLicitacaoEmpresaId',fld:'vPTIPOLICITACAOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV7cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV8cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV9cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV10cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV11cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'},{av:'AV12pTipoLicitacaoEmpresaId',fld:'vPTIPOLICITACAOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV7cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV8cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV9cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV10cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV11cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'},{av:'AV12pTipoLicitacaoEmpresaId',fld:'vPTIPOLICITACAOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pTipoLicitacaoEmpresaId", "vPTIPOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV13pTipoLicitacaoId", "vPTIPOLICITACAOID", 0, "int");
   this.setVCMap("AV12pTipoLicitacaoEmpresaId", "vPTIPOLICITACAOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pTipoLicitacaoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0751());
