/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:51.88
*/
gx.evt.autoSkip = false;
gx.define('hdesfazerrenegociacao', false, function () {
   this.ServerClass =  "hdesfazerrenegociacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV21ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
   };
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vEMPRESAPESSOASEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vSNAVANCAR","Visible", 0 );
      gx.fn.setCtrlProperty("vSNAUTORIZA","Visible", 0 );
      gx.fn.setCtrlProperty("vNOPROC","Visible", 0 );
      gx.fn.setCtrlProperty("vSNAUX","Visible", 0 );
      gx.fn.setCtrlProperty("vSNFECHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vSNINICIO","Visible", 0 );
   };
   this.e11lq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13lq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14lq2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e15lq2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e12lq2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e19lq2_client=function()
   {
      this.executeServerEvent("'DETALHARRENEGOCIACAO'", true, arguments[0], false, false);
   };
   this.e20lq2_client=function()
   {
      this.executeServerEvent("'CONTASRENEGOCIACAO'", true, arguments[0], false, false);
   };
   this.e21lq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,25,27,29,31,46,48,49,50,51,52,53,54,60,63,64,65,66,67,68,69,70,71,76,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",47,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdesfazerrenegociacao",[],false,1,false,true,0,true,false,false,"CollSdtDesfazerReneg.SdtDesfazerRenegItem",0,"px","Novo registro",true,false,true,null,null,false,"AV45SdtDesfazerReneg",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11C",48,"CTLNUMERO","Número","","Numero","int",0,"px",8,8,"right",null,[],"GXV11C","GXV11C",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11D",49,"CTLDATA","Data","","Data","date",0,"px",10,10,"right",null,[],"GXV11D","GXV11D",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11E",50,"CTLVALORTOTAL","Valor Total","","ValorTotal","decimal",0,"px",22,22,"right",null,[],"GXV11E","GXV11E",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpreneg","vBMPRENEG",51,0,"px",17,"px","e20lq2_client","","Contas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppar","vBMPPAR",52,0,"px",17,"px","e19lq2_client","","Parc","Image","GridColumnImage");
   GridContainer.addCheckBox("GXV11H",53,"CTLSNMARCADO","Desfazer","","SnMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE11",grid:0};
   GXValidFnc[8]={fld:"TABLE12",grid:0};
   GXValidFnc[11]={fld:"TABLE14",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV16PessoaId",gxold:"OV16PessoaId",gxvar:"AV16PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV16PessoaId,0)},c2v:function(){gx.O.AV16PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV15PessoaFantasia",gxold:"OV15PessoaFantasia",gxvar:"AV15PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaFantasia=Value},v2z:function(Value){gx.O.ZV15PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV15PessoaFantasia,0)},c2v:function(){gx.O.AV15PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE8",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTRENEGINI",gxz:"ZV43DtRenegIni",gxold:"OV43DtRenegIni",gxvar:"AV43DtRenegIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43DtRenegIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV43DtRenegIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTRENEGINI",gx.O.AV43DtRenegIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV43DtRenegIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTRENEGINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTRENEGFIN",gxz:"ZV44DtRenegFin",gxold:"OV44DtRenegFin",gxvar:"AV44DtRenegFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44DtRenegFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV44DtRenegFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTRENEGFIN",gx.O.AV44DtRenegFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV44DtRenegFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTRENEGFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[31]={fld:"TABLE13",grid:0};
   GXValidFnc[46]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[48]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMERO",gxz:"ZV66GXV11C",gxold:"OV66GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66GXV11C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMERO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMERO",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATA",gxz:"ZV67GXV11D",gxold:"OV67GXV11D",gxvar:"GXV11D",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11D=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV67GXV11D=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATA",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATA",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORTOTAL",gxz:"ZV68GXV11E",gxold:"OV68GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68GXV11E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORTOTAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11E,2,',')},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORTOTAL",row || gx.fn.currentGridRowImpl(47),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPRENEG",gxz:"ZV59BmpReneg",gxold:"OV59BmpReneg",gxvar:"AV59BmpReneg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV59BmpReneg=Value},v2z:function(Value){gx.O.ZV59BmpReneg=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPRENEG",row || gx.fn.currentGridRowImpl(47),gx.O.AV59BmpReneg,gx.O.AV81Bmpreneg_GXI)},c2v:function(){gx.O.AV81Bmpreneg_GXI=this.val_GXI();gx.O.AV59BmpReneg=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPRENEG",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPRENEG_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV81Bmpreneg_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPAR",gxz:"ZV58BmpPar",gxold:"OV58BmpPar",gxvar:"AV58BmpPar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58BmpPar=Value},v2z:function(Value){gx.O.ZV58BmpPar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPAR",row || gx.fn.currentGridRowImpl(47),gx.O.AV58BmpPar,gx.O.AV80Bmppar_GXI)},c2v:function(){gx.O.AV80Bmppar_GXI=this.val_GXI();gx.O.AV58BmpPar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPAR",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPAR_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV80Bmppar_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMARCADO",gxz:"ZV69GXV11H",gxold:"OV69GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV11H=Value},v2z:function(Value){gx.O.ZV69GXV11H=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11H,"S")},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[54]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[60]={fld:"TABLE10",grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV42AcessoSistemaSequencia",gxold:"OV42AcessoSistemaSequencia",gxvar:"AV42AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV42AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV42AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV14EmpresaPessoasEmpresaId",gxold:"OV14EmpresaPessoasEmpresaId",gxvar:"AV14EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV14EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV14EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV14EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECHAR",gxz:"ZV34SnFechar",gxold:"OV34SnFechar",gxvar:"AV34SnFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SnFechar=Value},v2z:function(Value){gx.O.ZV34SnFechar=Value},v2c:function(){gx.fn.setControlValue("vSNFECHAR",gx.O.AV34SnFechar,0)},c2v:function(){gx.O.AV34SnFechar=this.val()},val:function(){return gx.fn.getControlValue("vSNFECHAR")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAVANCAR",gxz:"ZV26SnAvancar",gxold:"OV26SnAvancar",gxvar:"AV26SnAvancar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SnAvancar=Value},v2z:function(Value){gx.O.ZV26SnAvancar=Value},v2c:function(){gx.fn.setControlValue("vSNAVANCAR",gx.O.AV26SnAvancar,0)},c2v:function(){gx.O.AV26SnAvancar=this.val()},val:function(){return gx.fn.getControlValue("vSNAVANCAR")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAUTORIZA",gxz:"ZV28SnAutoriza",gxold:"OV28SnAutoriza",gxvar:"AV28SnAutoriza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SnAutoriza=Value},v2z:function(Value){gx.O.ZV28SnAutoriza=Value},v2c:function(){gx.fn.setControlValue("vSNAUTORIZA",gx.O.AV28SnAutoriza,0)},c2v:function(){gx.O.AV28SnAutoriza=this.val()},val:function(){return gx.fn.getControlValue("vSNAUTORIZA")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOPROC",gxz:"ZV33NoProc",gxold:"OV33NoProc",gxvar:"AV33NoProc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33NoProc=Value},v2z:function(Value){gx.O.ZV33NoProc=Value},v2c:function(){gx.fn.setControlValue("vNOPROC",gx.O.AV33NoProc,0)},c2v:function(){gx.O.AV33NoProc=this.val()},val:function(){return gx.fn.getControlValue("vNOPROC")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAUX",gxz:"ZV35SnAux",gxold:"OV35SnAux",gxvar:"AV35SnAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SnAux=Value},v2z:function(Value){gx.O.ZV35SnAux=Value},v2c:function(){gx.fn.setControlValue("vSNAUX",gx.O.AV35SnAux,0)},c2v:function(){gx.O.AV35SnAux=this.val()},val:function(){return gx.fn.getControlValue("vSNAUX")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINICIO",gxz:"ZV36SnInicio",gxold:"OV36SnInicio",gxvar:"AV36SnInicio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SnInicio=Value},v2z:function(Value){gx.O.ZV36SnInicio=Value},v2c:function(){gx.fn.setControlValue("vSNINICIO",gx.O.AV36SnInicio,0)},c2v:function(){gx.O.AV36SnInicio=this.val()},val:function(){return gx.fn.getControlValue("vSNINICIO")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[77]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV16PessoaId = 0 ;
   this.ZV16PessoaId = 0 ;
   this.OV16PessoaId = 0 ;
   this.AV15PessoaFantasia = "" ;
   this.ZV15PessoaFantasia = "" ;
   this.OV15PessoaFantasia = "" ;
   this.AV43DtRenegIni = gx.date.nullDate() ;
   this.ZV43DtRenegIni = gx.date.nullDate() ;
   this.OV43DtRenegIni = gx.date.nullDate() ;
   this.AV44DtRenegFin = gx.date.nullDate() ;
   this.ZV44DtRenegFin = gx.date.nullDate() ;
   this.OV44DtRenegFin = gx.date.nullDate() ;
   this.ZV66GXV11C = 0 ;
   this.OV66GXV11C = 0 ;
   this.ZV67GXV11D = gx.date.nullDate() ;
   this.OV67GXV11D = gx.date.nullDate() ;
   this.ZV68GXV11E = 0 ;
   this.OV68GXV11E = 0 ;
   this.ZV59BmpReneg = "" ;
   this.OV59BmpReneg = "" ;
   this.ZV58BmpPar = "" ;
   this.OV58BmpPar = "" ;
   this.ZV69GXV11H = "" ;
   this.OV69GXV11H = "" ;
   this.AV42AcessoSistemaSequencia = 0 ;
   this.ZV42AcessoSistemaSequencia = 0 ;
   this.OV42AcessoSistemaSequencia = 0 ;
   this.AV14EmpresaPessoasEmpresaId = "" ;
   this.ZV14EmpresaPessoasEmpresaId = "" ;
   this.OV14EmpresaPessoasEmpresaId = "" ;
   this.AV34SnFechar = "" ;
   this.ZV34SnFechar = "" ;
   this.OV34SnFechar = "" ;
   this.AV26SnAvancar = "" ;
   this.ZV26SnAvancar = "" ;
   this.OV26SnAvancar = "" ;
   this.AV28SnAutoriza = "" ;
   this.ZV28SnAutoriza = "" ;
   this.OV28SnAutoriza = "" ;
   this.AV33NoProc = "" ;
   this.ZV33NoProc = "" ;
   this.OV33NoProc = "" ;
   this.AV35SnAux = "" ;
   this.ZV35SnAux = "" ;
   this.OV35SnAux = "" ;
   this.AV36SnInicio = "" ;
   this.ZV36SnInicio = "" ;
   this.OV36SnInicio = "" ;
   this.AV16PessoaId = 0 ;
   this.AV15PessoaFantasia = "" ;
   this.AV43DtRenegIni = gx.date.nullDate() ;
   this.AV44DtRenegFin = gx.date.nullDate() ;
   this.AV42AcessoSistemaSequencia = 0 ;
   this.AV14EmpresaPessoasEmpresaId = "" ;
   this.AV34SnFechar = "" ;
   this.AV26SnAvancar = "" ;
   this.AV28SnAutoriza = "" ;
   this.AV33NoProc = "" ;
   this.AV35SnAux = "" ;
   this.AV36SnInicio = "" ;
   this.AV21ContaPagRecPagRec = "" ;
   this.GXV11C = 0 ;
   this.GXV11D = gx.date.nullDate() ;
   this.GXV11E = 0 ;
   this.AV59BmpReneg = "" ;
   this.AV58BmpPar = "" ;
   this.GXV11H = "" ;
   this.A1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1732RenegociacaoNumero = 0 ;
   this.A1731RenegociacaoEmpresaId = "" ;
   this.A1734RenegociacaoContaPagRecNumero = 0 ;
   this.A1733RenegociacaoContaPagRecEmpId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.A1071LancamentoAcrescimoId = 0 ;
   this.A1074LancamentoDescontoId = 0 ;
   this.A1068LancamentoBaixaId = 0 ;
   this.A1061NovoTipoCobrancaId = 0 ;
   this.A2207ContaLancamTpLancamReneg = "" ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.A1789ContaLancamTpBaixaPagRec = "" ;
   this.A1790ContaLancamTpBaixaSigla = "" ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1739ContaPagRecRenegId = 0 ;
   this.Events = {"e11lq2_client": ["'FECHAR'", true] ,"e13lq2_client": ["ENTER", true] ,"e14lq2_client": ["'DESMARCARTODOS'", true] ,"e15lq2_client": ["'MARCARTODOS'", true] ,"e12lq2_client": ["'CANCELAR'", true] ,"e19lq2_client": ["'DETALHARRENEGOCIACAO'", true] ,"e20lq2_client": ["'CONTASRENEGOCIACAO'", true] ,"e21lq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV14EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV43DtRenegIni',fld:'vDTRENEGINI'},{av:'AV44DtRenegFin',fld:'vDTRENEGFIN'},{av:'A1739ContaPagRecRenegId',fld:'CONTAPAGRECRENEGID'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV21ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV47ContaPagRecRenegIdAnt',fld:'vCONTAPAGRECRENEGIDANT'},{av:'AV46SdtDesfazerRenegItem',fld:'vSDTDESFAZERRENEGITEM'},{av:'AV39LancamentoAcrescimoId',fld:'vLANCAMENTOACRESCIMOID'},{av:'AV40LancamentoDescontoId',fld:'vLANCAMENTODESCONTOID'},{av:'AV41LancamentoBaixaId',fld:'vLANCAMENTOBAIXAID'},{av:'AV61NovoTipoCobrancaId',fld:'vNOVOTIPOCOBRANCAID'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV51ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2207ContaLancamTpLancamReneg',fld:'CONTALANCAMTPLANCAMRENEG'},{av:'A1789ContaLancamTpBaixaPagRec',fld:'CONTALANCAMTPBAIXAPAGREC'},{av:'A1790ContaLancamTpBaixaSigla',fld:'CONTALANCAMTPBAIXASIGLA'},{av:'A1731RenegociacaoEmpresaId',fld:'RENEGOCIACAOEMPRESAID'},{av:'AV50RenegociacaoEmpresaId',fld:'vRENEGOCIACAOEMPRESAID'},{av:'A1732RenegociacaoNumero',fld:'RENEGOCIACAONUMERO'},{av:'AV48ContaPagRecRenegId',fld:'vCONTAPAGRECRENEGID'},{av:'A1734RenegociacaoContaPagRecNumero',fld:'RENEGOCIACAOCONTAPAGRECNUMERO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV17TipoBaixaEmpresaId',fld:'vTIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV54ContaLancamTpBaixaSigla',fld:'vCONTALANCAMTPBAIXASIGLA'},{av:'A1071LancamentoAcrescimoId',fld:'LANCAMENTOACRESCIMOID'},{av:'A1074LancamentoDescontoId',fld:'LANCAMENTODESCONTOID'},{av:'A1068LancamentoBaixaId',fld:'LANCAMENTOBAIXAID'},{av:'A1061NovoTipoCobrancaId',fld:'NOVOTIPOCOBRANCAID'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV48ContaPagRecRenegId',fld:'vCONTAPAGRECRENEGID'},{av:'AV51ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV46SdtDesfazerRenegItem',fld:'vSDTDESFAZERRENEGITEM'},{av:'AV47ContaPagRecRenegIdAnt',fld:'vCONTAPAGRECRENEGIDANT'},{av:'AV30Filtros',fld:'vFILTROS'},{av:'AV72GXV2',fld:'vGXV2'},{av:'AV7MsgErro',fld:'vMSGERRO'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'},{av:'AV53ContaLancamTpBaixaPagRec',fld:'vCONTALANCAMTPBAIXAPAGREC'},{av:'AV54ContaLancamTpBaixaSigla',fld:'vCONTALANCAMTPBAIXASIGLA'},{av:'AV60StSeleci',fld:'vSTSELECI'},{av:'AV49RenegociacaoContaPagRecNumero',fld:'vRENEGOCIACAOCONTAPAGRECNUMERO'},{av:'AV39LancamentoAcrescimoId',fld:'vLANCAMENTOACRESCIMOID'},{av:'AV40LancamentoDescontoId',fld:'vLANCAMENTODESCONTOID'},{av:'AV41LancamentoBaixaId',fld:'vLANCAMENTOBAIXAID'},{av:'AV61NovoTipoCobrancaId',fld:'vNOVOTIPOCOBRANCAID'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV26SnAvancar',fld:'vSNAVANCAR'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV58BmpPar',fld:'vBMPPAR'},{av:'gx.fn.getCtrlProperty("vBMPPAR","Tooltiptext")',ctrl:'vBMPPAR',prop:'Tooltiptext'},{av:'AV59BmpReneg',fld:'vBMPRENEG'},{av:'gx.fn.getCtrlProperty("vBMPRENEG","Tooltiptext")',ctrl:'vBMPRENEG',prop:'Tooltiptext'}]];
   this.EvtParms["'DETALHARRENEGOCIACAO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}]];
   this.EvtParms["'CONTASRENEGOCIACAO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47}],[{av:'AV45SdtDesfazerReneg',fld:'vSDTDESFAZERRENEG',grid:47},{av:'AV26SnAvancar',fld:'vSNAVANCAR'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGINI","Enabled")',ctrl:'vDTRENEGINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTRENEGFIN","Enabled")',ctrl:'vDTRENEGFIN',prop:'Enabled'}]];
   this.setPrompt("PROMPT_PESSOAID", [16]);
   this.EnterCtrl = ["BTNAVANCAR" ,"BTNCONFIRMAR"];
   this.setVCMap("AV21ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   this.addGridBCProperty("Sdtdesfazerreneg", ["Numero"], this.GXValidFnc[48], "AV45SdtDesfazerReneg");
   this.addGridBCProperty("Sdtdesfazerreneg", ["Data"], this.GXValidFnc[49], "AV45SdtDesfazerReneg");
   this.addGridBCProperty("Sdtdesfazerreneg", ["ValorTotal"], this.GXValidFnc[50], "AV45SdtDesfazerReneg");
   this.addGridBCProperty("Sdtdesfazerreneg", ["SnMarcado"], this.GXValidFnc[53], "AV45SdtDesfazerReneg");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdesfazerrenegociacao());
