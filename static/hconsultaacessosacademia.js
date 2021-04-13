/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:12.9
*/
gx.evt.autoSkip = false;
gx.define('hconsultaacessosacademia', false, function () {
   this.ServerClass =  "hconsultaacessosacademia" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "'PESQUISAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.AV19AcessoAcademiaPessoaId=gx.fn.getIntegerValue("vACESSOACADEMIAPESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A2653DependenteId=gx.fn.getIntegerValue("DEPENDENTEID",'.') ;
      this.AV20AcessoAcademiaDependenteId=gx.fn.getIntegerValue("vACESSOACADEMIADEPENDENTEID",'.') ;
      this.A2640DependenteNome=gx.fn.getControlValue("DEPENDENTENOME") ;
   };
   this.Validv_Titularid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Dependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e191gk1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hrelacaoacessosacademia",[this.AV5TitularId, this.AV7DependenteId, this.AV10DataInicio, this.AV11DataFinal, this.AV9AcessoAcademiaSituacao]), []);
      this.refreshOutputs([]);
   };
   this.e111gk2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", false, null, false, false);
   };
   this.e121gk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e131gk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e141gk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e201gk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e211gk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,16,18,21,23,25,28,30,31,33,35,43,44,45,46,47,48,49,50,51,57,60,61,62,64,65,66,67,68,69,70,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaacessosacademia",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(7999,43,"ACESSOACADEMIADATAHORAACESSO","Data/Hora Entrada","","AcessoAcademiaDataHoraAcesso","dtime",0,"px",16,16,"right",null,[],7999,"AcessoAcademiaDataHoraAcesso",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7997,44,"ACESSOACADEMIAPESSOAID","Titular","","AcessoAcademiaPessoaId","int",0,"px",7,7,"right",null,[],7997,"AcessoAcademiaPessoaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Titularnomegrid",45,"vTITULARNOMEGRID","Nome","","TitularNomeGrid","svchar",0,"px",100,80,"left",null,[],"Titularnomegrid","TitularNomeGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7998,46,"ACESSOACADEMIADEPENDENTEID","Dependente","","AcessoAcademiaDependenteId","int",0,"px",2,2,"right",null,[],7998,"AcessoAcademiaDependenteId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7996,47,"ACESSOACADEMIAEMPRESAID","Empresa","","AcessoAcademiaEmpresaId","char",0,"px",10,10,"left",null,[],7996,"AcessoAcademiaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipopessoa",48,"vTIPOPESSOA","Tipo de Pessoa","","TipoPessoa","svchar",0,"px",40,40,"left",null,[],"Tipopessoa","TipoPessoa",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Observacao",49,"vOBSERVACAO","Descrição do Bloqueio","","Observacao","svchar",0,"px",100,80,"left",null,[],"Observacao","Observacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7995,50,"ACESSOACADEMIAOBSERVACAO","Descrição do Bloqueio","","AcessoAcademiaObservacao","svchar",0,"px",2000,80,"left",null,[],7995,"AcessoAcademiaObservacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7992,51,"ACESSOACADEMIASITUACAO","Situação","","AcessoAcademiaSituacao","char",0,"px",1,1,"left",null,[],7992,"AcessoAcademiaSituacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularid,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARID",gxz:"ZV5TitularId",gxold:"OV5TitularId",gxvar:"AV5TitularId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5TitularId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5TitularId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARID",gx.O.AV5TitularId,0)},c2v:function(){gx.O.AV5TitularId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOME",gxz:"ZV6TitularNome",gxold:"OV6TitularNome",gxvar:"AV6TitularNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6TitularNome=Value},v2z:function(Value){gx.O.ZV6TitularNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOME",gx.O.AV6TitularNome,0)},c2v:function(){gx.O.AV6TitularNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE1",grid:0};
   GXValidFnc[21]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINICIO",gxz:"ZV10DataInicio",gxold:"OV10DataInicio",gxvar:"AV10DataInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIO",gx.O.AV10DataInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DataInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFINAL",gxz:"ZV11DataFinal",gxold:"OV11DataFinal",gxvar:"AV11DataFinal",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV11DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Dependenteid,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPENDENTEID",gxz:"ZV7DependenteId",gxold:"OV7DependenteId",gxvar:"AV7DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPENDENTEID",gx.O.AV7DependenteId,0)},c2v:function(){gx.O.AV7DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV8DependenteNome",gxold:"OV8DependenteNome",gxvar:"AV8DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DependenteNome=Value},v2z:function(Value){gx.O.ZV8DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV8DependenteNome,0)},c2v:function(){gx.O.AV8DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vACESSOACADEMIASITUACAO",gxz:"ZV9AcessoAcademiaSituacao",gxold:"OV9AcessoAcademiaSituacao",gxvar:"AV9AcessoAcademiaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9AcessoAcademiaSituacao=Value},v2z:function(Value){gx.O.ZV9AcessoAcademiaSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vACESSOACADEMIASITUACAO",gx.O.AV9AcessoAcademiaSituacao)},c2v:function(){gx.O.AV9AcessoAcademiaSituacao=this.val()},val:function(){return gx.fn.getControlValue("vACESSOACADEMIASITUACAO")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIADATAHORAACESSO",gxz:"Z7999AcessoAcademiaDataHoraAcesso",gxold:"O7999AcessoAcademiaDataHoraAcesso",gxvar:"A7999AcessoAcademiaDataHoraAcesso",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7999AcessoAcademiaDataHoraAcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7999AcessoAcademiaDataHoraAcesso=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOACADEMIADATAHORAACESSO",row || gx.fn.currentGridRowImpl(42),gx.O.A7999AcessoAcademiaDataHoraAcesso,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7999AcessoAcademiaDataHoraAcesso=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACESSOACADEMIADATAHORAACESSO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAPESSOAID",gxz:"Z7997AcessoAcademiaPessoaId",gxold:"O7997AcessoAcademiaPessoaId",gxvar:"A7997AcessoAcademiaPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7997AcessoAcademiaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7997AcessoAcademiaPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOACADEMIAPESSOAID",row || gx.fn.currentGridRowImpl(42),gx.O.A7997AcessoAcademiaPessoaId,0)},c2v:function(){gx.O.A7997AcessoAcademiaPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACESSOACADEMIAPESSOAID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEGRID",gxz:"ZV17TitularNomeGrid",gxold:"OV17TitularNomeGrid",gxvar:"AV17TitularNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17TitularNomeGrid=Value},v2z:function(Value){gx.O.ZV17TitularNomeGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vTITULARNOMEGRID",row || gx.fn.currentGridRowImpl(42),gx.O.AV17TitularNomeGrid,0)},c2v:function(){gx.O.AV17TitularNomeGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vTITULARNOMEGRID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIADEPENDENTEID",gxz:"Z7998AcessoAcademiaDependenteId",gxold:"O7998AcessoAcademiaDependenteId",gxvar:"A7998AcessoAcademiaDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7998AcessoAcademiaDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7998AcessoAcademiaDependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOACADEMIADEPENDENTEID",row || gx.fn.currentGridRowImpl(42),gx.O.A7998AcessoAcademiaDependenteId,0)},c2v:function(){gx.O.A7998AcessoAcademiaDependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACESSOACADEMIADEPENDENTEID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAEMPRESAID",gxz:"Z7996AcessoAcademiaEmpresaId",gxold:"O7996AcessoAcademiaEmpresaId",gxvar:"A7996AcessoAcademiaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7996AcessoAcademiaEmpresaId=Value},v2z:function(Value){gx.O.Z7996AcessoAcademiaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOACADEMIAEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.A7996AcessoAcademiaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7996AcessoAcademiaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOACADEMIAEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPESSOA",gxz:"ZV18TipoPessoa",gxold:"OV18TipoPessoa",gxvar:"AV18TipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18TipoPessoa=Value},v2z:function(Value){gx.O.ZV18TipoPessoa=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPESSOA",row || gx.fn.currentGridRowImpl(42),gx.O.AV18TipoPessoa,0)},c2v:function(){gx.O.AV18TipoPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPESSOA",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV30Observacao",gxold:"OV30Observacao",gxvar:"AV30Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30Observacao=Value},v2z:function(Value){gx.O.ZV30Observacao=Value},v2c:function(row){gx.fn.setGridControlValue("vOBSERVACAO",row || gx.fn.currentGridRowImpl(42),gx.O.AV30Observacao,0)},c2v:function(){gx.O.AV30Observacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vOBSERVACAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:2000,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIAOBSERVACAO",gxz:"Z7995AcessoAcademiaObservacao",gxold:"O7995AcessoAcademiaObservacao",gxvar:"A7995AcessoAcademiaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7995AcessoAcademiaObservacao=Value},v2z:function(Value){gx.O.Z7995AcessoAcademiaObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOACADEMIAOBSERVACAO",row || gx.fn.currentGridRowImpl(42),gx.O.A7995AcessoAcademiaObservacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7995AcessoAcademiaObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOACADEMIAOBSERVACAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOACADEMIASITUACAO",gxz:"Z7992AcessoAcademiaSituacao",gxold:"O7992AcessoAcademiaSituacao",gxvar:"A7992AcessoAcademiaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7992AcessoAcademiaSituacao=Value},v2z:function(Value){gx.O.Z7992AcessoAcademiaSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOACADEMIASITUACAO",row || gx.fn.currentGridRowImpl(42),gx.O.A7992AcessoAcademiaSituacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7992AcessoAcademiaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOACADEMIASITUACAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLE9",grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNERRO",gxz:"ZV23SnErro",gxold:"OV23SnErro",gxvar:"AV23SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23SnErro=Value},v2z:function(Value){gx.O.ZV23SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV23SnErro,0)},c2v:function(){gx.O.AV23SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV16EmpresaPessoasEmpresaId",gxold:"OV16EmpresaPessoasEmpresaId",gxvar:"AV16EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV16EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV16EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV16EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[64]={fld:"IMAGE6",grid:0};
   GXValidFnc[65]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[66]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[67]={fld:"IMAGE5",grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV31PaginaAux",gxold:"OV31PaginaAux",gxvar:"AV31PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV31PaginaAux,0)},c2v:function(){gx.O.AV31PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV32Pagina",gxold:"OV32Pagina",gxvar:"AV32Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV32Pagina,0)},c2v:function(){gx.O.AV32Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV33Qtde",gxold:"OV33Qtde",gxvar:"AV33Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV33Qtde,0)},c2v:function(){gx.O.AV33Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[73]={fld:"PROMPT_TITULARID",grid:0};
   GXValidFnc[74]={fld:"PROMPT_DEPENDENTEID",grid:0};
   this.AV5TitularId = 0 ;
   this.ZV5TitularId = 0 ;
   this.OV5TitularId = 0 ;
   this.AV6TitularNome = "" ;
   this.ZV6TitularNome = "" ;
   this.OV6TitularNome = "" ;
   this.AV10DataInicio = gx.date.nullDate() ;
   this.ZV10DataInicio = gx.date.nullDate() ;
   this.OV10DataInicio = gx.date.nullDate() ;
   this.AV11DataFinal = gx.date.nullDate() ;
   this.ZV11DataFinal = gx.date.nullDate() ;
   this.OV11DataFinal = gx.date.nullDate() ;
   this.AV7DependenteId = 0 ;
   this.ZV7DependenteId = 0 ;
   this.OV7DependenteId = 0 ;
   this.AV8DependenteNome = "" ;
   this.ZV8DependenteNome = "" ;
   this.OV8DependenteNome = "" ;
   this.AV9AcessoAcademiaSituacao = "" ;
   this.ZV9AcessoAcademiaSituacao = "" ;
   this.OV9AcessoAcademiaSituacao = "" ;
   this.Z7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.O7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.Z7997AcessoAcademiaPessoaId = 0 ;
   this.O7997AcessoAcademiaPessoaId = 0 ;
   this.ZV17TitularNomeGrid = "" ;
   this.OV17TitularNomeGrid = "" ;
   this.Z7998AcessoAcademiaDependenteId = 0 ;
   this.O7998AcessoAcademiaDependenteId = 0 ;
   this.Z7996AcessoAcademiaEmpresaId = "" ;
   this.O7996AcessoAcademiaEmpresaId = "" ;
   this.ZV18TipoPessoa = "" ;
   this.OV18TipoPessoa = "" ;
   this.ZV30Observacao = "" ;
   this.OV30Observacao = "" ;
   this.Z7995AcessoAcademiaObservacao = "" ;
   this.O7995AcessoAcademiaObservacao = "" ;
   this.Z7992AcessoAcademiaSituacao = "" ;
   this.O7992AcessoAcademiaSituacao = "" ;
   this.AV23SnErro = "" ;
   this.ZV23SnErro = "" ;
   this.OV23SnErro = "" ;
   this.AV16EmpresaPessoasEmpresaId = "" ;
   this.ZV16EmpresaPessoasEmpresaId = "" ;
   this.OV16EmpresaPessoasEmpresaId = "" ;
   this.AV31PaginaAux = 0 ;
   this.ZV31PaginaAux = 0 ;
   this.OV31PaginaAux = 0 ;
   this.AV32Pagina = 0 ;
   this.ZV32Pagina = 0 ;
   this.OV32Pagina = 0 ;
   this.AV33Qtde = 0 ;
   this.ZV33Qtde = 0 ;
   this.OV33Qtde = 0 ;
   this.AV5TitularId = 0 ;
   this.AV6TitularNome = "" ;
   this.AV10DataInicio = gx.date.nullDate() ;
   this.AV11DataFinal = gx.date.nullDate() ;
   this.AV7DependenteId = 0 ;
   this.AV8DependenteNome = "" ;
   this.AV9AcessoAcademiaSituacao = "" ;
   this.AV23SnErro = "" ;
   this.AV16EmpresaPessoasEmpresaId = "" ;
   this.AV31PaginaAux = 0 ;
   this.AV32Pagina = 0 ;
   this.AV33Qtde = 0 ;
   this.A7999AcessoAcademiaDataHoraAcesso = gx.date.nullDate() ;
   this.A7997AcessoAcademiaPessoaId = 0 ;
   this.AV17TitularNomeGrid = "" ;
   this.A7998AcessoAcademiaDependenteId = 0 ;
   this.A7996AcessoAcademiaEmpresaId = "" ;
   this.AV18TipoPessoa = "" ;
   this.AV30Observacao = "" ;
   this.A7995AcessoAcademiaObservacao = "" ;
   this.A7992AcessoAcademiaSituacao = "" ;
   this.A2653DependenteId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2640DependenteNome = "" ;
   this.A71PessoaFantasia = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.AV19AcessoAcademiaPessoaId = 0 ;
   this.AV20AcessoAcademiaDependenteId = 0 ;
   this.Events = {"e111gk2_client": ["'PESQUISAR'", true] ,"e121gk2_client": ["'FECHAR'", true] ,"e131gk2_client": ["'GXM_PREVIOUS'", true] ,"e141gk2_client": ["'GXM_NEXT'", true] ,"e201gk2_client": ["ENTER", true] ,"e211gk2_client": ["CANCEL", true] ,"e191gk1_client": ["'IMPRIMIR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5TitularId',fld:'vTITULARID'},{av:'AV10DataInicio',fld:'vDATAINICIO'},{av:'AV11DataFinal',fld:'vDATAFINAL'},{av:'AV7DependenteId',fld:'vDEPENDENTEID'},{av:'AV9AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'A7995AcessoAcademiaObservacao',fld:'ACESSOACADEMIAOBSERVACAO'},{av:'A7997AcessoAcademiaPessoaId',fld:'ACESSOACADEMIAPESSOAID'},{av:'A7998AcessoAcademiaDependenteId',fld:'ACESSOACADEMIADEPENDENTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV16EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19AcessoAcademiaPessoaId',fld:'vACESSOACADEMIAPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV20AcessoAcademiaDependenteId',fld:'vACESSOACADEMIADEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'AV32Pagina',fld:'vPAGINA'}],[{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5TitularId',fld:'vTITULARID'},{av:'AV10DataInicio',fld:'vDATAINICIO'},{av:'AV11DataFinal',fld:'vDATAFINAL'},{av:'AV7DependenteId',fld:'vDEPENDENTEID'},{av:'AV9AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A7995AcessoAcademiaObservacao',fld:'ACESSOACADEMIAOBSERVACAO'},{av:'A7997AcessoAcademiaPessoaId',fld:'ACESSOACADEMIAPESSOAID'},{av:'A7998AcessoAcademiaDependenteId',fld:'ACESSOACADEMIADEPENDENTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV16EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19AcessoAcademiaPessoaId',fld:'vACESSOACADEMIAPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV20AcessoAcademiaDependenteId',fld:'vACESSOACADEMIADEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV33Qtde',fld:'vQTDE'}],[{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV8DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV6TitularNome',fld:'vTITULARNOME'},{av:'AV38GXLvl73',fld:'vGXLVL73'},{av:'AV39GXLvl92',fld:'vGXLVL92'},{av:'AV11DataFinal',fld:'vDATAFINAL'},{av:'AV10DataInicio',fld:'vDATAINICIO'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV5TitularId',fld:'vTITULARID'},{av:'AV7DependenteId',fld:'vDEPENDENTEID'},{av:'AV10DataInicio',fld:'vDATAINICIO'},{av:'AV11DataFinal',fld:'vDATAFINAL'},{av:'AV9AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5TitularId',fld:'vTITULARID'},{av:'AV10DataInicio',fld:'vDATAINICIO'},{av:'AV11DataFinal',fld:'vDATAFINAL'},{av:'AV7DependenteId',fld:'vDEPENDENTEID'},{av:'AV9AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A7995AcessoAcademiaObservacao',fld:'ACESSOACADEMIAOBSERVACAO'},{av:'A7997AcessoAcademiaPessoaId',fld:'ACESSOACADEMIAPESSOAID'},{av:'A7998AcessoAcademiaDependenteId',fld:'ACESSOACADEMIADEPENDENTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV16EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19AcessoAcademiaPessoaId',fld:'vACESSOACADEMIAPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV20AcessoAcademiaDependenteId',fld:'vACESSOACADEMIADEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5TitularId',fld:'vTITULARID'},{av:'AV10DataInicio',fld:'vDATAINICIO'},{av:'AV11DataFinal',fld:'vDATAFINAL'},{av:'AV7DependenteId',fld:'vDEPENDENTEID'},{av:'AV9AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'A7995AcessoAcademiaObservacao',fld:'ACESSOACADEMIAOBSERVACAO'},{av:'A7997AcessoAcademiaPessoaId',fld:'ACESSOACADEMIAPESSOAID'},{av:'A7998AcessoAcademiaDependenteId',fld:'ACESSOACADEMIADEPENDENTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV16EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19AcessoAcademiaPessoaId',fld:'vACESSOACADEMIAPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV20AcessoAcademiaDependenteId',fld:'vACESSOACADEMIADEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV32Pagina',fld:'vPAGINA'}],[{av:'AV31PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A7995AcessoAcademiaObservacao',fld:'ACESSOACADEMIAOBSERVACAO'},{av:'A7997AcessoAcademiaPessoaId',fld:'ACESSOACADEMIAPESSOAID'},{av:'A7998AcessoAcademiaDependenteId',fld:'ACESSOACADEMIADEPENDENTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV16EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV19AcessoAcademiaPessoaId',fld:'vACESSOACADEMIAPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'AV20AcessoAcademiaDependenteId',fld:'vACESSOACADEMIADEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'}],[{av:'AV30Observacao',fld:'vOBSERVACAO'},{av:'AV19AcessoAcademiaPessoaId',fld:'vACESSOACADEMIAPESSOAID'},{av:'AV20AcessoAcademiaDependenteId',fld:'vACESSOACADEMIADEPENDENTEID'},{av:'AV18TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV17TitularNomeGrid',fld:'vTITULARNOMEGRID'}]];
   this.setPrompt("PROMPT_TITULARID", [13]);
   this.setPrompt("PROMPT_DEPENDENTEID", [30]);
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("AV19AcessoAcademiaPessoaId", "vACESSOACADEMIAPESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A2653DependenteId", "DEPENDENTEID", 0, "int");
   this.setVCMap("AV20AcessoAcademiaDependenteId", "vACESSOACADEMIADEPENDENTEID", 0, "int");
   this.setVCMap("A2640DependenteNome", "DEPENDENTENOME", 0, "svchar");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("AV19AcessoAcademiaPessoaId", "vACESSOACADEMIAPESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A2653DependenteId", "DEPENDENTEID", 0, "int");
   this.setVCMap("AV20AcessoAcademiaDependenteId", "vACESSOACADEMIADEPENDENTEID", 0, "int");
   this.setVCMap("A2640DependenteNome", "DEPENDENTENOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"A7995AcessoAcademiaObservacao", rfrProp:"Value", gxAttId:"7995"});
   GridContainer.addRefreshingVar({rfrVar:"A7997AcessoAcademiaPessoaId", rfrProp:"Value", gxAttId:"7997"});
   GridContainer.addRefreshingVar({rfrVar:"A7998AcessoAcademiaDependenteId", rfrProp:"Value", gxAttId:"7998"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV19AcessoAcademiaPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A2653DependenteId"});
   GridContainer.addRefreshingVar({rfrVar:"AV20AcessoAcademiaDependenteId"});
   GridContainer.addRefreshingVar({rfrVar:"A2640DependenteNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaacessosacademia());
