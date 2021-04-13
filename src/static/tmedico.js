/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:21.83
*/
gx.evt.autoSkip = false;
gx.define('tmedico', false, function () {
   this.ServerClass =  "tmedico" ;
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
      this.A9946MedicoId=gx.fn.getIntegerValue("MEDICOID",'.') ;
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A9945MedicoEmpresaId=gx.fn.getControlValue("MEDICOEMPRESAID") ;
      this.AV29ErroCRM=gx.fn.getControlValue("vERROCRM") ;
      this.AV28ErroCPF=gx.fn.getIntegerValue("vERROCPF",'.') ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Medicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMEDICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Mediconome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MEDICONOME");
         this.AnyError  = 0;
         if ( (""==this.A9952MedicoNome) )
         {
            try {
               gxballoon.setError("Informe o Nome");
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
   this.Valid_Medicocrm=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Medicocrm",["gx.O.AV9EmpresaPadrao", "gx.O.A9946MedicoId", "gx.O.A9953MedicoCRM", "gx.O.AV29ErroCRM"],["AV29ErroCRM", "A9953MedicoCRM"]);
      return true;
   }
   this.Valid_Medicocpf=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Medicocpf",["gx.O.A9954MedicoCPF", "gx.O.AV28ErroCPF"],["AV28ErroCPF", "A9954MedicoCPF"]);
      return true;
   }
   this.e12ej2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ej2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ej746_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ej746_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,39,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Medicoid,isvalid:null,rgrid:[],fld:"vMEDICOID",gxz:"ZV17MedicoId",gxold:"OV17MedicoId",gxvar:"AV17MedicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MedicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17MedicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMEDICOID",gx.O.AV17MedicoId,0)},c2v:function(){gx.O.AV17MedicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMEDICOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mediconome,isvalid:null,rgrid:[],fld:"MEDICONOME",gxz:"Z9952MedicoNome",gxold:"O9952MedicoNome",gxvar:"A9952MedicoNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9952MedicoNome=Value},v2z:function(Value){gx.O.Z9952MedicoNome=Value},v2c:function(){gx.fn.setControlValue("MEDICONOME",gx.O.A9952MedicoNome,0)},c2v:function(){gx.O.A9952MedicoNome=this.val()},val:function(){return gx.fn.getControlValue("MEDICONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Medicocrm,isvalid:null,rgrid:[],fld:"MEDICOCRM",gxz:"Z9953MedicoCRM",gxold:"O9953MedicoCRM",gxvar:"A9953MedicoCRM",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9953MedicoCRM=Value},v2z:function(Value){gx.O.Z9953MedicoCRM=Value},v2c:function(){gx.fn.setControlValue("MEDICOCRM",gx.O.A9953MedicoCRM,0)},c2v:function(){gx.O.A9953MedicoCRM=this.val()},val:function(){return gx.fn.getControlValue("MEDICOCRM")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Medicocpf,isvalid:null,rgrid:[],fld:"MEDICOCPF",gxz:"Z9954MedicoCPF",gxold:"O9954MedicoCPF",gxvar:"A9954MedicoCPF",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9954MedicoCPF=Value},v2z:function(Value){gx.O.Z9954MedicoCPF=Value},v2c:function(){gx.fn.setControlValue("MEDICOCPF",gx.O.A9954MedicoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9954MedicoCPF=this.val()},val:function(){return gx.fn.getControlValue("MEDICOCPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"JS", format:2,grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.AV17MedicoId = 0 ;
   this.ZV17MedicoId = 0 ;
   this.OV17MedicoId = 0 ;
   this.A9952MedicoNome = "" ;
   this.Z9952MedicoNome = "" ;
   this.O9952MedicoNome = "" ;
   this.A9953MedicoCRM = "" ;
   this.Z9953MedicoCRM = "" ;
   this.O9953MedicoCRM = "" ;
   this.A9954MedicoCPF = "" ;
   this.Z9954MedicoCPF = "" ;
   this.O9954MedicoCPF = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV26UsrCod = "" ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV21Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV19MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV18Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV24Tabela = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV22SnAlterou = "" ;
   this.AV17MedicoId = 0 ;
   this.A9945MedicoEmpresaId = "" ;
   this.A9946MedicoId = 0 ;
   this.AV29ErroCRM = "" ;
   this.AV28ErroCPF = 0 ;
   this.A9952MedicoNome = "" ;
   this.A9953MedicoCRM = "" ;
   this.A9954MedicoCPF = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12ej2_client": ["'FECHAR'", true] ,"e13ej2_client": ["AFTER TRN", true] ,"e14ej746_client": ["ENTER", true] ,"e15ej746_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17MedicoId',fld:'vMEDICOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9946MedicoId", "MEDICOID", 0, "int");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A9945MedicoEmpresaId", "MEDICOEMPRESAID", 0, "char");
   this.setVCMap("AV29ErroCRM", "vERROCRM", 0, "svchar");
   this.setVCMap("AV28ErroCPF", "vERROCPF", 0, "int");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmedico());
