/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:36:17.2
*/
gx.evt.autoSkip = false;
gx.define('hconsultasituacaoassociado', false, function () {
   this.ServerClass =  "hconsultasituacaoassociado" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV100DataSistema=gx.fn.getDateValue("vDATASISTEMA") ;
      this.AV67TitularPessoaIdParm=gx.fn.getIntegerValue("vTITULARPESSOAIDPARM",'.') ;
      this.AV95OcorrenciaPortariaTipoParm=gx.fn.getControlValue("vOCORRENCIAPORTARIATIPOPARM") ;
      this.AV103TipoTela=gx.fn.getControlValue("vTIPOTELA") ;
   };
   this.Validv_Titularpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciapessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPESSOAID", gx.fn.currentGridRowImpl(29));
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
   this.Valid_Ocorrenciaportariaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIAID", gx.fn.currentGridRowImpl(29));
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
   this.e11hy2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12hy2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13hy2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14hy2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e17hy2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", true, null, false, false);
   };
   this.e15hy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e20hy2_client=function()
   {
      this.executeServerEvent("VBMPOBS.CLICK", true, arguments[0], false, false);
   };
   this.e16hy2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e22hy2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23hy2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e24hy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,26,30,31,32,33,34,35,36,37,38,39,40,41,43,44,47,50,51,57,61,64,66,68,70,72,74,75,76,77,78,79,80,81,82,84,85];
   this.GXLastCtrlId =85;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasituacaoassociado",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2668,30,"OCORRENCIAPESSOAID","","","OcorrenciaPessoaId","int",0,"px",7,7,"right",null,[],2668,"OcorrenciaPessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoanome",31,"vPESSOANOME","Nome","","PessoaNome","svchar",0,"px",40,40,"left",null,[],"Pessoanome","PessoaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2669,32,"OCORRENCIAPESSOANOME","","","OcorrenciaPessoaNome","svchar",0,"px",100,80,"left",null,[],2669,"OcorrenciaPessoaNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2674,33,"OCORRENCIAPESSOANUMERO","Número","","OcorrenciaPessoaNumero","int",0,"px",8,8,"right",null,[],2674,"OcorrenciaPessoaNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2664,34,"OCORRENCIAPESSOADATAINICIAL","","","OcorrenciaPessoaDataInicial","date",0,"px",10,10,"right",null,[],2664,"OcorrenciaPessoaDataInicial",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2665,35,"OCORRENCIAPESSOADATAFINAL","","","OcorrenciaPessoaDataFinal","date",0,"px",10,10,"right",null,[],2665,"OcorrenciaPessoaDataFinal",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2663,36,"OCORRENCIAPORTARIAID","","","OcorrenciaPortariaId","int",0,"px",4,4,"right",null,[],2663,"OcorrenciaPortariaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2675,37,"OCORRENCIAPORTARIADESCRICAO","Descrição Ocorrencia","","OcorrenciaPortariaDescricao","svchar",0,"px",35,35,"left",null,[],2675,"OcorrenciaPortariaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpobs","vBMPOBS",38,0,"px",17,"px","e20hy2_client","","Obs","Image","");
   GridContainer.addSingleLineEdit(2670,39,"OCORRENCIAPESSOADEPENDENTEID","Código Dependente","","OcorrenciaPessoaDependenteId","int",0,"px",2,2,"right",null,[],2670,"OcorrenciaPessoaDependenteId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2678,40,"OCORRENCIAPORTARIATIPO","Tipo","OcorrenciaPortariaTipo","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(2666,41,"OCORRENCIAPESSOAOBSERVACAO","Observação","","OcorrenciaPessoaObservacao","vchar",0,"px",3000,80,"left",null,[],2666,"OcorrenciaPessoaObservacao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE13",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[this.GridContainer],fld:"vTITULARPESSOAID",gxz:"ZV68TitularPessoaId",gxold:"OV68TitularPessoaId",gxvar:"AV68TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV68TitularPessoaId,0)},c2v:function(){gx.O.AV68TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV75TitularPessoaNome",gxold:"OV75TitularPessoaNome",gxvar:"AV75TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV75TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV75TitularPessoaNome,0)},c2v:function(){gx.O.AV75TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIATIPO",gxz:"ZV96OcorrenciaPortariaTipo",gxold:"OV96OcorrenciaPortariaTipo",gxvar:"AV96OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV96OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.ZV96OcorrenciaPortariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vOCORRENCIAPORTARIATIPO",gx.O.AV96OcorrenciaPortariaTipo)},c2v:function(){gx.O.AV96OcorrenciaPortariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE14",grid:0};
   GXValidFnc[30]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Ocorrenciapessoaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAID",gxz:"Z2668OcorrenciaPessoaId",gxold:"O2668OcorrenciaPessoaId",gxvar:"A2668OcorrenciaPessoaId",ucs:[],op:[32,37,40],ip:[32,37,40,30,36],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2668OcorrenciaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2668OcorrenciaPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOAID",row || gx.fn.currentGridRowImpl(29),gx.O.A2668OcorrenciaPessoaId,0)},c2v:function(){gx.O.A2668OcorrenciaPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPESSOAID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANOME",gxz:"ZV106PessoaNome",gxold:"OV106PessoaNome",gxvar:"AV106PessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV106PessoaNome=Value},v2z:function(Value){gx.O.ZV106PessoaNome=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOANOME",row || gx.fn.currentGridRowImpl(29),gx.O.AV106PessoaNome,0)},c2v:function(){gx.O.AV106PessoaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOANOME",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOANOME",gxz:"Z2669OcorrenciaPessoaNome",gxold:"O2669OcorrenciaPessoaNome",gxvar:"A2669OcorrenciaPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2669OcorrenciaPessoaNome=Value},v2z:function(Value){gx.O.Z2669OcorrenciaPessoaNome=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOANOME",row || gx.fn.currentGridRowImpl(29),gx.O.A2669OcorrenciaPessoaNome,0)},c2v:function(){gx.O.A2669OcorrenciaPessoaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPESSOANOME",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOANUMERO",gxz:"Z2674OcorrenciaPessoaNumero",gxold:"O2674OcorrenciaPessoaNumero",gxvar:"A2674OcorrenciaPessoaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2674OcorrenciaPessoaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2674OcorrenciaPessoaNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOANUMERO",row || gx.fn.currentGridRowImpl(29),gx.O.A2674OcorrenciaPessoaNumero,0)},c2v:function(){gx.O.A2674OcorrenciaPessoaNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPESSOANUMERO",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAINICIAL",gxz:"Z2664OcorrenciaPessoaDataInicial",gxold:"O2664OcorrenciaPessoaDataInicial",gxvar:"A2664OcorrenciaPessoaDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOADATAINICIAL",row || gx.fn.currentGridRowImpl(29),gx.O.A2664OcorrenciaPessoaDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2664OcorrenciaPessoaDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OCORRENCIAPESSOADATAINICIAL",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADATAFINAL",gxz:"Z2665OcorrenciaPessoaDataFinal",gxold:"O2665OcorrenciaPessoaDataFinal",gxvar:"A2665OcorrenciaPessoaDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOADATAFINAL",row || gx.fn.currentGridRowImpl(29),gx.O.A2665OcorrenciaPessoaDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2665OcorrenciaPessoaDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OCORRENCIAPESSOADATAFINAL",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Ocorrenciaportariaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAID",gxz:"Z2663OcorrenciaPortariaId",gxold:"O2663OcorrenciaPortariaId",gxvar:"A2663OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2663OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(29),gx.O.A2663OcorrenciaPortariaId,0)},c2v:function(){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADESCRICAO",gxz:"Z2675OcorrenciaPortariaDescricao",gxold:"O2675OcorrenciaPortariaDescricao",gxvar:"A2675OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2675OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.Z2675OcorrenciaPortariaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2675OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.A2675OcorrenciaPortariaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV97bmpObs",gxold:"OV97bmpObs",gxvar:"AV97bmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV97bmpObs=Value},v2z:function(Value){gx.O.ZV97bmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(29),gx.O.AV97bmpObs,gx.O.AV114Bmpobs_GXI)},c2v:function(){gx.O.AV114Bmpobs_GXI=this.val_GXI();gx.O.AV97bmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV114Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOADEPENDENTEID",gxz:"Z2670OcorrenciaPessoaDependenteId",gxold:"O2670OcorrenciaPessoaDependenteId",gxvar:"A2670OcorrenciaPessoaDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2670OcorrenciaPessoaDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2670OcorrenciaPessoaDependenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOADEPENDENTEID",row || gx.fn.currentGridRowImpl(29),gx.O.A2670OcorrenciaPessoaDependenteId,0)},c2v:function(){gx.O.A2670OcorrenciaPessoaDependenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPESSOADEPENDENTEID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPO",gxz:"Z2678OcorrenciaPortariaTipo",gxold:"O2678OcorrenciaPortariaTipo",gxvar:"A2678OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2678OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.Z2678OcorrenciaPortariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(29),gx.O.A2678OcorrenciaPortariaTipo)},c2v:function(){gx.O.A2678OcorrenciaPortariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"vchar",len:3000,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPESSOAOBSERVACAO",gxz:"Z2666OcorrenciaPessoaObservacao",gxold:"O2666OcorrenciaPessoaObservacao",gxvar:"A2666OcorrenciaPessoaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2666OcorrenciaPessoaObservacao=Value},v2z:function(Value){gx.O.Z2666OcorrenciaPessoaObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPESSOAOBSERVACAO",row || gx.fn.currentGridRowImpl(29),gx.O.A2666OcorrenciaPessoaObservacao,0)},c2v:function(){gx.O.A2666OcorrenciaPessoaObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPESSOAOBSERVACAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"OBS1", format:2,grid:0};
   GXValidFnc[44]={fld:"TABLE8",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIAPESSOAOBSERVACAO",gxz:"ZV98OcorrenciaPessoaObservacao",gxold:"OV98OcorrenciaPessoaObservacao",gxvar:"AV98OcorrenciaPessoaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98OcorrenciaPessoaObservacao=Value},v2z:function(Value){gx.O.ZV98OcorrenciaPessoaObservacao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPESSOAOBSERVACAO",gx.O.AV98OcorrenciaPessoaObservacao,0)},c2v:function(){gx.O.AV98OcorrenciaPessoaObservacao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPESSOAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"OBS2", format:2,grid:0};
   GXValidFnc[57]={fld:"TABLE11",grid:0};
   GXValidFnc[61]={fld:"TABLE12",grid:0};
   GXValidFnc[64]={fld:"IMAGE6",grid:0};
   GXValidFnc[66]={fld:"IMAGE1",grid:0};
   GXValidFnc[68]={fld:"IMAGE2",grid:0};
   GXValidFnc[70]={fld:"IMAGE3",grid:0};
   GXValidFnc[72]={fld:"IMAGE4",grid:0};
   GXValidFnc[74]={fld:"IMAGE5",grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIMEIRAVEZ",gxz:"ZV102primeiraVez",gxold:"OV102primeiraVez",gxvar:"AV102primeiraVez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102primeiraVez=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102primeiraVez=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIMEIRAVEZ",gx.O.AV102primeiraVez,0)},c2v:function(){gx.O.AV102primeiraVez=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIMEIRAVEZ",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAOFILTRO",gxz:"ZV101EmpresaPadraoFiltro",gxold:"OV101EmpresaPadraoFiltro",gxvar:"AV101EmpresaPadraoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101EmpresaPadraoFiltro=Value},v2z:function(Value){gx.O.ZV101EmpresaPadraoFiltro=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOFILTRO",gx.O.AV101EmpresaPadraoFiltro,0)},c2v:function(){gx.O.AV101EmpresaPadraoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV74EmpresaPessoasEmpresaId",gxold:"OV74EmpresaPessoasEmpresaId",gxvar:"AV74EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV74EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV74EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV74EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"JS", format:2,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV107Qtde",gxold:"OV107Qtde",gxvar:"AV107Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV107Qtde,0)},c2v:function(){gx.O.AV107Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"BTNHELP",grid:0};
   GXValidFnc[85]={fld:"PROMPT_TITULARPESSOAID",grid:0};
   this.AV68TitularPessoaId = 0 ;
   this.ZV68TitularPessoaId = 0 ;
   this.OV68TitularPessoaId = 0 ;
   this.AV75TitularPessoaNome = "" ;
   this.ZV75TitularPessoaNome = "" ;
   this.OV75TitularPessoaNome = "" ;
   this.AV96OcorrenciaPortariaTipo = "" ;
   this.ZV96OcorrenciaPortariaTipo = "" ;
   this.OV96OcorrenciaPortariaTipo = "" ;
   this.Z2668OcorrenciaPessoaId = 0 ;
   this.O2668OcorrenciaPessoaId = 0 ;
   this.ZV106PessoaNome = "" ;
   this.OV106PessoaNome = "" ;
   this.Z2669OcorrenciaPessoaNome = "" ;
   this.O2669OcorrenciaPessoaNome = "" ;
   this.Z2674OcorrenciaPessoaNumero = 0 ;
   this.O2674OcorrenciaPessoaNumero = 0 ;
   this.Z2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.O2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.Z2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.O2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.Z2663OcorrenciaPortariaId = 0 ;
   this.O2663OcorrenciaPortariaId = 0 ;
   this.Z2675OcorrenciaPortariaDescricao = "" ;
   this.O2675OcorrenciaPortariaDescricao = "" ;
   this.ZV97bmpObs = "" ;
   this.OV97bmpObs = "" ;
   this.Z2670OcorrenciaPessoaDependenteId = 0 ;
   this.O2670OcorrenciaPessoaDependenteId = 0 ;
   this.Z2678OcorrenciaPortariaTipo = "" ;
   this.O2678OcorrenciaPortariaTipo = "" ;
   this.Z2666OcorrenciaPessoaObservacao = "" ;
   this.O2666OcorrenciaPessoaObservacao = "" ;
   this.AV98OcorrenciaPessoaObservacao = "" ;
   this.ZV98OcorrenciaPessoaObservacao = "" ;
   this.OV98OcorrenciaPessoaObservacao = "" ;
   this.AV102primeiraVez = 0 ;
   this.ZV102primeiraVez = 0 ;
   this.OV102primeiraVez = 0 ;
   this.AV101EmpresaPadraoFiltro = "" ;
   this.ZV101EmpresaPadraoFiltro = "" ;
   this.OV101EmpresaPadraoFiltro = "" ;
   this.AV74EmpresaPessoasEmpresaId = "" ;
   this.ZV74EmpresaPessoasEmpresaId = "" ;
   this.OV74EmpresaPessoasEmpresaId = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV107Qtde = 0 ;
   this.ZV107Qtde = 0 ;
   this.OV107Qtde = 0 ;
   this.AV68TitularPessoaId = 0 ;
   this.AV75TitularPessoaNome = "" ;
   this.AV96OcorrenciaPortariaTipo = "" ;
   this.AV98OcorrenciaPessoaObservacao = "" ;
   this.AV102primeiraVez = 0 ;
   this.AV101EmpresaPadraoFiltro = "" ;
   this.AV74EmpresaPessoasEmpresaId = "" ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV107Qtde = 0 ;
   this.AV67TitularPessoaIdParm = 0 ;
   this.AV95OcorrenciaPortariaTipoParm = "" ;
   this.AV103TipoTela = "" ;
   this.A2673OcorrenciaPessoaEmpresaId = "" ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2667OcorrenciaPessoaEmpId = "" ;
   this.A2668OcorrenciaPessoaId = 0 ;
   this.AV106PessoaNome = "" ;
   this.A2669OcorrenciaPessoaNome = "" ;
   this.A2674OcorrenciaPessoaNumero = 0 ;
   this.A2664OcorrenciaPessoaDataInicial = gx.date.nullDate() ;
   this.A2665OcorrenciaPessoaDataFinal = gx.date.nullDate() ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.AV97bmpObs = "" ;
   this.A2670OcorrenciaPessoaDependenteId = 0 ;
   this.A2678OcorrenciaPortariaTipo = "" ;
   this.A2666OcorrenciaPessoaObservacao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A54ClassificacaoId = "" ;
   this.AV100DataSistema = gx.date.nullDate() ;
   this.Events = {"e11hy2_client": ["'GXM_FIRST'", true] ,"e12hy2_client": ["'GXM_PREVIOUS'", true] ,"e13hy2_client": ["'GXM_NEXT'", true] ,"e14hy2_client": ["'GXM_LAST'", true] ,"e17hy2_client": ["'PESQUISAR'", true] ,"e15hy2_client": ["'FECHAR'", true] ,"e20hy2_client": ["VBMPOBS.CLICK", true] ,"e16hy2_client": ["'IMPRIMIR'", true] ,"e22hy2_client": ["'ATUALIZAPAGINA'", true] ,"e23hy2_client": ["ENTER", true] ,"e24hy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'}],[{av:'AV98OcorrenciaPessoaObservacao',fld:'vOCORRENCIAPESSOAOBSERVACAO'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV98OcorrenciaPessoaObservacao',fld:'vOCORRENCIAPESSOAOBSERVACAO'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV98OcorrenciaPessoaObservacao',fld:'vOCORRENCIAPESSOAOBSERVACAO'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV98OcorrenciaPessoaObservacao',fld:'vOCORRENCIAPESSOAOBSERVACAO'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{ctrl:'GRID',prop:'Rows'}],[{ctrl:'OCORRENCIAPESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPESSOAID","Title")',ctrl:'OCORRENCIAPESSOAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIAPESSOANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPESSOANOME","Title")',ctrl:'OCORRENCIAPESSOANOME',prop:'Title'},{ctrl:'OCORRENCIAPESSOADATAINICIAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPESSOADATAINICIAL","Title")',ctrl:'OCORRENCIAPESSOADATAINICIAL',prop:'Title'},{ctrl:'OCORRENCIAPESSOADATAFINAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPESSOADATAFINAL","Title")',ctrl:'OCORRENCIAPESSOADATAFINAL',prop:'Title'},{ctrl:'OCORRENCIAPORTARIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPORTARIAID","Title")',ctrl:'OCORRENCIAPORTARIAID',prop:'Title'},{av:'gx.fn.getCtrlProperty("TABLE8","Visible")',ctrl:'TABLE8',prop:'Visible'},{av:'AV104QtdRegistrosGrid',fld:'vQTDREGISTROSGRID'},{av:'AV105QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV74EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV67TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV98OcorrenciaPessoaObservacao',fld:'vOCORRENCIAPESSOAOBSERVACAO'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'gx.fn.getCtrlProperty("TABLE8","Visible")',ctrl:'TABLE8',prop:'Visible'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV117GXLvl237',fld:'vGXLVL237'},{av:'AV75TitularPessoaNome',fld:'vTITULARPESSOANOME'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV67TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'AV103TipoTela',fld:'vTIPOTELA'}],[]];
   this.EvtParms["VBMPOBS.CLICK"] = [[{av:'A2674OcorrenciaPessoaNumero',fld:'OCORRENCIAPESSOANUMERO'},{av:'A2673OcorrenciaPessoaEmpresaId',fld:'OCORRENCIAPESSOAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV99OcorrenciaPessoaNumero',fld:'vOCORRENCIAPESSOANUMERO'},{av:'A2666OcorrenciaPessoaObservacao',fld:'OCORRENCIAPESSOAOBSERVACAO'}],[{av:'AV99OcorrenciaPessoaNumero',fld:'vOCORRENCIAPESSOANUMERO'},{av:'AV118GXLvl280',fld:'vGXLVL280'},{av:'AV98OcorrenciaPessoaObservacao',fld:'vOCORRENCIAPESSOAOBSERVACAO'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV112Pgmname',fld:'vPGMNAME'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV91QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'}],[{av:'AV106PessoaNome',fld:'vPESSOANOME'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV96OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV101EmpresaPadraoFiltro',fld:'vEMPRESAPADRAOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100DataSistema',fld:'vDATASISTEMA',hsh:true},{av:'AV97bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV102primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A2669OcorrenciaPessoaNome',fld:'OCORRENCIAPESSOANOME'}],[]];
   this.setPrompt("PROMPT_TITULARPESSOAID", [13]);
   this.setVCMap("AV100DataSistema", "vDATASISTEMA", 0, "date");
   this.setVCMap("AV67TitularPessoaIdParm", "vTITULARPESSOAIDPARM", 0, "int");
   this.setVCMap("AV95OcorrenciaPortariaTipoParm", "vOCORRENCIAPORTARIATIPOPARM", 0, "char");
   this.setVCMap("AV103TipoTela", "vTIPOTELA", 0, "char");
   this.setVCMap("AV100DataSistema", "vDATASISTEMA", 0, "date");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV100DataSistema"});
   GridContainer.addRefreshingVar({rfrVar:"AV97bmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV97bmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"A2669OcorrenciaPessoaNome", rfrProp:"Value", gxAttId:"2669"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasituacaoassociado());
