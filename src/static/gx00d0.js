/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:5.20
*/
gx.evt.autoSkip = false;
gx.define('gx00d0', false, function () {
   this.ServerClass =  "gx00d0" ;
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
      this.AV12pEmpresaCodificacaoEmpresaId=gx.fn.getControlValue("vPEMPRESACODIFICACAOEMPRESAID") ;
      this.AV13pCodificacaoId=gx.fn.getControlValue("vPCODIFICACAOID") ;
   };
   this.e131hk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,55];
   this.GXLastCtrlId =55;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00d0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(164,48,"EMPRESACODIFICACAOEMPRESAID","Empresa Codificacao Empresa Id","","EmpresaCodificacaoEmpresaId","char",0,"px",10,10,"left",null,[],164,"EmpresaCodificacaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(58,49,"CODIFICACAOID","Código Codificacao","","CodificacaoId","char",0,"px",15,15,"left",null,[],58,"CodificacaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(59,50,"CODIFICACAODESCRICAO","Descrição Codificacao","Selecionar","CodificacaoDescricao","svchar",0,"px",35,35,"left",null,[],59,"CodificacaoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(163,51,"CODIFICACAOOBRIGATORIO","Obrigatório","","CodificacaoObrigatorio","char",0,"px",1,1,"left",null,[],163,"CodificacaoObrigatorio",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(846,52,"CODIFICACAOUSUARIOID","Usuário","","CodificacaoUsuarioId","char",0,"px",12,12,"left",null,[],846,"CodificacaoUsuarioId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESACODIFICACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESACODIFICACAOEMPRESAID",gxz:"ZV6cEmpresaCodificacaoEmpresaId",gxold:"OV6cEmpresaCodificacaoEmpresaId",gxvar:"AV6cEmpresaCodificacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaCodificacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaCodificacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESACODIFICACAOEMPRESAID",gx.O.AV6cEmpresaCodificacaoEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaCodificacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESACODIFICACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCODIFICACAOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAOID",gxz:"ZV7cCodificacaoId",gxold:"OV7cCodificacaoId",gxvar:"AV7cCodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCodificacaoId=Value},v2z:function(Value){gx.O.ZV7cCodificacaoId=Value},v2c:function(){gx.fn.setControlValue("vCCODIFICACAOID",gx.O.AV7cCodificacaoId,0)},c2v:function(){gx.O.AV7cCodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCODIFICACAODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAODESCRICAO",gxz:"ZV8cCodificacaoDescricao",gxold:"OV8cCodificacaoDescricao",gxvar:"AV8cCodificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCodificacaoDescricao=Value},v2z:function(Value){gx.O.ZV8cCodificacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCODIFICACAODESCRICAO",gx.O.AV8cCodificacaoDescricao,0)},c2v:function(){gx.O.AV8cCodificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCODIFICACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCODIFICACAOOBRIGATORIO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAOOBRIGATORIO",gxz:"ZV9cCodificacaoObrigatorio",gxold:"OV9cCodificacaoObrigatorio",gxvar:"AV9cCodificacaoObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCodificacaoObrigatorio=Value},v2z:function(Value){gx.O.ZV9cCodificacaoObrigatorio=Value},v2c:function(){gx.fn.setControlValue("vCCODIFICACAOOBRIGATORIO",gx.O.AV9cCodificacaoObrigatorio,0)},c2v:function(){gx.O.AV9cCodificacaoObrigatorio=this.val()},val:function(){return gx.fn.getControlValue("vCCODIFICACAOOBRIGATORIO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCODIFICACAOUSUARIOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAOUSUARIOID",gxz:"ZV10cCodificacaoUsuarioId",gxold:"OV10cCodificacaoUsuarioId",gxvar:"AV10cCodificacaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCodificacaoUsuarioId=Value},v2z:function(Value){gx.O.ZV10cCodificacaoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCCODIFICACAOUSUARIOID",gx.O.AV10cCodificacaoUsuarioId,0)},c2v:function(){gx.O.AV10cCodificacaoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCCODIFICACAOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCODIFICACAODATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCODIFICACAODATAHORAALT",gxz:"ZV11cCodificacaoDataHoraAlt",gxold:"OV11cCodificacaoDataHoraAlt",gxvar:"AV11cCodificacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCodificacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cCodificacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCODIFICACAODATAHORAALT",gx.O.AV11cCodificacaoDataHoraAlt,0)},c2v:function(){gx.O.AV11cCodificacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCCODIFICACAODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACODIFICACAOEMPRESAID",gxz:"Z164EmpresaCodificacaoEmpresaId",gxold:"O164EmpresaCodificacaoEmpresaId",gxvar:"A164EmpresaCodificacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A164EmpresaCodificacaoEmpresaId=Value},v2z:function(Value){gx.O.Z164EmpresaCodificacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACODIFICACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A164EmpresaCodificacaoEmpresaId,0)},c2v:function(){gx.O.A164EmpresaCodificacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACODIFICACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOID",gxz:"Z58CodificacaoId",gxold:"O58CodificacaoId",gxvar:"A58CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A58CodificacaoId=Value},v2z:function(Value){gx.O.Z58CodificacaoId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOID",row || gx.fn.currentGridRowImpl(46),gx.O.A58CodificacaoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A58CodificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAODESCRICAO",gxz:"Z59CodificacaoDescricao",gxold:"O59CodificacaoDescricao",gxvar:"A59CodificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A59CodificacaoDescricao=Value},v2z:function(Value){gx.O.Z59CodificacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A59CodificacaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A59CodificacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOOBRIGATORIO",gxz:"Z163CodificacaoObrigatorio",gxold:"O163CodificacaoObrigatorio",gxvar:"A163CodificacaoObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A163CodificacaoObrigatorio=Value},v2z:function(Value){gx.O.Z163CodificacaoObrigatorio=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOOBRIGATORIO",row || gx.fn.currentGridRowImpl(46),gx.O.A163CodificacaoObrigatorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A163CodificacaoObrigatorio=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOOBRIGATORIO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOUSUARIOID",gxz:"Z846CodificacaoUsuarioId",gxold:"O846CodificacaoUsuarioId",gxvar:"A846CodificacaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A846CodificacaoUsuarioId=Value},v2z:function(Value){gx.O.Z846CodificacaoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CODIFICACAOUSUARIOID",row || gx.fn.currentGridRowImpl(46),gx.O.A846CodificacaoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A846CodificacaoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIFICACAOUSUARIOID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaCodificacaoEmpresaId = "" ;
   this.ZV6cEmpresaCodificacaoEmpresaId = "" ;
   this.OV6cEmpresaCodificacaoEmpresaId = "" ;
   this.AV7cCodificacaoId = "" ;
   this.ZV7cCodificacaoId = "" ;
   this.OV7cCodificacaoId = "" ;
   this.AV8cCodificacaoDescricao = "" ;
   this.ZV8cCodificacaoDescricao = "" ;
   this.OV8cCodificacaoDescricao = "" ;
   this.AV9cCodificacaoObrigatorio = "" ;
   this.ZV9cCodificacaoObrigatorio = "" ;
   this.OV9cCodificacaoObrigatorio = "" ;
   this.AV10cCodificacaoUsuarioId = "" ;
   this.ZV10cCodificacaoUsuarioId = "" ;
   this.OV10cCodificacaoUsuarioId = "" ;
   this.AV11cCodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cCodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.OV11cCodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z164EmpresaCodificacaoEmpresaId = "" ;
   this.O164EmpresaCodificacaoEmpresaId = "" ;
   this.Z58CodificacaoId = "" ;
   this.O58CodificacaoId = "" ;
   this.Z59CodificacaoDescricao = "" ;
   this.O59CodificacaoDescricao = "" ;
   this.Z163CodificacaoObrigatorio = "" ;
   this.O163CodificacaoObrigatorio = "" ;
   this.Z846CodificacaoUsuarioId = "" ;
   this.O846CodificacaoUsuarioId = "" ;
   this.AV6cEmpresaCodificacaoEmpresaId = "" ;
   this.AV7cCodificacaoId = "" ;
   this.AV8cCodificacaoDescricao = "" ;
   this.AV9cCodificacaoObrigatorio = "" ;
   this.AV10cCodificacaoUsuarioId = "" ;
   this.AV11cCodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV12pEmpresaCodificacaoEmpresaId = "" ;
   this.AV13pCodificacaoId = "" ;
   this.A847CodificacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A58CodificacaoId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.A163CodificacaoObrigatorio = "" ;
   this.A846CodificacaoUsuarioId = "" ;
   this.Events = {"e131hk2_client": ["ENTER", true] ,"e141hk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCodificacaoEmpresaId',fld:'vCEMPRESACODIFICACAOEMPRESAID'},{av:'AV7cCodificacaoId',fld:'vCCODIFICACAOID'},{av:'AV8cCodificacaoDescricao',fld:'vCCODIFICACAODESCRICAO'},{av:'AV9cCodificacaoObrigatorio',fld:'vCCODIFICACAOOBRIGATORIO'},{av:'AV10cCodificacaoUsuarioId',fld:'vCCODIFICACAOUSUARIOID'},{av:'AV11cCodificacaoDataHoraAlt',fld:'vCCODIFICACAODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A164EmpresaCodificacaoEmpresaId',fld:'EMPRESACODIFICACAOEMPRESAID'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'}],[{av:'AV12pEmpresaCodificacaoEmpresaId',fld:'vPEMPRESACODIFICACAOEMPRESAID'},{av:'AV13pCodificacaoId',fld:'vPCODIFICACAOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCodificacaoEmpresaId',fld:'vCEMPRESACODIFICACAOEMPRESAID'},{av:'AV7cCodificacaoId',fld:'vCCODIFICACAOID'},{av:'AV8cCodificacaoDescricao',fld:'vCCODIFICACAODESCRICAO'},{av:'AV9cCodificacaoObrigatorio',fld:'vCCODIFICACAOOBRIGATORIO'},{av:'AV10cCodificacaoUsuarioId',fld:'vCCODIFICACAOUSUARIOID'},{av:'AV11cCodificacaoDataHoraAlt',fld:'vCCODIFICACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCodificacaoEmpresaId',fld:'vCEMPRESACODIFICACAOEMPRESAID'},{av:'AV7cCodificacaoId',fld:'vCCODIFICACAOID'},{av:'AV8cCodificacaoDescricao',fld:'vCCODIFICACAODESCRICAO'},{av:'AV9cCodificacaoObrigatorio',fld:'vCCODIFICACAOOBRIGATORIO'},{av:'AV10cCodificacaoUsuarioId',fld:'vCCODIFICACAOUSUARIOID'},{av:'AV11cCodificacaoDataHoraAlt',fld:'vCCODIFICACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCodificacaoEmpresaId',fld:'vCEMPRESACODIFICACAOEMPRESAID'},{av:'AV7cCodificacaoId',fld:'vCCODIFICACAOID'},{av:'AV8cCodificacaoDescricao',fld:'vCCODIFICACAODESCRICAO'},{av:'AV9cCodificacaoObrigatorio',fld:'vCCODIFICACAOOBRIGATORIO'},{av:'AV10cCodificacaoUsuarioId',fld:'vCCODIFICACAOUSUARIOID'},{av:'AV11cCodificacaoDataHoraAlt',fld:'vCCODIFICACAODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCodificacaoEmpresaId',fld:'vCEMPRESACODIFICACAOEMPRESAID'},{av:'AV7cCodificacaoId',fld:'vCCODIFICACAOID'},{av:'AV8cCodificacaoDescricao',fld:'vCCODIFICACAODESCRICAO'},{av:'AV9cCodificacaoObrigatorio',fld:'vCCODIFICACAOOBRIGATORIO'},{av:'AV10cCodificacaoUsuarioId',fld:'vCCODIFICACAOUSUARIOID'},{av:'AV11cCodificacaoDataHoraAlt',fld:'vCCODIFICACAODATAHORAALT'}],[]];
   this.setVCMap("AV12pEmpresaCodificacaoEmpresaId", "vPEMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV13pCodificacaoId", "vPCODIFICACAOID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00d0());