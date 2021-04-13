/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:30:45.24
*/
gx.evt.autoSkip = false;
gx.define('gx0750', false, function () {
   this.ServerClass =  "gx0750" ;
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
      this.AV13pTipoLicitacaoEmpresaId=gx.fn.getControlValue("vPTIPOLICITACAOEMPRESAID") ;
      this.AV14pTipoLicitacaoId=gx.fn.getIntegerValue("vPTIPOLICITACAOID",'.') ;
   };
   this.e131ml2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ml1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0750",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2471,53,"TIPOLICITACAOEMPRESAID","Empresa Tipo Licitacao","","TipoLicitacaoEmpresaId","char",0,"px",10,10,"left",null,[],2471,"TipoLicitacaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2472,54,"TIPOLICITACAOID","Código Tipo Licitacao","","TipoLicitacaoId","int",0,"px",3,3,"right",null,[],2472,"TipoLicitacaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2473,55,"TIPOLICITACAODESCRICAO","Descrição Tipo Licitacao","Selecionar","TipoLicitacaoDescricao","svchar",0,"px",25,25,"left",null,[],2473,"TipoLicitacaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2474,56,"TIPOLICITACAOUSUARIOALT","Usuário Alteração","","TipoLicitacaoUsuarioAlt","char",0,"px",12,12,"left",null,[],2474,"TipoLicitacaoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2475,57,"TIPOLICITACAODATAHORAALT","Data/Hora Alteração","","TipoLicitacaoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2475,"TipoLicitacaoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOLICITACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOEMPRESAID",gxz:"ZV6cTipoLicitacaoEmpresaId",gxold:"OV6cTipoLicitacaoEmpresaId",gxvar:"AV6cTipoLicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoLicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoLicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOEMPRESAID",gx.O.AV6cTipoLicitacaoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoLicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOLICITACAOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOID",gxz:"ZV7cTipoLicitacaoId",gxold:"OV7cTipoLicitacaoId",gxvar:"AV7cTipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOID",gx.O.AV7cTipoLicitacaoId,0)},c2v:function(){gx.O.AV7cTipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOLICITACAODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAODESCRICAO",gxz:"ZV8cTipoLicitacaoDescricao",gxold:"OV8cTipoLicitacaoDescricao",gxvar:"AV8cTipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.ZV8cTipoLicitacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAODESCRICAO",gx.O.AV8cTipoLicitacaoDescricao,0)},c2v:function(){gx.O.AV8cTipoLicitacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOLICITACAOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOUSUARIOALT",gxz:"ZV9cTipoLicitacaoUsuarioAlt",gxold:"OV9cTipoLicitacaoUsuarioAlt",gxvar:"AV9cTipoLicitacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoLicitacaoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cTipoLicitacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOUSUARIOALT",gx.O.AV9cTipoLicitacaoUsuarioAlt,0)},c2v:function(){gx.O.AV9cTipoLicitacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOLICITACAODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAODATAHORAALT",gxz:"ZV10cTipoLicitacaoDataHoraAlt",gxold:"OV10cTipoLicitacaoDataHoraAlt",gxvar:"AV10cTipoLicitacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cTipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAODATAHORAALT",gx.O.AV10cTipoLicitacaoDataHoraAlt,0)},c2v:function(){gx.O.AV10cTipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPOLICITACAODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOLICITACAOSNEXIGENUMERO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOSNEXIGENUMERO",gxz:"ZV11cTipoLicitacaoSnExigeNumero",gxold:"OV11cTipoLicitacaoSnExigeNumero",gxvar:"AV11cTipoLicitacaoSnExigeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11cTipoLicitacaoSnExigeNumero=Value},v2z:function(Value){gx.O.ZV11cTipoLicitacaoSnExigeNumero=Value},v2c:function(){gx.fn.setCheckBoxValue("vCTIPOLICITACAOSNEXIGENUMERO",gx.O.AV11cTipoLicitacaoSnExigeNumero,"S")},c2v:function(){gx.O.AV11cTipoLicitacaoSnExigeNumero=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOSNEXIGENUMERO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOLICITACAOSNEXIGEDADOS", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLICITACAOSNEXIGEDADOS",gxz:"ZV12cTipoLicitacaoSnExigeDados",gxold:"OV12cTipoLicitacaoSnExigeDados",gxvar:"AV12cTipoLicitacaoSnExigeDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoLicitacaoSnExigeDados=Value},v2z:function(Value){gx.O.ZV12cTipoLicitacaoSnExigeDados=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLICITACAOSNEXIGEDADOS",gx.O.AV12cTipoLicitacaoSnExigeDados,0)},c2v:function(){gx.O.AV12cTipoLicitacaoSnExigeDados=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLICITACAOSNEXIGEDADOS")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOEMPRESAID",gxz:"Z2471TipoLicitacaoEmpresaId",gxold:"O2471TipoLicitacaoEmpresaId",gxvar:"A2471TipoLicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2471TipoLicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z2471TipoLicitacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2471TipoLicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2471TipoLicitacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOID",gxz:"Z2472TipoLicitacaoId",gxold:"O2472TipoLicitacaoId",gxvar:"A2472TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2472TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2472TipoLicitacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2472TipoLicitacaoId,0)},c2v:function(){gx.O.A2472TipoLicitacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLICITACAOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAODESCRICAO",gxz:"Z2473TipoLicitacaoDescricao",gxold:"O2473TipoLicitacaoDescricao",gxvar:"A2473TipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2473TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.Z2473TipoLicitacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A2473TipoLicitacaoDescricao,0)},c2v:function(){gx.O.A2473TipoLicitacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOUSUARIOALT",gxz:"Z2474TipoLicitacaoUsuarioAlt",gxold:"O2474TipoLicitacaoUsuarioAlt",gxvar:"A2474TipoLicitacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2474TipoLicitacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2474TipoLicitacaoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A2474TipoLicitacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2474TipoLicitacaoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAODATAHORAALT",gxz:"Z2475TipoLicitacaoDataHoraAlt",gxold:"O2475TipoLicitacaoDataHoraAlt",gxvar:"A2475TipoLicitacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAODATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A2475TipoLicitacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2475TipoLicitacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPOLICITACAODATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTipoLicitacaoEmpresaId = "" ;
   this.ZV6cTipoLicitacaoEmpresaId = "" ;
   this.OV6cTipoLicitacaoEmpresaId = "" ;
   this.AV7cTipoLicitacaoId = 0 ;
   this.ZV7cTipoLicitacaoId = 0 ;
   this.OV7cTipoLicitacaoId = 0 ;
   this.AV8cTipoLicitacaoDescricao = "" ;
   this.ZV8cTipoLicitacaoDescricao = "" ;
   this.OV8cTipoLicitacaoDescricao = "" ;
   this.AV9cTipoLicitacaoUsuarioAlt = "" ;
   this.ZV9cTipoLicitacaoUsuarioAlt = "" ;
   this.OV9cTipoLicitacaoUsuarioAlt = "" ;
   this.AV10cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV11cTipoLicitacaoSnExigeNumero = "" ;
   this.ZV11cTipoLicitacaoSnExigeNumero = "" ;
   this.OV11cTipoLicitacaoSnExigeNumero = "" ;
   this.AV12cTipoLicitacaoSnExigeDados = "" ;
   this.ZV12cTipoLicitacaoSnExigeDados = "" ;
   this.OV12cTipoLicitacaoSnExigeDados = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2471TipoLicitacaoEmpresaId = "" ;
   this.O2471TipoLicitacaoEmpresaId = "" ;
   this.Z2472TipoLicitacaoId = 0 ;
   this.O2472TipoLicitacaoId = 0 ;
   this.Z2473TipoLicitacaoDescricao = "" ;
   this.O2473TipoLicitacaoDescricao = "" ;
   this.Z2474TipoLicitacaoUsuarioAlt = "" ;
   this.O2474TipoLicitacaoUsuarioAlt = "" ;
   this.Z2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.O2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cTipoLicitacaoEmpresaId = "" ;
   this.AV7cTipoLicitacaoId = 0 ;
   this.AV8cTipoLicitacaoDescricao = "" ;
   this.AV9cTipoLicitacaoUsuarioAlt = "" ;
   this.AV10cTipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV11cTipoLicitacaoSnExigeNumero = "" ;
   this.AV12cTipoLicitacaoSnExigeDados = "" ;
   this.AV13pTipoLicitacaoEmpresaId = "" ;
   this.AV14pTipoLicitacaoId = 0 ;
   this.A3120TipoLicitacaoSnExigeDados = "" ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.AV5LinkSelection = "" ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.A2474TipoLicitacaoUsuarioAlt = "" ;
   this.A2475TipoLicitacaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131ml2_client": ["ENTER", true] ,"e141ml1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoEmpresaId',fld:'vCTIPOLICITACAOEMPRESAID'},{av:'AV7cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV8cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV9cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV10cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV11cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV12cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2471TipoLicitacaoEmpresaId',fld:'TIPOLICITACAOEMPRESAID'},{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'}],[{av:'AV13pTipoLicitacaoEmpresaId',fld:'vPTIPOLICITACAOEMPRESAID'},{av:'AV14pTipoLicitacaoId',fld:'vPTIPOLICITACAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoEmpresaId',fld:'vCTIPOLICITACAOEMPRESAID'},{av:'AV7cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV8cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV9cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV10cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV11cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV12cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoEmpresaId',fld:'vCTIPOLICITACAOEMPRESAID'},{av:'AV7cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV8cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV9cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV10cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV11cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV12cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoEmpresaId',fld:'vCTIPOLICITACAOEMPRESAID'},{av:'AV7cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV8cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV9cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV10cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV11cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV12cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoLicitacaoEmpresaId',fld:'vCTIPOLICITACAOEMPRESAID'},{av:'AV7cTipoLicitacaoId',fld:'vCTIPOLICITACAOID'},{av:'AV8cTipoLicitacaoDescricao',fld:'vCTIPOLICITACAODESCRICAO'},{av:'AV9cTipoLicitacaoUsuarioAlt',fld:'vCTIPOLICITACAOUSUARIOALT'},{av:'AV10cTipoLicitacaoDataHoraAlt',fld:'vCTIPOLICITACAODATAHORAALT'},{av:'AV11cTipoLicitacaoSnExigeNumero',fld:'vCTIPOLICITACAOSNEXIGENUMERO'},{av:'AV12cTipoLicitacaoSnExigeDados',fld:'vCTIPOLICITACAOSNEXIGEDADOS'}],[]];
   this.setVCMap("AV13pTipoLicitacaoEmpresaId", "vPTIPOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoLicitacaoId", "vPTIPOLICITACAOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0750());
