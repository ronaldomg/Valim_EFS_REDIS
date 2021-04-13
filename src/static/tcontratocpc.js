/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:38:1.58
*/
gx.evt.autoSkip = false;
gx.define('tcontratocpc', false, function () {
   this.ServerClass =  "tcontratocpc" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20ContratoCPCEmpresaId=gx.fn.getControlValue("vCONTRATOCPCEMPRESAID") ;
      this.A11516ContratoCPCEmpresaId=gx.fn.getControlValue("CONTRATOCPCEMPRESAID") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contratocpctipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATOCPCTIPO");
         this.AnyError  = 0;
         try {
            if ( this.A11524ContratoCPCTipo == "C" )
            {
               gx.fn.setCtrlProperty("TABLE5","Visible", 1 );
            }
         }
         catch(e){}
         try {
            if ( this.A11524ContratoCPCTipo == "R" )
            {
               gx.fn.setCtrlProperty("TABLE4","Visible", 1 );
            }
         }
         catch(e){}
         if ( (""==this.A11524ContratoCPCTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo Contrato");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e14gl846_client=function()
   {
      this.clearMessages();
      if ( this.A11524ContratoCPCTipo == "C" )
      {
         gx.fn.setCtrlProperty("TABLE5","Visible", 1 );
         gx.fn.setCtrlProperty("TABLE4","Visible", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABLE5","Visible", 0 );
         gx.fn.setCtrlProperty("TABLE4","Visible", 1 );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TABLE5","Visible")',ctrl:'TABLE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE4","Visible")',ctrl:'TABLE4',prop:'Visible'}]);
   };
   this.e12gl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gl2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e15gl846_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16gl846_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,22,25,28,30,31,34,37,39,42,44,45,48,50,53,55,56,59,62,64,75,77];
   this.GXLastCtrlId =77;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV21Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV21Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV21Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE6",grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratocpctipo,isvalid:'e14gl846_client',rgrid:[],fld:"CONTRATOCPCTIPO",gxz:"Z11524ContratoCPCTipo",gxold:"O11524ContratoCPCTipo",gxvar:"A11524ContratoCPCTipo",ucs:[],op:[15],ip:[15],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11524ContratoCPCTipo=Value},v2z:function(Value){gx.O.Z11524ContratoCPCTipo=Value},v2c:function(){gx.fn.setComboBoxValue("CONTRATOCPCTIPO",gx.O.A11524ContratoCPCTipo)},c2v:function(){gx.O.A11524ContratoCPCTipo=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCTIPO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCTITULO",gxz:"Z11517ContratoCPCTitulo",gxold:"O11517ContratoCPCTitulo",gxvar:"A11517ContratoCPCTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11517ContratoCPCTitulo=Value},v2z:function(Value){gx.O.Z11517ContratoCPCTitulo=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCTITULO",gx.O.A11517ContratoCPCTitulo,0)},c2v:function(){gx.O.A11517ContratoCPCTitulo=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCTITULO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE9",grid:0};
   GXValidFnc[25]={fld:"TABLE8",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCCABECALHO",gxz:"Z11518ContratoCPCCabecalho",gxold:"O11518ContratoCPCCabecalho",gxvar:"A11518ContratoCPCCabecalho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11518ContratoCPCCabecalho=Value},v2z:function(Value){gx.O.Z11518ContratoCPCCabecalho=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCCABECALHO",gx.O.A11518ContratoCPCCabecalho,0)},c2v:function(){gx.O.A11518ContratoCPCCabecalho=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCCABECALHO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE11",grid:0};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCCABECALHOCONTRATADA",gxz:"Z11522ContratoCPCCabecalhoContratada",gxold:"O11522ContratoCPCCabecalhoContratada",gxvar:"A11522ContratoCPCCabecalhoContratada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11522ContratoCPCCabecalhoContratada=Value},v2z:function(Value){gx.O.Z11522ContratoCPCCabecalhoContratada=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCCABECALHOCONTRATADA",gx.O.A11522ContratoCPCCabecalhoContratada,0)},c2v:function(){gx.O.A11522ContratoCPCCabecalhoContratada=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCCABECALHOCONTRATADA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCCABECALHOCLAUSULA",gxz:"Z11523ContratoCPCCabecalhoClausula",gxold:"O11523ContratoCPCCabecalhoClausula",gxvar:"A11523ContratoCPCCabecalhoClausula",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11523ContratoCPCCabecalhoClausula=Value},v2z:function(Value){gx.O.Z11523ContratoCPCCabecalhoClausula=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCCABECALHOCLAUSULA",gx.O.A11523ContratoCPCCabecalhoClausula,0)},c2v:function(){gx.O.A11523ContratoCPCCabecalhoClausula=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCCABECALHOCLAUSULA")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCOBERVACOES",gxz:"Z11520ContratoCPCObervacoes",gxold:"O11520ContratoCPCObervacoes",gxvar:"A11520ContratoCPCObervacoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11520ContratoCPCObervacoes=Value},v2z:function(Value){gx.O.Z11520ContratoCPCObervacoes=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCOBERVACOES",gx.O.A11520ContratoCPCObervacoes,0)},c2v:function(){gx.O.A11520ContratoCPCObervacoes=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCOBERVACOES")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCDETALHEFINAL",gxz:"Z11521ContratoCPCDetalheFinal",gxold:"O11521ContratoCPCDetalheFinal",gxvar:"A11521ContratoCPCDetalheFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11521ContratoCPCDetalheFinal=Value},v2z:function(Value){gx.O.Z11521ContratoCPCDetalheFinal=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCDETALHEFINAL",gx.O.A11521ContratoCPCDetalheFinal,0)},c2v:function(){gx.O.A11521ContratoCPCDetalheFinal=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCDETALHEFINAL")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE10",grid:0};
   GXValidFnc[59]={fld:"TABLE3",grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCCLAUSULA",gxz:"Z11519ContratoCPCClausula",gxold:"O11519ContratoCPCClausula",gxvar:"A11519ContratoCPCClausula",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11519ContratoCPCClausula=Value},v2z:function(Value){gx.O.Z11519ContratoCPCClausula=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPCCLAUSULA",gx.O.A11519ContratoCPCClausula,0)},c2v:function(){gx.O.A11519ContratoCPCClausula=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPCCLAUSULA")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   this.A11524ContratoCPCTipo = "" ;
   this.Z11524ContratoCPCTipo = "" ;
   this.O11524ContratoCPCTipo = "" ;
   this.A11517ContratoCPCTitulo = "" ;
   this.Z11517ContratoCPCTitulo = "" ;
   this.O11517ContratoCPCTitulo = "" ;
   this.A11518ContratoCPCCabecalho = "" ;
   this.Z11518ContratoCPCCabecalho = "" ;
   this.O11518ContratoCPCCabecalho = "" ;
   this.A11522ContratoCPCCabecalhoContratada = "" ;
   this.Z11522ContratoCPCCabecalhoContratada = "" ;
   this.O11522ContratoCPCCabecalhoContratada = "" ;
   this.A11523ContratoCPCCabecalhoClausula = "" ;
   this.Z11523ContratoCPCCabecalhoClausula = "" ;
   this.O11523ContratoCPCCabecalhoClausula = "" ;
   this.A11520ContratoCPCObervacoes = "" ;
   this.Z11520ContratoCPCObervacoes = "" ;
   this.O11520ContratoCPCObervacoes = "" ;
   this.A11521ContratoCPCDetalheFinal = "" ;
   this.Z11521ContratoCPCDetalheFinal = "" ;
   this.O11521ContratoCPCDetalheFinal = "" ;
   this.A11519ContratoCPCClausula = "" ;
   this.Z11519ContratoCPCClausula = "" ;
   this.O11519ContratoCPCClausula = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV19UsrCod = "" ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV15MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV18Tabela = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV17SnAlterou = "" ;
   this.AV20ContratoCPCEmpresaId = "" ;
   this.A11516ContratoCPCEmpresaId = "" ;
   this.A11523ContratoCPCCabecalhoClausula = "" ;
   this.A11522ContratoCPCCabecalhoContratada = "" ;
   this.A11520ContratoCPCObervacoes = "" ;
   this.A11521ContratoCPCDetalheFinal = "" ;
   this.A11524ContratoCPCTipo = "" ;
   this.A11517ContratoCPCTitulo = "" ;
   this.A11518ContratoCPCCabecalho = "" ;
   this.A11519ContratoCPCClausula = "" ;
   this.AV21Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12gl2_client": ["'FECHAR'", true] ,"e13gl2_client": ["AFTER TRN", true] ,"e15gl846_client": ["ENTER", true] ,"e16gl846_client": ["CANCEL", true] ,"e14gl846_client": ["CONTRATOCPCTIPO.ISVALID", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20ContratoCPCEmpresaId',fld:'vCONTRATOCPCEMPRESAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["CONTRATOCPCTIPO.ISVALID"] = [[{av:'A11524ContratoCPCTipo',fld:'CONTRATOCPCTIPO'}],[{av:'gx.fn.getCtrlProperty("TABLE5","Visible")',ctrl:'TABLE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE4","Visible")',ctrl:'TABLE4',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20ContratoCPCEmpresaId", "vCONTRATOCPCEMPRESAID", 0, "char");
   this.setVCMap("A11516ContratoCPCEmpresaId", "CONTRATOCPCEMPRESAID", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcontratocpc());
