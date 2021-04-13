/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:41.37
*/
gx.evt.autoSkip = false;
gx.define('hcadastrodebito', false, function () {
   this.ServerClass =  "hcadastrodebito" ;
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
      this.AV33PessoaIdParm=gx.fn.getIntegerValue("vPESSOAIDPARM",'.') ;
      this.AV34DebitoReferenciaParm=gx.fn.getDateValue("vDEBITOREFERENCIAPARM") ;
      this.AV35DebitoSequenciaParm=gx.fn.getIntegerValue("vDEBITOSEQUENCIAPARM",'.') ;
      this.AV29Modo=gx.fn.getControlValue("vMODO") ;
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
   this.Validv_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMP");
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
      if ( this.AV29Modo == "UPD" )
      {
         gx.fn.setCtrlProperty("vPESSOAID","Enabled", 0 );
         gx.fn.setCtrlProperty("vDEBITOSEQUENCIA","Enabled", 0 );
         gx.fn.setCtrlProperty("vMES","Enabled", 0 );
         gx.fn.setCtrlProperty("vANO","Enabled", 0 );
      }
      else
      {
         if ( this.AV29Modo == "DLT" || this.AV29Modo == "DSP" )
         {
            gx.fn.setCtrlProperty("vPESSOAID","Enabled", 0 );
            gx.fn.setCtrlProperty("vDEBITOSEQUENCIA","Enabled", 0 );
            gx.fn.setCtrlProperty("vMES","Enabled", 0 );
            gx.fn.setCtrlProperty("vANO","Enabled", 0 );
            gx.fn.setCtrlProperty("vDEBITODESCRICAO","Enabled", 0 );
            gx.fn.setCtrlProperty("vDEBITOCREDITO","Enabled", 0 );
            gx.fn.setCtrlProperty("vDEBITOTIPO","Enabled", 0 );
            gx.fn.setCtrlProperty("vDEBITOVALOR","Enabled", 0 );
            gx.fn.setCtrlProperty("vTIPOLANCAMENTOID","Enabled", 0 );
         }
      }
   };
   this.e11kc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15kc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,23,25,26,29,31,32,33,36,38,41,43,46,48,51,53,56,58,59,63,64,67,69,71,81,82,83,84,85,86,88,89];
   this.GXLastCtrlId =89;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOSEQUENCIA",gxz:"ZV21DebitoSequencia",gxold:"OV21DebitoSequencia",gxvar:"AV21DebitoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DebitoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21DebitoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEBITOSEQUENCIA",gx.O.AV21DebitoSequencia,0)},c2v:function(){gx.O.AV21DebitoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEBITOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV19PessoaId",gxold:"OV19PessoaId",gxvar:"AV19PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV19PessoaId,0)},c2v:function(){gx.O.AV19PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV36PessoaFantasia",gxold:"OV36PessoaFantasia",gxvar:"AV36PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaFantasia=Value},v2z:function(Value){gx.O.ZV36PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV36PessoaFantasia,0)},c2v:function(){gx.O.AV36PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV41Mes",gxold:"OV41Mes",gxvar:"AV41Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV41Mes,0)},c2v:function(){gx.O.AV41Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV42Ano",gxold:"OV42Ano",gxvar:"AV42Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV42Ano,0)},c2v:function(){gx.O.AV42Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITODESCRICAO",gxz:"ZV22DebitoDescricao",gxold:"OV22DebitoDescricao",gxvar:"AV22DebitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DebitoDescricao=Value},v2z:function(Value){gx.O.ZV22DebitoDescricao=Value},v2c:function(){gx.fn.setControlValue("vDEBITODESCRICAO",gx.O.AV22DebitoDescricao,0)},c2v:function(){gx.O.AV22DebitoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vDEBITODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOCREDITO",gxz:"ZV24DebitoCredito",gxold:"OV24DebitoCredito",gxvar:"AV24DebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24DebitoCredito=Value},v2z:function(Value){gx.O.ZV24DebitoCredito=Value},v2c:function(){gx.fn.setComboBoxValue("vDEBITOCREDITO",gx.O.AV24DebitoCredito)},c2v:function(){gx.O.AV24DebitoCredito=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOCREDITO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOTIPO",gxz:"ZV23DebitoTipo",gxold:"OV23DebitoTipo",gxvar:"AV23DebitoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23DebitoTipo=Value},v2z:function(Value){gx.O.ZV23DebitoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vDEBITOTIPO",gx.O.AV23DebitoTipo)},c2v:function(){gx.O.AV23DebitoTipo=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOTIPO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOVALOR",gxz:"ZV25DebitoValor",gxold:"OV25DebitoValor",gxvar:"AV25DebitoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DebitoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25DebitoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDEBITOVALOR",gx.O.AV25DebitoValor,2,',')},c2v:function(){gx.O.AV25DebitoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vDEBITOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID",gxz:"ZV52TipoLancamentoId",gxold:"OV52TipoLancamentoId",gxvar:"AV52TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID",gx.O.AV52TipoLancamentoId,0)},c2v:function(){gx.O.AV52TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTODESC",gxz:"ZV53TipoLancamentoDesc",gxold:"OV53TipoLancamentoDesc",gxvar:"AV53TipoLancamentoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TipoLancamentoDesc=Value},v2z:function(Value){gx.O.ZV53TipoLancamentoDesc=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESC",gx.O.AV53TipoLancamentoDesc,0)},c2v:function(){gx.O.AV53TipoLancamentoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESC")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOPIARDEBITOANOTODO",gxz:"ZV48CopiarDebitoAnoTodo",gxold:"OV48CopiarDebitoAnoTodo",gxvar:"AV48CopiarDebitoAnoTodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48CopiarDebitoAnoTodo=Value},v2z:function(Value){gx.O.ZV48CopiarDebitoAnoTodo=Value},v2c:function(){gx.fn.setCheckBoxValue("vCOPIARDEBITOANOTODO",gx.O.AV48CopiarDebitoAnoTodo,"S")},c2v:function(){gx.O.AV48CopiarDebitoAnoTodo=this.val()},val:function(){return gx.fn.getControlValue("vCOPIARDEBITOANOTODO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOUSUARIOALT",gxz:"ZV26DebitoUsuarioAlt",gxold:"OV26DebitoUsuarioAlt",gxvar:"AV26DebitoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DebitoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV26DebitoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vDEBITOUSUARIOALT",gx.O.AV26DebitoUsuarioAlt,0)},c2v:function(){gx.O.AV26DebitoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITODATAHORAALT",gxz:"ZV27DebitoDataHoraAlt",gxold:"OV27DebitoDataHoraAlt",gxvar:"AV27DebitoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DebitoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DebitoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEBITODATAHORAALT",gx.O.AV27DebitoDataHoraAlt,0)},c2v:function(){gx.O.AV27DebitoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDEBITODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV30AcessoSistemaSequencia",gxold:"OV30AcessoSistemaSequencia",gxvar:"AV30AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV30AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoemp,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMP",gxz:"ZV51TipoLancamentoEmp",gxold:"OV51TipoLancamentoEmp",gxvar:"AV51TipoLancamentoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TipoLancamentoEmp=Value},v2z:function(Value){gx.O.ZV51TipoLancamentoEmp=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMP",gx.O.AV51TipoLancamentoEmp,0)},c2v:function(){gx.O.AV51TipoLancamentoEmp=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMP")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"JS", format:2,grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV56Qtde",gxold:"OV56Qtde",gxvar:"AV56Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV56Qtde,0)},c2v:function(){gx.O.AV56Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[89]={fld:"PROMPT_TIPOLANCAMENTOID",grid:0};
   this.AV21DebitoSequencia = 0 ;
   this.ZV21DebitoSequencia = 0 ;
   this.OV21DebitoSequencia = 0 ;
   this.AV19PessoaId = 0 ;
   this.ZV19PessoaId = 0 ;
   this.OV19PessoaId = 0 ;
   this.AV36PessoaFantasia = "" ;
   this.ZV36PessoaFantasia = "" ;
   this.OV36PessoaFantasia = "" ;
   this.AV41Mes = 0 ;
   this.ZV41Mes = 0 ;
   this.OV41Mes = 0 ;
   this.AV42Ano = 0 ;
   this.ZV42Ano = 0 ;
   this.OV42Ano = 0 ;
   this.AV22DebitoDescricao = "" ;
   this.ZV22DebitoDescricao = "" ;
   this.OV22DebitoDescricao = "" ;
   this.AV24DebitoCredito = "" ;
   this.ZV24DebitoCredito = "" ;
   this.OV24DebitoCredito = "" ;
   this.AV23DebitoTipo = "" ;
   this.ZV23DebitoTipo = "" ;
   this.OV23DebitoTipo = "" ;
   this.AV25DebitoValor = 0 ;
   this.ZV25DebitoValor = 0 ;
   this.OV25DebitoValor = 0 ;
   this.AV52TipoLancamentoId = 0 ;
   this.ZV52TipoLancamentoId = 0 ;
   this.OV52TipoLancamentoId = 0 ;
   this.AV53TipoLancamentoDesc = "" ;
   this.ZV53TipoLancamentoDesc = "" ;
   this.OV53TipoLancamentoDesc = "" ;
   this.AV48CopiarDebitoAnoTodo = "" ;
   this.ZV48CopiarDebitoAnoTodo = "" ;
   this.OV48CopiarDebitoAnoTodo = "" ;
   this.AV26DebitoUsuarioAlt = "" ;
   this.ZV26DebitoUsuarioAlt = "" ;
   this.OV26DebitoUsuarioAlt = "" ;
   this.AV27DebitoDataHoraAlt = gx.date.nullDate() ;
   this.ZV27DebitoDataHoraAlt = gx.date.nullDate() ;
   this.OV27DebitoDataHoraAlt = gx.date.nullDate() ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.ZV30AcessoSistemaSequencia = 0 ;
   this.OV30AcessoSistemaSequencia = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV51TipoLancamentoEmp = "" ;
   this.ZV51TipoLancamentoEmp = "" ;
   this.OV51TipoLancamentoEmp = "" ;
   this.AV56Qtde = 0 ;
   this.ZV56Qtde = 0 ;
   this.OV56Qtde = 0 ;
   this.AV21DebitoSequencia = 0 ;
   this.AV19PessoaId = 0 ;
   this.AV36PessoaFantasia = "" ;
   this.AV41Mes = 0 ;
   this.AV42Ano = 0 ;
   this.AV22DebitoDescricao = "" ;
   this.AV24DebitoCredito = "" ;
   this.AV23DebitoTipo = "" ;
   this.AV25DebitoValor = 0 ;
   this.AV52TipoLancamentoId = 0 ;
   this.AV53TipoLancamentoDesc = "" ;
   this.AV48CopiarDebitoAnoTodo = "" ;
   this.AV26DebitoUsuarioAlt = "" ;
   this.AV27DebitoDataHoraAlt = gx.date.nullDate() ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.AV51TipoLancamentoEmp = "" ;
   this.AV56Qtde = 0 ;
   this.AV33PessoaIdParm = 0 ;
   this.AV34DebitoReferenciaParm = gx.date.nullDate() ;
   this.AV35DebitoSequenciaParm = 0 ;
   this.AV29Modo = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3058DebitoSequencia = 0 ;
   this.A3057DebitoReferencia = gx.date.nullDate() ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3059DebitoDescricao = "" ;
   this.A3060DebitoTipo = "" ;
   this.A3061DebitoCredito = "" ;
   this.A3062DebitoValor = 0 ;
   this.A3063DebitoUsuarioAlt = "" ;
   this.A3064DebitoDataHoraAlt = gx.date.nullDate() ;
   this.A11070DebitoTipoLancamentoId = 0 ;
   this.A11069DebitoTipoLancamentoEmpresaId = "" ;
   this.Events = {"e11kc2_client": ["'FECHAR'", true] ,"e13kc2_client": ["ENTER", true] ,"e15kc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV48CopiarDebitoAnoTodo',fld:'vCOPIARDEBITOANOTODO'},{av:'AV29Modo',fld:'vMODO'},{av:'AV41Mes',fld:'vMES'},{av:'AV42Ano',fld:'vANO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV22DebitoDescricao',fld:'vDEBITODESCRICAO'},{av:'AV21DebitoSequencia',fld:'vDEBITOSEQUENCIA'},{av:'AV23DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV24DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV25DebitoValor',fld:'vDEBITOVALOR'},{av:'AV51TipoLancamentoEmp',fld:'vTIPOLANCAMENTOEMP'},{av:'AV52TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV20DebitoReferencia',fld:'vDEBITOREFERENCIA'},{av:'AV38tpErro',fld:'vTPERRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV44UltimaMensalidade',fld:'vULTIMAMENSALIDADE'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A963TipoLancamentoDescricao',fld:'TIPOLANCAMENTODESCRICAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV36PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV53TipoLancamentoDesc',fld:'vTIPOLANCAMENTODESC'},{av:'AV26DebitoUsuarioAlt',fld:'vDEBITOUSUARIOALT'},{av:'AV27DebitoDataHoraAlt',fld:'vDEBITODATAHORAALT'}],[{av:'AV38tpErro',fld:'vTPERRO'},{av:'AV49MesAux',fld:'vMESAUX'},{av:'AV43Referencia',fld:'vREFERENCIA'},{av:'AV50DebitoReferenciaAux',fld:'vDEBITOREFERENCIAAUX'},{av:'AV20DebitoReferencia',fld:'vDEBITOREFERENCIA'},{av:'AV37Retorno',fld:'vRETORNO'},{av:'AV29Modo',fld:'vMODO'},{av:'AV52TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV51TipoLancamentoEmp',fld:'vTIPOLANCAMENTOEMP'},{av:'AV25DebitoValor',fld:'vDEBITOVALOR'},{av:'AV24DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV23DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV21DebitoSequencia',fld:'vDEBITOSEQUENCIA'},{av:'AV22DebitoDescricao',fld:'vDEBITODESCRICAO'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV63GXLvl250',fld:'vGXLVL250'},{av:'AV47MesUltMens',fld:'vMESULTMENS'},{av:'AV46AnoUltMens',fld:'vANOULTMENS'},{av:'AV64GXLvl316',fld:'vGXLVL316'},{av:'AV53TipoLancamentoDesc',fld:'vTIPOLANCAMENTODESC'},{av:'AV36PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV41Mes',fld:'vMES'},{av:'AV42Ano',fld:'vANO'},{av:'AV26DebitoUsuarioAlt',fld:'vDEBITOUSUARIOALT'},{av:'AV27DebitoDataHoraAlt',fld:'vDEBITODATAHORAALT'}]];
   this.setPrompt("PROMPT_PESSOAID", [25]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID", [58]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV33PessoaIdParm", "vPESSOAIDPARM", 0, "int");
   this.setVCMap("AV34DebitoReferenciaParm", "vDEBITOREFERENCIAPARM", 0, "date");
   this.setVCMap("AV35DebitoSequenciaParm", "vDEBITOSEQUENCIAPARM", 0, "int");
   this.setVCMap("AV29Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrodebito());
