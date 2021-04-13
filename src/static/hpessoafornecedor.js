/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:42:13.28
*/
gx.evt.autoSkip = false;
gx.define('hpessoafornecedor', false, function () {
   this.ServerClass =  "hpessoafornecedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV107EmpresaCodificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACODIFICACAOEMPRESAID") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV147emBranco=gx.fn.getControlValue("vEMBRANCO") ;
      this.AV208BlueFocusEnv=gx.fn.getControlValue("vBLUEFOCUSENV") ;
      this.AV128CaminhoPessoa=gx.fn.getControlValue("vCAMINHOPESSOA") ;
      this.AV43Modo=gx.fn.getControlValue("vMODO") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A434PessoaEmail=gx.fn.getControlValue("PESSOAEMAIL") ;
      this.AV151CodifPossuiDados=gx.fn.getControlValue("vCODIFPOSSUIDADOS") ;
      this.AV152ClassPossuiDados=gx.fn.getControlValue("vCLASSPOSSUIDADOS") ;
      this.AV137CodificacaoPadrao=gx.fn.getControlValue("vCODIFICACAOPADRAO") ;
      this.AV138ClassificacaoPadrao=gx.fn.getControlValue("vCLASSIFICACAOPADRAO") ;
      this.AV127IntFinCbl=gx.fn.getControlValue("vINTFINCBL") ;
      this.AV149PessoaCliente=gx.fn.getControlValue("vPESSOACLIENTE") ;
      this.AV161SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
      this.AV162SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV163SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV164SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV177Tela=gx.fn.getControlValue("vTELA") ;
      this.AV150LimpaTela=gx.fn.getControlValue("vLIMPATELA") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoatipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOATIPOPESSOA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaufinsc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAUFINSC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoanaturalidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOANATURALIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoacidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOACIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoabanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOABANCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaagencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAAGENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoatransportadorcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOATRANSPORTADORCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoid",["gx.O.AV108EmpresaClassificacaoEmpresaId", "gx.O.AV103ClassificacaoId", "gx.O.AV104OpcaoClassificacaoId"],["AV104OpcaoClassificacaoId"]);
      return true;
   }
   this.Validv_Bancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOID");
         this.AnyError  = 0;
         gxajaxCallCrl(["AV108EmpresaClassificacaoEmpresaId","AV103ClassificacaoId"],"vOPCAOCLASSIFICACAOID");
      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      if ( this.AV151CodifPossuiDados == "S" )
      {
         this.AV147emBranco =  "N"  ;
      }
      else
      {
         this.AV147emBranco =  "S"  ;
      }
      this.AV118Cont = gx.num.trunc( 0 ,0) ;
      /* Start For Each Line in Gridcodif */
      var rowIdx359 = 1 ;
      var currentRowIdx359 = gx.fn.currentGridRowImpl(359) ;
      var rowIdxS359 ;
      var gridObj359 = gx.O.getGridById(359,0) ;
      while ( rowIdx359 <= gridObj359.grid.rows.length )
      {
         rowIdxS359 =  gx.text.padl( gx.text.tostring( rowIdx359), 4, "0")  ;
         gridObj359.instanciateRow(gridObj359.grid.getRowById(rowIdx359 - 1));
         this.AV118Cont = gx.num.trunc( this.AV118Cont + 1 ,0) ;
         this.AV124CodificacaoSnRemoveVet[this.AV118Cont-1] = gx.num.trunc( this.AV123CodificacaoSnRemove ,0) ;
         this.AV114CodificacaoIdVet[this.AV118Cont-1] =  this.AV98CodificacaoId  ;
         this.AV115CodificacaoPessoaValorVet[this.AV118Cont-1] =  this.AV99CodificacaoPessoaValor  ;
         this.AV116CodificacaoNivelUsuarioIdVet[this.AV118Cont-1] =  this.AV100CodificacaoNivelUsuarioId  ;
         this.AV117CodificacaoNivelDataHoraAltVet[this.AV118Cont-1] =  this.AV101CodificacaoNivelDataHoraAlt  ;
         if ( ! (""==this.AV98CodificacaoId) )
         {
            this.AV147emBranco =  "N"  ;
         }
         rowIdx359 = gx.num.trunc( rowIdx359 + 1 ,0) ;
      }
      if ( currentRowIdx359 )
      {
         gridObj359.instanciateRow(currentRowIdx359);
      }
   };
   this.s152_client=function()
   {
      if ( this.AV152ClassPossuiDados == "S" )
      {
         this.AV147emBranco =  "N"  ;
      }
      else
      {
         this.AV147emBranco =  "S"  ;
      }
      this.AV118Cont = gx.num.trunc( 0 ,0) ;
      /* Start For Each Line in Gridclass */
      var rowIdx371 = 1 ;
      var currentRowIdx371 = gx.fn.currentGridRowImpl(371) ;
      var rowIdxS371 ;
      var gridObj371 = gx.O.getGridById(371,0) ;
      while ( rowIdx371 <= gridObj371.grid.rows.length )
      {
         rowIdxS371 =  gx.text.padl( gx.text.tostring( rowIdx371), 4, "0")  ;
         gridObj371.instanciateRow(gridObj371.grid.getRowById(rowIdx371 - 1));
         this.AV118Cont = gx.num.trunc( this.AV118Cont + 1 ,0) ;
         this.AV126ClassificacaoSnRemoveVet[this.AV118Cont-1] = gx.num.trunc( this.AV125ClassificacaoSnRemove ,0) ;
         this.AV119ClassificacaoIdVet[this.AV118Cont-1] =  this.AV103ClassificacaoId  ;
         this.AV120OpcaoClassificacaoIdVet[this.AV118Cont-1] =  this.AV104OpcaoClassificacaoId  ;
         this.AV121ClassificacaoNivelUsuarioIdVet[this.AV118Cont-1] =  this.AV105ClassificacaoNivelUsuarioId  ;
         this.AV122ClassificacaoNivelDataHoraAltVet[this.AV118Cont-1] =  this.AV106ClassificacaoNivelDataHoraAlt  ;
         if ( ! (""==this.AV103ClassificacaoId) )
         {
            this.AV147emBranco =  "N"  ;
         }
         rowIdx371 = gx.num.trunc( rowIdx371 + 1 ,0) ;
      }
      if ( currentRowIdx371 )
      {
         gridObj371.instanciateRow(currentRowIdx371);
      }
   };
   this.e23ku2_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e11ku2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12ku2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ku2_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e14ku2_client=function()
   {
      this.executeServerEvent("'CADUSUCOTONLINE'", false, null, false, false);
   };
   this.e15ku2_client=function()
   {
      this.executeServerEvent("VPESSOATRANSPORTADORCODIGO.ISVALID", true, null, false, true);
   };
   this.e19ku2_client=function()
   {
      this.executeServerEvent("VCODIFICACAOID.CLICK", true, arguments[0], false, false);
   };
   this.e22ku2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, arguments[0], false, false);
   };
   this.e20ku2_client=function()
   {
      this.executeServerEvent("VCODIFICACAOPESSOAVALOR.ISVALID", true, arguments[0], false, false);
   };
   this.e24ku2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,60,62,65,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,121,124,127,130,133,136,137,140,143,145,146,151,153,156,158,160,165,167,172,174,179,181,182,187,189,191,193,196,198,200,202,205,207,212,214,216,218,221,223,228,230,235,237,240,243,246,249,251,252,255,257,260,262,264,266,269,271,274,276,279,281,284,286,289,291,292,293,294,295,298,300,303,305,308,310,313,315,318,320,323,325,328,330,331,333,336,339,342,345,348,351,354,355,358,360,361,362,363,364,365,366,367,370,372,373,374,375,376,377,378,379,382,383,384,387,390,392,394,400,407,408,409,410,411,412,413,414,416,417,418,419,420,421];
   this.GXLastCtrlId =421;
   this.GridcodifContainer = new gx.grid.grid(this, 2,"WbpLvl2",359,"Gridcodif","Gridcodif","GridcodifContainer",this.CmpContext,this.IsMasterPage,"hpessoafornecedor",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridcodifContainer = this.GridcodifContainer;
   GridcodifContainer.addCheckBox("Codificacaosnremove",360,"vCODIFICACAOSNREMOVE","","","CodificacaoSnRemove","int",1,0,null,true,false,0,"px","");
   GridcodifContainer.addComboBox("Codificacaoid",361,"vCODIFICACAOID","Código","CodificacaoId","char","e19ku2_client",1,true,false,0,"px","");
   GridcodifContainer.addSingleLineEdit("Codificacaopessoavalor",362,"vCODIFICACAOPESSOAVALOR","Valor","","CodificacaoPessoaValor","char",0,"px",20,20,"left",null,[],"Codificacaopessoavalor","CodificacaoPessoaValor",true,0,false,false,"Attribute",1,"");
   GridcodifContainer.addSingleLineEdit("Codificacaonivelusuarioid",363,"vCODIFICACAONIVELUSUARIOID","Usuário","","CodificacaoNivelUsuarioId","char",0,"px",12,12,"left",null,[],"Codificacaonivelusuarioid","CodificacaoNivelUsuarioId",true,0,false,false,"Attribute",1,"");
   GridcodifContainer.addSingleLineEdit("Codificacaoniveldatahoraalt",364,"vCODIFICACAONIVELDATAHORAALT","Última Alteração","","CodificacaoNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"Codificacaoniveldatahoraalt","CodificacaoNivelDataHoraAlt",true,5,false,false,"Attribute",1,"");
   GridcodifContainer.addBitmap("&Aparecerlinhas","vAPARECERLINHAS",365,0,"px",17,"px","e23ku2_client","","Aparecer Linhas","Image","");
   this.setGrid(GridcodifContainer);
   this.GridclassContainer = new gx.grid.grid(this, 9,"WbpLvl9",371,"Gridclass","Gridclass","GridclassContainer",this.CmpContext,this.IsMasterPage,"hpessoafornecedor",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridclassContainer = this.GridclassContainer;
   GridclassContainer.addCheckBox("Classificacaosnremove",372,"vCLASSIFICACAOSNREMOVE","","","ClassificacaoSnRemove","int",1,0,null,true,false,0,"px","");
   GridclassContainer.addComboBox("Classificacaoid",373,"vCLASSIFICACAOID","Classificação","ClassificacaoId","char","e22ku2_client",1,true,false,0,"px","");
   GridclassContainer.addComboBox("Opcaoclassificacaoid",374,"vOPCAOCLASSIFICACAOID","Descrição","OpcaoClassificacaoId","char",null,0,true,false,0,"px","");
   GridclassContainer.addSingleLineEdit("Classificacaonivelusuarioid",375,"vCLASSIFICACAONIVELUSUARIOID","Usuário","","ClassificacaoNivelUsuarioId","char",0,"px",12,12,"left",null,[],"Classificacaonivelusuarioid","ClassificacaoNivelUsuarioId",true,0,false,false,"Attribute",1,"");
   GridclassContainer.addSingleLineEdit("Classificacaoniveldatahoraalt",376,"vCLASSIFICACAONIVELDATAHORAALT","Última Alteração","","ClassificacaoNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"Classificacaoniveldatahoraalt","ClassificacaoNivelDataHoraAlt",true,5,false,false,"Attribute",1,"");
   GridclassContainer.addBitmap("&Aparecerlinhas","vAPARECERLINHAS",377,0,"px",17,"px","e23ku2_client","","Aparecer Linhas","Image","");
   this.setGrid(GridclassContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV206Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV206Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV206Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE10",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE13",grid:0};
   GXValidFnc[12]={fld:"TABLE14",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV39PessoaId",gxold:"OV39PessoaId",gxvar:"AV39PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV39PessoaId,0)},c2v:function(){gx.O.AV39PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoatipopessoa,isvalid:null,rgrid:[],fld:"vPESSOATIPOPESSOA",gxz:"ZV25PessoaTipoPessoa",gxold:"OV25PessoaTipoPessoa",gxvar:"AV25PessoaTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25PessoaTipoPessoa=Value},v2z:function(Value){gx.O.ZV25PessoaTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOPESSOA",gx.O.AV25PessoaTipoPessoa)},c2v:function(){gx.O.AV25PessoaTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV26PessoaRazaoSocial",gxold:"OV26PessoaRazaoSocial",gxvar:"AV26PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV26PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV26PessoaRazaoSocial,0)},c2v:function(){gx.O.AV26PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV27PessoaFantasia",gxold:"OV27PessoaFantasia",gxvar:"AV27PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaFantasia=Value},v2z:function(Value){gx.O.ZV27PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV27PessoaFantasia,0)},c2v:function(){gx.O.AV27PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASITUACAO",gxz:"ZV28PessoaSituacao",gxold:"OV28PessoaSituacao",gxvar:"AV28PessoaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28PessoaSituacao=Value},v2z:function(Value){gx.O.ZV28PessoaSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOASITUACAO",gx.O.AV28PessoaSituacao)},c2v:function(){gx.O.AV28PessoaSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASITUACAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV29PessoaCNPJ",gxold:"OV29PessoaCNPJ",gxvar:"AV29PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV29PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV29PessoaCNPJ,0)},c2v:function(){gx.O.AV29PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAINSCESTADUAL",gxz:"ZV30PessoaInscEstadual",gxold:"OV30PessoaInscEstadual",gxvar:"AV30PessoaInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PessoaInscEstadual=Value},v2z:function(Value){gx.O.ZV30PessoaInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vPESSOAINSCESTADUAL",gx.O.AV30PessoaInscEstadual,0)},c2v:function(){gx.O.AV30PessoaInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaufinsc,isvalid:null,rgrid:[],fld:"vPESSOAUFINSC",gxz:"ZV31PessoaUFInsc",gxold:"OV31PessoaUFInsc",gxvar:"AV31PessoaUFInsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31PessoaUFInsc=Value},v2z:function(Value){gx.O.ZV31PessoaUFInsc=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOAUFINSC",gx.O.AV31PessoaUFInsc)},c2v:function(){gx.O.AV31PessoaUFInsc=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAUFINSC")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAINSCPRODUTORRURAL",gxz:"ZV160PessoaInscProdutorRural",gxold:"OV160PessoaInscProdutorRural",gxvar:"AV160PessoaInscProdutorRural",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV160PessoaInscProdutorRural=Value},v2z:function(Value){gx.O.ZV160PessoaInscProdutorRural=Value},v2c:function(){gx.fn.setControlValue("vPESSOAINSCPRODUTORRURAL",gx.O.AV160PessoaInscProdutorRural,0)},c2v:function(){gx.O.AV160PessoaInscProdutorRural=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAINSCPRODUTORRURAL")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAINSCMUNICIPAL",gxz:"ZV32PessoaInscMunicipal",gxold:"OV32PessoaInscMunicipal",gxvar:"AV32PessoaInscMunicipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PessoaInscMunicipal=Value},v2z:function(Value){gx.O.ZV32PessoaInscMunicipal=Value},v2c:function(){gx.fn.setControlValue("vPESSOAINSCMUNICIPAL",gx.O.AV32PessoaInscMunicipal,0)},c2v:function(){gx.O.AV32PessoaInscMunicipal=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAINSCMUNICIPAL")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASUFRAMA",gxz:"ZV174PessoaSuframa",gxold:"OV174PessoaSuframa",gxvar:"AV174PessoaSuframa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV174PessoaSuframa=Value},v2z:function(Value){gx.O.ZV174PessoaSuframa=Value},v2c:function(){gx.fn.setControlValue("vPESSOASUFRAMA",gx.O.AV174PessoaSuframa,0)},c2v:function(){gx.O.AV174PessoaSuframa=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASUFRAMA")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TABLE3",grid:0};
   GXValidFnc[72]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADATACADASTRO",gxz:"ZV48PessoaDataCadastro",gxold:"OV48PessoaDataCadastro",gxvar:"AV48PessoaDataCadastro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48PessoaDataCadastro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV48PessoaDataCadastro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADATACADASTRO",gx.O.AV48PessoaDataCadastro,0)},c2v:function(){gx.O.AV48PessoaDataCadastro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOADATACADASTRO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADATACANCELAMENTO",gxz:"ZV49PessoaDataCancelamento",gxold:"OV49PessoaDataCancelamento",gxvar:"AV49PessoaDataCancelamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PessoaDataCancelamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV49PessoaDataCancelamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADATACANCELAMENTO",gx.O.AV49PessoaDataCancelamento,0)},c2v:function(){gx.O.AV49PessoaDataCancelamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOADATACANCELAMENTO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACPF",gxz:"ZV37PessoaCPF",gxold:"OV37PessoaCPF",gxvar:"AV37PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PessoaCPF=Value},v2z:function(Value){gx.O.ZV37PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV37PessoaCPF,0)},c2v:function(){gx.O.AV37PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARG",gxz:"ZV50PessoaRG",gxold:"OV50PessoaRG",gxvar:"AV50PessoaRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50PessoaRG=Value},v2z:function(Value){gx.O.ZV50PessoaRG=Value},v2c:function(){gx.fn.setControlValue("vPESSOARG",gx.O.AV50PessoaRG,0)},c2v:function(){gx.O.AV50PessoaRG=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARG")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAORGAOEXP",gxz:"ZV51PessoaOrgaoExp",gxold:"OV51PessoaOrgaoExp",gxvar:"AV51PessoaOrgaoExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51PessoaOrgaoExp=Value},v2z:function(Value){gx.O.ZV51PessoaOrgaoExp=Value},v2c:function(){gx.fn.setControlValue("vPESSOAORGAOEXP",gx.O.AV51PessoaOrgaoExp,0)},c2v:function(){gx.O.AV51PessoaOrgaoExp=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAORGAOEXP")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADATAEXP",gxz:"ZV52PessoaDataExp",gxold:"OV52PessoaDataExp",gxvar:"AV52PessoaDataExp",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52PessoaDataExp=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV52PessoaDataExp=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADATAEXP",gx.O.AV52PessoaDataExp,0)},c2v:function(){gx.O.AV52PessoaDataExp=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOADATAEXP")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADATANASC",gxz:"ZV53PessoaDataNasc",gxold:"OV53PessoaDataNasc",gxvar:"AV53PessoaDataNasc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53PessoaDataNasc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV53PessoaDataNasc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADATANASC",gx.O.AV53PessoaDataNasc,0)},c2v:function(){gx.O.AV53PessoaDataNasc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOADATANASC")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoanaturalidadeid,isvalid:null,rgrid:[],fld:"vPESSOANATURALIDADEID",gxz:"ZV54PessoaNaturalidadeId",gxold:"OV54PessoaNaturalidadeId",gxvar:"AV54PessoaNaturalidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PessoaNaturalidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54PessoaNaturalidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANATURALIDADEID",gx.O.AV54PessoaNaturalidadeId,0)},c2v:function(){gx.O.AV54PessoaNaturalidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANATURALIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASEXO",gxz:"ZV55PessoaSexo",gxold:"OV55PessoaSexo",gxvar:"AV55PessoaSexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV55PessoaSexo=Value},v2z:function(Value){gx.O.ZV55PessoaSexo=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOASEXO",gx.O.AV55PessoaSexo)},c2v:function(){gx.O.AV55PessoaSexo=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASEXO")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAESTADOCIVIL",gxz:"ZV56PessoaEstadoCivil",gxold:"OV56PessoaEstadoCivil",gxvar:"AV56PessoaEstadoCivil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV56PessoaEstadoCivil=Value},v2z:function(Value){gx.O.ZV56PessoaEstadoCivil=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOAESTADOCIVIL",gx.O.AV56PessoaEstadoCivil)},c2v:function(){gx.O.AV56PessoaEstadoCivil=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAESTADOCIVIL")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TABLE6",grid:0};
   GXValidFnc[124]={fld:"TABLEIMAGEM",grid:0};
   GXValidFnc[127]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV205Imagem",gxold:"OV205Imagem",gxvar:"AV205Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV205Imagem=Value},v2z:function(Value){gx.O.ZV205Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV205Imagem,gx.O.AV236Imagem_GXI)},c2v:function(){gx.O.AV236Imagem_GXI=this.val_GXI();gx.O.AV205Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM_GXI")}, gxvar_GXI:'AV236Imagem_GXI',nac:gx.falseFn};
   GXValidFnc[130]={fld:"TXTCARREGARIMG", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFORNECEDOR",gxz:"ZV57PessoaFornecedor",gxold:"OV57PessoaFornecedor",gxvar:"AV57PessoaFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV57PessoaFornecedor=Value},v2z:function(Value){gx.O.ZV57PessoaFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFORNECEDOR",gx.O.AV57PessoaFornecedor,"S")},c2v:function(){gx.O.AV57PessoaFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[136]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFABRICANTE",gxz:"ZV58PessoaFabricante",gxold:"OV58PessoaFabricante",gxvar:"AV58PessoaFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV58PessoaFabricante=Value},v2z:function(Value){gx.O.ZV58PessoaFabricante=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAFABRICANTE",gx.O.AV58PessoaFabricante,"S")},c2v:function(){gx.O.AV58PessoaFabricante=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFABRICANTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[137]={fld:"TAB2",grid:0};
   GXValidFnc[140]={fld:"TABLE5",grid:0};
   GXValidFnc[143]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV61PessoaCEP",gxold:"OV61PessoaCEP",gxvar:"AV61PessoaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61PessoaCEP=Value},v2z:function(Value){gx.O.ZV61PessoaCEP=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV61PessoaCEP,0)},c2v:function(){gx.O.AV61PessoaCEP=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[146]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[151]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[153]={fld:"TABLE7",grid:0};
   GXValidFnc[156]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV62PessoaEndereco",gxold:"OV62PessoaEndereco",gxvar:"AV62PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62PessoaEndereco=Value},v2z:function(Value){gx.O.ZV62PessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV62PessoaEndereco,0)},c2v:function(){gx.O.AV62PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANUMEROEND",gxz:"ZV63PessoaNumeroEnd",gxold:"OV63PessoaNumeroEnd",gxvar:"AV63PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV63PessoaNumeroEnd,0)},c2v:function(){gx.O.AV63PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[165]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACOMPLEMENTO",gxz:"ZV64PessoaComplemento",gxold:"OV64PessoaComplemento",gxvar:"AV64PessoaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64PessoaComplemento=Value},v2z:function(Value){gx.O.ZV64PessoaComplemento=Value},v2c:function(){gx.fn.setControlValue("vPESSOACOMPLEMENTO",gx.O.AV64PessoaComplemento,0)},c2v:function(){gx.O.AV64PessoaComplemento=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABAIRRO",gxz:"ZV65PessoaBairro",gxold:"OV65PessoaBairro",gxvar:"AV65PessoaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65PessoaBairro=Value},v2z:function(Value){gx.O.ZV65PessoaBairro=Value},v2c:function(){gx.fn.setControlValue("vPESSOABAIRRO",gx.O.AV65PessoaBairro,0)},c2v:function(){gx.O.AV65PessoaBairro=this.val()},val:function(){return gx.fn.getControlValue("vPESSOABAIRRO")},nac:gx.falseFn};
   GXValidFnc[179]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[181]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacidadeid,isvalid:null,rgrid:[],fld:"vPESSOACIDADEID",gxz:"ZV66PessoaCidadeId",gxold:"OV66PessoaCidadeId",gxvar:"AV66PessoaCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66PessoaCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66PessoaCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOACIDADEID",gx.O.AV66PessoaCidadeId,0)},c2v:function(){gx.O.AV66PessoaCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOACIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACIDADENOME",gxz:"ZV67PessoaCidadeNome",gxold:"OV67PessoaCidadeNome",gxvar:"AV67PessoaCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67PessoaCidadeNome=Value},v2z:function(Value){gx.O.ZV67PessoaCidadeNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOACIDADENOME",gx.O.AV67PessoaCidadeNome,0)},c2v:function(){gx.O.AV67PessoaCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACIDADENOME")},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV68PessoaTelefone",gxold:"OV68PessoaTelefone",gxvar:"AV68PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68PessoaTelefone=Value},v2z:function(Value){gx.O.ZV68PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV68PessoaTelefone,0)},c2v:function(){gx.O.AV68PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[191]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[193]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAMAL",gxz:"ZV69PessoaRamal",gxold:"OV69PessoaRamal",gxvar:"AV69PessoaRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69PessoaRamal=Value},v2z:function(Value){gx.O.ZV69PessoaRamal=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAMAL",gx.O.AV69PessoaRamal,0)},c2v:function(){gx.O.AV69PessoaRamal=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAMAL")},nac:gx.falseFn};
   GXValidFnc[196]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFAX",gxz:"ZV72PessoaFax",gxold:"OV72PessoaFax",gxvar:"AV72PessoaFax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72PessoaFax=Value},v2z:function(Value){gx.O.ZV72PessoaFax=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFAX",gx.O.AV72PessoaFax,0)},c2v:function(){gx.O.AV72PessoaFax=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFAX")},nac:gx.falseFn};
   GXValidFnc[200]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAMALFAX",gxz:"ZV70PessoaRamalFax",gxold:"OV70PessoaRamalFax",gxvar:"AV70PessoaRamalFax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaRamalFax=Value},v2z:function(Value){gx.O.ZV70PessoaRamalFax=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAMALFAX",gx.O.AV70PessoaRamalFax,0)},c2v:function(){gx.O.AV70PessoaRamalFax=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAMALFAX")},nac:gx.falseFn};
   GXValidFnc[205]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[207]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACELULAR",gxz:"ZV73PessoaCelular",gxold:"OV73PessoaCelular",gxvar:"AV73PessoaCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73PessoaCelular=Value},v2z:function(Value){gx.O.ZV73PessoaCelular=Value},v2c:function(){gx.fn.setControlValue("vPESSOACELULAR",gx.O.AV73PessoaCelular,0)},c2v:function(){gx.O.AV73PessoaCelular=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACELULAR")},nac:gx.falseFn};
   GXValidFnc[212]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[214]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACONTATO",gxz:"ZV74PessoaContato",gxold:"OV74PessoaContato",gxvar:"AV74PessoaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74PessoaContato=Value},v2z:function(Value){gx.O.ZV74PessoaContato=Value},v2c:function(){gx.fn.setControlValue("vPESSOACONTATO",gx.O.AV74PessoaContato,0)},c2v:function(){gx.O.AV74PessoaContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACONTATO")},nac:gx.falseFn};
   GXValidFnc[216]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[218]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONECONTATO",gxz:"ZV71PessoaTelefoneContato",gxold:"OV71PessoaTelefoneContato",gxvar:"AV71PessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71PessoaTelefoneContato=Value},v2z:function(Value){gx.O.ZV71PessoaTelefoneContato=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONECONTATO",gx.O.AV71PessoaTelefoneContato,0)},c2v:function(){gx.O.AV71PessoaTelefoneContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONECONTATO")},nac:gx.falseFn};
   GXValidFnc[221]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[223]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASITE",gxz:"ZV90PessoaSite",gxold:"OV90PessoaSite",gxvar:"AV90PessoaSite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90PessoaSite=Value},v2z:function(Value){gx.O.ZV90PessoaSite=Value},v2c:function(){gx.fn.setControlValue("vPESSOASITE",gx.O.AV90PessoaSite,0)},c2v:function(){gx.O.AV90PessoaSite=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASITE")},nac:gx.falseFn};
   GXValidFnc[228]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAIL",gxz:"ZV91PessoaEmail",gxold:"OV91PessoaEmail",gxvar:"AV91PessoaEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91PessoaEmail=Value},v2z:function(Value){gx.O.ZV91PessoaEmail=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAIL",gx.O.AV91PessoaEmail,0)},c2v:function(){gx.O.AV91PessoaEmail=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAIL")},nac:gx.falseFn};
   GXValidFnc[235]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[237]={lvl:0,type:"svchar",len:160,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAILDANFE",gxz:"ZV192PessoaEmailDanfe",gxold:"OV192PessoaEmailDanfe",gxvar:"AV192PessoaEmailDanfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV192PessoaEmailDanfe=Value},v2z:function(Value){gx.O.ZV192PessoaEmailDanfe=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAILDANFE",gx.O.AV192PessoaEmailDanfe,0)},c2v:function(){gx.O.AV192PessoaEmailDanfe=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAILDANFE")},nac:gx.falseFn};
   GXValidFnc[240]={fld:"TAB3",grid:0};
   GXValidFnc[243]={fld:"TABLE15",grid:0};
   GXValidFnc[246]={fld:"TABLE16",grid:0};
   GXValidFnc[249]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[251]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoabanco,isvalid:null,rgrid:[],fld:"vPESSOABANCO",gxz:"ZV85PessoaBanco",gxold:"OV85PessoaBanco",gxvar:"AV85PessoaBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85PessoaBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85PessoaBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOABANCO",gx.O.AV85PessoaBanco,0)},c2v:function(){gx.O.AV85PessoaBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOABANCO",'.')},nac:gx.falseFn};
   GXValidFnc[252]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV190BancoNome",gxold:"OV190BancoNome",gxvar:"AV190BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV190BancoNome=Value},v2z:function(Value){gx.O.ZV190BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV190BancoNome,0)},c2v:function(){gx.O.AV190BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[255]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[257]={fld:"TABLE17",grid:0};
   GXValidFnc[260]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaagencia,isvalid:null,rgrid:[],fld:"vPESSOAAGENCIA",gxz:"ZV86PessoaAgencia",gxold:"OV86PessoaAgencia",gxvar:"AV86PessoaAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86PessoaAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86PessoaAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAAGENCIA",gx.O.AV86PessoaAgencia,0)},c2v:function(){gx.O.AV86PessoaAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[262]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADIGITOAGENCIA",gxz:"ZV87PessoaDigitoAgencia",gxold:"OV87PessoaDigitoAgencia",gxvar:"AV87PessoaDigitoAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87PessoaDigitoAgencia=Value},v2z:function(Value){gx.O.ZV87PessoaDigitoAgencia=Value},v2c:function(){gx.fn.setControlValue("vPESSOADIGITOAGENCIA",gx.O.AV87PessoaDigitoAgencia,0)},c2v:function(){gx.O.AV87PessoaDigitoAgencia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOADIGITOAGENCIA")},nac:gx.falseFn};
   GXValidFnc[266]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIANOME",gxz:"ZV191BancoAgenciaNome",gxold:"OV191BancoAgenciaNome",gxvar:"AV191BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV191BancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV191BancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIANOME",gx.O.AV191BancoAgenciaNome,0)},c2v:function(){gx.O.AV191BancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[269]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[271]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACONTABANCARIA",gxz:"ZV88PessoaContaBancaria",gxold:"OV88PessoaContaBancaria",gxvar:"AV88PessoaContaBancaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88PessoaContaBancaria=Value},v2z:function(Value){gx.O.ZV88PessoaContaBancaria=Value},v2c:function(){gx.fn.setControlValue("vPESSOACONTABANCARIA",gx.O.AV88PessoaContaBancaria,0)},c2v:function(){gx.O.AV88PessoaContaBancaria=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACONTABANCARIA")},nac:gx.falseFn};
   GXValidFnc[274]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[276]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAULTIMACOMPRA",gxz:"ZV89PessoaUltimaCompra",gxold:"OV89PessoaUltimaCompra",gxvar:"AV89PessoaUltimaCompra",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89PessoaUltimaCompra=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV89PessoaUltimaCompra=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAULTIMACOMPRA",gx.O.AV89PessoaUltimaCompra,0)},c2v:function(){gx.O.AV89PessoaUltimaCompra=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOAULTIMACOMPRA")},nac:gx.falseFn};
   GXValidFnc[279]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[281]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFORMAPAGTOPADRAO",gxz:"ZV93PessoaFormaPagtoPadrao",gxold:"OV93PessoaFormaPagtoPadrao",gxvar:"AV93PessoaFormaPagtoPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93PessoaFormaPagtoPadrao=Value},v2z:function(Value){gx.O.ZV93PessoaFormaPagtoPadrao=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFORMAPAGTOPADRAO",gx.O.AV93PessoaFormaPagtoPadrao,0)},c2v:function(){gx.O.AV93PessoaFormaPagtoPadrao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFORMAPAGTOPADRAO")},nac:gx.falseFn};
   GXValidFnc[284]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[286]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAPRAZOENTREGAPADRAO",gxz:"ZV94PessoaPrazoEntregaPadrao",gxold:"OV94PessoaPrazoEntregaPadrao",gxvar:"AV94PessoaPrazoEntregaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94PessoaPrazoEntregaPadrao=Value},v2z:function(Value){gx.O.ZV94PessoaPrazoEntregaPadrao=Value},v2c:function(){gx.fn.setControlValue("vPESSOAPRAZOENTREGAPADRAO",gx.O.AV94PessoaPrazoEntregaPadrao,0)},c2v:function(){gx.O.AV94PessoaPrazoEntregaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAPRAZOENTREGAPADRAO")},nac:gx.falseFn};
   GXValidFnc[289]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[291]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAPCDESCONTO1",gxz:"ZV80PessoaPcDesconto1",gxold:"OV80PessoaPcDesconto1",gxvar:"AV80PessoaPcDesconto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80PessoaPcDesconto1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV80PessoaPcDesconto1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESSOAPCDESCONTO1",gx.O.AV80PessoaPcDesconto1,2,',')},c2v:function(){gx.O.AV80PessoaPcDesconto1=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAPCDESCONTO1",'.',',')},nac:gx.falseFn};
   GXValidFnc[292]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAPCDESCONTO2",gxz:"ZV81PessoaPcDesconto2",gxold:"OV81PessoaPcDesconto2",gxvar:"AV81PessoaPcDesconto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PessoaPcDesconto2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV81PessoaPcDesconto2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESSOAPCDESCONTO2",gx.O.AV81PessoaPcDesconto2,2,',')},c2v:function(){gx.O.AV81PessoaPcDesconto2=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAPCDESCONTO2",'.',',')},nac:gx.falseFn};
   GXValidFnc[293]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAPCDESCONTO3",gxz:"ZV82PessoaPcDesconto3",gxold:"OV82PessoaPcDesconto3",gxvar:"AV82PessoaPcDesconto3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaPcDesconto3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV82PessoaPcDesconto3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESSOAPCDESCONTO3",gx.O.AV82PessoaPcDesconto3,2,',')},c2v:function(){gx.O.AV82PessoaPcDesconto3=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAPCDESCONTO3",'.',',')},nac:gx.falseFn};
   GXValidFnc[294]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAPCDESCONTO4",gxz:"ZV83PessoaPcDesconto4",gxold:"OV83PessoaPcDesconto4",gxvar:"AV83PessoaPcDesconto4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83PessoaPcDesconto4=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV83PessoaPcDesconto4=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESSOAPCDESCONTO4",gx.O.AV83PessoaPcDesconto4,2,',')},c2v:function(){gx.O.AV83PessoaPcDesconto4=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAPCDESCONTO4",'.',',')},nac:gx.falseFn};
   GXValidFnc[295]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAPCDESCONTO5",gxz:"ZV84PessoaPcDesconto5",gxold:"OV84PessoaPcDesconto5",gxvar:"AV84PessoaPcDesconto5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84PessoaPcDesconto5=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV84PessoaPcDesconto5=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESSOAPCDESCONTO5",gx.O.AV84PessoaPcDesconto5,2,',')},c2v:function(){gx.O.AV84PessoaPcDesconto5=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAPCDESCONTO5",'.',',')},nac:gx.falseFn};
   GXValidFnc[298]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[300]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATEMPOREPOS",gxz:"ZV95PessoaTempoRepos",gxold:"OV95PessoaTempoRepos",gxvar:"AV95PessoaTempoRepos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95PessoaTempoRepos=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95PessoaTempoRepos=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOATEMPOREPOS",gx.O.AV95PessoaTempoRepos,0)},c2v:function(){gx.O.AV95PessoaTempoRepos=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOATEMPOREPOS",'.')},nac:gx.falseFn};
   GXValidFnc[303]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[305]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAVLRMINIMOCOMPRA",gxz:"ZV96PessoaVlrMinimoCompra",gxold:"OV96PessoaVlrMinimoCompra",gxvar:"AV96PessoaVlrMinimoCompra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96PessoaVlrMinimoCompra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV96PessoaVlrMinimoCompra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPESSOAVLRMINIMOCOMPRA",gx.O.AV96PessoaVlrMinimoCompra,2,',')},c2v:function(){gx.O.AV96PessoaVlrMinimoCompra=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAVLRMINIMOCOMPRA",'.',',')},nac:gx.falseFn};
   GXValidFnc[308]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[310]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADATAVALIDADECADASTRO",gxz:"ZV170PessoaDataValidadeCadastro",gxold:"OV170PessoaDataValidadeCadastro",gxvar:"AV170PessoaDataValidadeCadastro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV170PessoaDataValidadeCadastro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV170PessoaDataValidadeCadastro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADATAVALIDADECADASTRO",gx.O.AV170PessoaDataValidadeCadastro,0)},c2v:function(){gx.O.AV170PessoaDataValidadeCadastro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPESSOADATAVALIDADECADASTRO")},nac:gx.falseFn};
   GXValidFnc[313]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[315]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACATEGORIAICMS",gxz:"ZV169PessoaCategoriaICMS",gxold:"OV169PessoaCategoriaICMS",gxvar:"AV169PessoaCategoriaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV169PessoaCategoriaICMS=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV169PessoaCategoriaICMS=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPESSOACATEGORIAICMS",gx.O.AV169PessoaCategoriaICMS)},c2v:function(){gx.O.AV169PessoaCategoriaICMS=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOACATEGORIAICMS",'.')},nac:gx.falseFn};
   GXValidFnc[318]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[320]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDESTRANGEIRO",gxz:"ZV209PessoaIdEstrangeiro",gxold:"OV209PessoaIdEstrangeiro",gxvar:"AV209PessoaIdEstrangeiro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV209PessoaIdEstrangeiro=Value},v2z:function(Value){gx.O.ZV209PessoaIdEstrangeiro=Value},v2c:function(){gx.fn.setControlValue("vPESSOAIDESTRANGEIRO",gx.O.AV209PessoaIdEstrangeiro,0)},c2v:function(){gx.O.AV209PessoaIdEstrangeiro=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAIDESTRANGEIRO")},nac:gx.falseFn};
   GXValidFnc[323]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[325]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATIPOFRETE",gxz:"ZV212PessoaTipoFrete",gxold:"OV212PessoaTipoFrete",gxvar:"AV212PessoaTipoFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV212PessoaTipoFrete=Value},v2z:function(Value){gx.O.ZV212PessoaTipoFrete=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOFRETE",gx.O.AV212PessoaTipoFrete)},c2v:function(){gx.O.AV212PessoaTipoFrete=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOFRETE")},nac:gx.falseFn};
   GXValidFnc[328]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[330]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoatransportadorcodigo,isvalid:'e15ku2_client',rgrid:[],fld:"vPESSOATRANSPORTADORCODIGO",gxz:"ZV213PessoaTransportadorCodigo",gxold:"OV213PessoaTransportadorCodigo",gxvar:"AV213PessoaTransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV213PessoaTransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV213PessoaTransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOATRANSPORTADORCODIGO",gx.O.AV213PessoaTransportadorCodigo,0)},c2v:function(){gx.O.AV213PessoaTransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOATRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[331]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATRANSPORTADORNOME",gxz:"ZV214PessoaTransportadorNome",gxold:"OV214PessoaTransportadorNome",gxvar:"AV214PessoaTransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV214PessoaTransportadorNome=Value},v2z:function(Value){gx.O.ZV214PessoaTransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOATRANSPORTADORNOME",gx.O.AV214PessoaTransportadorNome,0)},c2v:function(){gx.O.AV214PessoaTransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[333]={fld:"TABLE8",grid:0};
   GXValidFnc[336]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAOPTANTESIMPLES",gxz:"ZV44PessoaOptanteSimples",gxold:"OV44PessoaOptanteSimples",gxvar:"AV44PessoaOptanteSimples",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44PessoaOptanteSimples=Value},v2z:function(Value){gx.O.ZV44PessoaOptanteSimples=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAOPTANTESIMPLES",gx.O.AV44PessoaOptanteSimples,"S")},c2v:function(){gx.O.AV44PessoaOptanteSimples=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAOPTANTESIMPLES")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[339]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAMICROEMPRESA",gxz:"ZV45PessoaMicroEmpresa",gxold:"OV45PessoaMicroEmpresa",gxvar:"AV45PessoaMicroEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV45PessoaMicroEmpresa=Value},v2z:function(Value){gx.O.ZV45PessoaMicroEmpresa=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAMICROEMPRESA",gx.O.AV45PessoaMicroEmpresa,"S")},c2v:function(){gx.O.AV45PessoaMicroEmpresa=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAMICROEMPRESA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[342]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAORGAOPUBLICO",gxz:"ZV46PessoaOrgaoPublico",gxold:"OV46PessoaOrgaoPublico",gxvar:"AV46PessoaOrgaoPublico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46PessoaOrgaoPublico=Value},v2z:function(Value){gx.O.ZV46PessoaOrgaoPublico=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAORGAOPUBLICO",gx.O.AV46PessoaOrgaoPublico,"S")},c2v:function(){gx.O.AV46PessoaOrgaoPublico=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAORGAOPUBLICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[345]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAMALADIRETA",gxz:"ZV47PessoaMalaDireta",gxold:"OV47PessoaMalaDireta",gxvar:"AV47PessoaMalaDireta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV47PessoaMalaDireta=Value},v2z:function(Value){gx.O.ZV47PessoaMalaDireta=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAMALADIRETA",gx.O.AV47PessoaMalaDireta,"S")},c2v:function(){gx.O.AV47PessoaMalaDireta=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAMALADIRETA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[348]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIPIINCLUSO",gxz:"ZV79PessoaIpiIncluso",gxold:"OV79PessoaIpiIncluso",gxvar:"AV79PessoaIpiIncluso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV79PessoaIpiIncluso=Value},v2z:function(Value){gx.O.ZV79PessoaIpiIncluso=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAIPIINCLUSO",gx.O.AV79PessoaIpiIncluso,"S")},c2v:function(){gx.O.AV79PessoaIpiIncluso=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAIPIINCLUSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[351]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMITENOTAENTRADA",gxz:"ZV175PessoaEmiteNotaEntrada",gxold:"OV175PessoaEmiteNotaEntrada",gxvar:"AV175PessoaEmiteNotaEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV175PessoaEmiteNotaEntrada=Value},v2z:function(Value){gx.O.ZV175PessoaEmiteNotaEntrada=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOAEMITENOTAENTRADA",gx.O.AV175PessoaEmiteNotaEntrada,"S")},c2v:function(){gx.O.AV175PessoaEmiteNotaEntrada=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMITENOTAENTRADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[354]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNPISCOFINS",gxz:"ZV210PessoaSnPisCofins",gxold:"OV210PessoaSnPisCofins",gxvar:"AV210PessoaSnPisCofins",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV210PessoaSnPisCofins=Value},v2z:function(Value){gx.O.ZV210PessoaSnPisCofins=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOASNPISCOFINS",gx.O.AV210PessoaSnPisCofins,"S")},c2v:function(){gx.O.AV210PessoaSnPisCofins=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNPISCOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[355]={fld:"TAB4",grid:0};
   GXValidFnc[358]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[360]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,isacc:0,grid:359,gxgrid:this.GridcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOSNREMOVE",gxz:"ZV123CodificacaoSnRemove",gxold:"OV123CodificacaoSnRemove",gxvar:"AV123CodificacaoSnRemove",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV123CodificacaoSnRemove=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123CodificacaoSnRemove=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vCODIFICACAOSNREMOVE",row || gx.fn.currentGridRowImpl(359),gx.O.AV123CodificacaoSnRemove,"1")},c2v:function(){gx.O.AV123CodificacaoSnRemove=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCODIFICACAOSNREMOVE",row || gx.fn.currentGridRowImpl(359),'.')},nac:gx.falseFn,values:[1,0]};
   GXValidFnc[361]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:359,gxgrid:this.GridcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV98CodificacaoId",gxold:"OV98CodificacaoId",gxvar:"AV98CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV98CodificacaoId=Value},v2z:function(Value){gx.O.ZV98CodificacaoId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCODIFICACAOID",row || gx.fn.currentGridRowImpl(359),gx.O.AV98CodificacaoId)},c2v:function(){gx.O.AV98CodificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIFICACAOID",row || gx.fn.currentGridRowImpl(359))},nac:gx.falseFn};
   GXValidFnc[362]={lvl:2,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:359,gxgrid:this.GridcodifContainer,fnc:null,isvalid:'e20ku2_client',rgrid:[],fld:"vCODIFICACAOPESSOAVALOR",gxz:"ZV99CodificacaoPessoaValor",gxold:"OV99CodificacaoPessoaValor",gxvar:"AV99CodificacaoPessoaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV99CodificacaoPessoaValor=Value},v2z:function(Value){gx.O.ZV99CodificacaoPessoaValor=Value},v2c:function(row){gx.fn.setGridControlValue("vCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(359),gx.O.AV99CodificacaoPessoaValor,0)},c2v:function(){gx.O.AV99CodificacaoPessoaValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIFICACAOPESSOAVALOR",row || gx.fn.currentGridRowImpl(359))},nac:gx.falseFn};
   GXValidFnc[363]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:359,gxgrid:this.GridcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAONIVELUSUARIOID",gxz:"ZV100CodificacaoNivelUsuarioId",gxold:"OV100CodificacaoNivelUsuarioId",gxvar:"AV100CodificacaoNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV100CodificacaoNivelUsuarioId=Value},v2z:function(Value){gx.O.ZV100CodificacaoNivelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("vCODIFICACAONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(359),gx.O.AV100CodificacaoNivelUsuarioId,0)},c2v:function(){gx.O.AV100CodificacaoNivelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIFICACAONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(359))},nac:gx.falseFn};
   GXValidFnc[364]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:359,gxgrid:this.GridcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAONIVELDATAHORAALT",gxz:"ZV101CodificacaoNivelDataHoraAlt",gxold:"OV101CodificacaoNivelDataHoraAlt",gxvar:"AV101CodificacaoNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV101CodificacaoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV101CodificacaoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vCODIFICACAONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(359),gx.O.AV101CodificacaoNivelDataHoraAlt,0)},c2v:function(){gx.O.AV101CodificacaoNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vCODIFICACAONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(359))},nac:gx.falseFn};
   GXValidFnc[365]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:359,gxgrid:this.GridcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARECERLINHAS",gxz:"ZV109AparecerLinhas",gxold:"OV109AparecerLinhas",gxvar:"AV109AparecerLinhas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV109AparecerLinhas=Value},v2z:function(Value){gx.O.ZV109AparecerLinhas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vAPARECERLINHAS",row || gx.fn.currentGridRowImpl(359),gx.O.AV109AparecerLinhas,gx.O.AV248Aparecerlinhas_GXI)},c2v:function(){gx.O.AV248Aparecerlinhas_GXI=this.val_GXI();gx.O.AV109AparecerLinhas=this.val()},val:function(row){return gx.fn.getGridControlValue("vAPARECERLINHAS",row || gx.fn.currentGridRowImpl(359))},val_GXI:function(row){return gx.fn.getGridControlValue("vAPARECERLINHAS_GXI",row || gx.fn.currentGridRowImpl(359))}, gxvar_GXI:'AV248Aparecerlinhas_GXI',nac:gx.falseFn};
   GXValidFnc[366]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[367]={fld:"TAB5",grid:0};
   GXValidFnc[370]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[372]={lvl:9,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,isacc:0,grid:371,gxgrid:this.GridclassContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOSNREMOVE",gxz:"ZV125ClassificacaoSnRemove",gxold:"OV125ClassificacaoSnRemove",gxvar:"AV125ClassificacaoSnRemove",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV125ClassificacaoSnRemove=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV125ClassificacaoSnRemove=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vCLASSIFICACAOSNREMOVE",row || gx.fn.currentGridRowImpl(371),gx.O.AV125ClassificacaoSnRemove,"1")},c2v:function(){gx.O.AV125ClassificacaoSnRemove=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCLASSIFICACAOSNREMOVE",row || gx.fn.currentGridRowImpl(371),'.')},nac:gx.falseFn,values:[1,0]};
   GXValidFnc[373]={lvl:9,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:371,gxgrid:this.GridclassContainer,fnc:this.Validv_Classificacaoid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV103ClassificacaoId",gxold:"OV103ClassificacaoId",gxvar:"AV103ClassificacaoId",ucs:[],op:[374],ip:[374,373],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV103ClassificacaoId=Value},v2z:function(Value){gx.O.ZV103ClassificacaoId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(371),gx.O.AV103ClassificacaoId)},c2v:function(){gx.O.AV103ClassificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(371))},nac:gx.falseFn};
   GXValidFnc[374]={lvl:9,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:371,gxgrid:this.GridclassContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV104OpcaoClassificacaoId",gxold:"OV104OpcaoClassificacaoId",gxvar:"AV104OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV104OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV104OpcaoClassificacaoId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(371),gx.O.AV104OpcaoClassificacaoId)},c2v:function(){gx.O.AV104OpcaoClassificacaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("vOPCAOCLASSIFICACAOID",row || gx.fn.currentGridRowImpl(371))},nac:gx.falseFn};
   GXValidFnc[375]={lvl:9,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:371,gxgrid:this.GridclassContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAONIVELUSUARIOID",gxz:"ZV105ClassificacaoNivelUsuarioId",gxold:"OV105ClassificacaoNivelUsuarioId",gxvar:"AV105ClassificacaoNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV105ClassificacaoNivelUsuarioId=Value},v2z:function(Value){gx.O.ZV105ClassificacaoNivelUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("vCLASSIFICACAONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(371),gx.O.AV105ClassificacaoNivelUsuarioId,0)},c2v:function(){gx.O.AV105ClassificacaoNivelUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAONIVELUSUARIOID",row || gx.fn.currentGridRowImpl(371))},nac:gx.falseFn};
   GXValidFnc[376]={lvl:9,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:371,gxgrid:this.GridclassContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAONIVELDATAHORAALT",gxz:"ZV106ClassificacaoNivelDataHoraAlt",gxold:"OV106ClassificacaoNivelDataHoraAlt",gxvar:"AV106ClassificacaoNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV106ClassificacaoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV106ClassificacaoNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vCLASSIFICACAONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(371),gx.O.AV106ClassificacaoNivelDataHoraAlt,0)},c2v:function(){gx.O.AV106ClassificacaoNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vCLASSIFICACAONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(371))},nac:gx.falseFn};
   GXValidFnc[377]={lvl:9,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:371,gxgrid:this.GridclassContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARECERLINHAS",gxz:"ZV109AparecerLinhas",gxold:"OV109AparecerLinhas",gxvar:"AV109AparecerLinhas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV109AparecerLinhas=Value},v2z:function(Value){gx.O.ZV109AparecerLinhas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vAPARECERLINHAS",row || gx.fn.currentGridRowImpl(371),gx.O.AV109AparecerLinhas,gx.O.AV248Aparecerlinhas_GXI)},c2v:function(){gx.O.AV248Aparecerlinhas_GXI=this.val_GXI();gx.O.AV109AparecerLinhas=this.val()},val:function(row){return gx.fn.getGridControlValue("vAPARECERLINHAS",row || gx.fn.currentGridRowImpl(371))},val_GXI:function(row){return gx.fn.getGridControlValue("vAPARECERLINHAS_GXI",row || gx.fn.currentGridRowImpl(371))}, gxvar_GXI:'AV248Aparecerlinhas_GXI',nac:gx.falseFn};
   GXValidFnc[378]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[379]={fld:"TAB6",grid:0};
   GXValidFnc[382]={fld:"DIV5", format:2,grid:0};
   GXValidFnc[383]={lvl:0,type:"svchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAOBSERVACAO",gxz:"ZV92PessoaObservacao",gxold:"OV92PessoaObservacao",gxvar:"AV92PessoaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92PessoaObservacao=Value},v2z:function(Value){gx.O.ZV92PessoaObservacao=Value},v2c:function(){gx.fn.setControlValue("vPESSOAOBSERVACAO",gx.O.AV92PessoaObservacao,0)},c2v:function(){gx.O.AV92PessoaObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[384]={fld:"DIV6", format:2,grid:0};
   GXValidFnc[387]={fld:"TABLE12",grid:0};
   GXValidFnc[390]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[392]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIO",gxz:"ZV20Usuario",gxold:"OV20Usuario",gxvar:"AV20Usuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Usuario=Value},v2z:function(Value){gx.O.ZV20Usuario=Value},v2c:function(){gx.fn.setControlValue("vUSUARIO",gx.O.AV20Usuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20Usuario=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 392 , function() {
   });
   GXValidFnc[394]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAHORA",gxz:"ZV21DataHora",gxold:"OV21DataHora",gxvar:"AV21DataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAHORA",gx.O.AV21DataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 394 , function() {
   });
   GXValidFnc[400]={fld:"TABLE11",grid:0};
   GXValidFnc[407]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCOMMIT",gxz:"ZV157SnCommit",gxold:"OV157SnCommit",gxvar:"AV157SnCommit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV157SnCommit=Value},v2z:function(Value){gx.O.ZV157SnCommit=Value},v2c:function(){gx.fn.setControlValue("vSNCOMMIT",gx.O.AV157SnCommit,0)},c2v:function(){gx.O.AV157SnCommit=this.val()},val:function(){return gx.fn.getControlValue("vSNCOMMIT")},nac:gx.falseFn};
   GXValidFnc[408]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPERRO",gxz:"ZV33tpErro",gxold:"OV33tpErro",gxvar:"AV33tpErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33tpErro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33tpErro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPERRO",gx.O.AV33tpErro,0)},c2v:function(){gx.O.AV33tpErro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPERRO",'.')},nac:gx.falseFn};
   GXValidFnc[409]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV165AcessoSistemaSequencia",gxold:"OV165AcessoSistemaSequencia",gxvar:"AV165AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV165AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV165AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV165AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV165AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[410]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVEMPRESAID",gxz:"ZV202EntradaProvEmpresaId",gxold:"OV202EntradaProvEmpresaId",gxvar:"AV202EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV202EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV202EntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVEMPRESAID",gx.O.AV202EntradaProvEmpresaId,0)},c2v:function(){gx.O.AV202EntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[411]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVID",gxz:"ZV203EntradaProvId",gxold:"OV203EntradaProvId",gxvar:"AV203EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV203EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV203EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV203EntradaProvId,0)},c2v:function(){gx.O.AV203EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[412]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoempresaid,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV189BancoEmpresaId",gxold:"OV189BancoEmpresaId",gxvar:"AV189BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV189BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV189BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV189BancoEmpresaId,0)},c2v:function(){gx.O.AV189BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[413]={fld:"JS", format:2,grid:0};
   GXValidFnc[414]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORCODIGOIN",gxz:"ZV215TransportadorCodigoIN",gxold:"OV215TransportadorCodigoIN",gxvar:"AV215TransportadorCodigoIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV215TransportadorCodigoIN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV215TransportadorCodigoIN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCODIGOIN",gx.O.AV215TransportadorCodigoIN,0)},c2v:function(){gx.O.AV215TransportadorCodigoIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORCODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[416]={fld:"BTNHELP",grid:0};
   GXValidFnc[417]={fld:"PROMPT_PESSOANATURALIDADEID",grid:0};
   GXValidFnc[418]={fld:"PROMPT_PESSOACIDADEID",grid:0};
   GXValidFnc[419]={fld:"PROMPT_PESSOABANCO",grid:0};
   GXValidFnc[420]={fld:"PROMPT_PESSOAAGENCIA",grid:0};
   GXValidFnc[421]={fld:"PROMPT_PESSOATRANSPORTADORCODIGO",grid:0};
   this.AV39PessoaId = 0 ;
   this.ZV39PessoaId = 0 ;
   this.OV39PessoaId = 0 ;
   this.AV25PessoaTipoPessoa = "" ;
   this.ZV25PessoaTipoPessoa = "" ;
   this.OV25PessoaTipoPessoa = "" ;
   this.AV26PessoaRazaoSocial = "" ;
   this.ZV26PessoaRazaoSocial = "" ;
   this.OV26PessoaRazaoSocial = "" ;
   this.AV27PessoaFantasia = "" ;
   this.ZV27PessoaFantasia = "" ;
   this.OV27PessoaFantasia = "" ;
   this.AV28PessoaSituacao = "" ;
   this.ZV28PessoaSituacao = "" ;
   this.OV28PessoaSituacao = "" ;
   this.AV29PessoaCNPJ = "" ;
   this.ZV29PessoaCNPJ = "" ;
   this.OV29PessoaCNPJ = "" ;
   this.AV30PessoaInscEstadual = "" ;
   this.ZV30PessoaInscEstadual = "" ;
   this.OV30PessoaInscEstadual = "" ;
   this.AV31PessoaUFInsc = "" ;
   this.ZV31PessoaUFInsc = "" ;
   this.OV31PessoaUFInsc = "" ;
   this.AV160PessoaInscProdutorRural = "" ;
   this.ZV160PessoaInscProdutorRural = "" ;
   this.OV160PessoaInscProdutorRural = "" ;
   this.AV32PessoaInscMunicipal = "" ;
   this.ZV32PessoaInscMunicipal = "" ;
   this.OV32PessoaInscMunicipal = "" ;
   this.AV174PessoaSuframa = "" ;
   this.ZV174PessoaSuframa = "" ;
   this.OV174PessoaSuframa = "" ;
   this.AV48PessoaDataCadastro = gx.date.nullDate() ;
   this.ZV48PessoaDataCadastro = gx.date.nullDate() ;
   this.OV48PessoaDataCadastro = gx.date.nullDate() ;
   this.AV49PessoaDataCancelamento = gx.date.nullDate() ;
   this.ZV49PessoaDataCancelamento = gx.date.nullDate() ;
   this.OV49PessoaDataCancelamento = gx.date.nullDate() ;
   this.AV37PessoaCPF = "" ;
   this.ZV37PessoaCPF = "" ;
   this.OV37PessoaCPF = "" ;
   this.AV50PessoaRG = "" ;
   this.ZV50PessoaRG = "" ;
   this.OV50PessoaRG = "" ;
   this.AV51PessoaOrgaoExp = "" ;
   this.ZV51PessoaOrgaoExp = "" ;
   this.OV51PessoaOrgaoExp = "" ;
   this.AV52PessoaDataExp = gx.date.nullDate() ;
   this.ZV52PessoaDataExp = gx.date.nullDate() ;
   this.OV52PessoaDataExp = gx.date.nullDate() ;
   this.AV53PessoaDataNasc = gx.date.nullDate() ;
   this.ZV53PessoaDataNasc = gx.date.nullDate() ;
   this.OV53PessoaDataNasc = gx.date.nullDate() ;
   this.AV54PessoaNaturalidadeId = 0 ;
   this.ZV54PessoaNaturalidadeId = 0 ;
   this.OV54PessoaNaturalidadeId = 0 ;
   this.AV55PessoaSexo = "" ;
   this.ZV55PessoaSexo = "" ;
   this.OV55PessoaSexo = "" ;
   this.AV56PessoaEstadoCivil = "" ;
   this.ZV56PessoaEstadoCivil = "" ;
   this.OV56PessoaEstadoCivil = "" ;
   this.AV236Imagem_GXI = "" ;
   this.AV205Imagem = "" ;
   this.ZV205Imagem = "" ;
   this.OV205Imagem = "" ;
   this.AV57PessoaFornecedor = "" ;
   this.ZV57PessoaFornecedor = "" ;
   this.OV57PessoaFornecedor = "" ;
   this.AV58PessoaFabricante = "" ;
   this.ZV58PessoaFabricante = "" ;
   this.OV58PessoaFabricante = "" ;
   this.AV61PessoaCEP = "" ;
   this.ZV61PessoaCEP = "" ;
   this.OV61PessoaCEP = "" ;
   this.AV62PessoaEndereco = "" ;
   this.ZV62PessoaEndereco = "" ;
   this.OV62PessoaEndereco = "" ;
   this.AV63PessoaNumeroEnd = 0 ;
   this.ZV63PessoaNumeroEnd = 0 ;
   this.OV63PessoaNumeroEnd = 0 ;
   this.AV64PessoaComplemento = "" ;
   this.ZV64PessoaComplemento = "" ;
   this.OV64PessoaComplemento = "" ;
   this.AV65PessoaBairro = "" ;
   this.ZV65PessoaBairro = "" ;
   this.OV65PessoaBairro = "" ;
   this.AV66PessoaCidadeId = 0 ;
   this.ZV66PessoaCidadeId = 0 ;
   this.OV66PessoaCidadeId = 0 ;
   this.AV67PessoaCidadeNome = "" ;
   this.ZV67PessoaCidadeNome = "" ;
   this.OV67PessoaCidadeNome = "" ;
   this.AV68PessoaTelefone = "" ;
   this.ZV68PessoaTelefone = "" ;
   this.OV68PessoaTelefone = "" ;
   this.AV69PessoaRamal = "" ;
   this.ZV69PessoaRamal = "" ;
   this.OV69PessoaRamal = "" ;
   this.AV72PessoaFax = "" ;
   this.ZV72PessoaFax = "" ;
   this.OV72PessoaFax = "" ;
   this.AV70PessoaRamalFax = "" ;
   this.ZV70PessoaRamalFax = "" ;
   this.OV70PessoaRamalFax = "" ;
   this.AV73PessoaCelular = "" ;
   this.ZV73PessoaCelular = "" ;
   this.OV73PessoaCelular = "" ;
   this.AV74PessoaContato = "" ;
   this.ZV74PessoaContato = "" ;
   this.OV74PessoaContato = "" ;
   this.AV71PessoaTelefoneContato = "" ;
   this.ZV71PessoaTelefoneContato = "" ;
   this.OV71PessoaTelefoneContato = "" ;
   this.AV90PessoaSite = "" ;
   this.ZV90PessoaSite = "" ;
   this.OV90PessoaSite = "" ;
   this.AV91PessoaEmail = "" ;
   this.ZV91PessoaEmail = "" ;
   this.OV91PessoaEmail = "" ;
   this.AV192PessoaEmailDanfe = "" ;
   this.ZV192PessoaEmailDanfe = "" ;
   this.OV192PessoaEmailDanfe = "" ;
   this.AV85PessoaBanco = 0 ;
   this.ZV85PessoaBanco = 0 ;
   this.OV85PessoaBanco = 0 ;
   this.AV190BancoNome = "" ;
   this.ZV190BancoNome = "" ;
   this.OV190BancoNome = "" ;
   this.AV86PessoaAgencia = 0 ;
   this.ZV86PessoaAgencia = 0 ;
   this.OV86PessoaAgencia = 0 ;
   this.AV87PessoaDigitoAgencia = "" ;
   this.ZV87PessoaDigitoAgencia = "" ;
   this.OV87PessoaDigitoAgencia = "" ;
   this.AV191BancoAgenciaNome = "" ;
   this.ZV191BancoAgenciaNome = "" ;
   this.OV191BancoAgenciaNome = "" ;
   this.AV88PessoaContaBancaria = "" ;
   this.ZV88PessoaContaBancaria = "" ;
   this.OV88PessoaContaBancaria = "" ;
   this.AV89PessoaUltimaCompra = gx.date.nullDate() ;
   this.ZV89PessoaUltimaCompra = gx.date.nullDate() ;
   this.OV89PessoaUltimaCompra = gx.date.nullDate() ;
   this.AV93PessoaFormaPagtoPadrao = "" ;
   this.ZV93PessoaFormaPagtoPadrao = "" ;
   this.OV93PessoaFormaPagtoPadrao = "" ;
   this.AV94PessoaPrazoEntregaPadrao = "" ;
   this.ZV94PessoaPrazoEntregaPadrao = "" ;
   this.OV94PessoaPrazoEntregaPadrao = "" ;
   this.AV80PessoaPcDesconto1 = 0 ;
   this.ZV80PessoaPcDesconto1 = 0 ;
   this.OV80PessoaPcDesconto1 = 0 ;
   this.AV81PessoaPcDesconto2 = 0 ;
   this.ZV81PessoaPcDesconto2 = 0 ;
   this.OV81PessoaPcDesconto2 = 0 ;
   this.AV82PessoaPcDesconto3 = 0 ;
   this.ZV82PessoaPcDesconto3 = 0 ;
   this.OV82PessoaPcDesconto3 = 0 ;
   this.AV83PessoaPcDesconto4 = 0 ;
   this.ZV83PessoaPcDesconto4 = 0 ;
   this.OV83PessoaPcDesconto4 = 0 ;
   this.AV84PessoaPcDesconto5 = 0 ;
   this.ZV84PessoaPcDesconto5 = 0 ;
   this.OV84PessoaPcDesconto5 = 0 ;
   this.AV95PessoaTempoRepos = 0 ;
   this.ZV95PessoaTempoRepos = 0 ;
   this.OV95PessoaTempoRepos = 0 ;
   this.AV96PessoaVlrMinimoCompra = 0 ;
   this.ZV96PessoaVlrMinimoCompra = 0 ;
   this.OV96PessoaVlrMinimoCompra = 0 ;
   this.AV170PessoaDataValidadeCadastro = gx.date.nullDate() ;
   this.ZV170PessoaDataValidadeCadastro = gx.date.nullDate() ;
   this.OV170PessoaDataValidadeCadastro = gx.date.nullDate() ;
   this.AV169PessoaCategoriaICMS = 0 ;
   this.ZV169PessoaCategoriaICMS = 0 ;
   this.OV169PessoaCategoriaICMS = 0 ;
   this.AV209PessoaIdEstrangeiro = "" ;
   this.ZV209PessoaIdEstrangeiro = "" ;
   this.OV209PessoaIdEstrangeiro = "" ;
   this.AV212PessoaTipoFrete = "" ;
   this.ZV212PessoaTipoFrete = "" ;
   this.OV212PessoaTipoFrete = "" ;
   this.AV213PessoaTransportadorCodigo = 0 ;
   this.ZV213PessoaTransportadorCodigo = 0 ;
   this.OV213PessoaTransportadorCodigo = 0 ;
   this.AV214PessoaTransportadorNome = "" ;
   this.ZV214PessoaTransportadorNome = "" ;
   this.OV214PessoaTransportadorNome = "" ;
   this.AV44PessoaOptanteSimples = "" ;
   this.ZV44PessoaOptanteSimples = "" ;
   this.OV44PessoaOptanteSimples = "" ;
   this.AV45PessoaMicroEmpresa = "" ;
   this.ZV45PessoaMicroEmpresa = "" ;
   this.OV45PessoaMicroEmpresa = "" ;
   this.AV46PessoaOrgaoPublico = "" ;
   this.ZV46PessoaOrgaoPublico = "" ;
   this.OV46PessoaOrgaoPublico = "" ;
   this.AV47PessoaMalaDireta = "" ;
   this.ZV47PessoaMalaDireta = "" ;
   this.OV47PessoaMalaDireta = "" ;
   this.AV79PessoaIpiIncluso = "" ;
   this.ZV79PessoaIpiIncluso = "" ;
   this.OV79PessoaIpiIncluso = "" ;
   this.AV175PessoaEmiteNotaEntrada = "" ;
   this.ZV175PessoaEmiteNotaEntrada = "" ;
   this.OV175PessoaEmiteNotaEntrada = "" ;
   this.AV210PessoaSnPisCofins = "" ;
   this.ZV210PessoaSnPisCofins = "" ;
   this.OV210PessoaSnPisCofins = "" ;
   this.ZV123CodificacaoSnRemove = 0 ;
   this.OV123CodificacaoSnRemove = 0 ;
   this.ZV98CodificacaoId = "" ;
   this.OV98CodificacaoId = "" ;
   this.ZV99CodificacaoPessoaValor = "" ;
   this.OV99CodificacaoPessoaValor = "" ;
   this.ZV100CodificacaoNivelUsuarioId = "" ;
   this.OV100CodificacaoNivelUsuarioId = "" ;
   this.ZV101CodificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.OV101CodificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.ZV109AparecerLinhas = "" ;
   this.OV109AparecerLinhas = "" ;
   this.ZV125ClassificacaoSnRemove = 0 ;
   this.OV125ClassificacaoSnRemove = 0 ;
   this.ZV103ClassificacaoId = "" ;
   this.OV103ClassificacaoId = "" ;
   this.ZV104OpcaoClassificacaoId = "" ;
   this.OV104OpcaoClassificacaoId = "" ;
   this.ZV105ClassificacaoNivelUsuarioId = "" ;
   this.OV105ClassificacaoNivelUsuarioId = "" ;
   this.ZV106ClassificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.OV106ClassificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.AV92PessoaObservacao = "" ;
   this.ZV92PessoaObservacao = "" ;
   this.OV92PessoaObservacao = "" ;
   this.AV20Usuario = "" ;
   this.ZV20Usuario = "" ;
   this.OV20Usuario = "" ;
   this.AV21DataHora = gx.date.nullDate() ;
   this.ZV21DataHora = gx.date.nullDate() ;
   this.OV21DataHora = gx.date.nullDate() ;
   this.AV157SnCommit = "" ;
   this.ZV157SnCommit = "" ;
   this.OV157SnCommit = "" ;
   this.AV33tpErro = 0 ;
   this.ZV33tpErro = 0 ;
   this.OV33tpErro = 0 ;
   this.AV165AcessoSistemaSequencia = 0 ;
   this.ZV165AcessoSistemaSequencia = 0 ;
   this.OV165AcessoSistemaSequencia = 0 ;
   this.AV202EntradaProvEmpresaId = "" ;
   this.ZV202EntradaProvEmpresaId = "" ;
   this.OV202EntradaProvEmpresaId = "" ;
   this.AV203EntradaProvId = 0 ;
   this.ZV203EntradaProvId = 0 ;
   this.OV203EntradaProvId = 0 ;
   this.AV189BancoEmpresaId = "" ;
   this.ZV189BancoEmpresaId = "" ;
   this.OV189BancoEmpresaId = "" ;
   this.AV215TransportadorCodigoIN = 0 ;
   this.ZV215TransportadorCodigoIN = 0 ;
   this.OV215TransportadorCodigoIN = 0 ;
   this.AV206Tab = [ ] ;
   this.AV39PessoaId = 0 ;
   this.AV25PessoaTipoPessoa = "" ;
   this.AV26PessoaRazaoSocial = "" ;
   this.AV27PessoaFantasia = "" ;
   this.AV28PessoaSituacao = "" ;
   this.AV29PessoaCNPJ = "" ;
   this.AV30PessoaInscEstadual = "" ;
   this.AV31PessoaUFInsc = "" ;
   this.AV160PessoaInscProdutorRural = "" ;
   this.AV32PessoaInscMunicipal = "" ;
   this.AV174PessoaSuframa = "" ;
   this.AV48PessoaDataCadastro = gx.date.nullDate() ;
   this.AV49PessoaDataCancelamento = gx.date.nullDate() ;
   this.AV37PessoaCPF = "" ;
   this.AV50PessoaRG = "" ;
   this.AV51PessoaOrgaoExp = "" ;
   this.AV52PessoaDataExp = gx.date.nullDate() ;
   this.AV53PessoaDataNasc = gx.date.nullDate() ;
   this.AV54PessoaNaturalidadeId = 0 ;
   this.AV55PessoaSexo = "" ;
   this.AV56PessoaEstadoCivil = "" ;
   this.AV205Imagem = "" ;
   this.AV57PessoaFornecedor = "" ;
   this.AV58PessoaFabricante = "" ;
   this.AV61PessoaCEP = "" ;
   this.AV62PessoaEndereco = "" ;
   this.AV63PessoaNumeroEnd = 0 ;
   this.AV64PessoaComplemento = "" ;
   this.AV65PessoaBairro = "" ;
   this.AV66PessoaCidadeId = 0 ;
   this.AV67PessoaCidadeNome = "" ;
   this.AV68PessoaTelefone = "" ;
   this.AV69PessoaRamal = "" ;
   this.AV72PessoaFax = "" ;
   this.AV70PessoaRamalFax = "" ;
   this.AV73PessoaCelular = "" ;
   this.AV74PessoaContato = "" ;
   this.AV71PessoaTelefoneContato = "" ;
   this.AV90PessoaSite = "" ;
   this.AV91PessoaEmail = "" ;
   this.AV192PessoaEmailDanfe = "" ;
   this.AV85PessoaBanco = 0 ;
   this.AV190BancoNome = "" ;
   this.AV86PessoaAgencia = 0 ;
   this.AV87PessoaDigitoAgencia = "" ;
   this.AV191BancoAgenciaNome = "" ;
   this.AV88PessoaContaBancaria = "" ;
   this.AV89PessoaUltimaCompra = gx.date.nullDate() ;
   this.AV93PessoaFormaPagtoPadrao = "" ;
   this.AV94PessoaPrazoEntregaPadrao = "" ;
   this.AV80PessoaPcDesconto1 = 0 ;
   this.AV81PessoaPcDesconto2 = 0 ;
   this.AV82PessoaPcDesconto3 = 0 ;
   this.AV83PessoaPcDesconto4 = 0 ;
   this.AV84PessoaPcDesconto5 = 0 ;
   this.AV95PessoaTempoRepos = 0 ;
   this.AV96PessoaVlrMinimoCompra = 0 ;
   this.AV170PessoaDataValidadeCadastro = gx.date.nullDate() ;
   this.AV169PessoaCategoriaICMS = 0 ;
   this.AV209PessoaIdEstrangeiro = "" ;
   this.AV212PessoaTipoFrete = "" ;
   this.AV213PessoaTransportadorCodigo = 0 ;
   this.AV214PessoaTransportadorNome = "" ;
   this.AV44PessoaOptanteSimples = "" ;
   this.AV45PessoaMicroEmpresa = "" ;
   this.AV46PessoaOrgaoPublico = "" ;
   this.AV47PessoaMalaDireta = "" ;
   this.AV79PessoaIpiIncluso = "" ;
   this.AV175PessoaEmiteNotaEntrada = "" ;
   this.AV210PessoaSnPisCofins = "" ;
   this.AV109AparecerLinhas = "" ;
   this.AV92PessoaObservacao = "" ;
   this.AV20Usuario = "" ;
   this.AV21DataHora = gx.date.nullDate() ;
   this.AV157SnCommit = "" ;
   this.AV33tpErro = 0 ;
   this.AV165AcessoSistemaSequencia = 0 ;
   this.AV202EntradaProvEmpresaId = "" ;
   this.AV203EntradaProvId = 0 ;
   this.AV189BancoEmpresaId = "" ;
   this.AV215TransportadorCodigoIN = 0 ;
   this.AV162SnCliente = "" ;
   this.AV163SnFornecedor = "" ;
   this.AV164SnFabricante = "" ;
   this.AV161SnPrompt = "" ;
   this.AV177Tela = "" ;
   this.AV43Modo = "" ;
   this.AV123CodificacaoSnRemove = 0 ;
   this.AV98CodificacaoId = "" ;
   this.AV99CodificacaoPessoaValor = "" ;
   this.AV100CodificacaoNivelUsuarioId = "" ;
   this.AV101CodificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.A3379TransportadorCodigo = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3798TransportadorNome = "" ;
   this.AV125ClassificacaoSnRemove = 0 ;
   this.AV103ClassificacaoId = "" ;
   this.AV104OpcaoClassificacaoId = "" ;
   this.AV105ClassificacaoNivelUsuarioId = "" ;
   this.AV106ClassificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.A953BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A954BancoAgenciaNome = "" ;
   this.A948BancoNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.A443PessoaSituacao = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A436PessoaInscEstadual = "" ;
   this.A437PessoaUFInsc = "" ;
   this.A3122PessoaInscProdutorRural = "" ;
   this.A438PessoaInscMunicipal = "" ;
   this.A4312PessoaSuframa = "" ;
   this.A458PessoaOptanteSimples = "" ;
   this.A459PessoaMicroEmpresa = "" ;
   this.A454PessoaOrgaoPublico = "" ;
   this.A444PessoaMalaDireta = "" ;
   this.A435PessoaDataCadastro = gx.date.nullDate() ;
   this.A467PessoaDataCancelamento = gx.date.nullDate() ;
   this.A473PessoaCPF = "" ;
   this.A439PessoaRG = "" ;
   this.A440PessoaOrgaoExp = "" ;
   this.A441PessoaDataExp = gx.date.nullDate() ;
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.A460PessoaNaturalidadeId = 0 ;
   this.A469PessoaSexo = "" ;
   this.A470PessoaEstadoCivil = "" ;
   this.A445PessoaCliente = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A449PessoaFabricante = "" ;
   this.A427PessoaCep = "" ;
   this.A423PessoaEndereco = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A425PessoaComplemento = "" ;
   this.A426PessoaBairro = "" ;
   this.A463PessoaCidadeId = 0 ;
   this.A464PessoaCidadeNome = "" ;
   this.A72PessoaTelefone = "" ;
   this.A429PessoaRamal = "" ;
   this.A430PessoaFax = "" ;
   this.A431PessoaRamalFax = "" ;
   this.A432PessoaCelular = "" ;
   this.A421PessoaContato = "" ;
   this.A422PessoaTelefoneContato = "" ;
   this.A455PessoaBanco = 0 ;
   this.A456PessoaAgencia = 0 ;
   this.A2751PessoaDigitoAgencia = "" ;
   this.A457PessoaContaBancaria = "" ;
   this.A471PessoaUltimaCompra = gx.date.nullDate() ;
   this.A3103PessoaFormaPagtoPadrao = "" ;
   this.A3104PessoaPrazoEntregaPadrao = "" ;
   this.A3113PessoaPcDesconto1 = 0 ;
   this.A3114PessoaPcDesconto2 = 0 ;
   this.A3115PessoaPcDesconto3 = 0 ;
   this.A3116PessoaPcDesconto4 = 0 ;
   this.A3117PessoaPcDesconto5 = 0 ;
   this.A3110PessoaIpiIncluso = "" ;
   this.A5206PessoaEmiteNotaEntrada = "" ;
   this.A10613PessoaSNPisCofins = "" ;
   this.A3118PessoaTempoRepos = 0 ;
   this.A10401PessoaIdEstrangeiro = "" ;
   this.A3112PessoaVlrMinimoCompra = 0 ;
   this.A3207PessoaDataValidadeCadastro = gx.date.nullDate() ;
   this.A3204PessoaCategoriaICMS = 0 ;
   this.A433PessoaSite = "" ;
   this.A434PessoaEmail = "" ;
   this.A6768PessoaEmailDANFE = "" ;
   this.A466PessoaObservacao = "" ;
   this.A11786PessoaTipoFrete = "" ;
   this.A10978PessoaTransportadorCodigo = 0 ;
   this.A10981PessoaTransportadorNome = "" ;
   this.A830PessoaUsuarioId = "" ;
   this.A831PessoaDataHoraAlt = gx.date.nullDate() ;
   this.A10977PessoaTransportadorEmpId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A834ClassificacaoNivelUsuarioId = "" ;
   this.A835ClassificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A58CodificacaoId = "" ;
   this.A73CodificacaoPessoaValor = "" ;
   this.A832CodificacaoNivelUsuarioId = "" ;
   this.A833CodificacaoNivelDataHoraAlt = gx.date.nullDate() ;
   this.A161ClassificacaoObrigatorio = "" ;
   this.A55ClassificacaoDescricao = "" ;
   this.A163CodificacaoObrigatorio = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.A147CidadesId = 0 ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV147emBranco = "" ;
   this.AV208BlueFocusEnv = {} ;
   this.AV128CaminhoPessoa = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV151CodifPossuiDados = "" ;
   this.AV152ClassPossuiDados = "" ;
   this.AV108EmpresaClassificacaoEmpresaId = "" ;
   this.AV137CodificacaoPadrao = "" ;
   this.AV138ClassificacaoPadrao = "" ;
   this.AV127IntFinCbl = "" ;
   this.AV149PessoaCliente = "" ;
   this.AV150LimpaTela = "" ;
   this.AV107EmpresaCodificacaoEmpresaId = "" ;
   this.AV117CodificacaoNivelDataHoraAltVet = [ ] ;
   this.AV116CodificacaoNivelUsuarioIdVet = [ ] ;
   this.AV115CodificacaoPessoaValorVet = [ ] ;
   this.AV114CodificacaoIdVet = [ ] ;
   this.AV124CodificacaoSnRemoveVet = [ ] ;
   this.AV118Cont = 0 ;
   this.AV122ClassificacaoNivelDataHoraAltVet = [ ] ;
   this.AV121ClassificacaoNivelUsuarioIdVet = [ ] ;
   this.AV120OpcaoClassificacaoIdVet = [ ] ;
   this.AV119ClassificacaoIdVet = [ ] ;
   this.AV126ClassificacaoSnRemoveVet = [ ] ;
   this.Events = {"e11ku2_client": ["'FECHAR'", true] ,"e12ku2_client": ["ENTER", true] ,"e13ku2_client": ["'UPLOAD'", true] ,"e14ku2_client": ["'CADUSUCOTONLINE'", true] ,"e15ku2_client": ["VPESSOATRANSPORTADORCODIGO.ISVALID", true] ,"e19ku2_client": ["VCODIFICACAOID.CLICK", true] ,"e22ku2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e20ku2_client": ["VCODIFICACAOPESSOAVALOR.ISVALID", true] ,"e24ku2_client": ["CANCEL", true] ,"e23ku2_client": ["'APARECERLINHAS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'GRIDCLASS_nFirstRecordOnPage'},{av:'GRIDCLASS_nEOF'},{av:'subGridclass_Rows'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV43Modo',fld:'vMODO'},{av:'AV177Tela',fld:'vTELA'},{av:'AV39PessoaId',fld:'vPESSOAID'}],[{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'}]];
   this.EvtParms["ENTER"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV34ExigeCPFCNPJ',fld:'vEXIGECPFCNPJ'},{av:'AV36DuplicCPFCNPJ',fld:'vDUPLICCPFCNPJ'},{av:'AV41ExigeInscEst',fld:'vEXIGEINSCEST'},{av:'AV60ExigeDataNasc',fld:'vEXIGEDATANASC'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV216TransportadorEmpresaid',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'A164EmpresaCodificacaoEmpresaId',fld:'EMPRESACODIFICACAOEMPRESAID'},{av:'A163CodificacaoObrigatorio',fld:'CODIFICACAOOBRIGATORIO'},{av:'A59CodificacaoDescricao',fld:'CODIFICACAODESCRICAO'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A161ClassificacaoObrigatorio',fld:'CLASSIFICACAOOBRIGATORIO'},{av:'A55ClassificacaoDescricao',fld:'CLASSIFICACAODESCRICAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV158PessoaCPFAux',fld:'vPESSOACPFAUX'},{av:'AV159PessoaCNPJAux',fld:'vPESSOACNPJAUX'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}],[{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV35ErroCNPJ',fld:'vERROCNPJ'},{av:'AV40ExisteCPFCNPJ',fld:'vEXISTECPFCNPJ'},{av:'AV38PessoaRazaoSocialCons',fld:'vPESSOARAZAOSOCIALCONS'},{av:'AV176PessoaInscEstadualAux',fld:'vPESSOAINSCESTADUALAUX'},{av:'AV42ErroInscEstadual',fld:'vERROINSCESTADUAL'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV59ErroCPF',fld:'vERROCPF'},{av:'AV224GXLvl440',fld:'vGXLVL440'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV225GXLvl499',fld:'vGXLVL499'},{av:'AV19i',fld:'vI'},{av:'AV217Tam',fld:'vTAM'},{av:'AV218PalavraAux',fld:'vPALAVRAAUX'},{av:'AV226GXLvl602',fld:'vGXLVL602'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV118Cont',fld:'vCONT'},{av:'AV110x',fld:'vX'},{av:'AV153CodificacaoIdAux',fld:'vCODIFICACAOIDAUX'},{av:'AV172SnEncontrou',fld:'vSNENCONTROU'},{av:'AV155ClassificacaoIdAux',fld:'vCLASSIFICACAOIDAUX'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'},{av:'AV158PessoaCPFAux',fld:'vPESSOACPFAUX'},{av:'AV159PessoaCNPJAux',fld:'vPESSOACNPJAUX'},{av:'AV156Msgm',fld:'vMSGM'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV131path',fld:'vPATH'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'}]];
   this.EvtParms["GRIDCODIF.LOAD"] = [[{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV43Modo',fld:'vMODO'},{av:'AV150LimpaTela',fld:'vLIMPATELA'}],[{av:'AV110x',fld:'vX'},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR'},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID'},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Enabled")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Enabled'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE'},{ctrl:'vCODIFICACAOID'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOPESSOAVALOR","Enabled")',ctrl:'vCODIFICACAOPESSOAVALOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'}]];
   this.EvtParms["GRIDCLASS.LOAD"] = [[{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV43Modo',fld:'vMODO'},{av:'AV150LimpaTela',fld:'vLIMPATELA'}],[{av:'AV110x',fld:'vX'},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID'},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Enabled")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Enabled'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vOPCAOCLASSIFICACAOID'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'}]];
   this.EvtParms["'APARECERLINHAS'"] = [[],[]];
   this.EvtParms["VCODIFICACAOID.CLICK"] = [[{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR'}],[]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'}],[]];
   this.EvtParms["'UPLOAD'"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE'},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR'},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID'},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT'},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE'},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID'},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'}],[]];
   this.EvtParms["VCODIFICACAOPESSOAVALOR.ISVALID"] = [[{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR'}],[{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR'}]];
   this.EvtParms["'CADUSUCOTONLINE'"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE'},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR'},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID'},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT'},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE'},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID'},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'}],[{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV39PessoaId',fld:'vPESSOAID'}]];
   this.EvtParms["VPESSOATRANSPORTADORCODIGO.ISVALID"] = [[{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV216TransportadorEmpresaid',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'}]];
   this.EvtParms["GRIDCODIF_FIRSTPAGE"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCODIF_PREVPAGE"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCODIF_NEXTPAGE"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCODIF_LASTPAGE"] = [[{av:'GRIDCODIF_nFirstRecordOnPage'},{av:'GRIDCODIF_nEOF'},{av:'subGridcodif_Rows'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCLASS_FIRSTPAGE"] = [[{av:'GRIDCLASS_nFirstRecordOnPage'},{av:'GRIDCLASS_nEOF'},{av:'subGridclass_Rows'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCLASS_PREVPAGE"] = [[{av:'GRIDCLASS_nFirstRecordOnPage'},{av:'GRIDCLASS_nEOF'},{av:'subGridclass_Rows'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCLASS_NEXTPAGE"] = [[{av:'GRIDCLASS_nFirstRecordOnPage'},{av:'GRIDCLASS_nEOF'},{av:'subGridclass_Rows'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["GRIDCLASS_LASTPAGE"] = [[{av:'GRIDCLASS_nFirstRecordOnPage'},{av:'GRIDCLASS_nEOF'},{av:'subGridclass_Rows'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV208BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV128CaminhoPessoa',fld:'vCAMINHOPESSOA'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV43Modo',fld:'vMODO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'AV151CodifPossuiDados',fld:'vCODIFPOSSUIDADOS'},{av:'AV123CodificacaoSnRemove',fld:'vCODIFICACAOSNREMOVE',grid:359},{av:'AV98CodificacaoId',fld:'vCODIFICACAOID',grid:359},{av:'AV99CodificacaoPessoaValor',fld:'vCODIFICACAOPESSOAVALOR',grid:359},{av:'AV100CodificacaoNivelUsuarioId',fld:'vCODIFICACAONIVELUSUARIOID',grid:359},{av:'AV101CodificacaoNivelDataHoraAlt',fld:'vCODIFICACAONIVELDATAHORAALT',grid:359},{av:'AV152ClassPossuiDados',fld:'vCLASSPOSSUIDADOS'},{av:'AV125ClassificacaoSnRemove',fld:'vCLASSIFICACAOSNREMOVE',grid:371},{av:'AV103ClassificacaoId',fld:'vCLASSIFICACAOID',grid:371},{av:'AV104OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID',grid:371},{av:'AV105ClassificacaoNivelUsuarioId',fld:'vCLASSIFICACAONIVELUSUARIOID',grid:371},{av:'AV106ClassificacaoNivelDataHoraAlt',fld:'vCLASSIFICACAONIVELDATAHORAALT',grid:371},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV137CodificacaoPadrao',fld:'vCODIFICACAOPADRAO'},{av:'AV138ClassificacaoPadrao',fld:'vCLASSIFICACAOPADRAO'},{av:'AV127IntFinCbl',fld:'vINTFINCBL'},{av:'AV149PessoaCliente',fld:'vPESSOACLIENTE'},{av:'AV165AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV161SnPrompt',fld:'vSNPROMPT'},{av:'AV162SnCliente',fld:'vSNCLIENTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV177Tela',fld:'vTELA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV202EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID'},{av:'AV203EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK41","Caption")',ctrl:'TEXTBLOCK41',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Caption")',ctrl:'TEXTBLOCK24',prop:'Caption'},{av:'AV110x',fld:'vX'},{av:'gx.fn.getCtrlProperty("vCODIFICACAOSNREMOVE","Visible")',ctrl:'vCODIFICACAOSNREMOVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAOSNREMOVE","Visible")',ctrl:'vCLASSIFICACAOSNREMOVE',prop:'Visible'},{av:'AV131path',fld:'vPATH'},{av:'AV205Imagem',fld:'vIMAGEM'},{av:'AV91PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV147emBranco',fld:'vEMBRANCO'},{av:'AV118Cont',fld:'vCONT'},{av:'AV124CodificacaoSnRemoveVet',fld:'vCODIFICACAOSNREMOVEVET'},{av:'AV114CodificacaoIdVet',fld:'vCODIFICACAOIDVET'},{av:'AV115CodificacaoPessoaValorVet',fld:'vCODIFICACAOPESSOAVALORVET'},{av:'AV116CodificacaoNivelUsuarioIdVet',fld:'vCODIFICACAONIVELUSUARIOIDVET'},{av:'AV117CodificacaoNivelDataHoraAltVet',fld:'vCODIFICACAONIVELDATAHORAALTVET'},{av:'AV126ClassificacaoSnRemoveVet',fld:'vCLASSIFICACAOSNREMOVEVET'},{av:'AV119ClassificacaoIdVet',fld:'vCLASSIFICACAOIDVET'},{av:'AV120OpcaoClassificacaoIdVet',fld:'vOPCAOCLASSIFICACAOIDVET'},{av:'AV121ClassificacaoNivelUsuarioIdVet',fld:'vCLASSIFICACAONIVELUSUARIOIDVET'},{av:'AV122ClassificacaoNivelDataHoraAltVet',fld:'vCLASSIFICACAONIVELDATAHORAALTVET'},{av:'AV157SnCommit',fld:'vSNCOMMIT'},{av:'AV33tpErro',fld:'vTPERRO'},{av:'AV148ErroInsercao',fld:'vERROINSERCAO'},{av:'AV139PessoaIdCalculada',fld:'vPESSOAIDCALCULADA'},{av:'AV173PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV107EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV108EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV141ErroClaCodPrincipal',fld:'vERROCLACODPRINCIPAL'},{av:'AV140ErroCContabil',fld:'vERROCCONTABIL'},{av:'AV133ImagemPessoaId',fld:'vIMAGEMPESSOAID'},{av:'AV146CamRelat',fld:'vCAMRELAT'},{av:'AV39PessoaId',fld:'vPESSOAID'},{av:'AV164SnFabricante',fld:'vSNFABRICANTE'},{av:'AV163SnFornecedor',fld:'vSNFORNECEDOR'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV150LimpaTela',fld:'vLIMPATELA'},{av:'AV25PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV26PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV29PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV30PessoaInscEstadual',fld:'vPESSOAINSCESTADUAL'},{av:'AV31PessoaUFInsc',fld:'vPESSOAUFINSC'},{av:'AV160PessoaInscProdutorRural',fld:'vPESSOAINSCPRODUTORRURAL'},{av:'AV32PessoaInscMunicipal',fld:'vPESSOAINSCMUNICIPAL'},{av:'AV174PessoaSuframa',fld:'vPESSOASUFRAMA'},{av:'AV44PessoaOptanteSimples',fld:'vPESSOAOPTANTESIMPLES'},{av:'AV45PessoaMicroEmpresa',fld:'vPESSOAMICROEMPRESA'},{av:'AV46PessoaOrgaoPublico',fld:'vPESSOAORGAOPUBLICO'},{av:'AV47PessoaMalaDireta',fld:'vPESSOAMALADIRETA'},{av:'AV175PessoaEmiteNotaEntrada',fld:'vPESSOAEMITENOTAENTRADA'},{av:'AV210PessoaSnPisCofins',fld:'vPESSOASNPISCOFINS'},{av:'AV48PessoaDataCadastro',fld:'vPESSOADATACADASTRO'},{av:'AV49PessoaDataCancelamento',fld:'vPESSOADATACANCELAMENTO'},{av:'AV37PessoaCPF',fld:'vPESSOACPF'},{av:'AV50PessoaRG',fld:'vPESSOARG'},{av:'AV51PessoaOrgaoExp',fld:'vPESSOAORGAOEXP'},{av:'AV52PessoaDataExp',fld:'vPESSOADATAEXP'},{av:'AV53PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV54PessoaNaturalidadeId',fld:'vPESSOANATURALIDADEID'},{av:'AV55PessoaSexo',fld:'vPESSOASEXO'},{av:'AV56PessoaEstadoCivil',fld:'vPESSOAESTADOCIVIL'},{av:'AV57PessoaFornecedor',fld:'vPESSOAFORNECEDOR'},{av:'AV58PessoaFabricante',fld:'vPESSOAFABRICANTE'},{av:'AV61PessoaCEP',fld:'vPESSOACEP'},{av:'AV62PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV63PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV64PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV65PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV66PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV67PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV68PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaRamal',fld:'vPESSOARAMAL'},{av:'AV72PessoaFax',fld:'vPESSOAFAX'},{av:'AV70PessoaRamalFax',fld:'vPESSOARAMALFAX'},{av:'AV73PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV74PessoaContato',fld:'vPESSOACONTATO'},{av:'AV71PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV85PessoaBanco',fld:'vPESSOABANCO'},{av:'AV86PessoaAgencia',fld:'vPESSOAAGENCIA'},{av:'AV87PessoaDigitoAgencia',fld:'vPESSOADIGITOAGENCIA'},{av:'AV88PessoaContaBancaria',fld:'vPESSOACONTABANCARIA'},{av:'AV89PessoaUltimaCompra',fld:'vPESSOAULTIMACOMPRA'},{av:'AV93PessoaFormaPagtoPadrao',fld:'vPESSOAFORMAPAGTOPADRAO'},{av:'AV94PessoaPrazoEntregaPadrao',fld:'vPESSOAPRAZOENTREGAPADRAO'},{av:'AV80PessoaPcDesconto1',fld:'vPESSOAPCDESCONTO1'},{av:'AV81PessoaPcDesconto2',fld:'vPESSOAPCDESCONTO2'},{av:'AV82PessoaPcDesconto3',fld:'vPESSOAPCDESCONTO3'},{av:'AV83PessoaPcDesconto4',fld:'vPESSOAPCDESCONTO4'},{av:'AV84PessoaPcDesconto5',fld:'vPESSOAPCDESCONTO5'},{av:'AV79PessoaIpiIncluso',fld:'vPESSOAIPIINCLUSO'},{av:'AV95PessoaTempoRepos',fld:'vPESSOATEMPOREPOS'},{av:'AV209PessoaIdEstrangeiro',fld:'vPESSOAIDESTRANGEIRO'},{av:'AV96PessoaVlrMinimoCompra',fld:'vPESSOAVLRMINIMOCOMPRA'},{av:'AV170PessoaDataValidadeCadastro',fld:'vPESSOADATAVALIDADECADASTRO'},{av:'AV169PessoaCategoriaICMS',fld:'vPESSOACATEGORIAICMS'},{av:'AV212PessoaTipoFrete',fld:'vPESSOATIPOFRETE'},{av:'AV213PessoaTransportadorCodigo',fld:'vPESSOATRANSPORTADORCODIGO'},{av:'AV214PessoaTransportadorNome',fld:'vPESSOATRANSPORTADORNOME'},{av:'AV90PessoaSite',fld:'vPESSOASITE'},{av:'AV192PessoaEmailDanfe',fld:'vPESSOAEMAILDANFE'},{av:'AV92PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV20Usuario',fld:'vUSUARIO'},{av:'AV21DataHora',fld:'vDATAHORA'}]];
   this.setPrompt("IMGPROMPT", [145]);
   this.setPrompt("PROMPT_PESSOANATURALIDADEID", [109]);
   this.setPrompt("PROMPT_PESSOACIDADEID", [181]);
   this.setPrompt("PROMPT_PESSOABANCO", [251]);
   this.setPrompt("PROMPT_PESSOAAGENCIA", [260]);
   this.setPrompt("PROMPT_PESSOATRANSPORTADORCODIGO", [330]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV107EmpresaCodificacaoEmpresaId", "vEMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV108EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV147emBranco", "vEMBRANCO", 0, "char");
   this.setVCMap("AV208BlueFocusEnv", "vBLUEFOCUSENV", 0, "BlueFocusEnv");
   this.setVCMap("AV128CaminhoPessoa", "vCAMINHOPESSOA", 0, "svchar");
   this.setVCMap("AV43Modo", "vMODO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("AV151CodifPossuiDados", "vCODIFPOSSUIDADOS", 0, "char");
   this.setVCMap("AV152ClassPossuiDados", "vCLASSPOSSUIDADOS", 0, "char");
   this.setVCMap("AV108EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV137CodificacaoPadrao", "vCODIFICACAOPADRAO", 0, "char");
   this.setVCMap("AV138ClassificacaoPadrao", "vCLASSIFICACAOPADRAO", 0, "char");
   this.setVCMap("AV127IntFinCbl", "vINTFINCBL", 0, "char");
   this.setVCMap("AV149PessoaCliente", "vPESSOACLIENTE", 0, "char");
   this.setVCMap("AV161SnPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV162SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV163SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV164SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV177Tela", "vTELA", 0, "char");
   this.setVCMap("AV150LimpaTela", "vLIMPATELA", 0, "char");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV147emBranco", "vEMBRANCO", 0, "char");
   this.setVCMap("AV208BlueFocusEnv", "vBLUEFOCUSENV", 0, "BlueFocusEnv");
   this.setVCMap("AV128CaminhoPessoa", "vCAMINHOPESSOA", 0, "svchar");
   this.setVCMap("AV43Modo", "vMODO", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("AV151CodifPossuiDados", "vCODIFPOSSUIDADOS", 0, "char");
   this.setVCMap("AV152ClassPossuiDados", "vCLASSPOSSUIDADOS", 0, "char");
   this.setVCMap("AV108EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV137CodificacaoPadrao", "vCODIFICACAOPADRAO", 0, "char");
   this.setVCMap("AV138ClassificacaoPadrao", "vCLASSIFICACAOPADRAO", 0, "char");
   this.setVCMap("AV127IntFinCbl", "vINTFINCBL", 0, "char");
   this.setVCMap("AV149PessoaCliente", "vPESSOACLIENTE", 0, "char");
   this.setVCMap("AV161SnPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV162SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV163SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV164SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV177Tela", "vTELA", 0, "char");
   this.setVCMap("AV150LimpaTela", "vLIMPATELA", 0, "char");
   GridcodifContainer.addRefreshingVar({rfrVar:"AV123CodificacaoSnRemove", rfrProp:"Visible", gxAttId:"Codificacaosnremove"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV147emBranco"});
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridcodifContainer.addRefreshingVar({rfrVar:"AV208BlueFocusEnv"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV128CaminhoPessoa"});
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[408]);
   GridcodifContainer.addRefreshingVar({rfrVar:"AV43Modo"});
   GridcodifContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   GridcodifContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridcodifContainer.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV151CodifPossuiDados"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV123CodificacaoSnRemove", rfrProp:"Value", gxAttId:"Codificacaosnremove"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV98CodificacaoId", rfrProp:"Value", gxAttId:"Codificacaoid"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV99CodificacaoPessoaValor", rfrProp:"Value", gxAttId:"Codificacaopessoavalor"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV100CodificacaoNivelUsuarioId", rfrProp:"Value", gxAttId:"Codificacaonivelusuarioid"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV101CodificacaoNivelDataHoraAlt", rfrProp:"Value", gxAttId:"Codificacaoniveldatahoraalt"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV152ClassPossuiDados"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV125ClassificacaoSnRemove", rfrProp:"Value", gxAttId:"Classificacaosnremove"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV103ClassificacaoId", rfrProp:"Value", gxAttId:"Classificacaoid"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV104OpcaoClassificacaoId", rfrProp:"Value", gxAttId:"Opcaoclassificacaoid"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV105ClassificacaoNivelUsuarioId", rfrProp:"Value", gxAttId:"Classificacaonivelusuarioid"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV106ClassificacaoNivelDataHoraAlt", rfrProp:"Value", gxAttId:"Classificacaoniveldatahoraalt"});
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[336]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[342]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[345]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[133]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[136]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[145]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[156]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[167]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[174]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[181]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[189]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[193]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[198]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[202]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[207]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[214]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[218]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[251]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[260]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[264]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[271]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[276]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[281]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[348]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[300]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[305]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[310]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[223]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[230]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[237]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[383]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[351]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[320]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[354]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridcodifContainer.addRefreshingVar({rfrVar:"AV107EmpresaCodificacaoEmpresaId"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV108EmpresaClassificacaoEmpresaId"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV137CodificacaoPadrao"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV138ClassificacaoPadrao"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV127IntFinCbl"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV149PessoaCliente"});
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[409]);
   GridcodifContainer.addRefreshingVar({rfrVar:"AV161SnPrompt"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV162SnCliente"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV163SnFornecedor"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV164SnFabricante"});
   GridcodifContainer.addRefreshingVar({rfrVar:"AV177Tela"});
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[410]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[411]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[182]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[392]);
   GridcodifContainer.addRefreshingVar(this.GXValidFnc[394]);
   GridcodifContainer.addRefreshingVar({rfrVar:"AV150LimpaTela"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV125ClassificacaoSnRemove", rfrProp:"Visible", gxAttId:"Classificacaosnremove"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV147emBranco"});
   GridclassContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridclassContainer.addRefreshingVar({rfrVar:"AV208BlueFocusEnv"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV128CaminhoPessoa"});
   GridclassContainer.addRefreshingVar(this.GXValidFnc[408]);
   GridclassContainer.addRefreshingVar({rfrVar:"AV43Modo"});
   GridclassContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   GridclassContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridclassContainer.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV151CodifPossuiDados"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV123CodificacaoSnRemove", rfrProp:"Value", gxAttId:"Codificacaosnremove"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV98CodificacaoId", rfrProp:"Value", gxAttId:"Codificacaoid"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV99CodificacaoPessoaValor", rfrProp:"Value", gxAttId:"Codificacaopessoavalor"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV100CodificacaoNivelUsuarioId", rfrProp:"Value", gxAttId:"Codificacaonivelusuarioid"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV101CodificacaoNivelDataHoraAlt", rfrProp:"Value", gxAttId:"Codificacaoniveldatahoraalt"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV152ClassPossuiDados"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV125ClassificacaoSnRemove", rfrProp:"Value", gxAttId:"Classificacaosnremove"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV103ClassificacaoId", rfrProp:"Value", gxAttId:"Classificacaoid"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV104OpcaoClassificacaoId", rfrProp:"Value", gxAttId:"Opcaoclassificacaoid"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV105ClassificacaoNivelUsuarioId", rfrProp:"Value", gxAttId:"Classificacaonivelusuarioid"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV106ClassificacaoNivelDataHoraAlt", rfrProp:"Value", gxAttId:"Classificacaoniveldatahoraalt"});
   GridclassContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[336]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[339]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[342]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[345]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[133]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[136]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[145]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[156]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[160]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[167]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[174]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[181]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[189]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[193]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[198]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[202]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[207]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[214]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[218]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[251]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[260]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[264]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[271]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[276]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[281]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[286]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[291]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[292]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[293]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[294]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[295]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[348]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[300]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[305]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[310]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[315]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[223]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[230]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[237]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[383]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[351]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[320]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[354]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[325]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[330]);
   GridclassContainer.addRefreshingVar({rfrVar:"AV107EmpresaCodificacaoEmpresaId"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV108EmpresaClassificacaoEmpresaId"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV137CodificacaoPadrao"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV138ClassificacaoPadrao"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV127IntFinCbl"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV149PessoaCliente"});
   GridclassContainer.addRefreshingVar(this.GXValidFnc[409]);
   GridclassContainer.addRefreshingVar({rfrVar:"AV161SnPrompt"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV162SnCliente"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV163SnFornecedor"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV164SnFabricante"});
   GridclassContainer.addRefreshingVar({rfrVar:"AV177Tela"});
   GridclassContainer.addRefreshingVar(this.GXValidFnc[410]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[411]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[182]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[331]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[392]);
   GridclassContainer.addRefreshingVar(this.GXValidFnc[394]);
   GridclassContainer.addRefreshingVar({rfrVar:"AV150LimpaTela"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpessoafornecedor());
