/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:32:12.53
*/
gx.evt.autoSkip = false;
gx.define('tpessoaemail', false, function () {
   this.ServerClass =  "tpessoaemail" ;
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
   this.Valid_Pessoaemailpessoaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOAEMAILPESSOAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaemailpessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaemailpessoaid",["gx.O.A10879PessoaEmailPessoaEmpId", "gx.O.A10880PessoaEmailPessoaId", "gx.O.A10885PessoaEmailPessoaNome"],["A10885PessoaEmailPessoaNome"]);
      return true;
   }
   this.Valid_Pessoaemailseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaemailseq",["gx.O.A10879PessoaEmailPessoaEmpId", "gx.O.A10880PessoaEmailPessoaId", "gx.O.A10881PessoaEmailSeq", "gx.O.A10882PessoaEmailEnderecoEmail", "gx.O.A11788PessoaEmailTipo", "gx.O.A10883PessoaEmailUsuarioAlt", 'gx.date.urlDateTime(gx.O.A10884PessoaEmailDataHoraAlt,"DMY4")'],["A10882PessoaEmailEnderecoEmail", "A11788PessoaEmailTipo", "A10883PessoaEmailUsuarioAlt", "A10884PessoaEmailDataHoraAlt", "A10885PessoaEmailPessoaNome", "Gx_mode", "Z10879PessoaEmailPessoaEmpId", "Z10880PessoaEmailPessoaId", "Z10881PessoaEmailSeq", "Z10882PessoaEmailEnderecoEmail", "Z11788PessoaEmailTipo", "Z10883PessoaEmailUsuarioAlt", "Z10884PessoaEmailDataHoraAlt", "Z10885PessoaEmailPessoaNome", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11fo800_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fo800_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,80];
   this.GXLastCtrlId =80;
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
   GXValidFnc[37]={fld:"TEXTBLOCKPESSOAEMAILPESSOAEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaemailpessoaempid,isvalid:null,rgrid:[],fld:"PESSOAEMAILPESSOAEMPID",gxz:"Z10879PessoaEmailPessoaEmpId",gxold:"O10879PessoaEmailPessoaEmpId",gxvar:"A10879PessoaEmailPessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10879PessoaEmailPessoaEmpId=Value},v2z:function(Value){gx.O.Z10879PessoaEmailPessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("PESSOAEMAILPESSOAEMPID",gx.O.A10879PessoaEmailPessoaEmpId,0)},c2v:function(){gx.O.A10879PessoaEmailPessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("PESSOAEMAILPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPESSOAEMAILPESSOAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaemailpessoaid,isvalid:null,rgrid:[],fld:"PESSOAEMAILPESSOAID",gxz:"Z10880PessoaEmailPessoaId",gxold:"O10880PessoaEmailPessoaId",gxvar:"A10880PessoaEmailPessoaId",ucs:[],op:[49],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10880PessoaEmailPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10880PessoaEmailPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAEMAILPESSOAID",gx.O.A10880PessoaEmailPessoaId,0)},c2v:function(){gx.O.A10880PessoaEmailPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAEMAILPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKPESSOAEMAILPESSOANOME", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAEMAILPESSOANOME",gxz:"Z10885PessoaEmailPessoaNome",gxold:"O10885PessoaEmailPessoaNome",gxvar:"A10885PessoaEmailPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10885PessoaEmailPessoaNome=Value},v2z:function(Value){gx.O.Z10885PessoaEmailPessoaNome=Value},v2c:function(){gx.fn.setControlValue("PESSOAEMAILPESSOANOME",gx.O.A10885PessoaEmailPessoaNome,0)},c2v:function(){gx.O.A10885PessoaEmailPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("PESSOAEMAILPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKPESSOAEMAILSEQ", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaemailseq,isvalid:null,rgrid:[],fld:"PESSOAEMAILSEQ",gxz:"Z10881PessoaEmailSeq",gxold:"O10881PessoaEmailSeq",gxvar:"A10881PessoaEmailSeq",ucs:[],op:[74,69,64,59],ip:[74,69,64,59,54,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10881PessoaEmailSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10881PessoaEmailSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAEMAILSEQ",gx.O.A10881PessoaEmailSeq,0)},c2v:function(){gx.O.A10881PessoaEmailSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAEMAILSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKPESSOAEMAILENDERECOEMAIL", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAEMAILENDERECOEMAIL",gxz:"Z10882PessoaEmailEnderecoEmail",gxold:"O10882PessoaEmailEnderecoEmail",gxvar:"A10882PessoaEmailEnderecoEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10882PessoaEmailEnderecoEmail=Value},v2z:function(Value){gx.O.Z10882PessoaEmailEnderecoEmail=Value},v2c:function(){gx.fn.setControlValue("PESSOAEMAILENDERECOEMAIL",gx.O.A10882PessoaEmailEnderecoEmail,0)},c2v:function(){gx.O.A10882PessoaEmailEnderecoEmail=this.val()},val:function(){return gx.fn.getControlValue("PESSOAEMAILENDERECOEMAIL")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKPESSOAEMAILTIPO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAEMAILTIPO",gxz:"Z11788PessoaEmailTipo",gxold:"O11788PessoaEmailTipo",gxvar:"A11788PessoaEmailTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11788PessoaEmailTipo=Value},v2z:function(Value){gx.O.Z11788PessoaEmailTipo=Value},v2c:function(){gx.fn.setControlValue("PESSOAEMAILTIPO",gx.O.A11788PessoaEmailTipo,0)},c2v:function(){gx.O.A11788PessoaEmailTipo=this.val()},val:function(){return gx.fn.getControlValue("PESSOAEMAILTIPO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKPESSOAEMAILUSUARIOALT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAEMAILUSUARIOALT",gxz:"Z10883PessoaEmailUsuarioAlt",gxold:"O10883PessoaEmailUsuarioAlt",gxvar:"A10883PessoaEmailUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10883PessoaEmailUsuarioAlt=Value},v2z:function(Value){gx.O.Z10883PessoaEmailUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PESSOAEMAILUSUARIOALT",gx.O.A10883PessoaEmailUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10883PessoaEmailUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PESSOAEMAILUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKPESSOAEMAILDATAHORAALT", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAEMAILDATAHORAALT",gxz:"Z10884PessoaEmailDataHoraAlt",gxold:"O10884PessoaEmailDataHoraAlt",gxvar:"A10884PessoaEmailDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10884PessoaEmailDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10884PessoaEmailDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PESSOAEMAILDATAHORAALT",gx.O.A10884PessoaEmailDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10884PessoaEmailDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PESSOAEMAILDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[80]={fld:"PROMPT_10879_10880",grid:800};
   this.A10879PessoaEmailPessoaEmpId = "" ;
   this.Z10879PessoaEmailPessoaEmpId = "" ;
   this.O10879PessoaEmailPessoaEmpId = "" ;
   this.A10880PessoaEmailPessoaId = 0 ;
   this.Z10880PessoaEmailPessoaId = 0 ;
   this.O10880PessoaEmailPessoaId = 0 ;
   this.A10885PessoaEmailPessoaNome = "" ;
   this.Z10885PessoaEmailPessoaNome = "" ;
   this.O10885PessoaEmailPessoaNome = "" ;
   this.A10881PessoaEmailSeq = 0 ;
   this.Z10881PessoaEmailSeq = 0 ;
   this.O10881PessoaEmailSeq = 0 ;
   this.A10882PessoaEmailEnderecoEmail = "" ;
   this.Z10882PessoaEmailEnderecoEmail = "" ;
   this.O10882PessoaEmailEnderecoEmail = "" ;
   this.A11788PessoaEmailTipo = "" ;
   this.Z11788PessoaEmailTipo = "" ;
   this.O11788PessoaEmailTipo = "" ;
   this.A10883PessoaEmailUsuarioAlt = "" ;
   this.Z10883PessoaEmailUsuarioAlt = "" ;
   this.O10883PessoaEmailUsuarioAlt = "" ;
   this.A10884PessoaEmailDataHoraAlt = gx.date.nullDate() ;
   this.Z10884PessoaEmailDataHoraAlt = gx.date.nullDate() ;
   this.O10884PessoaEmailDataHoraAlt = gx.date.nullDate() ;
   this.A10879PessoaEmailPessoaEmpId = "" ;
   this.A10880PessoaEmailPessoaId = 0 ;
   this.A10881PessoaEmailSeq = 0 ;
   this.A10885PessoaEmailPessoaNome = "" ;
   this.A10882PessoaEmailEnderecoEmail = "" ;
   this.A11788PessoaEmailTipo = "" ;
   this.A10883PessoaEmailUsuarioAlt = "" ;
   this.A10884PessoaEmailDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11fo800_client": ["ENTER", true] ,"e12fo800_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_10879_10880", [39,44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpessoaemail());
