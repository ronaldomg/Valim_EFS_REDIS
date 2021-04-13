/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:36.60
*/
gx.evt.autoSkip = false;
gx.define('tinformacaoextra', false, function () {
   this.ServerClass =  "tinformacaoextra" ;
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
      this.AV18InformacaoExtraId=gx.fn.getIntegerValue("vINFORMACAOEXTRAID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Informacaoextraid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextradescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3572InformacaoExtraDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.Valid_Informacaoextralinha1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaoextralinha8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOEXTRALINHA8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136s2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146s383_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156s383_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,27,31,33,37,39,43,45,49,51,55,57,61,63,67,69,72,75,77,79,86,89,91];
   this.GXLastCtrlId =91;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextraid,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRAID",gxz:"Z3592InformacaoExtraId",gxold:"O3592InformacaoExtraId",gxvar:"A3592InformacaoExtraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3592InformacaoExtraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3592InformacaoExtraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRAID",gx.O.A3592InformacaoExtraId,0)},c2v:function(){gx.O.A3592InformacaoExtraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAOEXTRAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextradescricao,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRADESCRICAO",gxz:"Z3572InformacaoExtraDescricao",gxold:"O3572InformacaoExtraDescricao",gxvar:"A3572InformacaoExtraDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3572InformacaoExtraDescricao=Value},v2z:function(Value){gx.O.Z3572InformacaoExtraDescricao=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRADESCRICAO",gx.O.A3572InformacaoExtraDescricao,0)},c2v:function(){gx.O.A3572InformacaoExtraDescricao=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha1,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA1",gxz:"Z3573InformacaoExtraLinha1",gxold:"O3573InformacaoExtraLinha1",gxvar:"A3573InformacaoExtraLinha1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3573InformacaoExtraLinha1=Value},v2z:function(Value){gx.O.Z3573InformacaoExtraLinha1=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA1",gx.O.A3573InformacaoExtraLinha1,0)},c2v:function(){gx.O.A3573InformacaoExtraLinha1=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA1")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha2,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA2",gxz:"Z3574InformacaoExtraLinha2",gxold:"O3574InformacaoExtraLinha2",gxvar:"A3574InformacaoExtraLinha2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3574InformacaoExtraLinha2=Value},v2z:function(Value){gx.O.Z3574InformacaoExtraLinha2=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA2",gx.O.A3574InformacaoExtraLinha2,0)},c2v:function(){gx.O.A3574InformacaoExtraLinha2=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA2")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha3,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA3",gxz:"Z3575InformacaoExtraLinha3",gxold:"O3575InformacaoExtraLinha3",gxvar:"A3575InformacaoExtraLinha3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3575InformacaoExtraLinha3=Value},v2z:function(Value){gx.O.Z3575InformacaoExtraLinha3=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA3",gx.O.A3575InformacaoExtraLinha3,0)},c2v:function(){gx.O.A3575InformacaoExtraLinha3=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA3")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha4,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA4",gxz:"Z3576InformacaoExtraLinha4",gxold:"O3576InformacaoExtraLinha4",gxvar:"A3576InformacaoExtraLinha4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3576InformacaoExtraLinha4=Value},v2z:function(Value){gx.O.Z3576InformacaoExtraLinha4=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA4",gx.O.A3576InformacaoExtraLinha4,0)},c2v:function(){gx.O.A3576InformacaoExtraLinha4=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA4")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha5,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA5",gxz:"Z3577InformacaoExtraLinha5",gxold:"O3577InformacaoExtraLinha5",gxvar:"A3577InformacaoExtraLinha5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3577InformacaoExtraLinha5=Value},v2z:function(Value){gx.O.Z3577InformacaoExtraLinha5=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA5",gx.O.A3577InformacaoExtraLinha5,0)},c2v:function(){gx.O.A3577InformacaoExtraLinha5=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA5")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha6,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA6",gxz:"Z3578InformacaoExtraLinha6",gxold:"O3578InformacaoExtraLinha6",gxvar:"A3578InformacaoExtraLinha6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3578InformacaoExtraLinha6=Value},v2z:function(Value){gx.O.Z3578InformacaoExtraLinha6=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA6",gx.O.A3578InformacaoExtraLinha6,0)},c2v:function(){gx.O.A3578InformacaoExtraLinha6=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA6")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha7,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA7",gxz:"Z3579InformacaoExtraLinha7",gxold:"O3579InformacaoExtraLinha7",gxvar:"A3579InformacaoExtraLinha7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3579InformacaoExtraLinha7=Value},v2z:function(Value){gx.O.Z3579InformacaoExtraLinha7=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA7",gx.O.A3579InformacaoExtraLinha7,0)},c2v:function(){gx.O.A3579InformacaoExtraLinha7=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA7")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextralinha8,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA8",gxz:"Z3580InformacaoExtraLinha8",gxold:"O3580InformacaoExtraLinha8",gxvar:"A3580InformacaoExtraLinha8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3580InformacaoExtraLinha8=Value},v2z:function(Value){gx.O.Z3580InformacaoExtraLinha8=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA8",gx.O.A3580InformacaoExtraLinha8,0)},c2v:function(){gx.O.A3580InformacaoExtraLinha8=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA8")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA9",gxz:"Z3581InformacaoExtraLinha9",gxold:"O3581InformacaoExtraLinha9",gxvar:"A3581InformacaoExtraLinha9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3581InformacaoExtraLinha9=Value},v2z:function(Value){gx.O.Z3581InformacaoExtraLinha9=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA9",gx.O.A3581InformacaoExtraLinha9,0)},c2v:function(){gx.O.A3581InformacaoExtraLinha9=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA9")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA10",gxz:"Z3582InformacaoExtraLinha10",gxold:"O3582InformacaoExtraLinha10",gxvar:"A3582InformacaoExtraLinha10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3582InformacaoExtraLinha10=Value},v2z:function(Value){gx.O.Z3582InformacaoExtraLinha10=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA10",gx.O.A3582InformacaoExtraLinha10,0)},c2v:function(){gx.O.A3582InformacaoExtraLinha10=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA10")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA11",gxz:"Z3583InformacaoExtraLinha11",gxold:"O3583InformacaoExtraLinha11",gxvar:"A3583InformacaoExtraLinha11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3583InformacaoExtraLinha11=Value},v2z:function(Value){gx.O.Z3583InformacaoExtraLinha11=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA11",gx.O.A3583InformacaoExtraLinha11,0)},c2v:function(){gx.O.A3583InformacaoExtraLinha11=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA11")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA12",gxz:"Z3584InformacaoExtraLinha12",gxold:"O3584InformacaoExtraLinha12",gxvar:"A3584InformacaoExtraLinha12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3584InformacaoExtraLinha12=Value},v2z:function(Value){gx.O.Z3584InformacaoExtraLinha12=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA12",gx.O.A3584InformacaoExtraLinha12,0)},c2v:function(){gx.O.A3584InformacaoExtraLinha12=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA12")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA13",gxz:"Z3585InformacaoExtraLinha13",gxold:"O3585InformacaoExtraLinha13",gxvar:"A3585InformacaoExtraLinha13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3585InformacaoExtraLinha13=Value},v2z:function(Value){gx.O.Z3585InformacaoExtraLinha13=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA13",gx.O.A3585InformacaoExtraLinha13,0)},c2v:function(){gx.O.A3585InformacaoExtraLinha13=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA13")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA14",gxz:"Z3586InformacaoExtraLinha14",gxold:"O3586InformacaoExtraLinha14",gxvar:"A3586InformacaoExtraLinha14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3586InformacaoExtraLinha14=Value},v2z:function(Value){gx.O.Z3586InformacaoExtraLinha14=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA14",gx.O.A3586InformacaoExtraLinha14,0)},c2v:function(){gx.O.A3586InformacaoExtraLinha14=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA14")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA15",gxz:"Z3587InformacaoExtraLinha15",gxold:"O3587InformacaoExtraLinha15",gxvar:"A3587InformacaoExtraLinha15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3587InformacaoExtraLinha15=Value},v2z:function(Value){gx.O.Z3587InformacaoExtraLinha15=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA15",gx.O.A3587InformacaoExtraLinha15,0)},c2v:function(){gx.O.A3587InformacaoExtraLinha15=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA15")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:56,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRALINHA16",gxz:"Z3588InformacaoExtraLinha16",gxold:"O3588InformacaoExtraLinha16",gxvar:"A3588InformacaoExtraLinha16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3588InformacaoExtraLinha16=Value},v2z:function(Value){gx.O.Z3588InformacaoExtraLinha16=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRALINHA16",gx.O.A3588InformacaoExtraLinha16,0)},c2v:function(){gx.O.A3588InformacaoExtraLinha16=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRALINHA16")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TABLE4",grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRAUSUARIOALT",gxz:"Z3589InformacaoExtraUsuarioAlt",gxold:"O3589InformacaoExtraUsuarioAlt",gxvar:"A3589InformacaoExtraUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3589InformacaoExtraUsuarioAlt=Value},v2z:function(Value){gx.O.Z3589InformacaoExtraUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRAUSUARIOALT",gx.O.A3589InformacaoExtraUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3589InformacaoExtraUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[79]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRADATAHORAALT",gxz:"Z3590InformacaoExtraDataHoraAlt",gxold:"O3590InformacaoExtraDataHoraAlt",gxvar:"A3590InformacaoExtraDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3590InformacaoExtraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3590InformacaoExtraDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRADATAHORAALT",gx.O.A3590InformacaoExtraDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3590InformacaoExtraDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("INFORMACAOEXTRADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[86]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaoextraempresaid,isvalid:null,rgrid:[],fld:"INFORMACAOEXTRAEMPRESAID",gxz:"Z3591InformacaoExtraEmpresaId",gxold:"O3591InformacaoExtraEmpresaId",gxvar:"A3591InformacaoExtraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3591InformacaoExtraEmpresaId=Value},v2z:function(Value){gx.O.Z3591InformacaoExtraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOEXTRAEMPRESAID",gx.O.A3591InformacaoExtraEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3591InformacaoExtraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOEXTRAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[89]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"BTNHELP",grid:0};
   this.A3592InformacaoExtraId = 0 ;
   this.Z3592InformacaoExtraId = 0 ;
   this.O3592InformacaoExtraId = 0 ;
   this.A3572InformacaoExtraDescricao = "" ;
   this.Z3572InformacaoExtraDescricao = "" ;
   this.O3572InformacaoExtraDescricao = "" ;
   this.A3573InformacaoExtraLinha1 = "" ;
   this.Z3573InformacaoExtraLinha1 = "" ;
   this.O3573InformacaoExtraLinha1 = "" ;
   this.A3574InformacaoExtraLinha2 = "" ;
   this.Z3574InformacaoExtraLinha2 = "" ;
   this.O3574InformacaoExtraLinha2 = "" ;
   this.A3575InformacaoExtraLinha3 = "" ;
   this.Z3575InformacaoExtraLinha3 = "" ;
   this.O3575InformacaoExtraLinha3 = "" ;
   this.A3576InformacaoExtraLinha4 = "" ;
   this.Z3576InformacaoExtraLinha4 = "" ;
   this.O3576InformacaoExtraLinha4 = "" ;
   this.A3577InformacaoExtraLinha5 = "" ;
   this.Z3577InformacaoExtraLinha5 = "" ;
   this.O3577InformacaoExtraLinha5 = "" ;
   this.A3578InformacaoExtraLinha6 = "" ;
   this.Z3578InformacaoExtraLinha6 = "" ;
   this.O3578InformacaoExtraLinha6 = "" ;
   this.A3579InformacaoExtraLinha7 = "" ;
   this.Z3579InformacaoExtraLinha7 = "" ;
   this.O3579InformacaoExtraLinha7 = "" ;
   this.A3580InformacaoExtraLinha8 = "" ;
   this.Z3580InformacaoExtraLinha8 = "" ;
   this.O3580InformacaoExtraLinha8 = "" ;
   this.A3581InformacaoExtraLinha9 = "" ;
   this.Z3581InformacaoExtraLinha9 = "" ;
   this.O3581InformacaoExtraLinha9 = "" ;
   this.A3582InformacaoExtraLinha10 = "" ;
   this.Z3582InformacaoExtraLinha10 = "" ;
   this.O3582InformacaoExtraLinha10 = "" ;
   this.A3583InformacaoExtraLinha11 = "" ;
   this.Z3583InformacaoExtraLinha11 = "" ;
   this.O3583InformacaoExtraLinha11 = "" ;
   this.A3584InformacaoExtraLinha12 = "" ;
   this.Z3584InformacaoExtraLinha12 = "" ;
   this.O3584InformacaoExtraLinha12 = "" ;
   this.A3585InformacaoExtraLinha13 = "" ;
   this.Z3585InformacaoExtraLinha13 = "" ;
   this.O3585InformacaoExtraLinha13 = "" ;
   this.A3586InformacaoExtraLinha14 = "" ;
   this.Z3586InformacaoExtraLinha14 = "" ;
   this.O3586InformacaoExtraLinha14 = "" ;
   this.A3587InformacaoExtraLinha15 = "" ;
   this.Z3587InformacaoExtraLinha15 = "" ;
   this.O3587InformacaoExtraLinha15 = "" ;
   this.A3588InformacaoExtraLinha16 = "" ;
   this.Z3588InformacaoExtraLinha16 = "" ;
   this.O3588InformacaoExtraLinha16 = "" ;
   this.A3589InformacaoExtraUsuarioAlt = "" ;
   this.Z3589InformacaoExtraUsuarioAlt = "" ;
   this.O3589InformacaoExtraUsuarioAlt = "" ;
   this.A3590InformacaoExtraDataHoraAlt = gx.date.nullDate() ;
   this.Z3590InformacaoExtraDataHoraAlt = gx.date.nullDate() ;
   this.O3590InformacaoExtraDataHoraAlt = gx.date.nullDate() ;
   this.A3591InformacaoExtraEmpresaId = "" ;
   this.Z3591InformacaoExtraEmpresaId = "" ;
   this.O3591InformacaoExtraEmpresaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18InformacaoExtraId = 0 ;
   this.A3591InformacaoExtraEmpresaId = "" ;
   this.A3592InformacaoExtraId = 0 ;
   this.A3589InformacaoExtraUsuarioAlt = "" ;
   this.A3590InformacaoExtraDataHoraAlt = gx.date.nullDate() ;
   this.A3572InformacaoExtraDescricao = "" ;
   this.A3573InformacaoExtraLinha1 = "" ;
   this.A3574InformacaoExtraLinha2 = "" ;
   this.A3575InformacaoExtraLinha3 = "" ;
   this.A3576InformacaoExtraLinha4 = "" ;
   this.A3577InformacaoExtraLinha5 = "" ;
   this.A3578InformacaoExtraLinha6 = "" ;
   this.A3579InformacaoExtraLinha7 = "" ;
   this.A3580InformacaoExtraLinha8 = "" ;
   this.A3581InformacaoExtraLinha9 = "" ;
   this.A3582InformacaoExtraLinha10 = "" ;
   this.A3583InformacaoExtraLinha11 = "" ;
   this.A3584InformacaoExtraLinha12 = "" ;
   this.A3585InformacaoExtraLinha13 = "" ;
   this.A3586InformacaoExtraLinha14 = "" ;
   this.A3587InformacaoExtraLinha15 = "" ;
   this.A3588InformacaoExtraLinha16 = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126s2_client": ["'FECHAR'", true] ,"e136s2_client": ["AFTER TRN", true] ,"e146s383_client": ["ENTER", true] ,"e156s383_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18InformacaoExtraId',fld:'vINFORMACAOEXTRAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18InformacaoExtraId", "vINFORMACAOEXTRAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 383 ]= ["O3580InformacaoExtraLinha8","O3579InformacaoExtraLinha7","O3578InformacaoExtraLinha6","O3577InformacaoExtraLinha5","O3576InformacaoExtraLinha4","O3575InformacaoExtraLinha3","O3574InformacaoExtraLinha2","O3573InformacaoExtraLinha1","O3572InformacaoExtraDescricao"] ;
});
gx.setParentObj(new tinformacaoextra());
