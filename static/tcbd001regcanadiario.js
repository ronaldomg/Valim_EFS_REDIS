/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:2.14
*/
gx.evt.autoSkip = false;
gx.define('tcbd001regcanadiario', false, function () {
   this.ServerClass =  "tcbd001regcanadiario" ;
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
   this.Valid_Cbd001regcanadiariocbdempcodig=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REGCANADIARIOCBDEMPCODIG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001regcanadiariocbdntfnumer=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REGCANADIARIOCBDNTFNUMER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001regcanadiariocbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REGCANADIARIOCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001regcanadiariocbddia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001regcanadiariocbddia",["gx.O.A7175CBD001REGCANADIARIOCbdEmpCodig", "gx.O.A7176CBD001REGCANADIARIOCbdNtfNumer", "gx.O.A7177CBD001REGCANADIARIOCbdNtfSerie", "gx.O.A7174CBD001REGCANADIARIOCbddia", "gx.num.urlDecimal(gx.O.A7178CBD001REGCANADIARIOCbdqtde,\'.\',\',\')"],["A7178CBD001REGCANADIARIOCbdqtde", "Gx_mode", "Z7175CBD001REGCANADIARIOCbdEmpCodig", "Z7176CBD001REGCANADIARIOCbdNtfNumer", "Z7177CBD001REGCANADIARIOCbdNtfSerie", "Z7174CBD001REGCANADIARIOCbddia", "Z7178CBD001REGCANADIARIOCbdqtde", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e119y538_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e129y538_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadiariocbdempcodig,isvalid:null,rgrid:[],fld:"CBD001REGCANADIARIOCBDEMPCODIG",gxz:"Z7175CBD001REGCANADIARIOCbdEmpCodig",gxold:"O7175CBD001REGCANADIARIOCbdEmpCodig",gxvar:"A7175CBD001REGCANADIARIOCbdEmpCodig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7175CBD001REGCANADIARIOCbdEmpCodig=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7175CBD001REGCANADIARIOCbdEmpCodig=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REGCANADIARIOCBDEMPCODIG",gx.O.A7175CBD001REGCANADIARIOCbdEmpCodig,0)},c2v:function(){gx.O.A7175CBD001REGCANADIARIOCbdEmpCodig=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REGCANADIARIOCBDEMPCODIG",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadiariocbdntfnumer,isvalid:null,rgrid:[],fld:"CBD001REGCANADIARIOCBDNTFNUMER",gxz:"Z7176CBD001REGCANADIARIOCbdNtfNumer",gxold:"O7176CBD001REGCANADIARIOCbdNtfNumer",gxvar:"A7176CBD001REGCANADIARIOCbdNtfNumer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7176CBD001REGCANADIARIOCbdNtfNumer=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7176CBD001REGCANADIARIOCbdNtfNumer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REGCANADIARIOCBDNTFNUMER",gx.O.A7176CBD001REGCANADIARIOCbdNtfNumer,0)},c2v:function(){gx.O.A7176CBD001REGCANADIARIOCbdNtfNumer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REGCANADIARIOCBDNTFNUMER",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadiariocbdntfserie,isvalid:null,rgrid:[],fld:"CBD001REGCANADIARIOCBDNTFSERIE",gxz:"Z7177CBD001REGCANADIARIOCbdNtfSerie",gxold:"O7177CBD001REGCANADIARIOCbdNtfSerie",gxvar:"A7177CBD001REGCANADIARIOCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7177CBD001REGCANADIARIOCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7177CBD001REGCANADIARIOCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001REGCANADIARIOCBDNTFSERIE",gx.O.A7177CBD001REGCANADIARIOCbdNtfSerie,0)},c2v:function(){gx.O.A7177CBD001REGCANADIARIOCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001REGCANADIARIOCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadiariocbddia,isvalid:null,rgrid:[],fld:"CBD001REGCANADIARIOCBDDIA",gxz:"Z7174CBD001REGCANADIARIOCbddia",gxold:"O7174CBD001REGCANADIARIOCbddia",gxvar:"A7174CBD001REGCANADIARIOCbddia",ucs:[],op:[41],ip:[41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7174CBD001REGCANADIARIOCbddia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7174CBD001REGCANADIARIOCbddia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REGCANADIARIOCBDDIA",gx.O.A7174CBD001REGCANADIARIOCbddia,0)},c2v:function(){gx.O.A7174CBD001REGCANADIARIOCbddia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REGCANADIARIOCBDDIA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"decimal",len:18,dec:10,sign:false,pic:"ZZZZZZ9.9999999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001REGCANADIARIOCBDQTDE",gxz:"Z7178CBD001REGCANADIARIOCbdqtde",gxold:"O7178CBD001REGCANADIARIOCbdqtde",gxvar:"A7178CBD001REGCANADIARIOCbdqtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7178CBD001REGCANADIARIOCbdqtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7178CBD001REGCANADIARIOCbdqtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001REGCANADIARIOCBDQTDE",gx.O.A7178CBD001REGCANADIARIOCbdqtde,10,',')},c2v:function(){gx.O.A7178CBD001REGCANADIARIOCbdqtde=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001REGCANADIARIOCBDQTDE",'.',',')},nac:gx.falseFn};
   this.A7175CBD001REGCANADIARIOCbdEmpCodig = 0 ;
   this.Z7175CBD001REGCANADIARIOCbdEmpCodig = 0 ;
   this.O7175CBD001REGCANADIARIOCbdEmpCodig = 0 ;
   this.A7176CBD001REGCANADIARIOCbdNtfNumer = 0 ;
   this.Z7176CBD001REGCANADIARIOCbdNtfNumer = 0 ;
   this.O7176CBD001REGCANADIARIOCbdNtfNumer = 0 ;
   this.A7177CBD001REGCANADIARIOCbdNtfSerie = "" ;
   this.Z7177CBD001REGCANADIARIOCbdNtfSerie = "" ;
   this.O7177CBD001REGCANADIARIOCbdNtfSerie = "" ;
   this.A7174CBD001REGCANADIARIOCbddia = 0 ;
   this.Z7174CBD001REGCANADIARIOCbddia = 0 ;
   this.O7174CBD001REGCANADIARIOCbddia = 0 ;
   this.A7178CBD001REGCANADIARIOCbdqtde = 0 ;
   this.Z7178CBD001REGCANADIARIOCbdqtde = 0 ;
   this.O7178CBD001REGCANADIARIOCbdqtde = 0 ;
   this.A7175CBD001REGCANADIARIOCbdEmpCodig = 0 ;
   this.A7176CBD001REGCANADIARIOCbdNtfNumer = 0 ;
   this.A7177CBD001REGCANADIARIOCbdNtfSerie = "" ;
   this.A7174CBD001REGCANADIARIOCbddia = 0 ;
   this.A7178CBD001REGCANADIARIOCbdqtde = 0 ;
   this.Events = {"e119y538_client": ["ENTER", true] ,"e129y538_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001regcanadiario());
