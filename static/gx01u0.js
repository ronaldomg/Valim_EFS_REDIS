/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:25:57.66
*/
gx.evt.autoSkip = false;
gx.define('gx01u0', false, function () {
   this.ServerClass =  "gx01u0" ;
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
      this.AV13pTipoDemonstracaoEmpresaId=gx.fn.getControlValue("vPTIPODEMONSTRACAOEMPRESAID") ;
      this.AV14pTipoDemonstracaoId=gx.fn.getIntegerValue("vPTIPODEMONSTRACAOID",'.') ;
   };
   this.e131j22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141j21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01u0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(270,53,"TIPODEMONSTRACAOEMPRESAID","Empresa Tipo Demonstração","","TipoDemonstracaoEmpresaId","char",0,"px",10,10,"left",null,[],270,"TipoDemonstracaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(271,54,"TIPODEMONSTRACAOID","Tipo de Demonstração","","TipoDemonstracaoId","int",0,"px",3,3,"right",null,[],271,"TipoDemonstracaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(550,55,"TIPODEMONSTRACAODESCRICAO","Descrição","Selecionar","TipoDemonstracaoDescricao","svchar",0,"px",40,40,"left",null,[],550,"TipoDemonstracaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(280,56,"TIPODEMONSTRACAOESTRUTURA","Estrutura","","TipoDemonstracaoEstrutura","svchar",0,"px",10,10,"left",null,[],280,"TipoDemonstracaoEstrutura",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(551,57,"TIPODEMONSTRACAOZERODIREITA","Endentar Zero à Direita?","","TipoDemonstracaoZeroDireita","char",0,"px",1,1,"left",null,[],551,"TipoDemonstracaoZeroDireita",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPODEMONSTRACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAOEMPRESAID",gxz:"ZV6cTipoDemonstracaoEmpresaId",gxold:"OV6cTipoDemonstracaoEmpresaId",gxvar:"AV6cTipoDemonstracaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoDemonstracaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoDemonstracaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPODEMONSTRACAOEMPRESAID",gx.O.AV6cTipoDemonstracaoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoDemonstracaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPODEMONSTRACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPODEMONSTRACAOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAOID",gxz:"ZV7cTipoDemonstracaoId",gxold:"OV7cTipoDemonstracaoId",gxvar:"AV7cTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPODEMONSTRACAOID",gx.O.AV7cTipoDemonstracaoId,0)},c2v:function(){gx.O.AV7cTipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPODEMONSTRACAODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAODESCRICAO",gxz:"ZV8cTipoDemonstracaoDescricao",gxold:"OV8cTipoDemonstracaoDescricao",gxvar:"AV8cTipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.ZV8cTipoDemonstracaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPODEMONSTRACAODESCRICAO",gx.O.AV8cTipoDemonstracaoDescricao,0)},c2v:function(){gx.O.AV8cTipoDemonstracaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPODEMONSTRACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPODEMONSTRACAOESTRUTURA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAOESTRUTURA",gxz:"ZV9cTipoDemonstracaoEstrutura",gxold:"OV9cTipoDemonstracaoEstrutura",gxvar:"AV9cTipoDemonstracaoEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoDemonstracaoEstrutura=Value},v2z:function(Value){gx.O.ZV9cTipoDemonstracaoEstrutura=Value},v2c:function(){gx.fn.setControlValue("vCTIPODEMONSTRACAOESTRUTURA",gx.O.AV9cTipoDemonstracaoEstrutura,0)},c2v:function(){gx.O.AV9cTipoDemonstracaoEstrutura=this.val()},val:function(){return gx.fn.getControlValue("vCTIPODEMONSTRACAOESTRUTURA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPODEMONSTRACAOZERODIREITA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAOZERODIREITA",gxz:"ZV10cTipoDemonstracaoZeroDireita",gxold:"OV10cTipoDemonstracaoZeroDireita",gxvar:"AV10cTipoDemonstracaoZeroDireita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoDemonstracaoZeroDireita=Value},v2z:function(Value){gx.O.ZV10cTipoDemonstracaoZeroDireita=Value},v2c:function(){gx.fn.setControlValue("vCTIPODEMONSTRACAOZERODIREITA",gx.O.AV10cTipoDemonstracaoZeroDireita,0)},c2v:function(){gx.O.AV10cTipoDemonstracaoZeroDireita=this.val()},val:function(){return gx.fn.getControlValue("vCTIPODEMONSTRACAOZERODIREITA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPODEMONSTRACAOIDENTVALOR", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAOIDENTVALOR",gxz:"ZV11cTipoDemonstracaoIdentValor",gxold:"OV11cTipoDemonstracaoIdentValor",gxvar:"AV11cTipoDemonstracaoIdentValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cTipoDemonstracaoIdentValor=Value},v2z:function(Value){gx.O.ZV11cTipoDemonstracaoIdentValor=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPODEMONSTRACAOIDENTVALOR",gx.O.AV11cTipoDemonstracaoIdentValor)},c2v:function(){gx.O.AV11cTipoDemonstracaoIdentValor=this.val()},val:function(){return gx.fn.getControlValue("vCTIPODEMONSTRACAOIDENTVALOR")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPODEMONSTRACAODATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPODEMONSTRACAODATAHORAALT",gxz:"ZV12cTipoDemonstracaoDataHoraAlt",gxold:"OV12cTipoDemonstracaoDataHoraAlt",gxvar:"AV12cTipoDemonstracaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoDemonstracaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cTipoDemonstracaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPODEMONSTRACAODATAHORAALT",gx.O.AV12cTipoDemonstracaoDataHoraAlt,0)},c2v:function(){gx.O.AV12cTipoDemonstracaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPODEMONSTRACAODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOEMPRESAID",gxz:"Z270TipoDemonstracaoEmpresaId",gxold:"O270TipoDemonstracaoEmpresaId",gxvar:"A270TipoDemonstracaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A270TipoDemonstracaoEmpresaId=Value},v2z:function(Value){gx.O.Z270TipoDemonstracaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A270TipoDemonstracaoEmpresaId,0)},c2v:function(){gx.O.A270TipoDemonstracaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(51),gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAODESCRICAO",gxz:"Z550TipoDemonstracaoDescricao",gxold:"O550TipoDemonstracaoDescricao",gxvar:"A550TipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A550TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.Z550TipoDemonstracaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A550TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.A550TipoDemonstracaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOESTRUTURA",gxz:"Z280TipoDemonstracaoEstrutura",gxold:"O280TipoDemonstracaoEstrutura",gxvar:"A280TipoDemonstracaoEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A280TipoDemonstracaoEstrutura=Value},v2z:function(Value){gx.O.Z280TipoDemonstracaoEstrutura=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOESTRUTURA",row || gx.fn.currentGridRowImpl(51),gx.O.A280TipoDemonstracaoEstrutura,0)},c2v:function(){gx.O.A280TipoDemonstracaoEstrutura=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOESTRUTURA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOZERODIREITA",gxz:"Z551TipoDemonstracaoZeroDireita",gxold:"O551TipoDemonstracaoZeroDireita",gxvar:"A551TipoDemonstracaoZeroDireita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A551TipoDemonstracaoZeroDireita=Value},v2z:function(Value){gx.O.Z551TipoDemonstracaoZeroDireita=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOZERODIREITA",row || gx.fn.currentGridRowImpl(51),gx.O.A551TipoDemonstracaoZeroDireita,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A551TipoDemonstracaoZeroDireita=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOZERODIREITA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTipoDemonstracaoEmpresaId = "" ;
   this.ZV6cTipoDemonstracaoEmpresaId = "" ;
   this.OV6cTipoDemonstracaoEmpresaId = "" ;
   this.AV7cTipoDemonstracaoId = 0 ;
   this.ZV7cTipoDemonstracaoId = 0 ;
   this.OV7cTipoDemonstracaoId = 0 ;
   this.AV8cTipoDemonstracaoDescricao = "" ;
   this.ZV8cTipoDemonstracaoDescricao = "" ;
   this.OV8cTipoDemonstracaoDescricao = "" ;
   this.AV9cTipoDemonstracaoEstrutura = "" ;
   this.ZV9cTipoDemonstracaoEstrutura = "" ;
   this.OV9cTipoDemonstracaoEstrutura = "" ;
   this.AV10cTipoDemonstracaoZeroDireita = "" ;
   this.ZV10cTipoDemonstracaoZeroDireita = "" ;
   this.OV10cTipoDemonstracaoZeroDireita = "" ;
   this.AV11cTipoDemonstracaoIdentValor = "" ;
   this.ZV11cTipoDemonstracaoIdentValor = "" ;
   this.OV11cTipoDemonstracaoIdentValor = "" ;
   this.AV12cTipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cTipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.OV12cTipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z270TipoDemonstracaoEmpresaId = "" ;
   this.O270TipoDemonstracaoEmpresaId = "" ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.Z550TipoDemonstracaoDescricao = "" ;
   this.O550TipoDemonstracaoDescricao = "" ;
   this.Z280TipoDemonstracaoEstrutura = "" ;
   this.O280TipoDemonstracaoEstrutura = "" ;
   this.Z551TipoDemonstracaoZeroDireita = "" ;
   this.O551TipoDemonstracaoZeroDireita = "" ;
   this.AV6cTipoDemonstracaoEmpresaId = "" ;
   this.AV7cTipoDemonstracaoId = 0 ;
   this.AV8cTipoDemonstracaoDescricao = "" ;
   this.AV9cTipoDemonstracaoEstrutura = "" ;
   this.AV10cTipoDemonstracaoZeroDireita = "" ;
   this.AV11cTipoDemonstracaoIdentValor = "" ;
   this.AV12cTipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.AV13pTipoDemonstracaoEmpresaId = "" ;
   this.AV14pTipoDemonstracaoId = 0 ;
   this.A775TipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.A553TipoDemonstracaoIdentValor = "" ;
   this.AV5LinkSelection = "" ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A550TipoDemonstracaoDescricao = "" ;
   this.A280TipoDemonstracaoEstrutura = "" ;
   this.A551TipoDemonstracaoZeroDireita = "" ;
   this.Events = {"e131j22_client": ["ENTER", true] ,"e141j21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoDemonstracaoEmpresaId',fld:'vCTIPODEMONSTRACAOEMPRESAID'},{av:'AV7cTipoDemonstracaoId',fld:'vCTIPODEMONSTRACAOID'},{av:'AV8cTipoDemonstracaoDescricao',fld:'vCTIPODEMONSTRACAODESCRICAO'},{av:'AV9cTipoDemonstracaoEstrutura',fld:'vCTIPODEMONSTRACAOESTRUTURA'},{av:'AV10cTipoDemonstracaoZeroDireita',fld:'vCTIPODEMONSTRACAOZERODIREITA'},{av:'AV11cTipoDemonstracaoIdentValor',fld:'vCTIPODEMONSTRACAOIDENTVALOR'},{av:'AV12cTipoDemonstracaoDataHoraAlt',fld:'vCTIPODEMONSTRACAODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A270TipoDemonstracaoEmpresaId',fld:'TIPODEMONSTRACAOEMPRESAID'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'}],[{av:'AV13pTipoDemonstracaoEmpresaId',fld:'vPTIPODEMONSTRACAOEMPRESAID'},{av:'AV14pTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoDemonstracaoEmpresaId',fld:'vCTIPODEMONSTRACAOEMPRESAID'},{av:'AV7cTipoDemonstracaoId',fld:'vCTIPODEMONSTRACAOID'},{av:'AV8cTipoDemonstracaoDescricao',fld:'vCTIPODEMONSTRACAODESCRICAO'},{av:'AV9cTipoDemonstracaoEstrutura',fld:'vCTIPODEMONSTRACAOESTRUTURA'},{av:'AV10cTipoDemonstracaoZeroDireita',fld:'vCTIPODEMONSTRACAOZERODIREITA'},{av:'AV11cTipoDemonstracaoIdentValor',fld:'vCTIPODEMONSTRACAOIDENTVALOR'},{av:'AV12cTipoDemonstracaoDataHoraAlt',fld:'vCTIPODEMONSTRACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoDemonstracaoEmpresaId',fld:'vCTIPODEMONSTRACAOEMPRESAID'},{av:'AV7cTipoDemonstracaoId',fld:'vCTIPODEMONSTRACAOID'},{av:'AV8cTipoDemonstracaoDescricao',fld:'vCTIPODEMONSTRACAODESCRICAO'},{av:'AV9cTipoDemonstracaoEstrutura',fld:'vCTIPODEMONSTRACAOESTRUTURA'},{av:'AV10cTipoDemonstracaoZeroDireita',fld:'vCTIPODEMONSTRACAOZERODIREITA'},{av:'AV11cTipoDemonstracaoIdentValor',fld:'vCTIPODEMONSTRACAOIDENTVALOR'},{av:'AV12cTipoDemonstracaoDataHoraAlt',fld:'vCTIPODEMONSTRACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoDemonstracaoEmpresaId',fld:'vCTIPODEMONSTRACAOEMPRESAID'},{av:'AV7cTipoDemonstracaoId',fld:'vCTIPODEMONSTRACAOID'},{av:'AV8cTipoDemonstracaoDescricao',fld:'vCTIPODEMONSTRACAODESCRICAO'},{av:'AV9cTipoDemonstracaoEstrutura',fld:'vCTIPODEMONSTRACAOESTRUTURA'},{av:'AV10cTipoDemonstracaoZeroDireita',fld:'vCTIPODEMONSTRACAOZERODIREITA'},{av:'AV11cTipoDemonstracaoIdentValor',fld:'vCTIPODEMONSTRACAOIDENTVALOR'},{av:'AV12cTipoDemonstracaoDataHoraAlt',fld:'vCTIPODEMONSTRACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoDemonstracaoEmpresaId',fld:'vCTIPODEMONSTRACAOEMPRESAID'},{av:'AV7cTipoDemonstracaoId',fld:'vCTIPODEMONSTRACAOID'},{av:'AV8cTipoDemonstracaoDescricao',fld:'vCTIPODEMONSTRACAODESCRICAO'},{av:'AV9cTipoDemonstracaoEstrutura',fld:'vCTIPODEMONSTRACAOESTRUTURA'},{av:'AV10cTipoDemonstracaoZeroDireita',fld:'vCTIPODEMONSTRACAOZERODIREITA'},{av:'AV11cTipoDemonstracaoIdentValor',fld:'vCTIPODEMONSTRACAOIDENTVALOR'},{av:'AV12cTipoDemonstracaoDataHoraAlt',fld:'vCTIPODEMONSTRACAODATAHORAALT'}],[]];
   this.setVCMap("AV13pTipoDemonstracaoEmpresaId", "vPTIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoDemonstracaoId", "vPTIPODEMONSTRACAOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01u0());
