/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:30:48.8
*/
gx.evt.autoSkip = false;
gx.define('hregistraraquisicaobem', false, function () {
   this.ServerClass =  "hregistraraquisicaobem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'FECHARNOTA'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolicitacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLICITACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cpbemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cpbemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
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
   this.e11er2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15er2_client=function()
   {
      this.executeServerEvent("'AVANCAR'", false, null, false, false);
   };
   this.e16er2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", true, null, false, false);
   };
   this.e17er2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e18er2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e12er2_client=function()
   {
      this.executeServerEvent("'FECHARNOTA'", false, null, false, false);
   };
   this.e19er2_client=function()
   {
      this.executeServerEvent("CTLTIPOBEMID.ISVALID", true, null, false, true);
   };
   this.e21er2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,19,21,24,26,28,31,33,34,35,37,39,42,44,47,49,51,53,55,58,60,62,65,67,70,72,74,76,78,80,82,85,87,89,90,93,98,101,103,104,105,108,110,111,112,113,114,115,116,117,118,121,123,126,128,129,130,131,132,133,134,136,138,143,145,147,149,151,153,156,158,160,162,164,166,171,173,174,177,179,180,183,185,186,189,191,192,198,200,205,206,207,209,211,212,213,214];
   this.GXLastCtrlId =214;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDTAQUISICAO",gxz:"ZV177GXV1",gxold:"OV177GXV1",gxvar:"GXV1",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV177GXV1=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CTLBEMDTAQUISICAO",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CTLBEMDTAQUISICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV67BemCodigo",gxold:"OV67BemCodigo",gxvar:"AV67BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV67BemCodigo,0)},c2v:function(){gx.O.AV67BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL15", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV70BemSubgrupo",gxold:"OV70BemSubgrupo",gxvar:"AV70BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV70BemSubgrupo,0)},c2v:function(){gx.O.AV70BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TXTTITAPL11", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOABEMID",gxz:"ZV178GXV2",gxold:"OV178GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV178GXV2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLPESSOABEMID",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLPESSOABEMID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"PROMPTFORNECEDOR",grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOABEMNOME",gxz:"ZV179GXV3",gxold:"OV179GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV3=Value},v2z:function(Value){gx.O.ZV179GXV3=Value},v2c:function(){gx.fn.setControlValue("CTLPESSOABEMNOME",gx.O.GXV3,0)},c2v:function(){gx.O.GXV3=this.val()},val:function(){return gx.fn.getControlValue("CTLPESSOABEMNOME")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TXTTITAPL13", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMNOTAFISCAL",gxz:"ZV180GXV4",gxold:"OV180GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV4=Value},v2z:function(Value){gx.O.ZV180GXV4=Value},v2c:function(){gx.fn.setControlValue("CTLBEMNOTAFISCAL",gx.O.GXV4,0)},c2v:function(){gx.O.GXV4=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMNOTAFISCAL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TXTTITAPL9", format:0,grid:0};
   GXValidFnc[44]={fld:"TAB1",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPROCESSO",gxz:"ZV154ContaPagRecNoProcesso",gxold:"OV154ContaPagRecNoProcesso",gxvar:"AV154ContaPagRecNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV154ContaPagRecNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV154ContaPagRecNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOPROCESSO",gx.O.AV154ContaPagRecNoProcesso,0)},c2v:function(){gx.O.AV154ContaPagRecNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOANO",gxz:"ZV142ProcessoAno",gxold:"OV142ProcessoAno",gxvar:"AV142ProcessoAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142ProcessoAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV142ProcessoAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOANO",gx.O.AV142ProcessoAno,0)},c2v:function(){gx.O.AV142ProcessoAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOANO",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TXTTITAPL14", format:0,grid:0};
   GXValidFnc[55]={fld:"TABLE8",grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV140ConvenioId",gxold:"OV140ConvenioId",gxvar:"AV140ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV140ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV140ConvenioId,0)},c2v:function(){gx.O.AV140ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"PROMPTCONVENIO",grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV144ConvenioDescricao",gxold:"OV144ConvenioDescricao",gxvar:"AV144ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV144ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV144ConvenioDescricao,0)},c2v:function(){gx.O.AV144ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TXTTITAPL10", format:0,grid:0};
   GXValidFnc[67]={fld:"TAB2",grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolicitacaoid,isvalid:null,rgrid:[],fld:"vTIPOLICITACAOID",gxz:"ZV139TipoLicitacaoId",gxold:"OV139TipoLicitacaoId",gxvar:"AV139TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV139TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV139TipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTIPOLICITACAOID",gx.O.AV139TipoLicitacaoId)},c2v:function(){gx.O.AV139TipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECANOLICITACAO",gxz:"ZV153ContaPagRecAnoLicitacao",gxold:"OV153ContaPagRecAnoLicitacao",gxvar:"AV153ContaPagRecAnoLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV153ContaPagRecAnoLicitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV153ContaPagRecAnoLicitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECANOLICITACAO",gx.O.AV153ContaPagRecAnoLicitacao,0)},c2v:function(){gx.O.AV153ContaPagRecAnoLicitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECANOLICITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOLICITACAO",gxz:"ZV141ContaPagRecNoLicitacao",gxold:"OV141ContaPagRecNoLicitacao",gxvar:"AV141ContaPagRecNoLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV141ContaPagRecNoLicitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV141ContaPagRecNoLicitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOLICITACAO",gx.O.AV141ContaPagRecNoLicitacao,0)},c2v:function(){gx.O.AV141ContaPagRecNoLicitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOLICITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[82]={fld:"TABLE6",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cpbemcodigo,isvalid:null,rgrid:[],fld:"vCPBEMCODIGO",gxz:"ZV131CpBemCodigo",gxold:"OV131CpBemCodigo",gxvar:"AV131CpBemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131CpBemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV131CpBemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPBEMCODIGO",gx.O.AV131CpBemCodigo,0)},c2v:function(){gx.O.AV131CpBemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cpbemsubgrupo,isvalid:null,rgrid:[],fld:"vCPBEMSUBGRUPO",gxz:"ZV132CpBemSubGrupo",gxold:"OV132CpBemSubGrupo",gxvar:"AV132CpBemSubGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132CpBemSubGrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV132CpBemSubGrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPBEMSUBGRUPO",gx.O.AV132CpBemSubGrupo,0)},c2v:function(){gx.O.AV132CpBemSubGrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"PROMPTBEM",grid:0};
   GXValidFnc[93]={fld:"TABLE4",grid:0};
   GXValidFnc[98]={fld:"TBLDADOSBEM",grid:0};
   GXValidFnc[101]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMCODIGO",gxz:"ZV181GXV5",gxold:"OV181GXV5",gxvar:"GXV5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV181GXV5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLBEMCODIGO",gx.O.GXV5,0)},c2v:function(){gx.O.GXV5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMSUBGRUPO",gxz:"ZV182GXV6",gxold:"OV182GXV6",gxvar:"GXV6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV182GXV6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLBEMSUBGRUPO",gx.O.GXV6,0)},c2v:function(){gx.O.GXV6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDESCRICAOCOMPLETA",gxz:"ZV183GXV7",gxold:"OV183GXV7",gxvar:"GXV7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV7=Value},v2z:function(Value){gx.O.ZV183GXV7=Value},v2c:function(){gx.fn.setControlValue("CTLBEMDESCRICAOCOMPLETA",gx.O.GXV7,0)},c2v:function(){gx.O.GXV7=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMDESCRICAOCOMPLETA")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER2",gxz:"ZV147QtdeCaracter2",gxold:"OV147QtdeCaracter2",gxvar:"AV147QtdeCaracter2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147QtdeCaracter2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV147QtdeCaracter2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER2",gx.O.AV147QtdeCaracter2,0)},c2v:function(){gx.O.AV147QtdeCaracter2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER2",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV143ConvenioEmpresaId",gxold:"OV143ConvenioEmpresaId",gxvar:"AV143ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV143ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV143ConvenioEmpresaId,0)},c2v:function(){gx.O.AV143ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV124QtdeCaracter",gxold:"OV124QtdeCaracter",gxvar:"AV124QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV124QtdeCaracter,0)},c2v:function(){gx.O.AV124QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTERTPBEM",gxz:"ZV126QtCaracterTpBem",gxold:"OV126QtCaracterTpBem",gxvar:"AV126QtCaracterTpBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126QtCaracterTpBem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV126QtCaracterTpBem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTERTPBEM",gx.O.AV126QtCaracterTpBem,0)},c2v:function(){gx.O.AV126QtCaracterTpBem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTERTPBEM",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV138AcessoSistemaSequencia",gxold:"OV138AcessoSistemaSequencia",gxvar:"AV138AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV138AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV138AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV138AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV138AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOABEMEMPID",gxz:"ZV184GXV8",gxold:"OV184GXV8",gxvar:"GXV8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV8=Value},v2z:function(Value){gx.O.ZV184GXV8=Value},v2c:function(){gx.fn.setControlValue("CTLPESSOABEMEMPID",gx.O.GXV8,0)},c2v:function(){gx.O.GXV8=this.val()},val:function(){return gx.fn.getControlValue("CTLPESSOABEMEMPID")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLORIGEMRECURSOEMPRESAID",gxz:"ZV185GXV9",gxold:"OV185GXV9",gxvar:"GXV9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV9=Value},v2z:function(Value){gx.O.ZV185GXV9=Value},v2c:function(){gx.fn.setControlValue("CTLORIGEMRECURSOEMPRESAID",gx.O.GXV9,0)},c2v:function(){gx.O.GXV9=this.val()},val:function(){return gx.fn.getControlValue("CTLORIGEMRECURSOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDESCRICAORESUMIDA",gxz:"ZV186GXV10",gxold:"OV186GXV10",gxvar:"GXV10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV10=Value},v2z:function(Value){gx.O.ZV186GXV10=Value},v2c:function(){gx.fn.setControlValue("CTLBEMDESCRICAORESUMIDA",gx.O.GXV10,0)},c2v:function(){gx.O.GXV10=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e19er2_client',rgrid:[],fld:"CTLTIPOBEMID",gxz:"ZV187GXV11",gxold:"OV187GXV11",gxvar:"GXV11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV187GXV11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLTIPOBEMID",gx.O.GXV11,0)},c2v:function(){gx.O.GXV11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLTIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOBEMDESCRICAO",gxz:"ZV188GXV12",gxold:"OV188GXV12",gxvar:"GXV12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV12=Value},v2z:function(Value){gx.O.ZV188GXV12=Value},v2c:function(){gx.fn.setControlValue("CTLTIPOBEMDESCRICAO",gx.O.GXV12,0)},c2v:function(){gx.O.GXV12=this.val()},val:function(){return gx.fn.getControlValue("CTLTIPOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDEPARTAMENTOEMPRESAID",gxz:"ZV189GXV13",gxold:"OV189GXV13",gxvar:"GXV13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV13=Value},v2z:function(Value){gx.O.ZV189GXV13=Value},v2c:function(){gx.fn.setControlValue("CTLBEMDEPARTAMENTOEMPRESAID",gx.O.GXV13,0)},c2v:function(){gx.O.GXV13=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMDEPARTAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMEMPRESAID",gxz:"ZV190GXV14",gxold:"OV190GXV14",gxvar:"GXV14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV14=Value},v2z:function(Value){gx.O.ZV190GXV14=Value},v2c:function(){gx.fn.setControlValue("CTLBEMEMPRESAID",gx.O.GXV14,0)},c2v:function(){gx.O.GXV14=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONDICAOBEMEMPRESAID",gxz:"ZV191GXV15",gxold:"OV191GXV15",gxvar:"GXV15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV15=Value},v2z:function(Value){gx.O.ZV191GXV15=Value},v2c:function(){gx.fn.setControlValue("CTLCONDICAOBEMEMPRESAID",gx.O.GXV15,0)},c2v:function(){gx.O.GXV15=this.val()},val:function(){return gx.fn.getControlValue("CTLCONDICAOBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOBEMEMPRESAID",gxz:"ZV192GXV16",gxold:"OV192GXV16",gxvar:"GXV16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV16=Value},v2z:function(Value){gx.O.ZV192GXV16=Value},v2c:function(){gx.fn.setControlValue("CTLTIPOBEMEMPRESAID",gx.O.GXV16,0)},c2v:function(){gx.O.GXV16=this.val()},val:function(){return gx.fn.getControlValue("CTLTIPOBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOSTRATELA",gxz:"ZV72MostraTela",gxold:"OV72MostraTela",gxvar:"AV72MostraTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72MostraTela=Value},v2z:function(Value){gx.O.ZV72MostraTela=Value},v2c:function(){gx.fn.setControlValue("vMOSTRATELA",gx.O.AV72MostraTela,0)},c2v:function(){gx.O.AV72MostraTela=this.val()},val:function(){return gx.fn.getControlValue("vMOSTRATELA")},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVIDAUTIL",gxz:"ZV193GXV17",gxold:"OV193GXV17",gxvar:"GXV17",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV17=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV193GXV17=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CTLBEMVIDAUTIL",gx.O.GXV17,1,',')},c2v:function(){gx.O.GXV17=this.val()},val:function(){return gx.fn.getDecimalValue("CTLBEMVIDAUTIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVOLTAGEM",gxz:"ZV194GXV18",gxold:"OV194GXV18",gxvar:"GXV18",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV18=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV194GXV18=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLBEMVOLTAGEM",gx.O.GXV18,0)},c2v:function(){gx.O.GXV18=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLBEMVOLTAGEM",'.')},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVLRAQUISICAO",gxz:"ZV195GXV19",gxold:"OV195GXV19",gxvar:"GXV19",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV19=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV195GXV19=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CTLBEMVLRAQUISICAO",gx.O.GXV19,2,',')},c2v:function(){gx.O.GXV19=this.val()},val:function(){return gx.fn.getDecimalValue("CTLBEMVLRAQUISICAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDTGARANTIA",gxz:"ZV196GXV20",gxold:"OV196GXV20",gxvar:"GXV20",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV20=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV196GXV20=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CTLBEMDTGARANTIA",gx.O.GXV20,0)},c2v:function(){gx.O.GXV20=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CTLBEMDTGARANTIA")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMNUMSERIE",gxz:"ZV197GXV21",gxold:"OV197GXV21",gxvar:"GXV21",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV21=Value},v2z:function(Value){gx.O.ZV197GXV21=Value},v2c:function(){gx.fn.setControlValue("CTLBEMNUMSERIE",gx.O.GXV21,0)},c2v:function(){gx.O.GXV21=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMNUMSERIE")},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVLRICMS",gxz:"ZV198GXV22",gxold:"OV198GXV22",gxvar:"GXV22",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV22=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV198GXV22=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CTLBEMVLRICMS",gx.O.GXV22,2,',')},c2v:function(){gx.O.GXV22=this.val()},val:function(){return gx.fn.getDecimalValue("CTLBEMVLRICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[166]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDTINICIOAPURACAO",gxz:"ZV199GXV23",gxold:"OV199GXV23",gxvar:"GXV23",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV23=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV199GXV23=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CTLBEMDTINICIOAPURACAO",gx.O.GXV23,0)},c2v:function(){gx.O.GXV23=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CTLBEMDTINICIOAPURACAO")},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONDICAOBEMID",gxz:"ZV200GXV24",gxold:"OV200GXV24",gxvar:"GXV24",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV24=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV200GXV24=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLCONDICAOBEMID",gx.O.GXV24,0)},c2v:function(){gx.O.GXV24=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLCONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[174]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONDICAOBEMDESCRICAO",gxz:"ZV201GXV25",gxold:"OV201GXV25",gxvar:"GXV25",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV25=Value},v2z:function(Value){gx.O.ZV201GXV25=Value},v2c:function(){gx.fn.setControlValue("CTLCONDICAOBEMDESCRICAO",gx.O.GXV25,0)},c2v:function(){gx.O.GXV25=this.val()},val:function(){return gx.fn.getControlValue("CTLCONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLORIGEMRECURSOID",gxz:"ZV202GXV26",gxold:"OV202GXV26",gxvar:"GXV26",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV26=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV202GXV26=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLORIGEMRECURSOID",gx.O.GXV26,0)},c2v:function(){gx.O.GXV26=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLORIGEMRECURSODESCRICAO",gxz:"ZV203GXV27",gxold:"OV203GXV27",gxvar:"GXV27",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV27=Value},v2z:function(Value){gx.O.ZV203GXV27=Value},v2c:function(){gx.fn.setControlValue("CTLORIGEMRECURSODESCRICAO",gx.O.GXV27,0)},c2v:function(){gx.O.GXV27=this.val()},val:function(){return gx.fn.getControlValue("CTLORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDEPARTAMENTOCODIGO",gxz:"ZV204GXV28",gxold:"OV204GXV28",gxvar:"GXV28",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV28=Value},v2z:function(Value){gx.O.ZV204GXV28=Value},v2c:function(){gx.fn.setControlValue("CTLBEMDEPARTAMENTOCODIGO",gx.O.GXV28,0)},c2v:function(){gx.O.GXV28=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[186]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDEPARTAMENTONOME",gxz:"ZV205GXV29",gxold:"OV205GXV29",gxvar:"GXV29",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV29=Value},v2z:function(Value){gx.O.ZV205GXV29=Value},v2c:function(){gx.fn.setControlValue("CTLBEMDEPARTAMENTONOME",gx.O.GXV29,0)},c2v:function(){gx.O.GXV29=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[189]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[191]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMOBSERVACAO",gxz:"ZV206GXV30",gxold:"OV206GXV30",gxvar:"GXV30",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV30=Value},v2z:function(Value){gx.O.ZV206GXV30=Value},v2c:function(){gx.fn.setControlValue("CTLBEMOBSERVACAO",gx.O.GXV30,0)},c2v:function(){gx.O.GXV30=this.val()},val:function(){return gx.fn.getControlValue("CTLBEMOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[192]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARMAZENAVALOR",gxz:"ZV162ArmazenaValor",gxold:"OV162ArmazenaValor",gxvar:"AV162ArmazenaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV162ArmazenaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV162ArmazenaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vARMAZENAVALOR",gx.O.AV162ArmazenaValor,2,',')},c2v:function(){gx.O.AV162ArmazenaValor=this.val()},val:function(){return gx.fn.getDecimalValue("vARMAZENAVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[198]={fld:"JS", format:2,grid:0};
   GXValidFnc[200]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER3",gxz:"ZV174QtdeCaracter3",gxold:"OV174QtdeCaracter3",gxvar:"AV174QtdeCaracter3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV174QtdeCaracter3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV174QtdeCaracter3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER3",gx.O.AV174QtdeCaracter3,0)},c2v:function(){gx.O.AV174QtdeCaracter3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER3",'.')},nac:gx.falseFn};
   GXValidFnc[205]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV125SnErro",gxold:"OV125SnErro",gxvar:"AV125SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125SnErro=Value},v2z:function(Value){gx.O.ZV125SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV125SnErro,0)},c2v:function(){gx.O.AV125SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[206]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAOAUX",gxz:"ZV111NaoAux",gxold:"OV111NaoAux",gxvar:"AV111NaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111NaoAux=Value},v2z:function(Value){gx.O.ZV111NaoAux=Value},v2c:function(){gx.fn.setControlValue("vNAOAUX",gx.O.AV111NaoAux,0)},c2v:function(){gx.O.AV111NaoAux=this.val()},val:function(){return gx.fn.getControlValue("vNAOAUX")},nac:gx.falseFn};
   GXValidFnc[207]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIMAUX",gxz:"ZV110SimAux",gxold:"OV110SimAux",gxvar:"AV110SimAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110SimAux=Value},v2z:function(Value){gx.O.ZV110SimAux=Value},v2c:function(){gx.fn.setControlValue("vSIMAUX",gx.O.AV110SimAux,0)},c2v:function(){gx.O.AV110SimAux=this.val()},val:function(){return gx.fn.getControlValue("vSIMAUX")},nac:gx.falseFn};
   GXValidFnc[209]={fld:"BTNHELP",grid:0};
   GXValidFnc[211]={fld:"PROMPT_GXV11",grid:0};
   GXValidFnc[212]={fld:"PROMPT_GXV24",grid:0};
   GXValidFnc[213]={fld:"PROMPT_GXV26",grid:0};
   GXValidFnc[214]={fld:"PROMPT_GXV28",grid:0};
   this.GXV1 = gx.date.nullDate() ;
   this.ZV177GXV1 = gx.date.nullDate() ;
   this.OV177GXV1 = gx.date.nullDate() ;
   this.AV67BemCodigo = 0 ;
   this.ZV67BemCodigo = 0 ;
   this.OV67BemCodigo = 0 ;
   this.AV70BemSubgrupo = 0 ;
   this.ZV70BemSubgrupo = 0 ;
   this.OV70BemSubgrupo = 0 ;
   this.GXV2 = 0 ;
   this.ZV178GXV2 = 0 ;
   this.OV178GXV2 = 0 ;
   this.GXV3 = "" ;
   this.ZV179GXV3 = "" ;
   this.OV179GXV3 = "" ;
   this.GXV4 = "" ;
   this.ZV180GXV4 = "" ;
   this.OV180GXV4 = "" ;
   this.AV154ContaPagRecNoProcesso = 0 ;
   this.ZV154ContaPagRecNoProcesso = 0 ;
   this.OV154ContaPagRecNoProcesso = 0 ;
   this.AV142ProcessoAno = 0 ;
   this.ZV142ProcessoAno = 0 ;
   this.OV142ProcessoAno = 0 ;
   this.AV140ConvenioId = 0 ;
   this.ZV140ConvenioId = 0 ;
   this.OV140ConvenioId = 0 ;
   this.AV144ConvenioDescricao = "" ;
   this.ZV144ConvenioDescricao = "" ;
   this.OV144ConvenioDescricao = "" ;
   this.AV139TipoLicitacaoId = 0 ;
   this.ZV139TipoLicitacaoId = 0 ;
   this.OV139TipoLicitacaoId = 0 ;
   this.AV153ContaPagRecAnoLicitacao = 0 ;
   this.ZV153ContaPagRecAnoLicitacao = 0 ;
   this.OV153ContaPagRecAnoLicitacao = 0 ;
   this.AV141ContaPagRecNoLicitacao = 0 ;
   this.ZV141ContaPagRecNoLicitacao = 0 ;
   this.OV141ContaPagRecNoLicitacao = 0 ;
   this.AV131CpBemCodigo = 0 ;
   this.ZV131CpBemCodigo = 0 ;
   this.OV131CpBemCodigo = 0 ;
   this.AV132CpBemSubGrupo = 0 ;
   this.ZV132CpBemSubGrupo = 0 ;
   this.OV132CpBemSubGrupo = 0 ;
   this.GXV5 = 0 ;
   this.ZV181GXV5 = 0 ;
   this.OV181GXV5 = 0 ;
   this.GXV6 = 0 ;
   this.ZV182GXV6 = 0 ;
   this.OV182GXV6 = 0 ;
   this.GXV7 = "" ;
   this.ZV183GXV7 = "" ;
   this.OV183GXV7 = "" ;
   this.AV147QtdeCaracter2 = 0 ;
   this.ZV147QtdeCaracter2 = 0 ;
   this.OV147QtdeCaracter2 = 0 ;
   this.AV143ConvenioEmpresaId = "" ;
   this.ZV143ConvenioEmpresaId = "" ;
   this.OV143ConvenioEmpresaId = "" ;
   this.AV124QtdeCaracter = 0 ;
   this.ZV124QtdeCaracter = 0 ;
   this.OV124QtdeCaracter = 0 ;
   this.AV126QtCaracterTpBem = 0 ;
   this.ZV126QtCaracterTpBem = 0 ;
   this.OV126QtCaracterTpBem = 0 ;
   this.AV138AcessoSistemaSequencia = 0 ;
   this.ZV138AcessoSistemaSequencia = 0 ;
   this.OV138AcessoSistemaSequencia = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.GXV8 = "" ;
   this.ZV184GXV8 = "" ;
   this.OV184GXV8 = "" ;
   this.GXV9 = "" ;
   this.ZV185GXV9 = "" ;
   this.OV185GXV9 = "" ;
   this.GXV10 = "" ;
   this.ZV186GXV10 = "" ;
   this.OV186GXV10 = "" ;
   this.GXV11 = 0 ;
   this.ZV187GXV11 = 0 ;
   this.OV187GXV11 = 0 ;
   this.GXV12 = "" ;
   this.ZV188GXV12 = "" ;
   this.OV188GXV12 = "" ;
   this.GXV13 = "" ;
   this.ZV189GXV13 = "" ;
   this.OV189GXV13 = "" ;
   this.GXV14 = "" ;
   this.ZV190GXV14 = "" ;
   this.OV190GXV14 = "" ;
   this.GXV15 = "" ;
   this.ZV191GXV15 = "" ;
   this.OV191GXV15 = "" ;
   this.GXV16 = "" ;
   this.ZV192GXV16 = "" ;
   this.OV192GXV16 = "" ;
   this.AV72MostraTela = "" ;
   this.ZV72MostraTela = "" ;
   this.OV72MostraTela = "" ;
   this.GXV17 = 0 ;
   this.ZV193GXV17 = 0 ;
   this.OV193GXV17 = 0 ;
   this.GXV18 = 0 ;
   this.ZV194GXV18 = 0 ;
   this.OV194GXV18 = 0 ;
   this.GXV19 = 0 ;
   this.ZV195GXV19 = 0 ;
   this.OV195GXV19 = 0 ;
   this.GXV20 = gx.date.nullDate() ;
   this.ZV196GXV20 = gx.date.nullDate() ;
   this.OV196GXV20 = gx.date.nullDate() ;
   this.GXV21 = "" ;
   this.ZV197GXV21 = "" ;
   this.OV197GXV21 = "" ;
   this.GXV22 = 0 ;
   this.ZV198GXV22 = 0 ;
   this.OV198GXV22 = 0 ;
   this.GXV23 = gx.date.nullDate() ;
   this.ZV199GXV23 = gx.date.nullDate() ;
   this.OV199GXV23 = gx.date.nullDate() ;
   this.GXV24 = 0 ;
   this.ZV200GXV24 = 0 ;
   this.OV200GXV24 = 0 ;
   this.GXV25 = "" ;
   this.ZV201GXV25 = "" ;
   this.OV201GXV25 = "" ;
   this.GXV26 = 0 ;
   this.ZV202GXV26 = 0 ;
   this.OV202GXV26 = 0 ;
   this.GXV27 = "" ;
   this.ZV203GXV27 = "" ;
   this.OV203GXV27 = "" ;
   this.GXV28 = "" ;
   this.ZV204GXV28 = "" ;
   this.OV204GXV28 = "" ;
   this.GXV29 = "" ;
   this.ZV205GXV29 = "" ;
   this.OV205GXV29 = "" ;
   this.GXV30 = "" ;
   this.ZV206GXV30 = "" ;
   this.OV206GXV30 = "" ;
   this.AV162ArmazenaValor = 0 ;
   this.ZV162ArmazenaValor = 0 ;
   this.OV162ArmazenaValor = 0 ;
   this.AV174QtdeCaracter3 = 0 ;
   this.ZV174QtdeCaracter3 = 0 ;
   this.OV174QtdeCaracter3 = 0 ;
   this.AV125SnErro = "" ;
   this.ZV125SnErro = "" ;
   this.OV125SnErro = "" ;
   this.AV111NaoAux = "" ;
   this.ZV111NaoAux = "" ;
   this.OV111NaoAux = "" ;
   this.AV110SimAux = "" ;
   this.ZV110SimAux = "" ;
   this.OV110SimAux = "" ;
   this.GXV1 = gx.date.nullDate() ;
   this.AV67BemCodigo = 0 ;
   this.AV70BemSubgrupo = 0 ;
   this.GXV2 = 0 ;
   this.GXV3 = "" ;
   this.GXV4 = "" ;
   this.AV154ContaPagRecNoProcesso = 0 ;
   this.AV142ProcessoAno = 0 ;
   this.AV140ConvenioId = 0 ;
   this.AV144ConvenioDescricao = "" ;
   this.AV139TipoLicitacaoId = 0 ;
   this.AV153ContaPagRecAnoLicitacao = 0 ;
   this.AV141ContaPagRecNoLicitacao = 0 ;
   this.AV131CpBemCodigo = 0 ;
   this.AV132CpBemSubGrupo = 0 ;
   this.GXV5 = 0 ;
   this.GXV6 = 0 ;
   this.GXV7 = "" ;
   this.AV147QtdeCaracter2 = 0 ;
   this.AV143ConvenioEmpresaId = "" ;
   this.AV124QtdeCaracter = 0 ;
   this.AV126QtCaracterTpBem = 0 ;
   this.AV138AcessoSistemaSequencia = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.GXV8 = "" ;
   this.GXV9 = "" ;
   this.GXV10 = "" ;
   this.GXV11 = 0 ;
   this.GXV12 = "" ;
   this.GXV13 = "" ;
   this.GXV14 = "" ;
   this.GXV15 = "" ;
   this.GXV16 = "" ;
   this.AV72MostraTela = "" ;
   this.GXV17 = 0 ;
   this.GXV18 = 0 ;
   this.GXV19 = 0 ;
   this.GXV20 = gx.date.nullDate() ;
   this.GXV21 = "" ;
   this.GXV22 = 0 ;
   this.GXV23 = gx.date.nullDate() ;
   this.GXV24 = 0 ;
   this.GXV25 = "" ;
   this.GXV26 = 0 ;
   this.GXV27 = "" ;
   this.GXV28 = "" ;
   this.GXV29 = "" ;
   this.GXV30 = "" ;
   this.AV162ArmazenaValor = 0 ;
   this.AV174QtdeCaracter3 = 0 ;
   this.AV125SnErro = "" ;
   this.AV111NaoAux = "" ;
   this.AV110SimAux = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2035TipoBemDescricao = "" ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2253BemDepartamentoCodigo = "" ;
   this.A2254BemDepartamentoNome = "" ;
   this.A2263BemDescricaoCompleta = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2322BemDtGarantia = gx.date.nullDate() ;
   this.A2328BemDtInicioApuracao = gx.date.nullDate() ;
   this.A2340BemNumSerie = "" ;
   this.A2319BemObservacao = "" ;
   this.A2329BemVidaUtil = 0 ;
   this.A2326BemVlrAquisicao = 0 ;
   this.A2327BemVlrIcms = 0 ;
   this.A2325BemVoltagem = 0 ;
   this.A2334CondicaoBemId = 0 ;
   this.A2335CondicaoBemDescricao = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2252BemDepartamentoEmpresaId = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2249DepartamentoNome = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.A2036TipoBemSnImobilizado = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2043TipoBemSnAproveitaCredito = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2086ConvenioSnLicitacao = "" ;
   this.A2183ConvenioAtivo = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1698ContaPagRecDtAceite = gx.date.nullDate() ;
   this.Events = {"e11er2_client": ["'FECHAR'", true] ,"e15er2_client": ["'AVANCAR'", true] ,"e16er2_client": ["'CONFIRMAR'", true] ,"e17er2_client": ["ENTER", true] ,"e18er2_client": ["'CANCELAR'", true] ,"e12er2_client": ["'FECHARNOTA'", true] ,"e19er2_client": ["CTLTIPOBEMID.ISVALID", true] ,"e21er2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV149SdtRegAquisicaoBemTela',fld:'vSDTREGAQUISICAOBEMTELA'},{av:'AV152SnDados',fld:'vSNDADOS'},{av:'AV210GXV31',fld:'vGXV31'},{av:'AV150SdtRegAquisicaoBemTelaItem',fld:'vSDTREGAQUISICAOBEMTELAITEM'},{ctrl:'BTNFECHARNOTA',prop:'Visible'},{av:'AV72MostraTela',fld:'vMOSTRATELA'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBEMCODIGO","Enabled")',ctrl:'vBEMCODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMSUBGRUPO","Enabled")',ctrl:'vBEMSUBGRUPO',prop:'Enabled'},{ctrl:'CTLBEMDTAQUISICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("PROMPTFORNECEDOR","Visible")',ctrl:'PROMPTFORNECEDOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPTCONVENIO","Visible")',ctrl:'PROMPTCONVENIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPTBEM","Visible")',ctrl:'PROMPTBEM',prop:'Visible'},{ctrl:'CTLPESSOABEMID',prop:'Enabled'},{ctrl:'CTLBEMNOTAFISCAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCPBEMCODIGO","Enabled")',ctrl:'vCPBEMCODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCPBEMSUBGRUPO","Enabled")',ctrl:'vCPBEMSUBGRUPO',prop:'Enabled'},{ctrl:'vTIPOLICITACAOID'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECNOLICITACAO","Enabled")',ctrl:'vCONTAPAGRECNOLICITACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECANOLICITACAO","Enabled")',ctrl:'vCONTAPAGRECANOLICITACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPROCESSOANO","Enabled")',ctrl:'vPROCESSOANO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECNOPROCESSO","Enabled")',ctrl:'vCONTAPAGRECNOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONVENIOID","Enabled")',ctrl:'vCONVENIOID',prop:'Enabled'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLDADOSBEM","Visible")',ctrl:'TBLDADOSBEM',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'AV137SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'gx.fn.getCtrlProperty("TXTTITAPL9","Visible")',ctrl:'TXTTITAPL9',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTITAPL10","Visible")',ctrl:'TXTTITAPL10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTITAPL14","Visible")',ctrl:'TXTTITAPL14',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONVENIOID","Visible")',ctrl:'vCONVENIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONVENIODESCRICAO","Visible")',ctrl:'vCONVENIODESCRICAO',prop:'Visible'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV211GXV32',fld:'vGXV32'},{av:'AV212GXLvl385',fld:'vGXLVL385'},{av:'AV159SnCpr',fld:'vSNCPR'},{av:'AV160TransAquisicao',fld:'vTRANSAQUISICAO'},{av:'AV125SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV138AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'AVANCAR'"] = [[{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV103EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV174QtdeCaracter3',fld:'vQTDECARACTER3'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV143ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2086ConvenioSnLicitacao',fld:'CONVENIOSNLICITACAO'},{av:'A2183ConvenioAtivo',fld:'CONVENIOATIVO'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV155ConvenioSnLicitacao',fld:'vCONVENIOSNLICITACAO'},{av:'A2471TipoLicitacaoEmpresaId',fld:'TIPOLICITACAOEMPRESAID'},{av:'AV157TipoLicitacaoEmpresaId',fld:'vTIPOLICITACAOEMPRESAID'},{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'AV156TipoLicitacaoSnExigeNumero',fld:'vTIPOLICITACAOSNEXIGENUMERO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2335CondicaoBemDescricao',fld:'CONDICAOBEMDESCRICAO'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV100EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV104EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'A2263BemDescricaoCompleta',fld:'BEMDESCRICAOCOMPLETA'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'A2322BemDtGarantia',fld:'BEMDTGARANTIA'},{av:'A2328BemDtInicioApuracao',fld:'BEMDTINICIOAPURACAO'},{av:'A2340BemNumSerie',fld:'BEMNUMSERIE'},{av:'A2319BemObservacao',fld:'BEMOBSERVACAO'},{av:'A2329BemVidaUtil',fld:'BEMVIDAUTIL'},{av:'A2326BemVlrAquisicao',fld:'BEMVLRAQUISICAO'},{av:'A2327BemVlrIcms',fld:'BEMVLRICMS'},{av:'A2325BemVoltagem',fld:'BEMVOLTAGEM'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'}],[{av:'AV137SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV125SnErro',fld:'vSNERRO'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV214GXLvl526',fld:'vGXLVL526'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV215GXLvl576',fld:'vGXLVL576'},{av:'AV155ConvenioSnLicitacao',fld:'vCONVENIOSNLICITACAO'},{av:'AV156TipoLicitacaoSnExigeNumero',fld:'vTIPOLICITACAOSNEXIGENUMERO'},{av:'AV217GXLvl640',fld:'vGXLVL640'},{av:'AV133CpBemDescricao',fld:'vCPBEMDESCRICAO'},{av:'AV106LerParamAux',fld:'vLERPARAMAUX'},{av:'AV124QtdeCaracter',fld:'vQTDECARACTER'},{av:'AV126QtCaracterTpBem',fld:'vQTCARACTERTPBEM'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV100EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2040TipoBemVidaMinima',fld:'TIPOBEMVIDAMINIMA'},{av:'A2041TipoBemVidaMaxima',fld:'TIPOBEMVIDAMAXIMA'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'A2043TipoBemSnAproveitaCredito',fld:'TIPOBEMSNAPROVEITACREDITO'},{av:'AV121TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV101TipoBemVidaMinima',fld:'vTIPOBEMVIDAMINIMA'},{av:'AV102TipoBemVidaMaxima',fld:'vTIPOBEMVIDAMAXIMA'},{av:'AV122TipoBemSnAproveitaCredito',fld:'vTIPOBEMSNAPROVEITACREDITO'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV99EmpresaPadraoCondicao',fld:'vEMPRESAPADRAOCONDICAO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2335CondicaoBemDescricao',fld:'CONDICAOBEMDESCRICAO'},{av:'AV124QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV105EmpresaPadraoOrigemRec',fld:'vEMPRESAPADRAOORIGEMREC'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'AV120TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV104EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV103EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV127EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV128EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV130IntPatCbl',fld:'vINTPATCBL'},{av:'AV129AnoAbertoParam',fld:'vANOABERTOPARAM'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV144ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'}],[{av:'AV125SnErro',fld:'vSNERRO'},{av:'AV101TipoBemVidaMinima',fld:'vTIPOBEMVIDAMINIMA'},{av:'AV102TipoBemVidaMaxima',fld:'vTIPOBEMVIDAMAXIMA'},{av:'AV120TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV121TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV122TipoBemSnAproveitaCredito',fld:'vTIPOBEMSNAPROVEITACREDITO'},{av:'AV219GXLvl708',fld:'vGXLVL708'},{av:'AV126QtCaracterTpBem',fld:'vQTCARACTERTPBEM'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV220GXLvl811',fld:'vGXLVL811'},{av:'AV221GXLvl826',fld:'vGXLVL826'},{av:'AV222GXLvl851',fld:'vGXLVL851'},{av:'AV137SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV149SdtRegAquisicaoBemTela',fld:'vSDTREGAQUISICAOBEMTELA'},{av:'AV150SdtRegAquisicaoBemTelaItem',fld:'vSDTREGAQUISICAOBEMTELAITEM'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV144ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV103EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV174QtdeCaracter3',fld:'vQTDECARACTER3'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV143ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2086ConvenioSnLicitacao',fld:'CONVENIOSNLICITACAO'},{av:'A2183ConvenioAtivo',fld:'CONVENIOATIVO'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV155ConvenioSnLicitacao',fld:'vCONVENIOSNLICITACAO'},{av:'A2471TipoLicitacaoEmpresaId',fld:'TIPOLICITACAOEMPRESAID'},{av:'AV157TipoLicitacaoEmpresaId',fld:'vTIPOLICITACAOEMPRESAID'},{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'AV156TipoLicitacaoSnExigeNumero',fld:'vTIPOLICITACAOSNEXIGENUMERO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV100EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2040TipoBemVidaMinima',fld:'TIPOBEMVIDAMINIMA'},{av:'A2041TipoBemVidaMaxima',fld:'TIPOBEMVIDAMAXIMA'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'A2043TipoBemSnAproveitaCredito',fld:'TIPOBEMSNAPROVEITACREDITO'},{av:'AV121TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV101TipoBemVidaMinima',fld:'vTIPOBEMVIDAMINIMA'},{av:'AV102TipoBemVidaMaxima',fld:'vTIPOBEMVIDAMAXIMA'},{av:'AV122TipoBemSnAproveitaCredito',fld:'vTIPOBEMSNAPROVEITACREDITO'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV99EmpresaPadraoCondicao',fld:'vEMPRESAPADRAOCONDICAO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2335CondicaoBemDescricao',fld:'CONDICAOBEMDESCRICAO'},{av:'AV124QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV105EmpresaPadraoOrigemRec',fld:'vEMPRESAPADRAOORIGEMREC'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'AV120TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV104EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'A2263BemDescricaoCompleta',fld:'BEMDESCRICAOCOMPLETA'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'A2322BemDtGarantia',fld:'BEMDTGARANTIA'},{av:'A2328BemDtInicioApuracao',fld:'BEMDTINICIOAPURACAO'},{av:'A2340BemNumSerie',fld:'BEMNUMSERIE'},{av:'A2319BemObservacao',fld:'BEMOBSERVACAO'},{av:'A2329BemVidaUtil',fld:'BEMVIDAUTIL'},{av:'A2326BemVlrAquisicao',fld:'BEMVLRAQUISICAO'},{av:'A2327BemVlrIcms',fld:'BEMVLRICMS'},{av:'A2325BemVoltagem',fld:'BEMVOLTAGEM'},{av:'AV127EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV128EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV130IntPatCbl',fld:'vINTPATCBL'},{av:'AV129AnoAbertoParam',fld:'vANOABERTOPARAM'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV144ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV137SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV125SnErro',fld:'vSNERRO'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV214GXLvl526',fld:'vGXLVL526'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV215GXLvl576',fld:'vGXLVL576'},{av:'AV155ConvenioSnLicitacao',fld:'vCONVENIOSNLICITACAO'},{av:'AV156TipoLicitacaoSnExigeNumero',fld:'vTIPOLICITACAOSNEXIGENUMERO'},{av:'AV217GXLvl640',fld:'vGXLVL640'},{av:'AV133CpBemDescricao',fld:'vCPBEMDESCRICAO'},{av:'AV101TipoBemVidaMinima',fld:'vTIPOBEMVIDAMINIMA'},{av:'AV102TipoBemVidaMaxima',fld:'vTIPOBEMVIDAMAXIMA'},{av:'AV120TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV121TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV122TipoBemSnAproveitaCredito',fld:'vTIPOBEMSNAPROVEITACREDITO'},{av:'AV219GXLvl708',fld:'vGXLVL708'},{av:'AV126QtCaracterTpBem',fld:'vQTCARACTERTPBEM'},{av:'AV220GXLvl811',fld:'vGXLVL811'},{av:'AV221GXLvl826',fld:'vGXLVL826'},{av:'AV222GXLvl851',fld:'vGXLVL851'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV149SdtRegAquisicaoBemTela',fld:'vSDTREGAQUISICAOBEMTELA'},{av:'AV150SdtRegAquisicaoBemTelaItem',fld:'vSDTREGAQUISICAOBEMTELAITEM'},{av:'AV106LerParamAux',fld:'vLERPARAMAUX'},{av:'AV124QtdeCaracter',fld:'vQTDECARACTER'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV144ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV100EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'AV99EmpresaPadraoCondicao',fld:'vEMPRESAPADRAOCONDICAO'},{av:'AV104EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'AV105EmpresaPadraoOrigemRec',fld:'vEMPRESAPADRAOORIGEMREC'},{av:'AV103EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV144ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'}],[{av:'AV164BemNotaFiscalAux',fld:'vBEMNOTAFISCALAUX'},{av:'AV165ArmazenaValorAux',fld:'vARMAZENAVALORAUX'},{av:'AV166ContaPagRecNoProcessoAux',fld:'vCONTAPAGRECNOPROCESSOAUX'},{av:'AV167ConvenioIdAux',fld:'vCONVENIOIDAUX'},{av:'AV173ContaPagRecAnoProcessoAux',fld:'vCONTAPAGRECANOPROCESSOAUX'},{av:'AV171ContaPagRecDtAceite',fld:'vCONTAPAGRECDTACEITE'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV149SdtRegAquisicaoBemTela',fld:'vSDTREGAQUISICAOBEMTELA'},{av:'AV139TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV141ContaPagRecNoLicitacao',fld:'vCONTAPAGRECNOLICITACAO'},{av:'AV153ContaPagRecAnoLicitacao',fld:'vCONTAPAGRECANOLICITACAO'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV144ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV67BemCodigo',fld:'vBEMCODIGO'},{av:'AV70BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV131CpBemCodigo',fld:'vCPBEMCODIGO'},{av:'AV132CpBemSubGrupo',fld:'vCPBEMSUBGRUPO'}]];
   this.EvtParms["'FECHARNOTA'"] = [[{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'AV162ArmazenaValor',fld:'vARMAZENAVALOR'},{av:'AV154ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV140ConvenioId',fld:'vCONVENIOID'},{av:'AV142ProcessoAno',fld:'vPROCESSOANO'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV72MostraTela',fld:'vMOSTRATELA'},{av:'AV149SdtRegAquisicaoBemTela',fld:'vSDTREGAQUISICAOBEMTELA'},{av:'AV152SnDados',fld:'vSNDADOS'},{av:'AV211GXV32',fld:'vGXV32'},{av:'AV150SdtRegAquisicaoBemTelaItem',fld:'vSDTREGAQUISICAOBEMTELAITEM'},{av:'AV212GXLvl385',fld:'vGXLVL385'},{av:'AV159SnCpr',fld:'vSNCPR'},{av:'AV160TransAquisicao',fld:'vTRANSAQUISICAO'},{av:'AV125SnErro',fld:'vSNERRO'}]];
   this.EvtParms["CTLTIPOBEMID.ISVALID"] = [[{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV100EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2041TipoBemVidaMaxima',fld:'TIPOBEMVIDAMAXIMA'}],[{av:'AV107SdtRegistraAquisicaoBem',fld:'vSDTREGISTRAAQUISICAOBEM'}]];
   this.setPrompt("PROMPTFORNECEDOR", [33]);
   this.setPrompt("PROMPTCONVENIO", [58]);
   this.setPrompt("PROMPTBEM", [85,89]);
   this.setPrompt("PROMPT_GXV11", [128]);
   this.setPrompt("PROMPT_GXV24", [173]);
   this.setPrompt("PROMPT_GXV26", [179]);
   this.setPrompt("PROMPT_GXV28", [185]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDtAquisicao"], this.GXValidFnc[17], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["PessoaBemId"], this.GXValidFnc[33], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["PessoaBemNome"], this.GXValidFnc[35], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemNotaFiscal"], this.GXValidFnc[39], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemCodigo"], this.GXValidFnc[103], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemSubgrupo"], this.GXValidFnc[105], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDescricaoCompleta"], this.GXValidFnc[110], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["PessoaBemEmpId"], this.GXValidFnc[117], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["OrigemRecursoEmpresaId"], this.GXValidFnc[118], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDescricaoResumida"], this.GXValidFnc[123], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["TipoBemId"], this.GXValidFnc[128], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["TipoBemDescricao"], this.GXValidFnc[129], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDepartamentoEmpresaId"], this.GXValidFnc[130], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemEmpresaId"], this.GXValidFnc[131], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["CondicaoBemEmpresaId"], this.GXValidFnc[132], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["TipoBemEmpresaId"], this.GXValidFnc[133], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemVidaUtil"], this.GXValidFnc[138], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemVoltagem"], this.GXValidFnc[145], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemVlrAquisicao"], this.GXValidFnc[149], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDtGarantia"], this.GXValidFnc[153], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemNumSerie"], this.GXValidFnc[158], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemVlrIcms"], this.GXValidFnc[162], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDtInicioApuracao"], this.GXValidFnc[166], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["CondicaoBemId"], this.GXValidFnc[173], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["CondicaoBemDescricao"], this.GXValidFnc[174], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["OrigemRecursoId"], this.GXValidFnc[179], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["OrigemRecursoDescricao"], this.GXValidFnc[180], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDepartamentoCodigo"], this.GXValidFnc[185], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemDepartamentoNome"], this.GXValidFnc[186], "AV107SdtRegistraAquisicaoBem");
   this.addBCProperty("Sdtregistraaquisicaobem", ["BemObservacao"], this.GXValidFnc[191], "AV107SdtRegistraAquisicaoBem");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraraquisicaobem());
