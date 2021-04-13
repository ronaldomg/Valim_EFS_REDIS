/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:34.58
*/
gx.evt.autoSkip = false;
gx.define('gx00t3', false, function () {
   this.ServerClass =  "gx00t3" ;
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
      this.AV10pTipoDemonstracaoEmpresaId=gx.fn.getControlValue("vPTIPODEMONSTRACAOEMPRESAID") ;
      this.AV11pTipoDemonstracaoId=gx.fn.getIntegerValue("vPTIPODEMONSTRACAOID",'.') ;
      this.AV12pGrupoTipoDemonstracaoId=gx.fn.getControlValue("vPGRUPOTIPODEMONSTRACAOID") ;
      this.AV13pGrupoCalculoId=gx.fn.getControlValue("vPGRUPOCALCULOID") ;
   };
   this.e131i12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141i11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,46];
   this.GXLastCtrlId =46;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00t3",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(279,38,"GRUPOCALCULOID","Grupo de Cálculo","","GrupoCalculoId","svchar",0,"px",30,30,"left",null,[],279,"GrupoCalculoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(694,39,"GRUPOCALCULOCONSTANTE","Grupo Calculo Constante","Selecionar","GrupoCalculoConstante","svchar",0,"px",50,50,"left",null,[],694,"GrupoCalculoConstante",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(695,40,"GRUPOCALCULOOPERACAO","Grupo Calculo Operacao","","GrupoCalculoOperacao","char",0,"px",1,1,"left",null,[],695,"GrupoCalculoOperacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(270,41,"TIPODEMONSTRACAOEMPRESAID","Empresa Tipo Demonstração","","TipoDemonstracaoEmpresaId","char",0,"px",10,10,"left",null,[],270,"TipoDemonstracaoEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(271,42,"TIPODEMONSTRACAOID","Tipo de Demonstração","","TipoDemonstracaoId","int",0,"px",3,3,"right",null,[],271,"TipoDemonstracaoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(272,43,"GRUPOTIPODEMONSTRACAOID","Grupo","","GrupoTipoDemonstracaoId","svchar",0,"px",30,30,"left",null,[],272,"GrupoTipoDemonstracaoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKGRUPOCALCULOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOCALCULOID",gxz:"ZV6cGrupoCalculoId",gxold:"OV6cGrupoCalculoId",gxvar:"AV6cGrupoCalculoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cGrupoCalculoId=Value},v2z:function(Value){gx.O.ZV6cGrupoCalculoId=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOCALCULOID",gx.O.AV6cGrupoCalculoId,0)},c2v:function(){gx.O.AV6cGrupoCalculoId=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOCALCULOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKGRUPOCALCULOCONSTANTE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOCALCULOCONSTANTE",gxz:"ZV7cGrupoCalculoConstante",gxold:"OV7cGrupoCalculoConstante",gxvar:"AV7cGrupoCalculoConstante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cGrupoCalculoConstante=Value},v2z:function(Value){gx.O.ZV7cGrupoCalculoConstante=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOCALCULOCONSTANTE",gx.O.AV7cGrupoCalculoConstante,0)},c2v:function(){gx.O.AV7cGrupoCalculoConstante=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOCALCULOCONSTANTE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKGRUPOCALCULOOPERACAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOCALCULOOPERACAO",gxz:"ZV8cGrupoCalculoOperacao",gxold:"OV8cGrupoCalculoOperacao",gxvar:"AV8cGrupoCalculoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cGrupoCalculoOperacao=Value},v2z:function(Value){gx.O.ZV8cGrupoCalculoOperacao=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOCALCULOOPERACAO",gx.O.AV8cGrupoCalculoOperacao,0)},c2v:function(){gx.O.AV8cGrupoCalculoOperacao=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOCALCULOOPERACAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKGRUPOCALCULOVALORABSOLUTO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOCALCULOVALORABSOLUTO",gxz:"ZV9cGrupoCalculoValorAbsoluto",gxold:"OV9cGrupoCalculoValorAbsoluto",gxvar:"AV9cGrupoCalculoValorAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cGrupoCalculoValorAbsoluto=Value},v2z:function(Value){gx.O.ZV9cGrupoCalculoValorAbsoluto=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOCALCULOVALORABSOLUTO",gx.O.AV9cGrupoCalculoValorAbsoluto,0)},c2v:function(){gx.O.AV9cGrupoCalculoValorAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOCALCULOVALORABSOLUTO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCALCULOID",gxz:"Z279GrupoCalculoId",gxold:"O279GrupoCalculoId",gxvar:"A279GrupoCalculoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A279GrupoCalculoId=Value},v2z:function(Value){gx.O.Z279GrupoCalculoId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULOID",row || gx.fn.currentGridRowImpl(36),gx.O.A279GrupoCalculoId,0)},c2v:function(){gx.O.A279GrupoCalculoId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCALCULOCONSTANTE",gxz:"Z694GrupoCalculoConstante",gxold:"O694GrupoCalculoConstante",gxvar:"A694GrupoCalculoConstante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A694GrupoCalculoConstante=Value},v2z:function(Value){gx.O.Z694GrupoCalculoConstante=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULOCONSTANTE",row || gx.fn.currentGridRowImpl(36),gx.O.A694GrupoCalculoConstante,0)},c2v:function(){gx.O.A694GrupoCalculoConstante=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOCONSTANTE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCALCULOOPERACAO",gxz:"Z695GrupoCalculoOperacao",gxold:"O695GrupoCalculoOperacao",gxvar:"A695GrupoCalculoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A695GrupoCalculoOperacao=Value},v2z:function(Value){gx.O.Z695GrupoCalculoOperacao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(36),gx.O.A695GrupoCalculoOperacao,0)},c2v:function(){gx.O.A695GrupoCalculoOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOEMPRESAID",gxz:"Z270TipoDemonstracaoEmpresaId",gxold:"O270TipoDemonstracaoEmpresaId",gxvar:"A270TipoDemonstracaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A270TipoDemonstracaoEmpresaId=Value},v2z:function(Value){gx.O.Z270TipoDemonstracaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A270TipoDemonstracaoEmpresaId,0)},c2v:function(){gx.O.A270TipoDemonstracaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(36),gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOID",gxz:"Z272GrupoTipoDemonstracaoId",gxold:"O272GrupoTipoDemonstracaoId",gxvar:"A272GrupoTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A272GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.Z272GrupoTipoDemonstracaoId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(36),gx.O.A272GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.A272GrupoTipoDemonstracaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   this.AV6cGrupoCalculoId = "" ;
   this.ZV6cGrupoCalculoId = "" ;
   this.OV6cGrupoCalculoId = "" ;
   this.AV7cGrupoCalculoConstante = "" ;
   this.ZV7cGrupoCalculoConstante = "" ;
   this.OV7cGrupoCalculoConstante = "" ;
   this.AV8cGrupoCalculoOperacao = "" ;
   this.ZV8cGrupoCalculoOperacao = "" ;
   this.OV8cGrupoCalculoOperacao = "" ;
   this.AV9cGrupoCalculoValorAbsoluto = "" ;
   this.ZV9cGrupoCalculoValorAbsoluto = "" ;
   this.OV9cGrupoCalculoValorAbsoluto = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z279GrupoCalculoId = "" ;
   this.O279GrupoCalculoId = "" ;
   this.Z694GrupoCalculoConstante = "" ;
   this.O694GrupoCalculoConstante = "" ;
   this.Z695GrupoCalculoOperacao = "" ;
   this.O695GrupoCalculoOperacao = "" ;
   this.Z270TipoDemonstracaoEmpresaId = "" ;
   this.O270TipoDemonstracaoEmpresaId = "" ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.Z272GrupoTipoDemonstracaoId = "" ;
   this.O272GrupoTipoDemonstracaoId = "" ;
   this.AV6cGrupoCalculoId = "" ;
   this.AV7cGrupoCalculoConstante = "" ;
   this.AV8cGrupoCalculoOperacao = "" ;
   this.AV9cGrupoCalculoValorAbsoluto = "" ;
   this.AV10pTipoDemonstracaoEmpresaId = "" ;
   this.AV11pTipoDemonstracaoId = 0 ;
   this.AV12pGrupoTipoDemonstracaoId = "" ;
   this.AV13pGrupoCalculoId = "" ;
   this.A696GrupoCalculoValorAbsoluto = "" ;
   this.AV5LinkSelection = "" ;
   this.A279GrupoCalculoId = "" ;
   this.A694GrupoCalculoConstante = "" ;
   this.A695GrupoCalculoOperacao = "" ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A272GrupoTipoDemonstracaoId = "" ;
   this.Events = {"e131i12_client": ["ENTER", true] ,"e141i11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoCalculoId',fld:'vCGRUPOCALCULOID'},{av:'AV7cGrupoCalculoConstante',fld:'vCGRUPOCALCULOCONSTANTE'},{av:'AV8cGrupoCalculoOperacao',fld:'vCGRUPOCALCULOOPERACAO'},{av:'AV9cGrupoCalculoValorAbsoluto',fld:'vCGRUPOCALCULOVALORABSOLUTO'},{av:'AV10pTipoDemonstracaoEmpresaId',fld:'vPTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV11pTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID',hsh:true},{av:'AV12pGrupoTipoDemonstracaoId',fld:'vPGRUPOTIPODEMONSTRACAOID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A279GrupoCalculoId',fld:'GRUPOCALCULOID'}],[{av:'AV13pGrupoCalculoId',fld:'vPGRUPOCALCULOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoCalculoId',fld:'vCGRUPOCALCULOID'},{av:'AV7cGrupoCalculoConstante',fld:'vCGRUPOCALCULOCONSTANTE'},{av:'AV8cGrupoCalculoOperacao',fld:'vCGRUPOCALCULOOPERACAO'},{av:'AV9cGrupoCalculoValorAbsoluto',fld:'vCGRUPOCALCULOVALORABSOLUTO'},{av:'AV10pTipoDemonstracaoEmpresaId',fld:'vPTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV11pTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID',hsh:true},{av:'AV12pGrupoTipoDemonstracaoId',fld:'vPGRUPOTIPODEMONSTRACAOID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoCalculoId',fld:'vCGRUPOCALCULOID'},{av:'AV7cGrupoCalculoConstante',fld:'vCGRUPOCALCULOCONSTANTE'},{av:'AV8cGrupoCalculoOperacao',fld:'vCGRUPOCALCULOOPERACAO'},{av:'AV9cGrupoCalculoValorAbsoluto',fld:'vCGRUPOCALCULOVALORABSOLUTO'},{av:'AV10pTipoDemonstracaoEmpresaId',fld:'vPTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV11pTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID',hsh:true},{av:'AV12pGrupoTipoDemonstracaoId',fld:'vPGRUPOTIPODEMONSTRACAOID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoCalculoId',fld:'vCGRUPOCALCULOID'},{av:'AV7cGrupoCalculoConstante',fld:'vCGRUPOCALCULOCONSTANTE'},{av:'AV8cGrupoCalculoOperacao',fld:'vCGRUPOCALCULOOPERACAO'},{av:'AV9cGrupoCalculoValorAbsoluto',fld:'vCGRUPOCALCULOVALORABSOLUTO'},{av:'AV10pTipoDemonstracaoEmpresaId',fld:'vPTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV11pTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID',hsh:true},{av:'AV12pGrupoTipoDemonstracaoId',fld:'vPGRUPOTIPODEMONSTRACAOID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoCalculoId',fld:'vCGRUPOCALCULOID'},{av:'AV7cGrupoCalculoConstante',fld:'vCGRUPOCALCULOCONSTANTE'},{av:'AV8cGrupoCalculoOperacao',fld:'vCGRUPOCALCULOOPERACAO'},{av:'AV9cGrupoCalculoValorAbsoluto',fld:'vCGRUPOCALCULOVALORABSOLUTO'},{av:'AV10pTipoDemonstracaoEmpresaId',fld:'vPTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV11pTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID',hsh:true},{av:'AV12pGrupoTipoDemonstracaoId',fld:'vPGRUPOTIPODEMONSTRACAOID',hsh:true}],[]];
   this.setVCMap("AV10pTipoDemonstracaoEmpresaId", "vPTIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.setVCMap("AV11pTipoDemonstracaoId", "vPTIPODEMONSTRACAOID", 0, "int");
   this.setVCMap("AV12pGrupoTipoDemonstracaoId", "vPGRUPOTIPODEMONSTRACAOID", 0, "svchar");
   this.setVCMap("AV13pGrupoCalculoId", "vPGRUPOCALCULOID", 0, "svchar");
   this.setVCMap("AV10pTipoDemonstracaoEmpresaId", "vPTIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.setVCMap("AV11pTipoDemonstracaoId", "vPTIPODEMONSTRACAOID", 0, "int");
   this.setVCMap("AV12pGrupoTipoDemonstracaoId", "vPGRUPOTIPODEMONSTRACAOID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pTipoDemonstracaoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pTipoDemonstracaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pGrupoTipoDemonstracaoId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00t3());