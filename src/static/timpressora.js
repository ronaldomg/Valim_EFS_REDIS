/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:17:29.27
*/
gx.evt.autoSkip = false;
gx.define('timpressora', false, function () {
   this.ServerClass =  "timpressora" ;
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
      this.AV9ImpressoraId=gx.fn.getIntegerValue("vIMPRESSORAID",'.') ;
      this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV17Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Impressoraid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPRESSORAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Impressoranome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPRESSORANOME");
         this.AnyError  = 0;
         if ( (""==this.A285ImpressoraNome) )
         {
            try {
               gxballoon.setError("Informe o Nome da Impressora");
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
   this.e120m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130m2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140m32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150m32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,27,28,29,30,31,34,36,37,38,39,40,41,42,45,47,48,49,50,51,52,53,56,58,59,60,61,62,63,64,67,69,70,71,72,73,74,75,78,80,81,82,83,84,85,86,89,91,92,93,94,95,96,97,98,101,103,104,105,106,107,108,109,112,114,115,116,117,118,119,120,123,125,126,127,128,129,130,131,134,136,137,138,139,140,141,142,145,147,148,149,150,151,152,153,162,164];
   this.GXLastCtrlId =164;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Impressoraid,isvalid:null,rgrid:[],fld:"IMPRESSORAID",gxz:"Z198ImpressoraId",gxold:"O198ImpressoraId",gxvar:"A198ImpressoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A198ImpressoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z198ImpressoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAID",gx.O.A198ImpressoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A198ImpressoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Impressoranome,isvalid:null,rgrid:[],fld:"IMPRESSORANOME",gxz:"Z285ImpressoraNome",gxold:"O285ImpressoraNome",gxvar:"A285ImpressoraNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A285ImpressoraNome=Value},v2z:function(Value){gx.O.Z285ImpressoraNome=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORANOME",gx.O.A285ImpressoraNome,0)},c2v:function(){gx.O.A285ImpressoraNome=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORANOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO1",gxz:"Z10531ImpressoraInicializacao1",gxold:"O10531ImpressoraInicializacao1",gxvar:"A10531ImpressoraInicializacao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10531ImpressoraInicializacao1=Value},v2z:function(Value){gx.O.Z10531ImpressoraInicializacao1=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO1",gx.O.A10531ImpressoraInicializacao1,0)},c2v:function(){gx.O.A10531ImpressoraInicializacao1=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO1")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO2",gxz:"Z10532ImpressoraInicializacao2",gxold:"O10532ImpressoraInicializacao2",gxvar:"A10532ImpressoraInicializacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10532ImpressoraInicializacao2=Value},v2z:function(Value){gx.O.Z10532ImpressoraInicializacao2=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO2",gx.O.A10532ImpressoraInicializacao2,0)},c2v:function(){gx.O.A10532ImpressoraInicializacao2=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO2")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO3",gxz:"Z10533ImpressoraInicializacao3",gxold:"O10533ImpressoraInicializacao3",gxvar:"A10533ImpressoraInicializacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10533ImpressoraInicializacao3=Value},v2z:function(Value){gx.O.Z10533ImpressoraInicializacao3=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO3",gx.O.A10533ImpressoraInicializacao3,0)},c2v:function(){gx.O.A10533ImpressoraInicializacao3=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO3")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO4",gxz:"Z10534ImpressoraInicializacao4",gxold:"O10534ImpressoraInicializacao4",gxvar:"A10534ImpressoraInicializacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10534ImpressoraInicializacao4=Value},v2z:function(Value){gx.O.Z10534ImpressoraInicializacao4=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO4",gx.O.A10534ImpressoraInicializacao4,0)},c2v:function(){gx.O.A10534ImpressoraInicializacao4=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO4")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO5",gxz:"Z10535ImpressoraInicializacao5",gxold:"O10535ImpressoraInicializacao5",gxvar:"A10535ImpressoraInicializacao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10535ImpressoraInicializacao5=Value},v2z:function(Value){gx.O.Z10535ImpressoraInicializacao5=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO5",gx.O.A10535ImpressoraInicializacao5,0)},c2v:function(){gx.O.A10535ImpressoraInicializacao5=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO5")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO6",gxz:"Z10536ImpressoraInicializacao6",gxold:"O10536ImpressoraInicializacao6",gxvar:"A10536ImpressoraInicializacao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10536ImpressoraInicializacao6=Value},v2z:function(Value){gx.O.Z10536ImpressoraInicializacao6=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO6",gx.O.A10536ImpressoraInicializacao6,0)},c2v:function(){gx.O.A10536ImpressoraInicializacao6=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO6")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAINICIALIZACAO7",gxz:"Z10537ImpressoraInicializacao7",gxold:"O10537ImpressoraInicializacao7",gxvar:"A10537ImpressoraInicializacao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10537ImpressoraInicializacao7=Value},v2z:function(Value){gx.O.Z10537ImpressoraInicializacao7=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAINICIALIZACAO7",gx.O.A10537ImpressoraInicializacao7,0)},c2v:function(){gx.O.A10537ImpressoraInicializacao7=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAINICIALIZACAO7")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP1",gxz:"Z286ImpressoraComp1",gxold:"O286ImpressoraComp1",gxvar:"A286ImpressoraComp1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A286ImpressoraComp1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z286ImpressoraComp1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP1",gx.O.A286ImpressoraComp1,0)},c2v:function(){gx.O.A286ImpressoraComp1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP1",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP2",gxz:"Z287ImpressoraComp2",gxold:"O287ImpressoraComp2",gxvar:"A287ImpressoraComp2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A287ImpressoraComp2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z287ImpressoraComp2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP2",gx.O.A287ImpressoraComp2,0)},c2v:function(){gx.O.A287ImpressoraComp2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP2",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP3",gxz:"Z288ImpressoraComp3",gxold:"O288ImpressoraComp3",gxvar:"A288ImpressoraComp3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A288ImpressoraComp3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z288ImpressoraComp3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP3",gx.O.A288ImpressoraComp3,0)},c2v:function(){gx.O.A288ImpressoraComp3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP3",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP4",gxz:"Z289ImpressoraComp4",gxold:"O289ImpressoraComp4",gxvar:"A289ImpressoraComp4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A289ImpressoraComp4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z289ImpressoraComp4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP4",gx.O.A289ImpressoraComp4,0)},c2v:function(){gx.O.A289ImpressoraComp4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP4",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP5",gxz:"Z290ImpressoraComp5",gxold:"O290ImpressoraComp5",gxvar:"A290ImpressoraComp5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A290ImpressoraComp5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z290ImpressoraComp5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP5",gx.O.A290ImpressoraComp5,0)},c2v:function(){gx.O.A290ImpressoraComp5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP5",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP6",gxz:"Z291ImpressoraComp6",gxold:"O291ImpressoraComp6",gxvar:"A291ImpressoraComp6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A291ImpressoraComp6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z291ImpressoraComp6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP6",gx.O.A291ImpressoraComp6,0)},c2v:function(){gx.O.A291ImpressoraComp6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP6",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORACOMP7",gxz:"Z292ImpressoraComp7",gxold:"O292ImpressoraComp7",gxvar:"A292ImpressoraComp7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A292ImpressoraComp7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z292ImpressoraComp7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORACOMP7",gx.O.A292ImpressoraComp7,0)},c2v:function(){gx.O.A292ImpressoraComp7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORACOMP7",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP1",gxz:"Z293ImpressoraDescomp1",gxold:"O293ImpressoraDescomp1",gxvar:"A293ImpressoraDescomp1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A293ImpressoraDescomp1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z293ImpressoraDescomp1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP1",gx.O.A293ImpressoraDescomp1,0)},c2v:function(){gx.O.A293ImpressoraDescomp1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP1",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP2",gxz:"Z294ImpressoraDescomp2",gxold:"O294ImpressoraDescomp2",gxvar:"A294ImpressoraDescomp2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A294ImpressoraDescomp2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z294ImpressoraDescomp2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP2",gx.O.A294ImpressoraDescomp2,0)},c2v:function(){gx.O.A294ImpressoraDescomp2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP2",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP3",gxz:"Z295ImpressoraDescomp3",gxold:"O295ImpressoraDescomp3",gxvar:"A295ImpressoraDescomp3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A295ImpressoraDescomp3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z295ImpressoraDescomp3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP3",gx.O.A295ImpressoraDescomp3,0)},c2v:function(){gx.O.A295ImpressoraDescomp3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP3",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP4",gxz:"Z296ImpressoraDescomp4",gxold:"O296ImpressoraDescomp4",gxvar:"A296ImpressoraDescomp4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A296ImpressoraDescomp4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z296ImpressoraDescomp4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP4",gx.O.A296ImpressoraDescomp4,0)},c2v:function(){gx.O.A296ImpressoraDescomp4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP4",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP5",gxz:"Z297ImpressoraDescomp5",gxold:"O297ImpressoraDescomp5",gxvar:"A297ImpressoraDescomp5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A297ImpressoraDescomp5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z297ImpressoraDescomp5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP5",gx.O.A297ImpressoraDescomp5,0)},c2v:function(){gx.O.A297ImpressoraDescomp5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP5",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP6",gxz:"Z298ImpressoraDescomp6",gxold:"O298ImpressoraDescomp6",gxvar:"A298ImpressoraDescomp6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A298ImpressoraDescomp6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z298ImpressoraDescomp6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP6",gx.O.A298ImpressoraDescomp6,0)},c2v:function(){gx.O.A298ImpressoraDescomp6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP6",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORADESCOMP7",gxz:"Z299ImpressoraDescomp7",gxold:"O299ImpressoraDescomp7",gxvar:"A299ImpressoraDescomp7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A299ImpressoraDescomp7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z299ImpressoraDescomp7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORADESCOMP7",gx.O.A299ImpressoraDescomp7,0)},c2v:function(){gx.O.A299ImpressoraDescomp7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORADESCOMP7",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA1",gxz:"Z300ImpressoraMeiaPagina1",gxold:"O300ImpressoraMeiaPagina1",gxvar:"A300ImpressoraMeiaPagina1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A300ImpressoraMeiaPagina1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z300ImpressoraMeiaPagina1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA1",gx.O.A300ImpressoraMeiaPagina1,0)},c2v:function(){gx.O.A300ImpressoraMeiaPagina1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA1",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA2",gxz:"Z301ImpressoraMeiaPagina2",gxold:"O301ImpressoraMeiaPagina2",gxvar:"A301ImpressoraMeiaPagina2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A301ImpressoraMeiaPagina2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z301ImpressoraMeiaPagina2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA2",gx.O.A301ImpressoraMeiaPagina2,0)},c2v:function(){gx.O.A301ImpressoraMeiaPagina2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA2",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA3",gxz:"Z302ImpressoraMeiaPagina3",gxold:"O302ImpressoraMeiaPagina3",gxvar:"A302ImpressoraMeiaPagina3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A302ImpressoraMeiaPagina3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z302ImpressoraMeiaPagina3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA3",gx.O.A302ImpressoraMeiaPagina3,0)},c2v:function(){gx.O.A302ImpressoraMeiaPagina3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA3",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA4",gxz:"Z303ImpressoraMeiaPagina4",gxold:"O303ImpressoraMeiaPagina4",gxvar:"A303ImpressoraMeiaPagina4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A303ImpressoraMeiaPagina4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z303ImpressoraMeiaPagina4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA4",gx.O.A303ImpressoraMeiaPagina4,0)},c2v:function(){gx.O.A303ImpressoraMeiaPagina4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA4",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA5",gxz:"Z304ImpressoraMeiaPagina5",gxold:"O304ImpressoraMeiaPagina5",gxvar:"A304ImpressoraMeiaPagina5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A304ImpressoraMeiaPagina5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z304ImpressoraMeiaPagina5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA5",gx.O.A304ImpressoraMeiaPagina5,0)},c2v:function(){gx.O.A304ImpressoraMeiaPagina5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA5",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA6",gxz:"Z305ImpressoraMeiaPagina6",gxold:"O305ImpressoraMeiaPagina6",gxvar:"A305ImpressoraMeiaPagina6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A305ImpressoraMeiaPagina6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z305ImpressoraMeiaPagina6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA6",gx.O.A305ImpressoraMeiaPagina6,0)},c2v:function(){gx.O.A305ImpressoraMeiaPagina6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA6",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA7",gxz:"Z306ImpressoraMeiaPagina7",gxold:"O306ImpressoraMeiaPagina7",gxvar:"A306ImpressoraMeiaPagina7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A306ImpressoraMeiaPagina7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z306ImpressoraMeiaPagina7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA7",gx.O.A306ImpressoraMeiaPagina7,0)},c2v:function(){gx.O.A306ImpressoraMeiaPagina7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA7",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA1REM",gxz:"Z746ImpressoraMeiaPagina1Rem",gxold:"O746ImpressoraMeiaPagina1Rem",gxvar:"A746ImpressoraMeiaPagina1Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A746ImpressoraMeiaPagina1Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z746ImpressoraMeiaPagina1Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA1REM",gx.O.A746ImpressoraMeiaPagina1Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A746ImpressoraMeiaPagina1Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA1REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA2REM",gxz:"Z747ImpressoraMeiaPagina2Rem",gxold:"O747ImpressoraMeiaPagina2Rem",gxvar:"A747ImpressoraMeiaPagina2Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A747ImpressoraMeiaPagina2Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z747ImpressoraMeiaPagina2Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA2REM",gx.O.A747ImpressoraMeiaPagina2Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A747ImpressoraMeiaPagina2Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA2REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA3REM",gxz:"Z748ImpressoraMeiaPagina3Rem",gxold:"O748ImpressoraMeiaPagina3Rem",gxvar:"A748ImpressoraMeiaPagina3Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A748ImpressoraMeiaPagina3Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z748ImpressoraMeiaPagina3Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA3REM",gx.O.A748ImpressoraMeiaPagina3Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A748ImpressoraMeiaPagina3Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA3REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[72]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA4REM",gxz:"Z749ImpressoraMeiaPagina4Rem",gxold:"O749ImpressoraMeiaPagina4Rem",gxvar:"A749ImpressoraMeiaPagina4Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A749ImpressoraMeiaPagina4Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z749ImpressoraMeiaPagina4Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA4REM",gx.O.A749ImpressoraMeiaPagina4Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A749ImpressoraMeiaPagina4Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA4REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA5REM",gxz:"Z750ImpressoraMeiaPagina5Rem",gxold:"O750ImpressoraMeiaPagina5Rem",gxvar:"A750ImpressoraMeiaPagina5Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A750ImpressoraMeiaPagina5Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z750ImpressoraMeiaPagina5Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA5REM",gx.O.A750ImpressoraMeiaPagina5Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A750ImpressoraMeiaPagina5Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA5REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA6REM",gxz:"Z751ImpressoraMeiaPagina6Rem",gxold:"O751ImpressoraMeiaPagina6Rem",gxvar:"A751ImpressoraMeiaPagina6Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A751ImpressoraMeiaPagina6Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z751ImpressoraMeiaPagina6Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA6REM",gx.O.A751ImpressoraMeiaPagina6Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A751ImpressoraMeiaPagina6Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA6REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAMEIAPAGINA7REM",gxz:"Z752ImpressoraMeiaPagina7Rem",gxold:"O752ImpressoraMeiaPagina7Rem",gxvar:"A752ImpressoraMeiaPagina7Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A752ImpressoraMeiaPagina7Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z752ImpressoraMeiaPagina7Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAMEIAPAGINA7REM",gx.O.A752ImpressoraMeiaPagina7Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A752ImpressoraMeiaPagina7Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAMEIAPAGINA7REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR1",gxz:"Z307ImpressoraExpandir1",gxold:"O307ImpressoraExpandir1",gxvar:"A307ImpressoraExpandir1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A307ImpressoraExpandir1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z307ImpressoraExpandir1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR1",gx.O.A307ImpressoraExpandir1,0)},c2v:function(){gx.O.A307ImpressoraExpandir1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR1",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR2",gxz:"Z308ImpressoraExpandir2",gxold:"O308ImpressoraExpandir2",gxvar:"A308ImpressoraExpandir2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A308ImpressoraExpandir2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z308ImpressoraExpandir2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR2",gx.O.A308ImpressoraExpandir2,0)},c2v:function(){gx.O.A308ImpressoraExpandir2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR2",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR3",gxz:"Z309ImpressoraExpandir3",gxold:"O309ImpressoraExpandir3",gxvar:"A309ImpressoraExpandir3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A309ImpressoraExpandir3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z309ImpressoraExpandir3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR3",gx.O.A309ImpressoraExpandir3,0)},c2v:function(){gx.O.A309ImpressoraExpandir3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR3",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR4",gxz:"Z310ImpressoraExpandir4",gxold:"O310ImpressoraExpandir4",gxvar:"A310ImpressoraExpandir4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A310ImpressoraExpandir4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z310ImpressoraExpandir4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR4",gx.O.A310ImpressoraExpandir4,0)},c2v:function(){gx.O.A310ImpressoraExpandir4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR4",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR5",gxz:"Z311ImpressoraExpandir5",gxold:"O311ImpressoraExpandir5",gxvar:"A311ImpressoraExpandir5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A311ImpressoraExpandir5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z311ImpressoraExpandir5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR5",gx.O.A311ImpressoraExpandir5,0)},c2v:function(){gx.O.A311ImpressoraExpandir5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR5",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR6",gxz:"Z312ImpressoraExpandir6",gxold:"O312ImpressoraExpandir6",gxvar:"A312ImpressoraExpandir6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A312ImpressoraExpandir6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z312ImpressoraExpandir6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR6",gx.O.A312ImpressoraExpandir6,0)},c2v:function(){gx.O.A312ImpressoraExpandir6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR6",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR7",gxz:"Z313ImpressoraExpandir7",gxold:"O313ImpressoraExpandir7",gxvar:"A313ImpressoraExpandir7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A313ImpressoraExpandir7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z313ImpressoraExpandir7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR7",gx.O.A313ImpressoraExpandir7,0)},c2v:function(){gx.O.A313ImpressoraExpandir7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR7",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR1REM",gxz:"Z753ImpressoraExpandir1Rem",gxold:"O753ImpressoraExpandir1Rem",gxvar:"A753ImpressoraExpandir1Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A753ImpressoraExpandir1Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z753ImpressoraExpandir1Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR1REM",gx.O.A753ImpressoraExpandir1Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A753ImpressoraExpandir1Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR1REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 91 , function() {
   });
   GXValidFnc[92]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR2REM",gxz:"Z754ImpressoraExpandir2Rem",gxold:"O754ImpressoraExpandir2Rem",gxvar:"A754ImpressoraExpandir2Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A754ImpressoraExpandir2Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z754ImpressoraExpandir2Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR2REM",gx.O.A754ImpressoraExpandir2Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A754ImpressoraExpandir2Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR2REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[93]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR3REM",gxz:"Z755ImpressoraExpandir3Rem",gxold:"O755ImpressoraExpandir3Rem",gxvar:"A755ImpressoraExpandir3Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A755ImpressoraExpandir3Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z755ImpressoraExpandir3Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR3REM",gx.O.A755ImpressoraExpandir3Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A755ImpressoraExpandir3Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR3REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[94]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR4REM",gxz:"Z756ImpressoraExpandir4Rem",gxold:"O756ImpressoraExpandir4Rem",gxvar:"A756ImpressoraExpandir4Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A756ImpressoraExpandir4Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z756ImpressoraExpandir4Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR4REM",gx.O.A756ImpressoraExpandir4Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A756ImpressoraExpandir4Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR4REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[95]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR5REM",gxz:"Z757ImpressoraExpandir5Rem",gxold:"O757ImpressoraExpandir5Rem",gxvar:"A757ImpressoraExpandir5Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A757ImpressoraExpandir5Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z757ImpressoraExpandir5Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR5REM",gx.O.A757ImpressoraExpandir5Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A757ImpressoraExpandir5Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR5REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[96]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR6REM",gxz:"Z758ImpressoraExpandir6Rem",gxold:"O758ImpressoraExpandir6Rem",gxvar:"A758ImpressoraExpandir6Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A758ImpressoraExpandir6Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z758ImpressoraExpandir6Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR6REM",gx.O.A758ImpressoraExpandir6Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A758ImpressoraExpandir6Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR6REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 96 , function() {
   });
   GXValidFnc[97]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR7REM",gxz:"Z759ImpressoraExpandir7Rem",gxold:"O759ImpressoraExpandir7Rem",gxvar:"A759ImpressoraExpandir7Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A759ImpressoraExpandir7Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z759ImpressoraExpandir7Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR7REM",gx.O.A759ImpressoraExpandir7Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A759ImpressoraExpandir7Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR7REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[98]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAEXPANDIR8REM",gxz:"Z760ImpressoraExpandir8Rem",gxold:"O760ImpressoraExpandir8Rem",gxvar:"A760ImpressoraExpandir8Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A760ImpressoraExpandir8Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z760ImpressoraExpandir8Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAEXPANDIR8REM",gx.O.A760ImpressoraExpandir8Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A760ImpressoraExpandir8Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAEXPANDIR8REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[101]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO1",gxz:"Z314ImpressoraNegrito1",gxold:"O314ImpressoraNegrito1",gxvar:"A314ImpressoraNegrito1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A314ImpressoraNegrito1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z314ImpressoraNegrito1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO1",gx.O.A314ImpressoraNegrito1,0)},c2v:function(){gx.O.A314ImpressoraNegrito1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO1",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO2",gxz:"Z315ImpressoraNegrito2",gxold:"O315ImpressoraNegrito2",gxvar:"A315ImpressoraNegrito2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A315ImpressoraNegrito2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z315ImpressoraNegrito2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO2",gx.O.A315ImpressoraNegrito2,0)},c2v:function(){gx.O.A315ImpressoraNegrito2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO2",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO3",gxz:"Z316ImpressoraNegrito3",gxold:"O316ImpressoraNegrito3",gxvar:"A316ImpressoraNegrito3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A316ImpressoraNegrito3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z316ImpressoraNegrito3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO3",gx.O.A316ImpressoraNegrito3,0)},c2v:function(){gx.O.A316ImpressoraNegrito3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO3",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO4",gxz:"Z317ImpressoraNegrito4",gxold:"O317ImpressoraNegrito4",gxvar:"A317ImpressoraNegrito4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A317ImpressoraNegrito4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z317ImpressoraNegrito4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO4",gx.O.A317ImpressoraNegrito4,0)},c2v:function(){gx.O.A317ImpressoraNegrito4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO4",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO5",gxz:"Z318ImpressoraNegrito5",gxold:"O318ImpressoraNegrito5",gxvar:"A318ImpressoraNegrito5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A318ImpressoraNegrito5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z318ImpressoraNegrito5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO5",gx.O.A318ImpressoraNegrito5,0)},c2v:function(){gx.O.A318ImpressoraNegrito5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO5",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO6",gxz:"Z319ImpressoraNegrito6",gxold:"O319ImpressoraNegrito6",gxvar:"A319ImpressoraNegrito6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A319ImpressoraNegrito6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z319ImpressoraNegrito6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO6",gx.O.A319ImpressoraNegrito6,0)},c2v:function(){gx.O.A319ImpressoraNegrito6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO6",'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO7",gxz:"Z320ImpressoraNegrito7",gxold:"O320ImpressoraNegrito7",gxvar:"A320ImpressoraNegrito7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A320ImpressoraNegrito7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z320ImpressoraNegrito7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO7",gx.O.A320ImpressoraNegrito7,0)},c2v:function(){gx.O.A320ImpressoraNegrito7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO7",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO1REM",gxz:"Z761ImpressoraNegrito1Rem",gxold:"O761ImpressoraNegrito1Rem",gxvar:"A761ImpressoraNegrito1Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A761ImpressoraNegrito1Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z761ImpressoraNegrito1Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO1REM",gx.O.A761ImpressoraNegrito1Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A761ImpressoraNegrito1Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO1REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[115]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO2REM",gxz:"Z762ImpressoraNegrito2Rem",gxold:"O762ImpressoraNegrito2Rem",gxvar:"A762ImpressoraNegrito2Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A762ImpressoraNegrito2Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z762ImpressoraNegrito2Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO2REM",gx.O.A762ImpressoraNegrito2Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A762ImpressoraNegrito2Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO2REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[116]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO3REM",gxz:"Z763ImpressoraNegrito3Rem",gxold:"O763ImpressoraNegrito3Rem",gxvar:"A763ImpressoraNegrito3Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A763ImpressoraNegrito3Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z763ImpressoraNegrito3Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO3REM",gx.O.A763ImpressoraNegrito3Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A763ImpressoraNegrito3Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO3REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[117]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO4REM",gxz:"Z764ImpressoraNegrito4Rem",gxold:"O764ImpressoraNegrito4Rem",gxvar:"A764ImpressoraNegrito4Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A764ImpressoraNegrito4Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z764ImpressoraNegrito4Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO4REM",gx.O.A764ImpressoraNegrito4Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A764ImpressoraNegrito4Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO4REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 117 , function() {
   });
   GXValidFnc[118]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO5REM",gxz:"Z765ImpressoraNegrito5Rem",gxold:"O765ImpressoraNegrito5Rem",gxvar:"A765ImpressoraNegrito5Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A765ImpressoraNegrito5Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z765ImpressoraNegrito5Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO5REM",gx.O.A765ImpressoraNegrito5Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A765ImpressoraNegrito5Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO5REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[119]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO6REM",gxz:"Z766ImpressoraNegrito6Rem",gxold:"O766ImpressoraNegrito6Rem",gxvar:"A766ImpressoraNegrito6Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A766ImpressoraNegrito6Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z766ImpressoraNegrito6Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO6REM",gx.O.A766ImpressoraNegrito6Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A766ImpressoraNegrito6Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO6REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[120]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORANEGRITO7REM",gxz:"Z767ImpressoraNegrito7Rem",gxold:"O767ImpressoraNegrito7Rem",gxvar:"A767ImpressoraNegrito7Rem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A767ImpressoraNegrito7Rem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z767ImpressoraNegrito7Rem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORANEGRITO7REM",gx.O.A767ImpressoraNegrito7Rem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A767ImpressoraNegrito7Rem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORANEGRITO7REM",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO1",gxz:"Z321ImpressoraSexto1",gxold:"O321ImpressoraSexto1",gxvar:"A321ImpressoraSexto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A321ImpressoraSexto1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z321ImpressoraSexto1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO1",gx.O.A321ImpressoraSexto1,0)},c2v:function(){gx.O.A321ImpressoraSexto1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO1",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO2",gxz:"Z322ImpressoraSexto2",gxold:"O322ImpressoraSexto2",gxvar:"A322ImpressoraSexto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A322ImpressoraSexto2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z322ImpressoraSexto2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO2",gx.O.A322ImpressoraSexto2,0)},c2v:function(){gx.O.A322ImpressoraSexto2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO2",'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO3",gxz:"Z323ImpressoraSexto3",gxold:"O323ImpressoraSexto3",gxvar:"A323ImpressoraSexto3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A323ImpressoraSexto3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z323ImpressoraSexto3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO3",gx.O.A323ImpressoraSexto3,0)},c2v:function(){gx.O.A323ImpressoraSexto3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO3",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO4",gxz:"Z324ImpressoraSexto4",gxold:"O324ImpressoraSexto4",gxvar:"A324ImpressoraSexto4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A324ImpressoraSexto4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z324ImpressoraSexto4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO4",gx.O.A324ImpressoraSexto4,0)},c2v:function(){gx.O.A324ImpressoraSexto4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO4",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO5",gxz:"Z325ImpressoraSexto5",gxold:"O325ImpressoraSexto5",gxvar:"A325ImpressoraSexto5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A325ImpressoraSexto5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z325ImpressoraSexto5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO5",gx.O.A325ImpressoraSexto5,0)},c2v:function(){gx.O.A325ImpressoraSexto5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO5",'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO6",gxz:"Z326ImpressoraSexto6",gxold:"O326ImpressoraSexto6",gxvar:"A326ImpressoraSexto6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A326ImpressoraSexto6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z326ImpressoraSexto6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO6",gx.O.A326ImpressoraSexto6,0)},c2v:function(){gx.O.A326ImpressoraSexto6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO6",'.')},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORASEXTO7",gxz:"Z327ImpressoraSexto7",gxold:"O327ImpressoraSexto7",gxvar:"A327ImpressoraSexto7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A327ImpressoraSexto7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z327ImpressoraSexto7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORASEXTO7",gx.O.A327ImpressoraSexto7,0)},c2v:function(){gx.O.A327ImpressoraSexto7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORASEXTO7",'.')},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS1",gxz:"Z328ImpressoraOitavos1",gxold:"O328ImpressoraOitavos1",gxvar:"A328ImpressoraOitavos1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A328ImpressoraOitavos1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z328ImpressoraOitavos1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS1",gx.O.A328ImpressoraOitavos1,0)},c2v:function(){gx.O.A328ImpressoraOitavos1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS1",'.')},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS2",gxz:"Z329ImpressoraOitavos2",gxold:"O329ImpressoraOitavos2",gxvar:"A329ImpressoraOitavos2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A329ImpressoraOitavos2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z329ImpressoraOitavos2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS2",gx.O.A329ImpressoraOitavos2,0)},c2v:function(){gx.O.A329ImpressoraOitavos2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS2",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS3",gxz:"Z330ImpressoraOitavos3",gxold:"O330ImpressoraOitavos3",gxvar:"A330ImpressoraOitavos3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A330ImpressoraOitavos3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z330ImpressoraOitavos3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS3",gx.O.A330ImpressoraOitavos3,0)},c2v:function(){gx.O.A330ImpressoraOitavos3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS3",'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS4",gxz:"Z331ImpressoraOitavos4",gxold:"O331ImpressoraOitavos4",gxvar:"A331ImpressoraOitavos4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A331ImpressoraOitavos4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z331ImpressoraOitavos4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS4",gx.O.A331ImpressoraOitavos4,0)},c2v:function(){gx.O.A331ImpressoraOitavos4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS4",'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS5",gxz:"Z332ImpressoraOitavos5",gxold:"O332ImpressoraOitavos5",gxvar:"A332ImpressoraOitavos5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A332ImpressoraOitavos5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z332ImpressoraOitavos5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS5",gx.O.A332ImpressoraOitavos5,0)},c2v:function(){gx.O.A332ImpressoraOitavos5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS5",'.')},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS6",gxz:"Z333ImpressoraOitavos6",gxold:"O333ImpressoraOitavos6",gxvar:"A333ImpressoraOitavos6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A333ImpressoraOitavos6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z333ImpressoraOitavos6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS6",gx.O.A333ImpressoraOitavos6,0)},c2v:function(){gx.O.A333ImpressoraOitavos6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS6",'.')},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAOITAVOS7",gxz:"Z334ImpressoraOitavos7",gxold:"O334ImpressoraOitavos7",gxvar:"A334ImpressoraOitavos7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A334ImpressoraOitavos7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z334ImpressoraOitavos7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAOITAVOS7",gx.O.A334ImpressoraOitavos7,0)},c2v:function(){gx.O.A334ImpressoraOitavos7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAOITAVOS7",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA1",gxz:"Z10374ImpressoraGuilhotina1",gxold:"O10374ImpressoraGuilhotina1",gxvar:"A10374ImpressoraGuilhotina1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10374ImpressoraGuilhotina1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10374ImpressoraGuilhotina1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA1",gx.O.A10374ImpressoraGuilhotina1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10374ImpressoraGuilhotina1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA1",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 147 , function() {
   });
   GXValidFnc[148]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA2",gxz:"Z10375ImpressoraGuilhotina2",gxold:"O10375ImpressoraGuilhotina2",gxvar:"A10375ImpressoraGuilhotina2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10375ImpressoraGuilhotina2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10375ImpressoraGuilhotina2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA2",gx.O.A10375ImpressoraGuilhotina2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10375ImpressoraGuilhotina2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA2",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[149]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA3",gxz:"Z10376ImpressoraGuilhotina3",gxold:"O10376ImpressoraGuilhotina3",gxvar:"A10376ImpressoraGuilhotina3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10376ImpressoraGuilhotina3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10376ImpressoraGuilhotina3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA3",gx.O.A10376ImpressoraGuilhotina3,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10376ImpressoraGuilhotina3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA3",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[150]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA4",gxz:"Z10377ImpressoraGuilhotina4",gxold:"O10377ImpressoraGuilhotina4",gxvar:"A10377ImpressoraGuilhotina4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10377ImpressoraGuilhotina4=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10377ImpressoraGuilhotina4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA4",gx.O.A10377ImpressoraGuilhotina4,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10377ImpressoraGuilhotina4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA4",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[151]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA5",gxz:"Z10378ImpressoraGuilhotina5",gxold:"O10378ImpressoraGuilhotina5",gxvar:"A10378ImpressoraGuilhotina5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10378ImpressoraGuilhotina5=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10378ImpressoraGuilhotina5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA5",gx.O.A10378ImpressoraGuilhotina5,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10378ImpressoraGuilhotina5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA5",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 151 , function() {
   });
   GXValidFnc[152]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA6",gxz:"Z10379ImpressoraGuilhotina6",gxold:"O10379ImpressoraGuilhotina6",gxvar:"A10379ImpressoraGuilhotina6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10379ImpressoraGuilhotina6=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10379ImpressoraGuilhotina6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA6",gx.O.A10379ImpressoraGuilhotina6,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10379ImpressoraGuilhotina6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA6",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[153]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAGUILHOTINA7",gxz:"Z10380ImpressoraGuilhotina7",gxold:"O10380ImpressoraGuilhotina7",gxvar:"A10380ImpressoraGuilhotina7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10380ImpressoraGuilhotina7=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10380ImpressoraGuilhotina7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAGUILHOTINA7",gx.O.A10380ImpressoraGuilhotina7,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10380ImpressoraGuilhotina7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAGUILHOTINA7",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 153 , function() {
   });
   GXValidFnc[162]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV14AcessoSistemaSequencia",gxold:"OV14AcessoSistemaSequencia",gxvar:"AV14AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV14AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV14AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"BTNHELP",grid:0};
   this.A198ImpressoraId = 0 ;
   this.Z198ImpressoraId = 0 ;
   this.O198ImpressoraId = 0 ;
   this.A285ImpressoraNome = "" ;
   this.Z285ImpressoraNome = "" ;
   this.O285ImpressoraNome = "" ;
   this.A10531ImpressoraInicializacao1 = "" ;
   this.Z10531ImpressoraInicializacao1 = "" ;
   this.O10531ImpressoraInicializacao1 = "" ;
   this.A10532ImpressoraInicializacao2 = "" ;
   this.Z10532ImpressoraInicializacao2 = "" ;
   this.O10532ImpressoraInicializacao2 = "" ;
   this.A10533ImpressoraInicializacao3 = "" ;
   this.Z10533ImpressoraInicializacao3 = "" ;
   this.O10533ImpressoraInicializacao3 = "" ;
   this.A10534ImpressoraInicializacao4 = "" ;
   this.Z10534ImpressoraInicializacao4 = "" ;
   this.O10534ImpressoraInicializacao4 = "" ;
   this.A10535ImpressoraInicializacao5 = "" ;
   this.Z10535ImpressoraInicializacao5 = "" ;
   this.O10535ImpressoraInicializacao5 = "" ;
   this.A10536ImpressoraInicializacao6 = "" ;
   this.Z10536ImpressoraInicializacao6 = "" ;
   this.O10536ImpressoraInicializacao6 = "" ;
   this.A10537ImpressoraInicializacao7 = "" ;
   this.Z10537ImpressoraInicializacao7 = "" ;
   this.O10537ImpressoraInicializacao7 = "" ;
   this.A286ImpressoraComp1 = 0 ;
   this.Z286ImpressoraComp1 = 0 ;
   this.O286ImpressoraComp1 = 0 ;
   this.A287ImpressoraComp2 = 0 ;
   this.Z287ImpressoraComp2 = 0 ;
   this.O287ImpressoraComp2 = 0 ;
   this.A288ImpressoraComp3 = 0 ;
   this.Z288ImpressoraComp3 = 0 ;
   this.O288ImpressoraComp3 = 0 ;
   this.A289ImpressoraComp4 = 0 ;
   this.Z289ImpressoraComp4 = 0 ;
   this.O289ImpressoraComp4 = 0 ;
   this.A290ImpressoraComp5 = 0 ;
   this.Z290ImpressoraComp5 = 0 ;
   this.O290ImpressoraComp5 = 0 ;
   this.A291ImpressoraComp6 = 0 ;
   this.Z291ImpressoraComp6 = 0 ;
   this.O291ImpressoraComp6 = 0 ;
   this.A292ImpressoraComp7 = 0 ;
   this.Z292ImpressoraComp7 = 0 ;
   this.O292ImpressoraComp7 = 0 ;
   this.A293ImpressoraDescomp1 = 0 ;
   this.Z293ImpressoraDescomp1 = 0 ;
   this.O293ImpressoraDescomp1 = 0 ;
   this.A294ImpressoraDescomp2 = 0 ;
   this.Z294ImpressoraDescomp2 = 0 ;
   this.O294ImpressoraDescomp2 = 0 ;
   this.A295ImpressoraDescomp3 = 0 ;
   this.Z295ImpressoraDescomp3 = 0 ;
   this.O295ImpressoraDescomp3 = 0 ;
   this.A296ImpressoraDescomp4 = 0 ;
   this.Z296ImpressoraDescomp4 = 0 ;
   this.O296ImpressoraDescomp4 = 0 ;
   this.A297ImpressoraDescomp5 = 0 ;
   this.Z297ImpressoraDescomp5 = 0 ;
   this.O297ImpressoraDescomp5 = 0 ;
   this.A298ImpressoraDescomp6 = 0 ;
   this.Z298ImpressoraDescomp6 = 0 ;
   this.O298ImpressoraDescomp6 = 0 ;
   this.A299ImpressoraDescomp7 = 0 ;
   this.Z299ImpressoraDescomp7 = 0 ;
   this.O299ImpressoraDescomp7 = 0 ;
   this.A300ImpressoraMeiaPagina1 = 0 ;
   this.Z300ImpressoraMeiaPagina1 = 0 ;
   this.O300ImpressoraMeiaPagina1 = 0 ;
   this.A301ImpressoraMeiaPagina2 = 0 ;
   this.Z301ImpressoraMeiaPagina2 = 0 ;
   this.O301ImpressoraMeiaPagina2 = 0 ;
   this.A302ImpressoraMeiaPagina3 = 0 ;
   this.Z302ImpressoraMeiaPagina3 = 0 ;
   this.O302ImpressoraMeiaPagina3 = 0 ;
   this.A303ImpressoraMeiaPagina4 = 0 ;
   this.Z303ImpressoraMeiaPagina4 = 0 ;
   this.O303ImpressoraMeiaPagina4 = 0 ;
   this.A304ImpressoraMeiaPagina5 = 0 ;
   this.Z304ImpressoraMeiaPagina5 = 0 ;
   this.O304ImpressoraMeiaPagina5 = 0 ;
   this.A305ImpressoraMeiaPagina6 = 0 ;
   this.Z305ImpressoraMeiaPagina6 = 0 ;
   this.O305ImpressoraMeiaPagina6 = 0 ;
   this.A306ImpressoraMeiaPagina7 = 0 ;
   this.Z306ImpressoraMeiaPagina7 = 0 ;
   this.O306ImpressoraMeiaPagina7 = 0 ;
   this.A746ImpressoraMeiaPagina1Rem = 0 ;
   this.Z746ImpressoraMeiaPagina1Rem = 0 ;
   this.O746ImpressoraMeiaPagina1Rem = 0 ;
   this.A747ImpressoraMeiaPagina2Rem = 0 ;
   this.Z747ImpressoraMeiaPagina2Rem = 0 ;
   this.O747ImpressoraMeiaPagina2Rem = 0 ;
   this.A748ImpressoraMeiaPagina3Rem = 0 ;
   this.Z748ImpressoraMeiaPagina3Rem = 0 ;
   this.O748ImpressoraMeiaPagina3Rem = 0 ;
   this.A749ImpressoraMeiaPagina4Rem = 0 ;
   this.Z749ImpressoraMeiaPagina4Rem = 0 ;
   this.O749ImpressoraMeiaPagina4Rem = 0 ;
   this.A750ImpressoraMeiaPagina5Rem = 0 ;
   this.Z750ImpressoraMeiaPagina5Rem = 0 ;
   this.O750ImpressoraMeiaPagina5Rem = 0 ;
   this.A751ImpressoraMeiaPagina6Rem = 0 ;
   this.Z751ImpressoraMeiaPagina6Rem = 0 ;
   this.O751ImpressoraMeiaPagina6Rem = 0 ;
   this.A752ImpressoraMeiaPagina7Rem = 0 ;
   this.Z752ImpressoraMeiaPagina7Rem = 0 ;
   this.O752ImpressoraMeiaPagina7Rem = 0 ;
   this.A307ImpressoraExpandir1 = 0 ;
   this.Z307ImpressoraExpandir1 = 0 ;
   this.O307ImpressoraExpandir1 = 0 ;
   this.A308ImpressoraExpandir2 = 0 ;
   this.Z308ImpressoraExpandir2 = 0 ;
   this.O308ImpressoraExpandir2 = 0 ;
   this.A309ImpressoraExpandir3 = 0 ;
   this.Z309ImpressoraExpandir3 = 0 ;
   this.O309ImpressoraExpandir3 = 0 ;
   this.A310ImpressoraExpandir4 = 0 ;
   this.Z310ImpressoraExpandir4 = 0 ;
   this.O310ImpressoraExpandir4 = 0 ;
   this.A311ImpressoraExpandir5 = 0 ;
   this.Z311ImpressoraExpandir5 = 0 ;
   this.O311ImpressoraExpandir5 = 0 ;
   this.A312ImpressoraExpandir6 = 0 ;
   this.Z312ImpressoraExpandir6 = 0 ;
   this.O312ImpressoraExpandir6 = 0 ;
   this.A313ImpressoraExpandir7 = 0 ;
   this.Z313ImpressoraExpandir7 = 0 ;
   this.O313ImpressoraExpandir7 = 0 ;
   this.A753ImpressoraExpandir1Rem = 0 ;
   this.Z753ImpressoraExpandir1Rem = 0 ;
   this.O753ImpressoraExpandir1Rem = 0 ;
   this.A754ImpressoraExpandir2Rem = 0 ;
   this.Z754ImpressoraExpandir2Rem = 0 ;
   this.O754ImpressoraExpandir2Rem = 0 ;
   this.A755ImpressoraExpandir3Rem = 0 ;
   this.Z755ImpressoraExpandir3Rem = 0 ;
   this.O755ImpressoraExpandir3Rem = 0 ;
   this.A756ImpressoraExpandir4Rem = 0 ;
   this.Z756ImpressoraExpandir4Rem = 0 ;
   this.O756ImpressoraExpandir4Rem = 0 ;
   this.A757ImpressoraExpandir5Rem = 0 ;
   this.Z757ImpressoraExpandir5Rem = 0 ;
   this.O757ImpressoraExpandir5Rem = 0 ;
   this.A758ImpressoraExpandir6Rem = 0 ;
   this.Z758ImpressoraExpandir6Rem = 0 ;
   this.O758ImpressoraExpandir6Rem = 0 ;
   this.A759ImpressoraExpandir7Rem = 0 ;
   this.Z759ImpressoraExpandir7Rem = 0 ;
   this.O759ImpressoraExpandir7Rem = 0 ;
   this.A760ImpressoraExpandir8Rem = 0 ;
   this.Z760ImpressoraExpandir8Rem = 0 ;
   this.O760ImpressoraExpandir8Rem = 0 ;
   this.A314ImpressoraNegrito1 = 0 ;
   this.Z314ImpressoraNegrito1 = 0 ;
   this.O314ImpressoraNegrito1 = 0 ;
   this.A315ImpressoraNegrito2 = 0 ;
   this.Z315ImpressoraNegrito2 = 0 ;
   this.O315ImpressoraNegrito2 = 0 ;
   this.A316ImpressoraNegrito3 = 0 ;
   this.Z316ImpressoraNegrito3 = 0 ;
   this.O316ImpressoraNegrito3 = 0 ;
   this.A317ImpressoraNegrito4 = 0 ;
   this.Z317ImpressoraNegrito4 = 0 ;
   this.O317ImpressoraNegrito4 = 0 ;
   this.A318ImpressoraNegrito5 = 0 ;
   this.Z318ImpressoraNegrito5 = 0 ;
   this.O318ImpressoraNegrito5 = 0 ;
   this.A319ImpressoraNegrito6 = 0 ;
   this.Z319ImpressoraNegrito6 = 0 ;
   this.O319ImpressoraNegrito6 = 0 ;
   this.A320ImpressoraNegrito7 = 0 ;
   this.Z320ImpressoraNegrito7 = 0 ;
   this.O320ImpressoraNegrito7 = 0 ;
   this.A761ImpressoraNegrito1Rem = 0 ;
   this.Z761ImpressoraNegrito1Rem = 0 ;
   this.O761ImpressoraNegrito1Rem = 0 ;
   this.A762ImpressoraNegrito2Rem = 0 ;
   this.Z762ImpressoraNegrito2Rem = 0 ;
   this.O762ImpressoraNegrito2Rem = 0 ;
   this.A763ImpressoraNegrito3Rem = 0 ;
   this.Z763ImpressoraNegrito3Rem = 0 ;
   this.O763ImpressoraNegrito3Rem = 0 ;
   this.A764ImpressoraNegrito4Rem = 0 ;
   this.Z764ImpressoraNegrito4Rem = 0 ;
   this.O764ImpressoraNegrito4Rem = 0 ;
   this.A765ImpressoraNegrito5Rem = 0 ;
   this.Z765ImpressoraNegrito5Rem = 0 ;
   this.O765ImpressoraNegrito5Rem = 0 ;
   this.A766ImpressoraNegrito6Rem = 0 ;
   this.Z766ImpressoraNegrito6Rem = 0 ;
   this.O766ImpressoraNegrito6Rem = 0 ;
   this.A767ImpressoraNegrito7Rem = 0 ;
   this.Z767ImpressoraNegrito7Rem = 0 ;
   this.O767ImpressoraNegrito7Rem = 0 ;
   this.A321ImpressoraSexto1 = 0 ;
   this.Z321ImpressoraSexto1 = 0 ;
   this.O321ImpressoraSexto1 = 0 ;
   this.A322ImpressoraSexto2 = 0 ;
   this.Z322ImpressoraSexto2 = 0 ;
   this.O322ImpressoraSexto2 = 0 ;
   this.A323ImpressoraSexto3 = 0 ;
   this.Z323ImpressoraSexto3 = 0 ;
   this.O323ImpressoraSexto3 = 0 ;
   this.A324ImpressoraSexto4 = 0 ;
   this.Z324ImpressoraSexto4 = 0 ;
   this.O324ImpressoraSexto4 = 0 ;
   this.A325ImpressoraSexto5 = 0 ;
   this.Z325ImpressoraSexto5 = 0 ;
   this.O325ImpressoraSexto5 = 0 ;
   this.A326ImpressoraSexto6 = 0 ;
   this.Z326ImpressoraSexto6 = 0 ;
   this.O326ImpressoraSexto6 = 0 ;
   this.A327ImpressoraSexto7 = 0 ;
   this.Z327ImpressoraSexto7 = 0 ;
   this.O327ImpressoraSexto7 = 0 ;
   this.A328ImpressoraOitavos1 = 0 ;
   this.Z328ImpressoraOitavos1 = 0 ;
   this.O328ImpressoraOitavos1 = 0 ;
   this.A329ImpressoraOitavos2 = 0 ;
   this.Z329ImpressoraOitavos2 = 0 ;
   this.O329ImpressoraOitavos2 = 0 ;
   this.A330ImpressoraOitavos3 = 0 ;
   this.Z330ImpressoraOitavos3 = 0 ;
   this.O330ImpressoraOitavos3 = 0 ;
   this.A331ImpressoraOitavos4 = 0 ;
   this.Z331ImpressoraOitavos4 = 0 ;
   this.O331ImpressoraOitavos4 = 0 ;
   this.A332ImpressoraOitavos5 = 0 ;
   this.Z332ImpressoraOitavos5 = 0 ;
   this.O332ImpressoraOitavos5 = 0 ;
   this.A333ImpressoraOitavos6 = 0 ;
   this.Z333ImpressoraOitavos6 = 0 ;
   this.O333ImpressoraOitavos6 = 0 ;
   this.A334ImpressoraOitavos7 = 0 ;
   this.Z334ImpressoraOitavos7 = 0 ;
   this.O334ImpressoraOitavos7 = 0 ;
   this.A10374ImpressoraGuilhotina1 = 0 ;
   this.Z10374ImpressoraGuilhotina1 = 0 ;
   this.O10374ImpressoraGuilhotina1 = 0 ;
   this.A10375ImpressoraGuilhotina2 = 0 ;
   this.Z10375ImpressoraGuilhotina2 = 0 ;
   this.O10375ImpressoraGuilhotina2 = 0 ;
   this.A10376ImpressoraGuilhotina3 = 0 ;
   this.Z10376ImpressoraGuilhotina3 = 0 ;
   this.O10376ImpressoraGuilhotina3 = 0 ;
   this.A10377ImpressoraGuilhotina4 = 0 ;
   this.Z10377ImpressoraGuilhotina4 = 0 ;
   this.O10377ImpressoraGuilhotina4 = 0 ;
   this.A10378ImpressoraGuilhotina5 = 0 ;
   this.Z10378ImpressoraGuilhotina5 = 0 ;
   this.O10378ImpressoraGuilhotina5 = 0 ;
   this.A10379ImpressoraGuilhotina6 = 0 ;
   this.Z10379ImpressoraGuilhotina6 = 0 ;
   this.O10379ImpressoraGuilhotina6 = 0 ;
   this.A10380ImpressoraGuilhotina7 = 0 ;
   this.Z10380ImpressoraGuilhotina7 = 0 ;
   this.O10380ImpressoraGuilhotina7 = 0 ;
   this.AV14AcessoSistemaSequencia = 0 ;
   this.ZV14AcessoSistemaSequencia = 0 ;
   this.OV14AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV17Pgmname = "" ;
   this.AV18Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV14AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV9ImpressoraId = 0 ;
   this.A198ImpressoraId = 0 ;
   this.A285ImpressoraNome = "" ;
   this.A286ImpressoraComp1 = 0 ;
   this.A287ImpressoraComp2 = 0 ;
   this.A288ImpressoraComp3 = 0 ;
   this.A289ImpressoraComp4 = 0 ;
   this.A290ImpressoraComp5 = 0 ;
   this.A291ImpressoraComp6 = 0 ;
   this.A292ImpressoraComp7 = 0 ;
   this.A293ImpressoraDescomp1 = 0 ;
   this.A294ImpressoraDescomp2 = 0 ;
   this.A295ImpressoraDescomp3 = 0 ;
   this.A296ImpressoraDescomp4 = 0 ;
   this.A297ImpressoraDescomp5 = 0 ;
   this.A298ImpressoraDescomp6 = 0 ;
   this.A299ImpressoraDescomp7 = 0 ;
   this.A300ImpressoraMeiaPagina1 = 0 ;
   this.A301ImpressoraMeiaPagina2 = 0 ;
   this.A302ImpressoraMeiaPagina3 = 0 ;
   this.A303ImpressoraMeiaPagina4 = 0 ;
   this.A304ImpressoraMeiaPagina5 = 0 ;
   this.A305ImpressoraMeiaPagina6 = 0 ;
   this.A306ImpressoraMeiaPagina7 = 0 ;
   this.A307ImpressoraExpandir1 = 0 ;
   this.A308ImpressoraExpandir2 = 0 ;
   this.A309ImpressoraExpandir3 = 0 ;
   this.A310ImpressoraExpandir4 = 0 ;
   this.A311ImpressoraExpandir5 = 0 ;
   this.A312ImpressoraExpandir6 = 0 ;
   this.A313ImpressoraExpandir7 = 0 ;
   this.A314ImpressoraNegrito1 = 0 ;
   this.A315ImpressoraNegrito2 = 0 ;
   this.A316ImpressoraNegrito3 = 0 ;
   this.A317ImpressoraNegrito4 = 0 ;
   this.A318ImpressoraNegrito5 = 0 ;
   this.A319ImpressoraNegrito6 = 0 ;
   this.A320ImpressoraNegrito7 = 0 ;
   this.A321ImpressoraSexto1 = 0 ;
   this.A322ImpressoraSexto2 = 0 ;
   this.A323ImpressoraSexto3 = 0 ;
   this.A324ImpressoraSexto4 = 0 ;
   this.A325ImpressoraSexto5 = 0 ;
   this.A326ImpressoraSexto6 = 0 ;
   this.A327ImpressoraSexto7 = 0 ;
   this.A328ImpressoraOitavos1 = 0 ;
   this.A329ImpressoraOitavos2 = 0 ;
   this.A330ImpressoraOitavos3 = 0 ;
   this.A331ImpressoraOitavos4 = 0 ;
   this.A332ImpressoraOitavos5 = 0 ;
   this.A333ImpressoraOitavos6 = 0 ;
   this.A334ImpressoraOitavos7 = 0 ;
   this.A10374ImpressoraGuilhotina1 = 0 ;
   this.A10375ImpressoraGuilhotina2 = 0 ;
   this.A10376ImpressoraGuilhotina3 = 0 ;
   this.A10377ImpressoraGuilhotina4 = 0 ;
   this.A10378ImpressoraGuilhotina5 = 0 ;
   this.A10379ImpressoraGuilhotina6 = 0 ;
   this.A10380ImpressoraGuilhotina7 = 0 ;
   this.A746ImpressoraMeiaPagina1Rem = 0 ;
   this.A747ImpressoraMeiaPagina2Rem = 0 ;
   this.A748ImpressoraMeiaPagina3Rem = 0 ;
   this.A749ImpressoraMeiaPagina4Rem = 0 ;
   this.A750ImpressoraMeiaPagina5Rem = 0 ;
   this.A751ImpressoraMeiaPagina6Rem = 0 ;
   this.A752ImpressoraMeiaPagina7Rem = 0 ;
   this.A753ImpressoraExpandir1Rem = 0 ;
   this.A754ImpressoraExpandir2Rem = 0 ;
   this.A755ImpressoraExpandir3Rem = 0 ;
   this.A756ImpressoraExpandir4Rem = 0 ;
   this.A757ImpressoraExpandir5Rem = 0 ;
   this.A758ImpressoraExpandir6Rem = 0 ;
   this.A759ImpressoraExpandir7Rem = 0 ;
   this.A760ImpressoraExpandir8Rem = 0 ;
   this.A761ImpressoraNegrito1Rem = 0 ;
   this.A762ImpressoraNegrito2Rem = 0 ;
   this.A763ImpressoraNegrito3Rem = 0 ;
   this.A764ImpressoraNegrito4Rem = 0 ;
   this.A765ImpressoraNegrito5Rem = 0 ;
   this.A766ImpressoraNegrito6Rem = 0 ;
   this.A767ImpressoraNegrito7Rem = 0 ;
   this.A10531ImpressoraInicializacao1 = "" ;
   this.A10532ImpressoraInicializacao2 = "" ;
   this.A10533ImpressoraInicializacao3 = "" ;
   this.A10534ImpressoraInicializacao4 = "" ;
   this.A10535ImpressoraInicializacao5 = "" ;
   this.A10536ImpressoraInicializacao6 = "" ;
   this.A10537ImpressoraInicializacao7 = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120m2_client": ["'FECHAR'", true] ,"e130m2_client": ["AFTER TRN", true] ,"e140m32_client": ["ENTER", true] ,"e150m32_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV9ImpressoraId',fld:'vIMPRESSORAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV14AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV14AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9ImpressoraId", "vIMPRESSORAID", 0, "int");
   this.setVCMap("AV18Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV17Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new timpressora());
