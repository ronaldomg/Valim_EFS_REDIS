/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:16:37.59
*/
gx.evt.autoSkip = false;
gx.define('taparelhocliente', false, function () {
   this.ServerClass =  "taparelhocliente" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A9698AparelhoClienteSNVisitaAgenda=gx.fn.getControlValue("APARELHOCLIENTESNVISITAAGENDA") ;
      this.A9699AparelhoClienteDataNovaLigacao=gx.fn.getDateTimeValue("APARELHOCLIENTEDATANOVALIGACAO") ;
      this.A9888AparelhoClienteObservacao=gx.fn.getControlValue("APARELHOCLIENTEOBSERVACAO") ;
      this.A9703AparelhoClienteUsuarioLock=gx.fn.getControlValue("APARELHOCLIENTEUSUARIOLOCK") ;
      this.A9704AparelhoClienteDataLock=gx.fn.getDateTimeValue("APARELHOCLIENTEDATALOCK") ;
      this.A9695AparelhoClienteProfissionalEmp=gx.fn.getControlValue("APARELHOCLIENTEPROFISSIONALEMP") ;
      this.A9696AparelhoClienteProfissionalId=gx.fn.getIntegerValue("APARELHOCLIENTEPROFISSIONALID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhoclienteseqid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTESEQID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientepessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclienteaparelhoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEAPARELHOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientepessoaempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientepessoaempid",["gx.O.A9692AparelhoClientePessoaEmpId", "gx.O.A9691AparelhoClientePessoaId"],[]);
      return true;
   }
   this.Valid_Aparelhoclienteaparelhoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclienteaparelhoid",["gx.O.A8865AparelhoClienteSeqId", "gx.O.A9691AparelhoClientePessoaId", "gx.O.A9692AparelhoClientePessoaEmpId", "gx.O.A9693AparelhoClienteAparelhoEmpId", "gx.O.A9694AparelhoClienteAparelhoId", "gx.O.A8856AparelhoCaracteristicaVlr1", "gx.O.A8857AparelhoCaracteristicaVlr2", "gx.O.A8858AparelhoCaracteristicaVlr3", "gx.O.A8859AparelhoCaracteristicaVlr4", "gx.O.A8860AparelhoCaracteristicaVlr5", "gx.O.A8861AparelhoCaracteristicaVlr6", "gx.O.A8862AparelhoCaracteristicaVlr7", "gx.O.A8863AparelhoCaracteristicaVlr8", "gx.O.A8864AparelhoCaracteristicaVlr9", 'gx.date.urlDateTime(gx.O.A9699AparelhoClienteDataNovaLigacao,"DMY4")', "gx.O.A9888AparelhoClienteObservacao", "gx.O.A9232AparelhoClienteUsuAlt", 'gx.date.urlDateTime(gx.O.A9233AparelhoClienteDtUsuAlt,"DMY4")', "gx.O.A9698AparelhoClienteSNVisitaAgenda", "gx.O.A9703AparelhoClienteUsuarioLock", 'gx.date.urlDateTime(gx.O.A9704AparelhoClienteDataLock,"DMY4")', "gx.O.A8839AparelhoClienteCarac1Id", "gx.O.A8838AparelhoClienteCarac1EmpId", "gx.O.A8841AparelhoClienteCarac2Id", "gx.O.A8840AparelhoClienteCarac2EmpId", "gx.O.A8843AparelhoClienteCarac3Id", "gx.O.A8842AparelhoClienteCarac3EmpId", "gx.O.A8845AparelhoClienteCarac4Id", "gx.O.A8844AparelhoClienteCarac4EmpId", "gx.O.A8847AparelhoClienteCarac5Id", "gx.O.A8846AparelhoClienteCarac5EmpId", "gx.O.A8849AparelhoClienteCarac6Id", "gx.O.A8848AparelhoClienteCarac6EmpId", "gx.O.A8851AparelhoClienteCarac7Id", "gx.O.A8850AparelhoClienteCarac7EmpId", "gx.O.A8853AparelhoClienteCarac8Id", "gx.O.A8852AparelhoClienteCarac8EmpId", "gx.O.A8855AparelhoClienteCarac9Id", "gx.O.A8854AparelhoClienteCarac9EmpId", "gx.O.A9695AparelhoClienteProfissionalEmp", "gx.O.A9696AparelhoClienteProfissionalId"],["A8838AparelhoClienteCarac1EmpId", "A8839AparelhoClienteCarac1Id", "A8840AparelhoClienteCarac2EmpId", "A8841AparelhoClienteCarac2Id", "A8842AparelhoClienteCarac3EmpId", "A8843AparelhoClienteCarac3Id", "A8844AparelhoClienteCarac4EmpId", "A8845AparelhoClienteCarac4Id", "A8846AparelhoClienteCarac5EmpId", "A8847AparelhoClienteCarac5Id", "A8848AparelhoClienteCarac6EmpId", "A8849AparelhoClienteCarac6Id", "A8850AparelhoClienteCarac7EmpId", "A8851AparelhoClienteCarac7Id", "A8852AparelhoClienteCarac8EmpId", "A8853AparelhoClienteCarac8Id", "A8854AparelhoClienteCarac9EmpId", "A8855AparelhoClienteCarac9Id", "A8856AparelhoCaracteristicaVlr1", "A8857AparelhoCaracteristicaVlr2", "A8858AparelhoCaracteristicaVlr3", "A8859AparelhoCaracteristicaVlr4", "A8860AparelhoCaracteristicaVlr5", "A8861AparelhoCaracteristicaVlr6", "A8862AparelhoCaracteristicaVlr7", "A8863AparelhoCaracteristicaVlr8", "A8864AparelhoCaracteristicaVlr9", "A9699AparelhoClienteDataNovaLigacao", "A9888AparelhoClienteObservacao", "A9232AparelhoClienteUsuAlt", "A9233AparelhoClienteDtUsuAlt", "A9698AparelhoClienteSNVisitaAgenda", "A9696AparelhoClienteProfissionalId", "A9695AparelhoClienteProfissionalEmp", "A9703AparelhoClienteUsuarioLock", "A9704AparelhoClienteDataLock", "Gx_mode", "Z8865AparelhoClienteSeqId", "Z9691AparelhoClientePessoaId", "Z9692AparelhoClientePessoaEmpId", "Z9693AparelhoClienteAparelhoEmpId", "Z9694AparelhoClienteAparelhoId", "Z8838AparelhoClienteCarac1EmpId", "Z8839AparelhoClienteCarac1Id", "Z8840AparelhoClienteCarac2EmpId", "Z8841AparelhoClienteCarac2Id", "Z8842AparelhoClienteCarac3EmpId", "Z8843AparelhoClienteCarac3Id", "Z8844AparelhoClienteCarac4EmpId", "Z8845AparelhoClienteCarac4Id", "Z8846AparelhoClienteCarac5EmpId", "Z8847AparelhoClienteCarac5Id", "Z8848AparelhoClienteCarac6EmpId", "Z8849AparelhoClienteCarac6Id", "Z8850AparelhoClienteCarac7EmpId", "Z8851AparelhoClienteCarac7Id", "Z8852AparelhoClienteCarac8EmpId", "Z8853AparelhoClienteCarac8Id", "Z8854AparelhoClienteCarac9EmpId", "Z8855AparelhoClienteCarac9Id", "Z8856AparelhoCaracteristicaVlr1", "Z8857AparelhoCaracteristicaVlr2", "Z8858AparelhoCaracteristicaVlr3", "Z8859AparelhoCaracteristicaVlr4", "Z8860AparelhoCaracteristicaVlr5", "Z8861AparelhoCaracteristicaVlr6", "Z8862AparelhoCaracteristicaVlr7", "Z8863AparelhoCaracteristicaVlr8", "Z8864AparelhoCaracteristicaVlr9", "Z9699AparelhoClienteDataNovaLigacao", "Z9888AparelhoClienteObservacao", "Z9232AparelhoClienteUsuAlt", "Z9233AparelhoClienteDtUsuAlt", "Z9698AparelhoClienteSNVisitaAgenda", "Z9696AparelhoClienteProfissionalId", "Z9695AparelhoClienteProfissionalEmp", "Z9703AparelhoClienteUsuarioLock", "Z9704AparelhoClienteDataLock", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Aparelhoclientecarac1empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC1EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac1id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac1id",["gx.O.A8839AparelhoClienteCarac1Id", "gx.O.A8838AparelhoClienteCarac1EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac2empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC2EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac2id",["gx.O.A8841AparelhoClienteCarac2Id", "gx.O.A8840AparelhoClienteCarac2EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac3empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC3EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac3id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac3id",["gx.O.A8843AparelhoClienteCarac3Id", "gx.O.A8842AparelhoClienteCarac3EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac4empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC4EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac4id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac4id",["gx.O.A8845AparelhoClienteCarac4Id", "gx.O.A8844AparelhoClienteCarac4EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac5empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC5EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac5id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac5id",["gx.O.A8847AparelhoClienteCarac5Id", "gx.O.A8846AparelhoClienteCarac5EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac6empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC6EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac6id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac6id",["gx.O.A8849AparelhoClienteCarac6Id", "gx.O.A8848AparelhoClienteCarac6EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac7empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC7EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac7id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac7id",["gx.O.A8851AparelhoClienteCarac7Id", "gx.O.A8850AparelhoClienteCarac7EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac8empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC8EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac8id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac8id",["gx.O.A8853AparelhoClienteCarac8Id", "gx.O.A8852AparelhoClienteCarac8EmpId"],[]);
      return true;
   }
   this.Valid_Aparelhoclientecarac9empid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTECARAC9EMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclientecarac9id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclientecarac9id",["gx.O.A8855AparelhoClienteCarac9Id", "gx.O.A8854AparelhoClienteCarac9EmpId"],[]);
      return true;
   }
   this.e11ct717_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12ct717_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ct717_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,25,28,30,34,36,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,119,121,124,126,129,131,134,136,139,141,144,146,149,151,154,156,159,161,164,166,169,171,174,176,177,186,188,190];
   this.GXLastCtrlId =190;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteseqid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTESEQID",gxz:"Z8865AparelhoClienteSeqId",gxold:"O8865AparelhoClienteSeqId",gxvar:"A8865AparelhoClienteSeqId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8865AparelhoClienteSeqId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8865AparelhoClienteSeqId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTESEQID",gx.O.A8865AparelhoClienteSeqId,0)},c2v:function(){gx.O.A8865AparelhoClienteSeqId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTESEQID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientepessoaid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEPESSOAID",gxz:"Z9691AparelhoClientePessoaId",gxold:"O9691AparelhoClientePessoaId",gxvar:"A9691AparelhoClientePessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9691AparelhoClientePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9691AparelhoClientePessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEPESSOAID",gx.O.A9691AparelhoClientePessoaId,0)},c2v:function(){gx.O.A9691AparelhoClientePessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteaparelhoempid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEAPARELHOEMPID",gxz:"Z9693AparelhoClienteAparelhoEmpId",gxold:"O9693AparelhoClienteAparelhoEmpId",gxvar:"A9693AparelhoClienteAparelhoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9693AparelhoClienteAparelhoEmpId=Value},v2z:function(Value){gx.O.Z9693AparelhoClienteAparelhoEmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEAPARELHOEMPID",gx.O.A9693AparelhoClienteAparelhoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9693AparelhoClienteAparelhoEmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTEAPARELHOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientepessoaempid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEPESSOAEMPID",gxz:"Z9692AparelhoClientePessoaEmpId",gxold:"O9692AparelhoClientePessoaEmpId",gxvar:"A9692AparelhoClientePessoaEmpId",ucs:[],op:[],ip:[19,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9692AparelhoClientePessoaEmpId=Value},v2z:function(Value){gx.O.Z9692AparelhoClientePessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEPESSOAEMPID",gx.O.A9692AparelhoClientePessoaEmpId,0)},c2v:function(){gx.O.A9692AparelhoClientePessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTEPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteaparelhoid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEAPARELHOID",gxz:"Z9694AparelhoClienteAparelhoId",gxold:"O9694AparelhoClienteAparelhoId",gxvar:"A9694AparelhoClienteAparelhoId",ucs:[],op:[116,121,106,111,96,101,86,91,76,81,66,71,56,61,46,51,36,41,176,171,166,161,156,151,146,141,136,131,126],ip:[116,121,106,111,96,101,86,91,76,81,66,71,56,61,46,51,36,41,176,171,166,161,156,151,146,141,136,131,126,30,24,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9694AparelhoClienteAparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9694AparelhoClienteAparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEAPARELHOID",gx.O.A9694AparelhoClienteAparelhoId,0)},c2v:function(){gx.O.A9694AparelhoClienteAparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac1empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC1EMPID",gxz:"Z8838AparelhoClienteCarac1EmpId",gxold:"O8838AparelhoClienteCarac1EmpId",gxvar:"A8838AparelhoClienteCarac1EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8838AparelhoClienteCarac1EmpId=Value},v2z:function(Value){gx.O.Z8838AparelhoClienteCarac1EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC1EMPID",gx.O.A8838AparelhoClienteCarac1EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8838AparelhoClienteCarac1EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC1EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac1id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC1ID",gxz:"Z8839AparelhoClienteCarac1Id",gxold:"O8839AparelhoClienteCarac1Id",gxvar:"A8839AparelhoClienteCarac1Id",ucs:[],op:[],ip:[36,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8839AparelhoClienteCarac1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8839AparelhoClienteCarac1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC1ID",gx.O.A8839AparelhoClienteCarac1Id,0)},c2v:function(){gx.O.A8839AparelhoClienteCarac1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC1ID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac2empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC2EMPID",gxz:"Z8840AparelhoClienteCarac2EmpId",gxold:"O8840AparelhoClienteCarac2EmpId",gxvar:"A8840AparelhoClienteCarac2EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8840AparelhoClienteCarac2EmpId=Value},v2z:function(Value){gx.O.Z8840AparelhoClienteCarac2EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC2EMPID",gx.O.A8840AparelhoClienteCarac2EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8840AparelhoClienteCarac2EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC2EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac2id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC2ID",gxz:"Z8841AparelhoClienteCarac2Id",gxold:"O8841AparelhoClienteCarac2Id",gxvar:"A8841AparelhoClienteCarac2Id",ucs:[],op:[],ip:[46,51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8841AparelhoClienteCarac2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8841AparelhoClienteCarac2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC2ID",gx.O.A8841AparelhoClienteCarac2Id,0)},c2v:function(){gx.O.A8841AparelhoClienteCarac2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC2ID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac3empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC3EMPID",gxz:"Z8842AparelhoClienteCarac3EmpId",gxold:"O8842AparelhoClienteCarac3EmpId",gxvar:"A8842AparelhoClienteCarac3EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8842AparelhoClienteCarac3EmpId=Value},v2z:function(Value){gx.O.Z8842AparelhoClienteCarac3EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC3EMPID",gx.O.A8842AparelhoClienteCarac3EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8842AparelhoClienteCarac3EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC3EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac3id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC3ID",gxz:"Z8843AparelhoClienteCarac3Id",gxold:"O8843AparelhoClienteCarac3Id",gxvar:"A8843AparelhoClienteCarac3Id",ucs:[],op:[],ip:[56,61],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8843AparelhoClienteCarac3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8843AparelhoClienteCarac3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC3ID",gx.O.A8843AparelhoClienteCarac3Id,0)},c2v:function(){gx.O.A8843AparelhoClienteCarac3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC3ID",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac4empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC4EMPID",gxz:"Z8844AparelhoClienteCarac4EmpId",gxold:"O8844AparelhoClienteCarac4EmpId",gxvar:"A8844AparelhoClienteCarac4EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8844AparelhoClienteCarac4EmpId=Value},v2z:function(Value){gx.O.Z8844AparelhoClienteCarac4EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC4EMPID",gx.O.A8844AparelhoClienteCarac4EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8844AparelhoClienteCarac4EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC4EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac4id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC4ID",gxz:"Z8845AparelhoClienteCarac4Id",gxold:"O8845AparelhoClienteCarac4Id",gxvar:"A8845AparelhoClienteCarac4Id",ucs:[],op:[],ip:[66,71],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8845AparelhoClienteCarac4Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8845AparelhoClienteCarac4Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC4ID",gx.O.A8845AparelhoClienteCarac4Id,0)},c2v:function(){gx.O.A8845AparelhoClienteCarac4Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC4ID",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac5empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC5EMPID",gxz:"Z8846AparelhoClienteCarac5EmpId",gxold:"O8846AparelhoClienteCarac5EmpId",gxvar:"A8846AparelhoClienteCarac5EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8846AparelhoClienteCarac5EmpId=Value},v2z:function(Value){gx.O.Z8846AparelhoClienteCarac5EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC5EMPID",gx.O.A8846AparelhoClienteCarac5EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8846AparelhoClienteCarac5EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC5EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[79]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac5id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC5ID",gxz:"Z8847AparelhoClienteCarac5Id",gxold:"O8847AparelhoClienteCarac5Id",gxvar:"A8847AparelhoClienteCarac5Id",ucs:[],op:[],ip:[76,81],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8847AparelhoClienteCarac5Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8847AparelhoClienteCarac5Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC5ID",gx.O.A8847AparelhoClienteCarac5Id,0)},c2v:function(){gx.O.A8847AparelhoClienteCarac5Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC5ID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac6empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC6EMPID",gxz:"Z8848AparelhoClienteCarac6EmpId",gxold:"O8848AparelhoClienteCarac6EmpId",gxvar:"A8848AparelhoClienteCarac6EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8848AparelhoClienteCarac6EmpId=Value},v2z:function(Value){gx.O.Z8848AparelhoClienteCarac6EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC6EMPID",gx.O.A8848AparelhoClienteCarac6EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8848AparelhoClienteCarac6EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC6EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[89]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac6id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC6ID",gxz:"Z8849AparelhoClienteCarac6Id",gxold:"O8849AparelhoClienteCarac6Id",gxvar:"A8849AparelhoClienteCarac6Id",ucs:[],op:[],ip:[86,91],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8849AparelhoClienteCarac6Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8849AparelhoClienteCarac6Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC6ID",gx.O.A8849AparelhoClienteCarac6Id,0)},c2v:function(){gx.O.A8849AparelhoClienteCarac6Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC6ID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac7empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC7EMPID",gxz:"Z8850AparelhoClienteCarac7EmpId",gxold:"O8850AparelhoClienteCarac7EmpId",gxvar:"A8850AparelhoClienteCarac7EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8850AparelhoClienteCarac7EmpId=Value},v2z:function(Value){gx.O.Z8850AparelhoClienteCarac7EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC7EMPID",gx.O.A8850AparelhoClienteCarac7EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8850AparelhoClienteCarac7EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC7EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 96 , function() {
   });
   GXValidFnc[99]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac7id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC7ID",gxz:"Z8851AparelhoClienteCarac7Id",gxold:"O8851AparelhoClienteCarac7Id",gxvar:"A8851AparelhoClienteCarac7Id",ucs:[],op:[],ip:[96,101],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8851AparelhoClienteCarac7Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8851AparelhoClienteCarac7Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC7ID",gx.O.A8851AparelhoClienteCarac7Id,0)},c2v:function(){gx.O.A8851AparelhoClienteCarac7Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC7ID",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac8empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC8EMPID",gxz:"Z8852AparelhoClienteCarac8EmpId",gxold:"O8852AparelhoClienteCarac8EmpId",gxvar:"A8852AparelhoClienteCarac8EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8852AparelhoClienteCarac8EmpId=Value},v2z:function(Value){gx.O.Z8852AparelhoClienteCarac8EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC8EMPID",gx.O.A8852AparelhoClienteCarac8EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8852AparelhoClienteCarac8EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC8EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 106 , function() {
   });
   GXValidFnc[109]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac8id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC8ID",gxz:"Z8853AparelhoClienteCarac8Id",gxold:"O8853AparelhoClienteCarac8Id",gxvar:"A8853AparelhoClienteCarac8Id",ucs:[],op:[],ip:[106,111],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8853AparelhoClienteCarac8Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8853AparelhoClienteCarac8Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC8ID",gx.O.A8853AparelhoClienteCarac8Id,0)},c2v:function(){gx.O.A8853AparelhoClienteCarac8Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC8ID",'.')},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac9empid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC9EMPID",gxz:"Z8854AparelhoClienteCarac9EmpId",gxold:"O8854AparelhoClienteCarac9EmpId",gxvar:"A8854AparelhoClienteCarac9EmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8854AparelhoClienteCarac9EmpId=Value},v2z:function(Value){gx.O.Z8854AparelhoClienteCarac9EmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC9EMPID",gx.O.A8854AparelhoClienteCarac9EmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8854AparelhoClienteCarac9EmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTECARAC9EMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[119]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclientecarac9id,isvalid:null,rgrid:[],fld:"APARELHOCLIENTECARAC9ID",gxz:"Z8855AparelhoClienteCarac9Id",gxold:"O8855AparelhoClienteCarac9Id",gxvar:"A8855AparelhoClienteCarac9Id",ucs:[],op:[],ip:[116,121],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8855AparelhoClienteCarac9Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8855AparelhoClienteCarac9Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTECARAC9ID",gx.O.A8855AparelhoClienteCarac9Id,0)},c2v:function(){gx.O.A8855AparelhoClienteCarac9Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTECARAC9ID",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR1",gxz:"Z8856AparelhoCaracteristicaVlr1",gxold:"O8856AparelhoCaracteristicaVlr1",gxvar:"A8856AparelhoCaracteristicaVlr1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8856AparelhoCaracteristicaVlr1=Value},v2z:function(Value){gx.O.Z8856AparelhoCaracteristicaVlr1=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR1",gx.O.A8856AparelhoCaracteristicaVlr1,0)},c2v:function(){gx.O.A8856AparelhoCaracteristicaVlr1=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR1")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR2",gxz:"Z8857AparelhoCaracteristicaVlr2",gxold:"O8857AparelhoCaracteristicaVlr2",gxvar:"A8857AparelhoCaracteristicaVlr2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8857AparelhoCaracteristicaVlr2=Value},v2z:function(Value){gx.O.Z8857AparelhoCaracteristicaVlr2=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR2",gx.O.A8857AparelhoCaracteristicaVlr2,0)},c2v:function(){gx.O.A8857AparelhoCaracteristicaVlr2=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR2")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR3",gxz:"Z8858AparelhoCaracteristicaVlr3",gxold:"O8858AparelhoCaracteristicaVlr3",gxvar:"A8858AparelhoCaracteristicaVlr3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8858AparelhoCaracteristicaVlr3=Value},v2z:function(Value){gx.O.Z8858AparelhoCaracteristicaVlr3=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR3",gx.O.A8858AparelhoCaracteristicaVlr3,0)},c2v:function(){gx.O.A8858AparelhoCaracteristicaVlr3=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR3")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR4",gxz:"Z8859AparelhoCaracteristicaVlr4",gxold:"O8859AparelhoCaracteristicaVlr4",gxvar:"A8859AparelhoCaracteristicaVlr4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8859AparelhoCaracteristicaVlr4=Value},v2z:function(Value){gx.O.Z8859AparelhoCaracteristicaVlr4=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR4",gx.O.A8859AparelhoCaracteristicaVlr4,0)},c2v:function(){gx.O.A8859AparelhoCaracteristicaVlr4=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR4")},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR5",gxz:"Z8860AparelhoCaracteristicaVlr5",gxold:"O8860AparelhoCaracteristicaVlr5",gxvar:"A8860AparelhoCaracteristicaVlr5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8860AparelhoCaracteristicaVlr5=Value},v2z:function(Value){gx.O.Z8860AparelhoCaracteristicaVlr5=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR5",gx.O.A8860AparelhoCaracteristicaVlr5,0)},c2v:function(){gx.O.A8860AparelhoCaracteristicaVlr5=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR5")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[151]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR6",gxz:"Z8861AparelhoCaracteristicaVlr6",gxold:"O8861AparelhoCaracteristicaVlr6",gxvar:"A8861AparelhoCaracteristicaVlr6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8861AparelhoCaracteristicaVlr6=Value},v2z:function(Value){gx.O.Z8861AparelhoCaracteristicaVlr6=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR6",gx.O.A8861AparelhoCaracteristicaVlr6,0)},c2v:function(){gx.O.A8861AparelhoCaracteristicaVlr6=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR6")},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[156]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR7",gxz:"Z8862AparelhoCaracteristicaVlr7",gxold:"O8862AparelhoCaracteristicaVlr7",gxvar:"A8862AparelhoCaracteristicaVlr7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8862AparelhoCaracteristicaVlr7=Value},v2z:function(Value){gx.O.Z8862AparelhoCaracteristicaVlr7=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR7",gx.O.A8862AparelhoCaracteristicaVlr7,0)},c2v:function(){gx.O.A8862AparelhoCaracteristicaVlr7=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR7")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR8",gxz:"Z8863AparelhoCaracteristicaVlr8",gxold:"O8863AparelhoCaracteristicaVlr8",gxvar:"A8863AparelhoCaracteristicaVlr8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8863AparelhoCaracteristicaVlr8=Value},v2z:function(Value){gx.O.Z8863AparelhoCaracteristicaVlr8=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR8",gx.O.A8863AparelhoCaracteristicaVlr8,0)},c2v:function(){gx.O.A8863AparelhoCaracteristicaVlr8=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR8")},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[166]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACTERISTICAVLR9",gxz:"Z8864AparelhoCaracteristicaVlr9",gxold:"O8864AparelhoCaracteristicaVlr9",gxvar:"A8864AparelhoCaracteristicaVlr9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8864AparelhoCaracteristicaVlr9=Value},v2z:function(Value){gx.O.Z8864AparelhoCaracteristicaVlr9=Value},v2c:function(){gx.fn.setControlValue("APARELHOCARACTERISTICAVLR9",gx.O.A8864AparelhoCaracteristicaVlr9,0)},c2v:function(){gx.O.A8864AparelhoCaracteristicaVlr9=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCARACTERISTICAVLR9")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[171]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEUSUALT",gxz:"Z9232AparelhoClienteUsuAlt",gxold:"O9232AparelhoClienteUsuAlt",gxvar:"A9232AparelhoClienteUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9232AparelhoClienteUsuAlt=Value},v2z:function(Value){gx.O.Z9232AparelhoClienteUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEUSUALT",gx.O.A9232AparelhoClienteUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9232AparelhoClienteUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTEUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 171 , function() {
   });
   GXValidFnc[174]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEDTUSUALT",gxz:"Z9233AparelhoClienteDtUsuAlt",gxold:"O9233AparelhoClienteDtUsuAlt",gxvar:"A9233AparelhoClienteDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9233AparelhoClienteDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9233AparelhoClienteDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEDTUSUALT",gx.O.A9233AparelhoClienteDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9233AparelhoClienteDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHOCLIENTEDTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 176 , function() {
   });
   GXValidFnc[177]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[188]={fld:"BTNHELP",grid:0};
   GXValidFnc[190]={fld:"PROMPT_9693_9694",grid:717};
   this.A8865AparelhoClienteSeqId = 0 ;
   this.Z8865AparelhoClienteSeqId = 0 ;
   this.O8865AparelhoClienteSeqId = 0 ;
   this.A9691AparelhoClientePessoaId = 0 ;
   this.Z9691AparelhoClientePessoaId = 0 ;
   this.O9691AparelhoClientePessoaId = 0 ;
   this.A9693AparelhoClienteAparelhoEmpId = "" ;
   this.Z9693AparelhoClienteAparelhoEmpId = "" ;
   this.O9693AparelhoClienteAparelhoEmpId = "" ;
   this.A9692AparelhoClientePessoaEmpId = "" ;
   this.Z9692AparelhoClientePessoaEmpId = "" ;
   this.O9692AparelhoClientePessoaEmpId = "" ;
   this.A9694AparelhoClienteAparelhoId = 0 ;
   this.Z9694AparelhoClienteAparelhoId = 0 ;
   this.O9694AparelhoClienteAparelhoId = 0 ;
   this.A8838AparelhoClienteCarac1EmpId = "" ;
   this.Z8838AparelhoClienteCarac1EmpId = "" ;
   this.O8838AparelhoClienteCarac1EmpId = "" ;
   this.A8839AparelhoClienteCarac1Id = 0 ;
   this.Z8839AparelhoClienteCarac1Id = 0 ;
   this.O8839AparelhoClienteCarac1Id = 0 ;
   this.A8840AparelhoClienteCarac2EmpId = "" ;
   this.Z8840AparelhoClienteCarac2EmpId = "" ;
   this.O8840AparelhoClienteCarac2EmpId = "" ;
   this.A8841AparelhoClienteCarac2Id = 0 ;
   this.Z8841AparelhoClienteCarac2Id = 0 ;
   this.O8841AparelhoClienteCarac2Id = 0 ;
   this.A8842AparelhoClienteCarac3EmpId = "" ;
   this.Z8842AparelhoClienteCarac3EmpId = "" ;
   this.O8842AparelhoClienteCarac3EmpId = "" ;
   this.A8843AparelhoClienteCarac3Id = 0 ;
   this.Z8843AparelhoClienteCarac3Id = 0 ;
   this.O8843AparelhoClienteCarac3Id = 0 ;
   this.A8844AparelhoClienteCarac4EmpId = "" ;
   this.Z8844AparelhoClienteCarac4EmpId = "" ;
   this.O8844AparelhoClienteCarac4EmpId = "" ;
   this.A8845AparelhoClienteCarac4Id = 0 ;
   this.Z8845AparelhoClienteCarac4Id = 0 ;
   this.O8845AparelhoClienteCarac4Id = 0 ;
   this.A8846AparelhoClienteCarac5EmpId = "" ;
   this.Z8846AparelhoClienteCarac5EmpId = "" ;
   this.O8846AparelhoClienteCarac5EmpId = "" ;
   this.A8847AparelhoClienteCarac5Id = 0 ;
   this.Z8847AparelhoClienteCarac5Id = 0 ;
   this.O8847AparelhoClienteCarac5Id = 0 ;
   this.A8848AparelhoClienteCarac6EmpId = "" ;
   this.Z8848AparelhoClienteCarac6EmpId = "" ;
   this.O8848AparelhoClienteCarac6EmpId = "" ;
   this.A8849AparelhoClienteCarac6Id = 0 ;
   this.Z8849AparelhoClienteCarac6Id = 0 ;
   this.O8849AparelhoClienteCarac6Id = 0 ;
   this.A8850AparelhoClienteCarac7EmpId = "" ;
   this.Z8850AparelhoClienteCarac7EmpId = "" ;
   this.O8850AparelhoClienteCarac7EmpId = "" ;
   this.A8851AparelhoClienteCarac7Id = 0 ;
   this.Z8851AparelhoClienteCarac7Id = 0 ;
   this.O8851AparelhoClienteCarac7Id = 0 ;
   this.A8852AparelhoClienteCarac8EmpId = "" ;
   this.Z8852AparelhoClienteCarac8EmpId = "" ;
   this.O8852AparelhoClienteCarac8EmpId = "" ;
   this.A8853AparelhoClienteCarac8Id = 0 ;
   this.Z8853AparelhoClienteCarac8Id = 0 ;
   this.O8853AparelhoClienteCarac8Id = 0 ;
   this.A8854AparelhoClienteCarac9EmpId = "" ;
   this.Z8854AparelhoClienteCarac9EmpId = "" ;
   this.O8854AparelhoClienteCarac9EmpId = "" ;
   this.A8855AparelhoClienteCarac9Id = 0 ;
   this.Z8855AparelhoClienteCarac9Id = 0 ;
   this.O8855AparelhoClienteCarac9Id = 0 ;
   this.A8856AparelhoCaracteristicaVlr1 = "" ;
   this.Z8856AparelhoCaracteristicaVlr1 = "" ;
   this.O8856AparelhoCaracteristicaVlr1 = "" ;
   this.A8857AparelhoCaracteristicaVlr2 = "" ;
   this.Z8857AparelhoCaracteristicaVlr2 = "" ;
   this.O8857AparelhoCaracteristicaVlr2 = "" ;
   this.A8858AparelhoCaracteristicaVlr3 = "" ;
   this.Z8858AparelhoCaracteristicaVlr3 = "" ;
   this.O8858AparelhoCaracteristicaVlr3 = "" ;
   this.A8859AparelhoCaracteristicaVlr4 = "" ;
   this.Z8859AparelhoCaracteristicaVlr4 = "" ;
   this.O8859AparelhoCaracteristicaVlr4 = "" ;
   this.A8860AparelhoCaracteristicaVlr5 = "" ;
   this.Z8860AparelhoCaracteristicaVlr5 = "" ;
   this.O8860AparelhoCaracteristicaVlr5 = "" ;
   this.A8861AparelhoCaracteristicaVlr6 = "" ;
   this.Z8861AparelhoCaracteristicaVlr6 = "" ;
   this.O8861AparelhoCaracteristicaVlr6 = "" ;
   this.A8862AparelhoCaracteristicaVlr7 = "" ;
   this.Z8862AparelhoCaracteristicaVlr7 = "" ;
   this.O8862AparelhoCaracteristicaVlr7 = "" ;
   this.A8863AparelhoCaracteristicaVlr8 = "" ;
   this.Z8863AparelhoCaracteristicaVlr8 = "" ;
   this.O8863AparelhoCaracteristicaVlr8 = "" ;
   this.A8864AparelhoCaracteristicaVlr9 = "" ;
   this.Z8864AparelhoCaracteristicaVlr9 = "" ;
   this.O8864AparelhoCaracteristicaVlr9 = "" ;
   this.A9232AparelhoClienteUsuAlt = "" ;
   this.Z9232AparelhoClienteUsuAlt = "" ;
   this.O9232AparelhoClienteUsuAlt = "" ;
   this.A9233AparelhoClienteDtUsuAlt = gx.date.nullDate() ;
   this.Z9233AparelhoClienteDtUsuAlt = gx.date.nullDate() ;
   this.O9233AparelhoClienteDtUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8865AparelhoClienteSeqId = 0 ;
   this.A9691AparelhoClientePessoaId = 0 ;
   this.A9692AparelhoClientePessoaEmpId = "" ;
   this.A9693AparelhoClienteAparelhoEmpId = "" ;
   this.A9694AparelhoClienteAparelhoId = 0 ;
   this.Gx_BScreen = 0 ;
   this.A8838AparelhoClienteCarac1EmpId = "" ;
   this.A8839AparelhoClienteCarac1Id = 0 ;
   this.A8840AparelhoClienteCarac2EmpId = "" ;
   this.A8841AparelhoClienteCarac2Id = 0 ;
   this.A8842AparelhoClienteCarac3EmpId = "" ;
   this.A8843AparelhoClienteCarac3Id = 0 ;
   this.A8844AparelhoClienteCarac4EmpId = "" ;
   this.A8845AparelhoClienteCarac4Id = 0 ;
   this.A8846AparelhoClienteCarac5EmpId = "" ;
   this.A8847AparelhoClienteCarac5Id = 0 ;
   this.A8848AparelhoClienteCarac6EmpId = "" ;
   this.A8849AparelhoClienteCarac6Id = 0 ;
   this.A8850AparelhoClienteCarac7EmpId = "" ;
   this.A8851AparelhoClienteCarac7Id = 0 ;
   this.A8852AparelhoClienteCarac8EmpId = "" ;
   this.A8853AparelhoClienteCarac8Id = 0 ;
   this.A8854AparelhoClienteCarac9EmpId = "" ;
   this.A8855AparelhoClienteCarac9Id = 0 ;
   this.A8856AparelhoCaracteristicaVlr1 = "" ;
   this.A8857AparelhoCaracteristicaVlr2 = "" ;
   this.A8858AparelhoCaracteristicaVlr3 = "" ;
   this.A8859AparelhoCaracteristicaVlr4 = "" ;
   this.A8860AparelhoCaracteristicaVlr5 = "" ;
   this.A8861AparelhoCaracteristicaVlr6 = "" ;
   this.A8862AparelhoCaracteristicaVlr7 = "" ;
   this.A8863AparelhoCaracteristicaVlr8 = "" ;
   this.A8864AparelhoCaracteristicaVlr9 = "" ;
   this.A9699AparelhoClienteDataNovaLigacao = gx.date.nullDate() ;
   this.A9888AparelhoClienteObservacao = "" ;
   this.A9232AparelhoClienteUsuAlt = "" ;
   this.A9233AparelhoClienteDtUsuAlt = gx.date.nullDate() ;
   this.A9698AparelhoClienteSNVisitaAgenda = "" ;
   this.A9696AparelhoClienteProfissionalId = 0 ;
   this.A9695AparelhoClienteProfissionalEmp = "" ;
   this.A9703AparelhoClienteUsuarioLock = "" ;
   this.A9704AparelhoClienteDataLock = gx.date.nullDate() ;
   this.Events = {"e12ct717_client": ["ENTER", true] ,"e13ct717_client": ["CANCEL", true] ,"e11ct717_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_9693_9694", [24,30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A9698AparelhoClienteSNVisitaAgenda", "APARELHOCLIENTESNVISITAAGENDA", 0, "char");
   this.setVCMap("A9699AparelhoClienteDataNovaLigacao", "APARELHOCLIENTEDATANOVALIGACAO", 0, "dtime");
   this.setVCMap("A9888AparelhoClienteObservacao", "APARELHOCLIENTEOBSERVACAO", 0, "vchar");
   this.setVCMap("A9703AparelhoClienteUsuarioLock", "APARELHOCLIENTEUSUARIOLOCK", 0, "char");
   this.setVCMap("A9704AparelhoClienteDataLock", "APARELHOCLIENTEDATALOCK", 0, "dtime");
   this.setVCMap("A9695AparelhoClienteProfissionalEmp", "APARELHOCLIENTEPROFISSIONALEMP", 0, "char");
   this.setVCMap("A9696AparelhoClienteProfissionalId", "APARELHOCLIENTEPROFISSIONALID", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new taparelhocliente());
