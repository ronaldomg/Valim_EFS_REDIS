/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:41.5
*/
gx.evt.autoSkip = false;
gx.define('hconsultasolicitacao', false, function () {
   this.ServerClass =  "hconsultasolicitacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV21PSolicitacaoNumero=gx.fn.getIntegerValue("vPSOLICITACAONUMERO",'.') ;
   };
   this.Valid_Deptocomprascodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(40) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("DEPTOCOMPRASCODIGO", gx.fn.currentGridRowImpl(40));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitantecodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(40) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SOLICITANTECODIGO", gx.fn.currentGridRowImpl(40));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Utilizacaoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(40) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("UTILIZACAOID", gx.fn.currentGridRowImpl(40));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17nq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nq2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nq2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nq2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nq2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nq2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19nq2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21nq1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,33,35,41,42,43,44,45,46,47,48,49,55,58,60,62,64,66,67,68,69,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasolicitacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3371,41,"SOLICITACAONUMERO","","","SolicitacaoNumero","int",0,"px",7,7,"right",null,[],3371,"SolicitacaoNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(4021,42,"SOLICITACAOSITUACAO","","SolicitacaoSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(4022,43,"SOLICITACAODATAINICIO","","","SolicitacaoDataInicio","date",0,"px",10,10,"right",null,[],4022,"SolicitacaoDataInicio",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3488,44,"DEPTOCOMPRASCODIGO","","","DeptoComprasCodigo","svchar",0,"px",15,15,"left",null,[],3488,"DeptoComprasCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3483,45,"DEPTOCOMPRASNOME","","","DeptoComprasNome","svchar",0,"px",40,40,"left",null,[],3483,"DeptoComprasNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4060,46,"SOLICITANTENOME","","","SolicitanteNome","svchar",0,"px",50,50,"left",null,[],4060,"SolicitanteNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4059,47,"UTILIZACAODESCRICAO","","","UtilizacaoDescricao","svchar",0,"px",30,30,"left",null,[],4059,"UtilizacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4028,48,"SOLICITANTECODIGO","Código Solicitante","","SolicitanteCodigo","int",0,"px",4,4,"right",null,[],4028,"SolicitanteCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4026,49,"UTILIZACAOID","Código Utilizacao","","UtilizacaoId","int",0,"px",3,3,"right",null,[],4026,"UtilizacaoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLERANGEDATAINICIO",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAODATAINICIOINI",gxz:"ZV16SolicitacaoDataInicioini",gxold:"OV16SolicitacaoDataInicioini",gxvar:"AV16SolicitacaoDataInicioini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SolicitacaoDataInicioini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16SolicitacaoDataInicioini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAODATAINICIOINI",gx.O.AV16SolicitacaoDataInicioini,0)},c2v:function(){gx.O.AV16SolicitacaoDataInicioini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSOLICITACAODATAINICIOINI")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAODATAINICIOFIM",gxz:"ZV17SolicitacaoDataIniciofim",gxold:"OV17SolicitacaoDataIniciofim",gxvar:"AV17SolicitacaoDataIniciofim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SolicitacaoDataIniciofim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17SolicitacaoDataIniciofim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAODATAINICIOFIM",gx.O.AV17SolicitacaoDataIniciofim,0)},c2v:function(){gx.O.AV17SolicitacaoDataIniciofim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSOLICITACAODATAINICIOFIM")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV18DeptoComprasCodigo",gxold:"OV18DeptoComprasCodigo",gxvar:"AV18DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV18DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV18DeptoComprasCodigo=Value},v2c:function(){gx.fn.setComboBoxValue("vDEPTOCOMPRASCODIGO",gx.O.AV18DeptoComprasCodigo)},c2v:function(){gx.O.AV18DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITANTECODIGO",gxz:"ZV19SolicitanteCodigo",gxold:"OV19SolicitanteCodigo",gxvar:"AV19SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV19SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSOLICITANTECODIGO",gx.O.AV19SolicitanteCodigo)},c2v:function(){gx.O.AV19SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUTILIZACAOID",gxz:"ZV20UtilizacaoId",gxold:"OV20UtilizacaoId",gxvar:"AV20UtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV20UtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20UtilizacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vUTILIZACAOID",gx.O.AV20UtilizacaoId)},c2v:function(){gx.O.AV20UtilizacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUTILIZACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(40),gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOSITUACAO",gxz:"Z4021SolicitacaoSituacao",gxold:"O4021SolicitacaoSituacao",gxvar:"A4021SolicitacaoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4021SolicitacaoSituacao=Value},v2z:function(Value){gx.O.Z4021SolicitacaoSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SOLICITACAOSITUACAO",row || gx.fn.currentGridRowImpl(40),gx.O.A4021SolicitacaoSituacao)},c2v:function(){gx.O.A4021SolicitacaoSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITACAOSITUACAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAODATAINICIO",gxz:"Z4022SolicitacaoDataInicio",gxold:"O4022SolicitacaoDataInicio",gxvar:"A4022SolicitacaoDataInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4022SolicitacaoDataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4022SolicitacaoDataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAODATAINICIO",row || gx.fn.currentGridRowImpl(40),gx.O.A4022SolicitacaoDataInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4022SolicitacaoDataInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SOLICITACAODATAINICIO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Deptocomprascodigo,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASCODIGO",gxz:"Z3488DeptoComprasCodigo",gxold:"O3488DeptoComprasCodigo",gxvar:"A3488DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3488DeptoComprasCodigo=Value},v2z:function(Value){gx.O.Z3488DeptoComprasCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(40),gx.O.A3488DeptoComprasCodigo,0)},c2v:function(){gx.O.A3488DeptoComprasCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASNOME",gxz:"Z3483DeptoComprasNome",gxold:"O3483DeptoComprasNome",gxvar:"A3483DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3483DeptoComprasNome=Value},v2z:function(Value){gx.O.Z3483DeptoComprasNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(40),gx.O.A3483DeptoComprasNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3483DeptoComprasNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTENOME",gxz:"Z4060SolicitanteNome",gxold:"O4060SolicitanteNome",gxvar:"A4060SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4060SolicitanteNome=Value},v2z:function(Value){gx.O.Z4060SolicitanteNome=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(40),gx.O.A4060SolicitanteNome,0)},c2v:function(){gx.O.A4060SolicitanteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAODESCRICAO",gxz:"Z4059UtilizacaoDescricao",gxold:"O4059UtilizacaoDescricao",gxvar:"A4059UtilizacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4059UtilizacaoDescricao=Value},v2z:function(Value){gx.O.Z4059UtilizacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAODESCRICAO",row || gx.fn.currentGridRowImpl(40),gx.O.A4059UtilizacaoDescricao,0)},c2v:function(){gx.O.A4059UtilizacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("UTILIZACAODESCRICAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Solicitantecodigo,isvalid:null,rgrid:[],fld:"SOLICITANTECODIGO",gxz:"Z4028SolicitanteCodigo",gxold:"O4028SolicitanteCodigo",gxvar:"A4028SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4028SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4028SolicitanteCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(40),gx.O.A4028SolicitanteCodigo,0)},c2v:function(){gx.O.A4028SolicitanteCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Utilizacaoid,isvalid:null,rgrid:[],fld:"UTILIZACAOID",gxz:"Z4026UtilizacaoId",gxold:"O4026UtilizacaoId",gxvar:"A4026UtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4026UtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4026UtilizacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAOID",row || gx.fn.currentGridRowImpl(40),gx.O.A4026UtilizacaoId,0)},c2v:function(){gx.O.A4026UtilizacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("UTILIZACAOID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLENAV",grid:0};
   GXValidFnc[58]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[60]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[62]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[64]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[66]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[67]={fld:"JS", format:2,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16SolicitacaoDataInicioini = gx.date.nullDate() ;
   this.ZV16SolicitacaoDataInicioini = gx.date.nullDate() ;
   this.OV16SolicitacaoDataInicioini = gx.date.nullDate() ;
   this.AV17SolicitacaoDataIniciofim = gx.date.nullDate() ;
   this.ZV17SolicitacaoDataIniciofim = gx.date.nullDate() ;
   this.OV17SolicitacaoDataIniciofim = gx.date.nullDate() ;
   this.AV18DeptoComprasCodigo = "" ;
   this.ZV18DeptoComprasCodigo = "" ;
   this.OV18DeptoComprasCodigo = "" ;
   this.AV19SolicitanteCodigo = 0 ;
   this.ZV19SolicitanteCodigo = 0 ;
   this.OV19SolicitanteCodigo = 0 ;
   this.AV20UtilizacaoId = 0 ;
   this.ZV20UtilizacaoId = 0 ;
   this.OV20UtilizacaoId = 0 ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.Z4021SolicitacaoSituacao = "" ;
   this.O4021SolicitacaoSituacao = "" ;
   this.Z4022SolicitacaoDataInicio = gx.date.nullDate() ;
   this.O4022SolicitacaoDataInicio = gx.date.nullDate() ;
   this.Z3488DeptoComprasCodigo = "" ;
   this.O3488DeptoComprasCodigo = "" ;
   this.Z3483DeptoComprasNome = "" ;
   this.O3483DeptoComprasNome = "" ;
   this.Z4060SolicitanteNome = "" ;
   this.O4060SolicitanteNome = "" ;
   this.Z4059UtilizacaoDescricao = "" ;
   this.O4059UtilizacaoDescricao = "" ;
   this.Z4028SolicitanteCodigo = 0 ;
   this.O4028SolicitanteCodigo = 0 ;
   this.Z4026UtilizacaoId = 0 ;
   this.O4026UtilizacaoId = 0 ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16SolicitacaoDataInicioini = gx.date.nullDate() ;
   this.AV17SolicitacaoDataIniciofim = gx.date.nullDate() ;
   this.AV18DeptoComprasCodigo = "" ;
   this.AV19SolicitanteCodigo = 0 ;
   this.AV20UtilizacaoId = 0 ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21PSolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4025UtilizacaoEmpresaId = "" ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A4021SolicitacaoSituacao = "" ;
   this.A4022SolicitacaoDataInicio = gx.date.nullDate() ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.A4060SolicitanteNome = "" ;
   this.A4059UtilizacaoDescricao = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.A4026UtilizacaoId = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17nq2_client": ["ENTER", true] ,"e11nq2_client": ["'GXM_FIRST'", true] ,"e12nq2_client": ["'GXM_PREVIOUS'", true] ,"e13nq2_client": ["'GXM_NEXT'", true] ,"e14nq2_client": ["'GXM_LAST'", true] ,"e15nq2_client": ["'PROCURAR'", true] ,"e19nq2_client": ["'ATUALIZAPAGINA'", true] ,"e21nq1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'SOLICITACAONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITACAONUMERO","Title")',ctrl:'SOLICITACAONUMERO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SOLICITACAOSITUACAO'},{ctrl:'SOLICITACAODATAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITACAODATAINICIO","Title")',ctrl:'SOLICITACAODATAINICIO',prop:'Title'},{ctrl:'DEPTOCOMPRASCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASCODIGO","Title")',ctrl:'DEPTOCOMPRASCODIGO',prop:'Title'},{ctrl:'DEPTOCOMPRASNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASNOME","Title")',ctrl:'DEPTOCOMPRASNOME',prop:'Title'},{ctrl:'SOLICITANTENOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTENOME","Title")',ctrl:'SOLICITANTENOME',prop:'Title'},{ctrl:'UTILIZACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("UTILIZACAODESCRICAO","Title")',ctrl:'UTILIZACAODESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'}],[{av:'AV21PSolicitacaoNumero',fld:'vPSOLICITACAONUMERO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16SolicitacaoDataInicioini',fld:'vSOLICITACAODATAINICIOINI'},{av:'AV17SolicitacaoDataIniciofim',fld:'vSOLICITACAODATAINICIOFIM'},{av:'AV18DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV19SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV20UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21PSolicitacaoNumero", "vPSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasolicitacao());
