/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:29.89
*/
gx.evt.autoSkip = false;
gx.define('tcnae', false, function () {
   this.ServerClass =  "tcnae" ;
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
      this.A11185CNAERotulo=gx.fn.getControlValue("CNAEROTULO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cnae=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CNAE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cnaedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CNAEDESCRICAO");
         this.AnyError  = 0;
         try {
            this.A11185CNAERotulo =  this.A11183CNAE + " - " + this.A11184CNAEDescricao  ;
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11g3820_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g3820_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16];
   this.GXLastCtrlId =16;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCKCNAE", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cnae,isvalid:null,rgrid:[],fld:"CNAE",gxz:"Z11183CNAE",gxold:"O11183CNAE",gxvar:"A11183CNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11183CNAE=Value},v2z:function(Value){gx.O.Z11183CNAE=Value},v2c:function(){gx.fn.setControlValue("CNAE",gx.O.A11183CNAE,0)},c2v:function(){gx.O.A11183CNAE=this.val()},val:function(){return gx.fn.getControlValue("CNAE")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCKCNAEDESCRICAO", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cnaedescricao,isvalid:null,rgrid:[],fld:"CNAEDESCRICAO",gxz:"Z11184CNAEDescricao",gxold:"O11184CNAEDescricao",gxvar:"A11184CNAEDescricao",ucs:[],op:[],ip:[16,11],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11184CNAEDescricao=Value},v2z:function(Value){gx.O.Z11184CNAEDescricao=Value},v2c:function(){gx.fn.setControlValue("CNAEDESCRICAO",gx.O.A11184CNAEDescricao,0)},c2v:function(){gx.O.A11184CNAEDescricao=this.val()},val:function(){return gx.fn.getControlValue("CNAEDESCRICAO")},nac:gx.falseFn};
   this.A11183CNAE = "" ;
   this.Z11183CNAE = "" ;
   this.O11183CNAE = "" ;
   this.A11184CNAEDescricao = "" ;
   this.Z11184CNAEDescricao = "" ;
   this.O11184CNAEDescricao = "" ;
   this.A11183CNAE = "" ;
   this.A11185CNAERotulo = "" ;
   this.A11184CNAEDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e11g3820_client": ["ENTER", true] ,"e12g3820_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.setVCMap("A11185CNAERotulo", "CNAEROTULO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcnae());
