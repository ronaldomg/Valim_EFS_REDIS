/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:39:34.17
*/
gx.evt.autoSkip = false;
gx.define('tnotaservicoparcela', false, function () {
   this.ServerClass =  "tnotaservicoparcela" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Notaservicoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoseq",["gx.O.A9348NotaServicoSeq"],[]);
      return true;
   }
   this.Valid_Notaservicoparcelaseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoparcelaseq",["gx.O.A9348NotaServicoSeq", "gx.O.A11591NotaServicoParcelaSeq", "gx.O.A11592NotaServicoParcelaContaEmpId", "gx.O.A11593NotaServicoParcelaContaNum"],["A11592NotaServicoParcelaContaEmpId", "A11593NotaServicoParcelaContaNum", "A11608NotaServicoParcelaContaVenc", "A11609NotaServicoParcelaContaValor", "A11606NotaServicoParcelaContaBanco", "A11607NotaServicoParcelaContaAgencia", "A11604NotaServicoParcelaContaCobEmp", "A11605NotaServicoParcelaContaCobId", "Gx_mode", "Z9348NotaServicoSeq", "Z11591NotaServicoParcelaSeq", "Z11592NotaServicoParcelaContaEmpId", "Z11593NotaServicoParcelaContaNum", "Z11608NotaServicoParcelaContaVenc", "Z11609NotaServicoParcelaContaValor", "Z11606NotaServicoParcelaContaBanco", "Z11607NotaServicoParcelaContaAgencia", "Z11604NotaServicoParcelaContaCobEmp", "Z11605NotaServicoParcelaContaCobId", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Notaservicoparcelacontaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NOTASERVICOPARCELACONTAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Notaservicoparcelacontanum=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Notaservicoparcelacontanum",["gx.O.A11592NotaServicoParcelaContaEmpId", "gx.O.A11593NotaServicoParcelaContaNum", 'gx.date.urlDate(gx.O.A11608NotaServicoParcelaContaVenc,"DMY4")', "gx.num.urlDecimal(gx.O.A11609NotaServicoParcelaContaValor,\'.\',\',\')", "gx.O.A11606NotaServicoParcelaContaBanco", "gx.O.A11607NotaServicoParcelaContaAgencia", "gx.O.A11604NotaServicoParcelaContaCobEmp", "gx.O.A11605NotaServicoParcelaContaCobId"],["A11608NotaServicoParcelaContaVenc", "A11609NotaServicoParcelaContaValor", "A11606NotaServicoParcelaContaBanco", "A11607NotaServicoParcelaContaAgencia", "A11604NotaServicoParcelaContaCobEmp", "A11605NotaServicoParcelaContaCobId"]);
      return true;
   }
   this.e11gq853_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gq853_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,90,91];
   this.GXLastCtrlId =91;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKNOTASERVICOSEQ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoseq,isvalid:null,rgrid:[],fld:"NOTASERVICOSEQ",gxz:"Z9348NotaServicoSeq",gxold:"O9348NotaServicoSeq",gxvar:"A9348NotaServicoSeq",ucs:[],op:[],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9348NotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9348NotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOSEQ",gx.O.A9348NotaServicoSeq,0)},c2v:function(){gx.O.A9348NotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKNOTASERVICOPARCELASEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoparcelaseq,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELASEQ",gxz:"Z11591NotaServicoParcelaSeq",gxold:"O11591NotaServicoParcelaSeq",gxvar:"A11591NotaServicoParcelaSeq",ucs:[],op:[54,49],ip:[54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11591NotaServicoParcelaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11591NotaServicoParcelaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELASEQ",gx.O.A11591NotaServicoParcelaSeq,0)},c2v:function(){gx.O.A11591NotaServicoParcelaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARCELASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTAEMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoparcelacontaempid,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTAEMPID",gxz:"Z11592NotaServicoParcelaContaEmpId",gxold:"O11592NotaServicoParcelaContaEmpId",gxvar:"A11592NotaServicoParcelaContaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11592NotaServicoParcelaContaEmpId=Value},v2z:function(Value){gx.O.Z11592NotaServicoParcelaContaEmpId=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTAEMPID",gx.O.A11592NotaServicoParcelaContaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11592NotaServicoParcelaContaEmpId=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOPARCELACONTAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTANUM", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Notaservicoparcelacontanum,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTANUM",gxz:"Z11593NotaServicoParcelaContaNum",gxold:"O11593NotaServicoParcelaContaNum",gxvar:"A11593NotaServicoParcelaContaNum",ucs:[],op:[74,69,84,79,64,59],ip:[74,69,84,79,64,59,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11593NotaServicoParcelaContaNum=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11593NotaServicoParcelaContaNum=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTANUM",gx.O.A11593NotaServicoParcelaContaNum,0)},c2v:function(){gx.O.A11593NotaServicoParcelaContaNum=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARCELACONTANUM",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTAVENC", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTAVENC",gxz:"Z11608NotaServicoParcelaContaVenc",gxold:"O11608NotaServicoParcelaContaVenc",gxvar:"A11608NotaServicoParcelaContaVenc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11608NotaServicoParcelaContaVenc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11608NotaServicoParcelaContaVenc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTAVENC",gx.O.A11608NotaServicoParcelaContaVenc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11608NotaServicoParcelaContaVenc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("NOTASERVICOPARCELACONTAVENC")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTAVALOR", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTAVALOR",gxz:"Z11609NotaServicoParcelaContaValor",gxold:"O11609NotaServicoParcelaContaValor",gxvar:"A11609NotaServicoParcelaContaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11609NotaServicoParcelaContaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11609NotaServicoParcelaContaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NOTASERVICOPARCELACONTAVALOR",gx.O.A11609NotaServicoParcelaContaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11609NotaServicoParcelaContaValor=this.val()},val:function(){return gx.fn.getDecimalValue("NOTASERVICOPARCELACONTAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTACOBEMP", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTACOBEMP",gxz:"Z11604NotaServicoParcelaContaCobEmp",gxold:"O11604NotaServicoParcelaContaCobEmp",gxvar:"A11604NotaServicoParcelaContaCobEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11604NotaServicoParcelaContaCobEmp=Value},v2z:function(Value){gx.O.Z11604NotaServicoParcelaContaCobEmp=Value},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTACOBEMP",gx.O.A11604NotaServicoParcelaContaCobEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11604NotaServicoParcelaContaCobEmp=this.val()},val:function(){return gx.fn.getControlValue("NOTASERVICOPARCELACONTACOBEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTACOBID", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTACOBID",gxz:"Z11605NotaServicoParcelaContaCobId",gxold:"O11605NotaServicoParcelaContaCobId",gxvar:"A11605NotaServicoParcelaContaCobId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11605NotaServicoParcelaContaCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11605NotaServicoParcelaContaCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTACOBID",gx.O.A11605NotaServicoParcelaContaCobId,0)},c2v:function(){gx.O.A11605NotaServicoParcelaContaCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARCELACONTACOBID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTABANCO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTABANCO",gxz:"Z11606NotaServicoParcelaContaBanco",gxold:"O11606NotaServicoParcelaContaBanco",gxvar:"A11606NotaServicoParcelaContaBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11606NotaServicoParcelaContaBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11606NotaServicoParcelaContaBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTABANCO",gx.O.A11606NotaServicoParcelaContaBanco,0)},c2v:function(){gx.O.A11606NotaServicoParcelaContaBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARCELACONTABANCO",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKNOTASERVICOPARCELACONTAAGENCIA", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARCELACONTAAGENCIA",gxz:"Z11607NotaServicoParcelaContaAgencia",gxold:"O11607NotaServicoParcelaContaAgencia",gxvar:"A11607NotaServicoParcelaContaAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11607NotaServicoParcelaContaAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11607NotaServicoParcelaContaAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NOTASERVICOPARCELACONTAAGENCIA",gx.O.A11607NotaServicoParcelaContaAgencia,0)},c2v:function(){gx.O.A11607NotaServicoParcelaContaAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NOTASERVICOPARCELACONTAAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"PROMPT_9348",grid:853};
   GXValidFnc[91]={fld:"PROMPT_11592_11593",grid:853};
   this.A9348NotaServicoSeq = 0 ;
   this.Z9348NotaServicoSeq = 0 ;
   this.O9348NotaServicoSeq = 0 ;
   this.A11591NotaServicoParcelaSeq = 0 ;
   this.Z11591NotaServicoParcelaSeq = 0 ;
   this.O11591NotaServicoParcelaSeq = 0 ;
   this.A11592NotaServicoParcelaContaEmpId = "" ;
   this.Z11592NotaServicoParcelaContaEmpId = "" ;
   this.O11592NotaServicoParcelaContaEmpId = "" ;
   this.A11593NotaServicoParcelaContaNum = 0 ;
   this.Z11593NotaServicoParcelaContaNum = 0 ;
   this.O11593NotaServicoParcelaContaNum = 0 ;
   this.A11608NotaServicoParcelaContaVenc = gx.date.nullDate() ;
   this.Z11608NotaServicoParcelaContaVenc = gx.date.nullDate() ;
   this.O11608NotaServicoParcelaContaVenc = gx.date.nullDate() ;
   this.A11609NotaServicoParcelaContaValor = 0 ;
   this.Z11609NotaServicoParcelaContaValor = 0 ;
   this.O11609NotaServicoParcelaContaValor = 0 ;
   this.A11604NotaServicoParcelaContaCobEmp = "" ;
   this.Z11604NotaServicoParcelaContaCobEmp = "" ;
   this.O11604NotaServicoParcelaContaCobEmp = "" ;
   this.A11605NotaServicoParcelaContaCobId = 0 ;
   this.Z11605NotaServicoParcelaContaCobId = 0 ;
   this.O11605NotaServicoParcelaContaCobId = 0 ;
   this.A11606NotaServicoParcelaContaBanco = 0 ;
   this.Z11606NotaServicoParcelaContaBanco = 0 ;
   this.O11606NotaServicoParcelaContaBanco = 0 ;
   this.A11607NotaServicoParcelaContaAgencia = 0 ;
   this.Z11607NotaServicoParcelaContaAgencia = 0 ;
   this.O11607NotaServicoParcelaContaAgencia = 0 ;
   this.A9348NotaServicoSeq = 0 ;
   this.A11591NotaServicoParcelaSeq = 0 ;
   this.A11592NotaServicoParcelaContaEmpId = "" ;
   this.A11593NotaServicoParcelaContaNum = 0 ;
   this.A11608NotaServicoParcelaContaVenc = gx.date.nullDate() ;
   this.A11609NotaServicoParcelaContaValor = 0 ;
   this.A11604NotaServicoParcelaContaCobEmp = "" ;
   this.A11605NotaServicoParcelaContaCobId = 0 ;
   this.A11606NotaServicoParcelaContaBanco = 0 ;
   this.A11607NotaServicoParcelaContaAgencia = 0 ;
   this.Events = {"e11gq853_client": ["ENTER", true] ,"e12gq853_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9348", [39]);
   this.setPrompt("PROMPT_11592_11593", [49,54]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnotaservicoparcela());
