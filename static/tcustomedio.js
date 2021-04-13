/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:57.32
*/
gx.evt.autoSkip = false;
gx.define('tcustomedio', false, function () {
   this.ServerClass =  "tcustomedio" ;
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
   this.Valid_Customediousuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CUSTOMEDIOUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Customedioprograma=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CUSTOMEDIOPROGRAMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Customediosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Customediosequencia",["gx.O.A6440customediousuario", "gx.O.A6441customedioprograma", "gx.O.A6442customediosequencia", "gx.O.A6427customediofilialemp", "gx.O.A6428customediofilialid", "gx.O.A6429customedioprodutoemp", "gx.O.A6430customedioprodutoid", "gx.O.A6431customediolotecombinacao", "gx.num.urlDecimal(gx.O.A6432customedioquantidade,\'.\',\',\')", "gx.O.A6433customediotipo", "gx.num.urlDecimal(gx.O.A6434customediovalorcusto,\'.\',\',\')", "gx.O.A6435customedioentracusto", "gx.O.A6436customedionotaemp", "gx.O.A6437customedionotaid", "gx.O.A6438customedionotaseq", 'gx.date.urlDate(gx.O.A6439customediodata,"DMY4")'],["A6427customediofilialemp", "A6428customediofilialid", "A6429customedioprodutoemp", "A6430customedioprodutoid", "A6431customediolotecombinacao", "A6432customedioquantidade", "A6433customediotipo", "A6434customediovalorcusto", "A6435customedioentracusto", "A6436customedionotaemp", "A6437customedionotaid", "A6438customedionotaseq", "A6439customediodata", "Gx_mode", "Z6440customediousuario", "Z6441customedioprograma", "Z6442customediosequencia", "Z6427customediofilialemp", "Z6428customediofilialid", "Z6429customedioprodutoemp", "Z6430customedioprodutoid", "Z6431customediolotecombinacao", "Z6432customedioquantidade", "Z6433customediotipo", "Z6434customediovalorcusto", "Z6435customedioentracusto", "Z6436customedionotaemp", "Z6437customedionotaid", "Z6438customedionotaseq", "Z6439customediodata", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119e512_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129e512_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139e512_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,69,72,74,77,79,82,84,87,89,90,99,101];
   this.GXLastCtrlId =101;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customediousuario,isvalid:null,rgrid:[],fld:"CUSTOMEDIOUSUARIO",gxz:"Z6440customediousuario",gxold:"O6440customediousuario",gxvar:"A6440customediousuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6440customediousuario=Value},v2z:function(Value){gx.O.Z6440customediousuario=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOUSUARIO",gx.O.A6440customediousuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6440customediousuario=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customedioprograma,isvalid:null,rgrid:[],fld:"CUSTOMEDIOPROGRAMA",gxz:"Z6441customedioprograma",gxold:"O6441customedioprograma",gxvar:"A6441customedioprograma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6441customedioprograma=Value},v2z:function(Value){gx.O.Z6441customedioprograma=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOPROGRAMA",gx.O.A6441customedioprograma,0)},c2v:function(){gx.O.A6441customedioprograma=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOPROGRAMA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customediosequencia,isvalid:null,rgrid:[],fld:"CUSTOMEDIOSEQUENCIA",gxz:"Z6442customediosequencia",gxold:"O6442customediosequencia",gxvar:"A6442customediosequencia",ucs:[],op:[89,84,79,74,69,65,60,55,50,45,40,35,30],ip:[89,84,79,74,69,65,60,55,50,45,40,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6442customediosequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6442customediosequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOSEQUENCIA",gx.O.A6442customediosequencia,0)},c2v:function(){gx.O.A6442customediosequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CUSTOMEDIOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOFILIALEMP",gxz:"Z6427customediofilialemp",gxold:"O6427customediofilialemp",gxvar:"A6427customediofilialemp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6427customediofilialemp=Value},v2z:function(Value){gx.O.Z6427customediofilialemp=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOFILIALEMP",gx.O.A6427customediofilialemp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6427customediofilialemp=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOFILIALEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOFILIALID",gxz:"Z6428customediofilialid",gxold:"O6428customediofilialid",gxvar:"A6428customediofilialid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6428customediofilialid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6428customediofilialid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOFILIALID",gx.O.A6428customediofilialid,0)},c2v:function(){gx.O.A6428customediofilialid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CUSTOMEDIOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOPRODUTOEMP",gxz:"Z6429customedioprodutoemp",gxold:"O6429customedioprodutoemp",gxvar:"A6429customedioprodutoemp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6429customedioprodutoemp=Value},v2z:function(Value){gx.O.Z6429customedioprodutoemp=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOPRODUTOEMP",gx.O.A6429customedioprodutoemp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6429customedioprodutoemp=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOPRODUTOEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOPRODUTOID",gxz:"Z6430customedioprodutoid",gxold:"O6430customedioprodutoid",gxvar:"A6430customedioprodutoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6430customedioprodutoid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6430customedioprodutoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOPRODUTOID",gx.O.A6430customedioprodutoid,0)},c2v:function(){gx.O.A6430customedioprodutoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CUSTOMEDIOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOLOTECOMBINACAO",gxz:"Z6431customediolotecombinacao",gxold:"O6431customediolotecombinacao",gxvar:"A6431customediolotecombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6431customediolotecombinacao=Value},v2z:function(Value){gx.O.Z6431customediolotecombinacao=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOLOTECOMBINACAO",gx.O.A6431customediolotecombinacao,0)},c2v:function(){gx.O.A6431customediolotecombinacao=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOQUANTIDADE",gxz:"Z6432customedioquantidade",gxold:"O6432customedioquantidade",gxvar:"A6432customedioquantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6432customedioquantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6432customedioquantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOMEDIOQUANTIDADE",gx.O.A6432customedioquantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6432customedioquantidade=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOMEDIOQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOTIPO",gxz:"Z6433customediotipo",gxold:"O6433customediotipo",gxvar:"A6433customediotipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6433customediotipo=Value},v2z:function(Value){gx.O.Z6433customediotipo=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOTIPO",gx.O.A6433customediotipo,0)},c2v:function(){gx.O.A6433customediotipo=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOTIPO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOVALORCUSTO",gxz:"Z6434customediovalorcusto",gxold:"O6434customediovalorcusto",gxvar:"A6434customediovalorcusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6434customediovalorcusto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6434customediovalorcusto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOMEDIOVALORCUSTO",gx.O.A6434customediovalorcusto,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6434customediovalorcusto=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOMEDIOVALORCUSTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIOENTRACUSTO",gxz:"Z6435customedioentracusto",gxold:"O6435customedioentracusto",gxvar:"A6435customedioentracusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6435customedioentracusto=Value},v2z:function(Value){gx.O.Z6435customedioentracusto=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIOENTRACUSTO",gx.O.A6435customedioentracusto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6435customedioentracusto=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIOENTRACUSTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIONOTAEMP",gxz:"Z6436customedionotaemp",gxold:"O6436customedionotaemp",gxvar:"A6436customedionotaemp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6436customedionotaemp=Value},v2z:function(Value){gx.O.Z6436customedionotaemp=Value},v2c:function(){gx.fn.setControlValue("CUSTOMEDIONOTAEMP",gx.O.A6436customedionotaemp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6436customedionotaemp=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMEDIONOTAEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIONOTAID",gxz:"Z6437customedionotaid",gxold:"O6437customedionotaid",gxvar:"A6437customedionotaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6437customedionotaid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6437customedionotaid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CUSTOMEDIONOTAID",gx.O.A6437customedionotaid,0)},c2v:function(){gx.O.A6437customedionotaid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CUSTOMEDIONOTAID",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIONOTASEQ",gxz:"Z6438customedionotaseq",gxold:"O6438customedionotaseq",gxvar:"A6438customedionotaseq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6438customedionotaseq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6438customedionotaseq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CUSTOMEDIONOTASEQ",gx.O.A6438customedionotaseq,0)},c2v:function(){gx.O.A6438customedionotaseq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CUSTOMEDIONOTASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMEDIODATA",gxz:"Z6439customediodata",gxold:"O6439customediodata",gxvar:"A6439customediodata",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6439customediodata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6439customediodata=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CUSTOMEDIODATA",gx.O.A6439customediodata,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6439customediodata=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CUSTOMEDIODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[90]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"BTNHELP",grid:0};
   this.A6440customediousuario = "" ;
   this.Z6440customediousuario = "" ;
   this.O6440customediousuario = "" ;
   this.A6441customedioprograma = "" ;
   this.Z6441customedioprograma = "" ;
   this.O6441customedioprograma = "" ;
   this.A6442customediosequencia = 0 ;
   this.Z6442customediosequencia = 0 ;
   this.O6442customediosequencia = 0 ;
   this.A6427customediofilialemp = "" ;
   this.Z6427customediofilialemp = "" ;
   this.O6427customediofilialemp = "" ;
   this.A6428customediofilialid = 0 ;
   this.Z6428customediofilialid = 0 ;
   this.O6428customediofilialid = 0 ;
   this.A6429customedioprodutoemp = "" ;
   this.Z6429customedioprodutoemp = "" ;
   this.O6429customedioprodutoemp = "" ;
   this.A6430customedioprodutoid = 0 ;
   this.Z6430customedioprodutoid = 0 ;
   this.O6430customedioprodutoid = 0 ;
   this.A6431customediolotecombinacao = "" ;
   this.Z6431customediolotecombinacao = "" ;
   this.O6431customediolotecombinacao = "" ;
   this.A6432customedioquantidade = 0 ;
   this.Z6432customedioquantidade = 0 ;
   this.O6432customedioquantidade = 0 ;
   this.A6433customediotipo = "" ;
   this.Z6433customediotipo = "" ;
   this.O6433customediotipo = "" ;
   this.A6434customediovalorcusto = 0 ;
   this.Z6434customediovalorcusto = 0 ;
   this.O6434customediovalorcusto = 0 ;
   this.A6435customedioentracusto = "" ;
   this.Z6435customedioentracusto = "" ;
   this.O6435customedioentracusto = "" ;
   this.A6436customedionotaemp = "" ;
   this.Z6436customedionotaemp = "" ;
   this.O6436customedionotaemp = "" ;
   this.A6437customedionotaid = 0 ;
   this.Z6437customedionotaid = 0 ;
   this.O6437customedionotaid = 0 ;
   this.A6438customedionotaseq = 0 ;
   this.Z6438customedionotaseq = 0 ;
   this.O6438customedionotaseq = 0 ;
   this.A6439customediodata = gx.date.nullDate() ;
   this.Z6439customediodata = gx.date.nullDate() ;
   this.O6439customediodata = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6440customediousuario = "" ;
   this.A6441customedioprograma = "" ;
   this.A6442customediosequencia = 0 ;
   this.A6427customediofilialemp = "" ;
   this.A6428customediofilialid = 0 ;
   this.A6429customedioprodutoemp = "" ;
   this.A6430customedioprodutoid = 0 ;
   this.A6431customediolotecombinacao = "" ;
   this.A6432customedioquantidade = 0 ;
   this.A6433customediotipo = "" ;
   this.A6434customediovalorcusto = 0 ;
   this.A6435customedioentracusto = "" ;
   this.A6436customedionotaemp = "" ;
   this.A6437customedionotaid = 0 ;
   this.A6438customedionotaseq = 0 ;
   this.A6439customediodata = gx.date.nullDate() ;
   this.Events = {"e129e512_client": ["ENTER", true] ,"e139e512_client": ["CANCEL", true] ,"e119e512_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcustomedio());
