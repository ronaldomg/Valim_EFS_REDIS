/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:51.73
*/
gx.evt.autoSkip = false;
gx.define('htrocarvendedorcliente', false, function () {
   this.ServerClass =  "htrocarvendedorcliente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedoratualid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORATUALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedornovoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORNOVOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      this.AV15PessoaId = gx.num.trunc( 0 ,0) ;
      this.AV14PessoaFantasia =  ""  ;
      this.AV22VendedorAtualId = gx.num.trunc( 0 ,0) ;
      this.AV23VendedorAtualNome =  ""  ;
      this.AV25VendedorNovoId = gx.num.trunc( 0 ,0) ;
      this.AV26VendedorNovoNome =  ""  ;
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("TABAVULSA","Visible", 0 );
      gx.fn.setCtrlProperty("TABGERAL","Visible", 0 );
      gx.fn.setCtrlProperty("TABNOVOVENDEDOR","Visible", 0 );
      if ( gx.text.upper( this.AV20TpAtualizacaoParm) == "A" )
      {
         this.AV19TpAtualizacao =  "A"  ;
         gx.fn.setCtrlProperty("vTPATUALIZACAO","Enabled", 0 );
         gx.fn.setCtrlProperty("TABAVULSA","Visible", 1 );
         gx.fn.setCtrlProperty("TABGERAL","Visible", 0 );
         gx.fn.setCtrlProperty("TABNOVOVENDEDOR","Visible", 1 );
      }
      else if ( gx.text.upper( this.AV20TpAtualizacaoParm) == "T" )
      {
         gx.fn.setCtrlProperty("vTPATUALIZACAO","Enabled", 1 );
         if ( this.AV19TpAtualizacao == "A" )
         {
            gx.fn.setCtrlProperty("TABAVULSA","Visible", 1 );
            gx.fn.setCtrlProperty("TABGERAL","Visible", 0 );
            gx.fn.setCtrlProperty("TABNOVOVENDEDOR","Visible", 1 );
         }
         else
         {
            if ( this.AV19TpAtualizacao == "G" )
            {
               gx.fn.setCtrlProperty("TABAVULSA","Visible", 0 );
               gx.fn.setCtrlProperty("TABGERAL","Visible", 1 );
               gx.fn.setCtrlProperty("TABNOVOVENDEDOR","Visible", 1 );
            }
         }
      }
   };
   this.e112gq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132gq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152gq2_client=function()
   {
      this.executeServerEvent("VPESSOAID.ISVALID", true, null, false, true);
   };
   this.e162gq2_client=function()
   {
      this.executeServerEvent("VVENDEDORATUALID.ISVALID", true, null, false, true);
   };
   this.e172gq2_client=function()
   {
      this.executeServerEvent("VVENDEDORNOVOID.ISVALID", true, null, false, true);
   };
   this.e192gq2_client=function()
   {
      this.executeServerEvent("VTPATUALIZACAO.CLICK", true, null, false, true);
   };
   this.e202gq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,21,24,26,27,28,31,33,34,43,44,45,47,48,49,50];
   this.GXLastCtrlId =50;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABATUALIZACAO",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPATUALIZACAO",gxz:"ZV19TpAtualizacao",gxold:"OV19TpAtualizacao",gxvar:"AV19TpAtualizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19TpAtualizacao=Value},v2z:function(Value){gx.O.ZV19TpAtualizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPATUALIZACAO",gx.O.AV19TpAtualizacao)},c2v:function(){gx.O.AV19TpAtualizacao=this.val()},val:function(){return gx.fn.getControlValue("vTPATUALIZACAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TABAVULSA",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:'e152gq2_client',rgrid:[],fld:"vPESSOAID",gxz:"ZV15PessoaId",gxold:"OV15PessoaId",gxvar:"AV15PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15PessoaId,0)},c2v:function(){gx.O.AV15PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV14PessoaFantasia",gxold:"OV14PessoaFantasia",gxvar:"AV14PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PessoaFantasia=Value},v2z:function(Value){gx.O.ZV14PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV14PessoaFantasia,0)},c2v:function(){gx.O.AV14PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABGERAL",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedoratualid,isvalid:'e162gq2_client',rgrid:[],fld:"vVENDEDORATUALID",gxz:"ZV22VendedorAtualId",gxold:"OV22VendedorAtualId",gxvar:"AV22VendedorAtualId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22VendedorAtualId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22VendedorAtualId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORATUALID",gx.O.AV22VendedorAtualId,0)},c2v:function(){gx.O.AV22VendedorAtualId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORATUALID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORATUALNOME",gxz:"ZV23VendedorAtualNome",gxold:"OV23VendedorAtualNome",gxvar:"AV23VendedorAtualNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23VendedorAtualNome=Value},v2z:function(Value){gx.O.ZV23VendedorAtualNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORATUALNOME",gx.O.AV23VendedorAtualNome,0)},c2v:function(){gx.O.AV23VendedorAtualNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORATUALNOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABNOVOVENDEDOR",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedornovoid,isvalid:'e172gq2_client',rgrid:[],fld:"vVENDEDORNOVOID",gxz:"ZV25VendedorNovoId",gxold:"OV25VendedorNovoId",gxvar:"AV25VendedorNovoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25VendedorNovoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25VendedorNovoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORNOVOID",gx.O.AV25VendedorNovoId,0)},c2v:function(){gx.O.AV25VendedorNovoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORNOVOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOVONOME",gxz:"ZV26VendedorNovoNome",gxold:"OV26VendedorNovoNome",gxvar:"AV26VendedorNovoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26VendedorNovoNome=Value},v2z:function(Value){gx.O.ZV26VendedorNovoNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOVONOME",gx.O.AV26VendedorNovoNome,0)},c2v:function(){gx.O.AV26VendedorNovoNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOVONOME")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV16Sim",gxold:"OV16Sim",gxvar:"AV16Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Sim=Value},v2z:function(Value){gx.O.ZV16Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV16Sim,0)},c2v:function(){gx.O.AV16Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV27Nao",gxold:"OV27Nao",gxvar:"AV27Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Nao=Value},v2z:function(Value){gx.O.ZV27Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV27Nao,0)},c2v:function(){gx.O.AV27Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPATUALIZACAOPARM",gxz:"ZV20TpAtualizacaoParm",gxold:"OV20TpAtualizacaoParm",gxvar:"AV20TpAtualizacaoParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TpAtualizacaoParm=Value},v2z:function(Value){gx.O.ZV20TpAtualizacaoParm=Value},v2c:function(){gx.fn.setControlValue("vTPATUALIZACAOPARM",gx.O.AV20TpAtualizacaoParm,0)},c2v:function(){gx.O.AV20TpAtualizacaoParm=this.val()},val:function(){return gx.fn.getControlValue("vTPATUALIZACAOPARM")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[48]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[49]={fld:"PROMPT_VENDEDORATUALID",grid:0};
   GXValidFnc[50]={fld:"PROMPT_VENDEDORNOVOID",grid:0};
   this.AV19TpAtualizacao = "" ;
   this.ZV19TpAtualizacao = "" ;
   this.OV19TpAtualizacao = "" ;
   this.AV15PessoaId = 0 ;
   this.ZV15PessoaId = 0 ;
   this.OV15PessoaId = 0 ;
   this.AV14PessoaFantasia = "" ;
   this.ZV14PessoaFantasia = "" ;
   this.OV14PessoaFantasia = "" ;
   this.AV22VendedorAtualId = 0 ;
   this.ZV22VendedorAtualId = 0 ;
   this.OV22VendedorAtualId = 0 ;
   this.AV23VendedorAtualNome = "" ;
   this.ZV23VendedorAtualNome = "" ;
   this.OV23VendedorAtualNome = "" ;
   this.AV25VendedorNovoId = 0 ;
   this.ZV25VendedorNovoId = 0 ;
   this.OV25VendedorNovoId = 0 ;
   this.AV26VendedorNovoNome = "" ;
   this.ZV26VendedorNovoNome = "" ;
   this.OV26VendedorNovoNome = "" ;
   this.AV16Sim = "" ;
   this.ZV16Sim = "" ;
   this.OV16Sim = "" ;
   this.AV27Nao = "" ;
   this.ZV27Nao = "" ;
   this.OV27Nao = "" ;
   this.AV20TpAtualizacaoParm = "" ;
   this.ZV20TpAtualizacaoParm = "" ;
   this.OV20TpAtualizacaoParm = "" ;
   this.AV19TpAtualizacao = "" ;
   this.AV15PessoaId = 0 ;
   this.AV14PessoaFantasia = "" ;
   this.AV22VendedorAtualId = 0 ;
   this.AV23VendedorAtualNome = "" ;
   this.AV25VendedorNovoId = 0 ;
   this.AV26VendedorNovoNome = "" ;
   this.AV16Sim = "" ;
   this.AV27Nao = "" ;
   this.AV20TpAtualizacaoParm = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1148VendedorNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.Events = {"e112gq2_client": ["'FECHAR'", true] ,"e132gq2_client": ["ENTER", true] ,"e152gq2_client": ["VPESSOAID.ISVALID", true] ,"e162gq2_client": ["VVENDEDORATUALID.ISVALID", true] ,"e172gq2_client": ["VVENDEDORNOVOID.ISVALID", true] ,"e192gq2_client": ["VTPATUALIZACAO.CLICK", true] ,"e202gq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV20TpAtualizacaoParm',fld:'vTPATUALIZACAOPARM',hsh:true},{av:'AV19TpAtualizacao',fld:'vTPATUALIZACAO'}],[{av:'gx.fn.getCtrlProperty("TABAVULSA","Visible")',ctrl:'TABAVULSA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGERAL","Visible")',ctrl:'TABGERAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNOVOVENDEDOR","Visible")',ctrl:'TABNOVOVENDEDOR',prop:'Visible'},{av:'AV19TpAtualizacao',fld:'vTPATUALIZACAO'},{ctrl:'vTPATUALIZACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV22VendedorAtualId',fld:'vVENDEDORATUALID'},{av:'AV25VendedorNovoId',fld:'vVENDEDORNOVOID'},{av:'AV19TpAtualizacao',fld:'vTPATUALIZACAO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV13PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV24VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'}],[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV32GXLvl71',fld:'vGXLVL71'},{av:'AV33GXLvl87',fld:'vGXLVL87'},{av:'AV34GXLvl106',fld:'vGXLVL106'},{av:'AV35GXLvl123',fld:'vGXLVL123'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV14PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV22VendedorAtualId',fld:'vVENDEDORATUALID'},{av:'AV23VendedorAtualNome',fld:'vVENDEDORATUALNOME'},{av:'AV25VendedorNovoId',fld:'vVENDEDORNOVOID'},{av:'AV26VendedorNovoNome',fld:'vVENDEDORNOVONOME'}]];
   this.EvtParms["VPESSOAID.ISVALID"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV13PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV14PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["VVENDEDORATUALID.ISVALID"] = [[{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV24VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV22VendedorAtualId',fld:'vVENDEDORATUALID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV23VendedorAtualNome',fld:'vVENDEDORATUALNOME'}]];
   this.EvtParms["VVENDEDORNOVOID.ISVALID"] = [[{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV24VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV25VendedorNovoId',fld:'vVENDEDORNOVOID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV26VendedorNovoNome',fld:'vVENDEDORNOVONOME'}]];
   this.EvtParms["VTPATUALIZACAO.CLICK"] = [[{av:'AV20TpAtualizacaoParm',fld:'vTPATUALIZACAOPARM',hsh:true},{av:'AV19TpAtualizacao',fld:'vTPATUALIZACAO'}],[{av:'gx.fn.getCtrlProperty("TABAVULSA","Visible")',ctrl:'TABAVULSA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABGERAL","Visible")',ctrl:'TABGERAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABNOVOVENDEDOR","Visible")',ctrl:'TABNOVOVENDEDOR',prop:'Visible'},{av:'AV19TpAtualizacao',fld:'vTPATUALIZACAO'},{ctrl:'vTPATUALIZACAO'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV14PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV22VendedorAtualId',fld:'vVENDEDORATUALID'},{av:'AV23VendedorAtualNome',fld:'vVENDEDORATUALNOME'},{av:'AV25VendedorNovoId',fld:'vVENDEDORNOVOID'},{av:'AV26VendedorNovoNome',fld:'vVENDEDORNOVONOME'}]];
   this.setPrompt("PROMPT_PESSOAID", [19]);
   this.setPrompt("PROMPT_VENDEDORATUALID", [26]);
   this.setPrompt("PROMPT_VENDEDORNOVOID", [33]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrocarvendedorcliente());
