/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:25:10.92
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocustosaida', false, function () {
   this.ServerClass =  "hrelacaocustosaida" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Custosaida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCUSTOSAIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e2421p1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hrelacaocustosaidafiltros",["FIL"]), [""]);
      this.refreshOutputs([]);
   };
   this.e2221p1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hrelacaocustosaidafiltros",["MOV"]), [""]);
      this.refreshOutputs([]);
   };
   this.s172_client=function()
   {
      if ( this.AV25ModeloRelatorio == "S" )
      {
         if ( this.AV76Agrupamento == "C" )
         {
            gx.fn.setCtrlProperty("vSNPEDIDOPENDENTE","Visible", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("vSNPEDIDOPENDENTE","Visible", 1 );
         }
      }
      else
      {
         gx.fn.setCtrlProperty("vSNPEDIDOPENDENTE","Visible", 0 );
      }
   };
   this.s142_client=function()
   {
      if ( this.AV25ModeloRelatorio == "S" )
      {
         gx.fn.setCtrlProperty("TABLEAGRUPAMENTO","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABLEAGRUPAMENTO","Visible", 0 );
      }
      if ( this.AV76Agrupamento == "C" && this.AV25ModeloRelatorio == "S" )
      {
         this.AV28Ordenacao = gx.num.trunc( 2 ,0) ;
         gx.fn.setCtrlProperty("vORDENACAO","Enabled", 0 );
         this.AV23IdentificacaoProduto = gx.num.trunc( 0 ,0) ;
         gx.fn.setCtrlProperty("vIDENTIFICACAOPRODUTO","Enabled", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("vORDENACAO","Enabled", 1 );
         gx.fn.setCtrlProperty("vIDENTIFICACAOPRODUTO","Enabled", 1 );
      }
   };
   this.e2521p1_client=function()
   {
      this.clearMessages();
      this.s142_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TABLEAGRUPAMENTO","Visible")',ctrl:'TABLEAGRUPAMENTO',prop:'Visible'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{ctrl:'vORDENACAO'},{ctrl:'vIDENTIFICACAOPRODUTO'}]);
   };
   this.e2621p1_client=function()
   {
      this.clearMessages();
      this.s142_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TABLEAGRUPAMENTO","Visible")',ctrl:'TABLEAGRUPAMENTO',prop:'Visible'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{ctrl:'vORDENACAO'},{ctrl:'vIDENTIFICACAOPRODUTO'}]);
   };
   this.e2321p1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hrelacaocustosaidafiltros",["CFO"]), [""]);
      this.refreshOutputs([]);
   };
   this.e1121p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1321p2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1521p2_client=function()
   {
      this.executeServerEvent("VCUSTOSAIDA.ISVALID", true, null, false, true);
   };
   this.e1621p2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e1721p2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e1821p2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e2021p2_client=function()
   {
      this.executeServerEvent("VAGRUPAMENTO.CLICK", true, null, false, true);
   };
   this.e2121p2_client=function()
   {
      this.executeServerEvent("VMODELORELATORIO.CLICK", true, null, false, true);
   };
   this.e2721p2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,26,29,32,34,36,39,41,44,46,50,52,56,58,59,63,65,69,71,75,77,80,83,86,91,94,97,100,102,105,107,109,112,114,117,119,121,124,126,129,131,133,136,138,141,143,145,148,150,153,155,157,160,162,165,167,169,172,174,177,179,181,184,186,188,191,194,197,205,211,212,213,215,216,217,218,219,220,221,222,223,224];
   this.GXLastCtrlId =224;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK84", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV52TxtTela",gxold:"OV52TxtTela",gxvar:"AV52TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV52TxtTela=Value},v2z:function(Value){gx.O.ZV52TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV52TxtTela)},c2v:function(){gx.O.AV52TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[17]={fld:"TABLE2",grid:0};
   GXValidFnc[20]={fld:"TABLE4",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE91",grid:0};
   GXValidFnc[29]={fld:"TABLE92",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e2521p1_client',rgrid:[],fld:"vMODELORELATORIO",gxz:"ZV25ModeloRelatorio",gxold:"OV25ModeloRelatorio",gxvar:"AV25ModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25ModeloRelatorio=Value},v2z:function(Value){gx.O.ZV25ModeloRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELORELATORIO",gx.O.AV25ModeloRelatorio)},c2v:function(){gx.O.AV25ModeloRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vMODELORELATORIO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLEAGRUPAMENTO",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e2621p1_client',rgrid:[],fld:"vAGRUPAMENTO",gxz:"ZV76Agrupamento",gxold:"OV76Agrupamento",gxvar:"AV76Agrupamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV76Agrupamento=Value},v2z:function(Value){gx.O.ZV76Agrupamento=Value},v2c:function(){gx.fn.setComboBoxValue("vAGRUPAMENTO",gx.O.AV76Agrupamento)},c2v:function(){gx.O.AV76Agrupamento=this.val()},val:function(){return gx.fn.getControlValue("vAGRUPAMENTO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV28Ordenacao",gxold:"OV28Ordenacao",gxvar:"AV28Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Ordenacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Ordenacao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV28Ordenacao)},c2v:function(){gx.O.AV28Ordenacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDENACAO",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDENTIFICACAOPRODUTO",gxz:"ZV23IdentificacaoProduto",gxold:"OV23IdentificacaoProduto",gxvar:"AV23IdentificacaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23IdentificacaoProduto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23IdentificacaoProduto=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vIDENTIFICACAOPRODUTO",gx.O.AV23IdentificacaoProduto)},c2v:function(){gx.O.AV23IdentificacaoProduto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDENTIFICACAOPRODUTO",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Custosaida,isvalid:'e1521p2_client',rgrid:[],fld:"vCUSTOSAIDA",gxz:"ZV6CustoSaida",gxold:"OV6CustoSaida",gxvar:"AV6CustoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6CustoSaida=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6CustoSaida=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCUSTOSAIDA",gx.O.AV6CustoSaida,0)},c2v:function(){gx.O.AV6CustoSaida=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUSTOSAIDA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCUSTOSAIDADESCRICAO",gxz:"ZV7CustoSaidaDescricao",gxold:"OV7CustoSaidaDescricao",gxvar:"AV7CustoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CustoSaidaDescricao=Value},v2z:function(Value){gx.O.ZV7CustoSaidaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCUSTOSAIDADESCRICAO",gx.O.AV7CustoSaidaDescricao,0)},c2v:function(){gx.O.AV7CustoSaidaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCUSTOSAIDADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPDATA",gxz:"ZV36TpData",gxold:"OV36TpData",gxvar:"AV36TpData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36TpData=Value},v2z:function(Value){gx.O.ZV36TpData=Value},v2c:function(){gx.fn.setComboBoxValue("vTPDATA",gx.O.AV36TpData)},c2v:function(){gx.O.AV36TpData=this.val()},val:function(){return gx.fn.getControlValue("vTPDATA")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPRECO",gxz:"ZV12DataPreco",gxold:"OV12DataPreco",gxvar:"AV12DataPreco",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DataPreco=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12DataPreco=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPRECO",gx.O.AV12DataPreco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12DataPreco=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPRECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCALCULO",gxz:"ZV75TpCalculo",gxold:"OV75TpCalculo",gxvar:"AV75TpCalculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV75TpCalculo=Value},v2z:function(Value){gx.O.ZV75TpCalculo=Value},v2c:function(){gx.fn.setComboBoxValue("vTPCALCULO",gx.O.AV75TpCalculo)},c2v:function(){gx.O.AV75TpCalculo=this.val()},val:function(){return gx.fn.getControlValue("vTPCALCULO")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TABLE13",grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV22GerarCSV",gxold:"OV22GerarCSV",gxvar:"AV22GerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22GerarCSV=Value},v2z:function(Value){gx.O.ZV22GerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV22GerarCSV,"S")},c2v:function(){gx.O.AV22GerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[86]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPEDIDOPENDENTE",gxz:"ZV77SnPedidoPendente",gxold:"OV77SnPedidoPendente",gxvar:"AV77SnPedidoPendente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV77SnPedidoPendente=Value},v2z:function(Value){gx.O.ZV77SnPedidoPendente=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPEDIDOPENDENTE",gx.O.AV77SnPedidoPendente,"S")},c2v:function(){gx.O.AV77SnPedidoPendente=this.val()},val:function(){return gx.fn.getControlValue("vSNPEDIDOPENDENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[91]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[94]={fld:"TABLE10",grid:0};
   GXValidFnc[97]={fld:"TABLE12",grid:0};
   GXValidFnc[100]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[102]={fld:"TABLE85",grid:0};
   GXValidFnc[105]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINI",gxz:"ZV9DataEmissaoIni",gxold:"OV9DataEmissaoIni",gxvar:"AV9DataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINI",gx.O.AV9DataEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[107]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIN",gxz:"ZV8DataEmissaoFin",gxold:"OV8DataEmissaoFin",gxvar:"AV8DataEmissaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataEmissaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIN",gx.O.AV8DataEmissaoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataEmissaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[112]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[114]={fld:"TABLE8",grid:0};
   GXValidFnc[117]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV11DataIni",gxold:"OV11DataIni",gxvar:"AV11DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV11DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 117 , function() {
   });
   GXValidFnc[119]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV10DataFin",gxold:"OV10DataFin",gxvar:"AV10DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV10DataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 121 , function() {
   });
   GXValidFnc[124]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[126]={fld:"TABLE6",grid:0};
   GXValidFnc[129]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOINI",gxz:"ZV14DocumentoIni",gxold:"OV14DocumentoIni",gxvar:"AV14DocumentoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DocumentoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14DocumentoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOINI",gx.O.AV14DocumentoIni,0)},c2v:function(){gx.O.AV14DocumentoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOINI",'.')},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOFIN",gxz:"ZV13DocumentoFin",gxold:"OV13DocumentoFin",gxvar:"AV13DocumentoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DocumentoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13DocumentoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOFIN",gx.O.AV13DocumentoFin,0)},c2v:function(){gx.O.AV13DocumentoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[138]={fld:"TABLE9",grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEINI",gxz:"ZV5ClienteIni",gxold:"OV5ClienteIni",gxvar:"AV5ClienteIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ClienteIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5ClienteIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEINI",gx.O.AV5ClienteIni,0)},c2v:function(){gx.O.AV5ClienteIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEINI",'.')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFIN",gxz:"ZV40ClienteFin",gxold:"OV40ClienteFin",gxvar:"AV40ClienteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ClienteFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ClienteFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEFIN",gx.O.AV40ClienteFin,0)},c2v:function(){gx.O.AV40ClienteFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEFIN",'.')},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TXTLOTE", format:0,grid:0};
   GXValidFnc[150]={fld:"TABLE5",grid:0};
   GXValidFnc[153]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORINI",gxz:"ZV39VendedorIni",gxold:"OV39VendedorIni",gxvar:"AV39VendedorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39VendedorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39VendedorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORINI",gx.O.AV39VendedorIni,0)},c2v:function(){gx.O.AV39VendedorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORINI",'.')},nac:gx.falseFn};
   GXValidFnc[155]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORFIN",gxz:"ZV38VendedorFin",gxold:"OV38VendedorFin",gxvar:"AV38VendedorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38VendedorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38VendedorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORFIN",gx.O.AV38VendedorFin,0)},c2v:function(){gx.O.AV38VendedorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TXTLOTE2", format:0,grid:0};
   GXValidFnc[162]={fld:"TABLE11",grid:0};
   GXValidFnc[165]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI",gxz:"ZV20FamiliaIni",gxold:"OV20FamiliaIni",gxvar:"AV20FamiliaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FamiliaIni=Value},v2z:function(Value){gx.O.ZV20FamiliaIni=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI",gx.O.AV20FamiliaIni,0)},c2v:function(){gx.O.AV20FamiliaIni=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN",gxz:"ZV19FamiliaFin",gxold:"OV19FamiliaFin",gxvar:"AV19FamiliaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FamiliaFin=Value},v2z:function(Value){gx.O.ZV19FamiliaFin=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN",gx.O.AV19FamiliaFin,0)},c2v:function(){gx.O.AV19FamiliaFin=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TXTLOTE3", format:0,grid:0};
   GXValidFnc[174]={fld:"TABLE7",grid:0};
   GXValidFnc[177]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEINI",gxz:"ZV17FabricanteIni",gxold:"OV17FabricanteIni",gxvar:"AV17FabricanteIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FabricanteIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17FabricanteIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEINI",gx.O.AV17FabricanteIni,0)},c2v:function(){gx.O.AV17FabricanteIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEINI",'.')},nac:gx.falseFn};
   GXValidFnc[179]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[181]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEFIN",gxz:"ZV16FabricanteFin",gxold:"OV16FabricanteFin",gxvar:"AV16FabricanteFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FabricanteFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FabricanteFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEFIN",gx.O.AV16FabricanteFin,0)},c2v:function(){gx.O.AV16FabricanteFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEFIN",'.')},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRATFATURA",gxz:"ZV47TratFatura",gxold:"OV47TratFatura",gxvar:"AV47TratFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47TratFatura=Value},v2z:function(Value){gx.O.ZV47TratFatura=Value},v2c:function(){gx.fn.setComboBoxValue("vTRATFATURA",gx.O.AV47TratFatura)},c2v:function(){gx.O.AV47TratFatura=this.val()},val:function(){return gx.fn.getControlValue("vTRATFATURA")},nac:gx.falseFn};
   GXValidFnc[188]={fld:"TABLE95",grid:0};
   GXValidFnc[191]={fld:"FILTRARMOV", format:0,grid:0};
   GXValidFnc[194]={fld:"FILTRARCFOP", format:0,grid:0};
   GXValidFnc[197]={fld:"FILTRARFILIAL", format:0,grid:0};
   GXValidFnc[205]={fld:"TABLE3",grid:0};
   GXValidFnc[211]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV41Sim",gxold:"OV41Sim",gxvar:"AV41Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Sim=Value},v2z:function(Value){gx.O.ZV41Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV41Sim,0)},c2v:function(){gx.O.AV41Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[212]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV42Nao",gxold:"OV42Nao",gxvar:"AV42Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Nao=Value},v2z:function(Value){gx.O.ZV42Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV42Nao,0)},c2v:function(){gx.O.AV42Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[213]={fld:"JS", format:2,grid:0};
   GXValidFnc[215]={fld:"BTNHELP",grid:0};
   GXValidFnc[216]={fld:"PROMPT_CUSTOSAIDA",grid:0};
   GXValidFnc[217]={fld:"PROMPT_CLIENTEINI",grid:0};
   GXValidFnc[218]={fld:"PROMPT_CLIENTEFIN",grid:0};
   GXValidFnc[219]={fld:"PROMPT_VENDEDORINI",grid:0};
   GXValidFnc[220]={fld:"PROMPT_VENDEDORFIN",grid:0};
   GXValidFnc[221]={fld:"PROMPT_FAMILIAINI",grid:0};
   GXValidFnc[222]={fld:"PROMPT_FAMILIAFIN",grid:0};
   GXValidFnc[223]={fld:"PROMPT_FABRICANTEINI",grid:0};
   GXValidFnc[224]={fld:"PROMPT_FABRICANTEFIN",grid:0};
   this.AV52TxtTela = "" ;
   this.ZV52TxtTela = "" ;
   this.OV52TxtTela = "" ;
   this.AV25ModeloRelatorio = "" ;
   this.ZV25ModeloRelatorio = "" ;
   this.OV25ModeloRelatorio = "" ;
   this.AV76Agrupamento = "" ;
   this.ZV76Agrupamento = "" ;
   this.OV76Agrupamento = "" ;
   this.AV28Ordenacao = 0 ;
   this.ZV28Ordenacao = 0 ;
   this.OV28Ordenacao = 0 ;
   this.AV23IdentificacaoProduto = 0 ;
   this.ZV23IdentificacaoProduto = 0 ;
   this.OV23IdentificacaoProduto = 0 ;
   this.AV6CustoSaida = 0 ;
   this.ZV6CustoSaida = 0 ;
   this.OV6CustoSaida = 0 ;
   this.AV7CustoSaidaDescricao = "" ;
   this.ZV7CustoSaidaDescricao = "" ;
   this.OV7CustoSaidaDescricao = "" ;
   this.AV36TpData = "" ;
   this.ZV36TpData = "" ;
   this.OV36TpData = "" ;
   this.AV12DataPreco = gx.date.nullDate() ;
   this.ZV12DataPreco = gx.date.nullDate() ;
   this.OV12DataPreco = gx.date.nullDate() ;
   this.AV75TpCalculo = "" ;
   this.ZV75TpCalculo = "" ;
   this.OV75TpCalculo = "" ;
   this.AV22GerarCSV = "" ;
   this.ZV22GerarCSV = "" ;
   this.OV22GerarCSV = "" ;
   this.AV77SnPedidoPendente = "" ;
   this.ZV77SnPedidoPendente = "" ;
   this.OV77SnPedidoPendente = "" ;
   this.AV9DataEmissaoIni = gx.date.nullDate() ;
   this.ZV9DataEmissaoIni = gx.date.nullDate() ;
   this.OV9DataEmissaoIni = gx.date.nullDate() ;
   this.AV8DataEmissaoFin = gx.date.nullDate() ;
   this.ZV8DataEmissaoFin = gx.date.nullDate() ;
   this.OV8DataEmissaoFin = gx.date.nullDate() ;
   this.AV11DataIni = gx.date.nullDate() ;
   this.ZV11DataIni = gx.date.nullDate() ;
   this.OV11DataIni = gx.date.nullDate() ;
   this.AV10DataFin = gx.date.nullDate() ;
   this.ZV10DataFin = gx.date.nullDate() ;
   this.OV10DataFin = gx.date.nullDate() ;
   this.AV14DocumentoIni = 0 ;
   this.ZV14DocumentoIni = 0 ;
   this.OV14DocumentoIni = 0 ;
   this.AV13DocumentoFin = 0 ;
   this.ZV13DocumentoFin = 0 ;
   this.OV13DocumentoFin = 0 ;
   this.AV5ClienteIni = 0 ;
   this.ZV5ClienteIni = 0 ;
   this.OV5ClienteIni = 0 ;
   this.AV40ClienteFin = 0 ;
   this.ZV40ClienteFin = 0 ;
   this.OV40ClienteFin = 0 ;
   this.AV39VendedorIni = 0 ;
   this.ZV39VendedorIni = 0 ;
   this.OV39VendedorIni = 0 ;
   this.AV38VendedorFin = 0 ;
   this.ZV38VendedorFin = 0 ;
   this.OV38VendedorFin = 0 ;
   this.AV20FamiliaIni = "" ;
   this.ZV20FamiliaIni = "" ;
   this.OV20FamiliaIni = "" ;
   this.AV19FamiliaFin = "" ;
   this.ZV19FamiliaFin = "" ;
   this.OV19FamiliaFin = "" ;
   this.AV17FabricanteIni = 0 ;
   this.ZV17FabricanteIni = 0 ;
   this.OV17FabricanteIni = 0 ;
   this.AV16FabricanteFin = 0 ;
   this.ZV16FabricanteFin = 0 ;
   this.OV16FabricanteFin = 0 ;
   this.AV47TratFatura = "" ;
   this.ZV47TratFatura = "" ;
   this.OV47TratFatura = "" ;
   this.AV41Sim = "" ;
   this.ZV41Sim = "" ;
   this.OV41Sim = "" ;
   this.AV42Nao = "" ;
   this.ZV42Nao = "" ;
   this.OV42Nao = "" ;
   this.AV52TxtTela = "" ;
   this.AV25ModeloRelatorio = "" ;
   this.AV76Agrupamento = "" ;
   this.AV28Ordenacao = 0 ;
   this.AV23IdentificacaoProduto = 0 ;
   this.AV6CustoSaida = 0 ;
   this.AV7CustoSaidaDescricao = "" ;
   this.AV36TpData = "" ;
   this.AV12DataPreco = gx.date.nullDate() ;
   this.AV75TpCalculo = "" ;
   this.AV22GerarCSV = "" ;
   this.AV77SnPedidoPendente = "" ;
   this.AV9DataEmissaoIni = gx.date.nullDate() ;
   this.AV8DataEmissaoFin = gx.date.nullDate() ;
   this.AV11DataIni = gx.date.nullDate() ;
   this.AV10DataFin = gx.date.nullDate() ;
   this.AV14DocumentoIni = 0 ;
   this.AV13DocumentoFin = 0 ;
   this.AV5ClienteIni = 0 ;
   this.AV40ClienteFin = 0 ;
   this.AV39VendedorIni = 0 ;
   this.AV38VendedorFin = 0 ;
   this.AV20FamiliaIni = "" ;
   this.AV19FamiliaFin = "" ;
   this.AV17FabricanteIni = 0 ;
   this.AV16FabricanteFin = 0 ;
   this.AV47TratFatura = "" ;
   this.AV41Sim = "" ;
   this.AV42Nao = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A722PrecoTipo = "" ;
   this.Events = {"e1121p2_client": ["'FECHAR'", true] ,"e1321p2_client": ["ENTER", true] ,"e1521p2_client": ["VCUSTOSAIDA.ISVALID", true] ,"e1621p2_client": ["'SALVARTXT'", true] ,"e1721p2_client": ["VTXTTELA.CLICK", true] ,"e1821p2_client": ["'EXCLUIRTXT'", true] ,"e2021p2_client": ["VAGRUPAMENTO.CLICK", true] ,"e2121p2_client": ["VMODELORELATORIO.CLICK", true] ,"e2721p2_client": ["CANCEL", true] ,"e2421p1_client": ["'FILTRARFILIAL'", false] ,"e2221p1_client": ["'FILTRARTIPOMOVIMENTO'", false] ,"e2521p1_client": ["VMODELORELATORIO.ISVALID", false] ,"e2621p1_client": ["VAGRUPAMENTO.ISVALID", false] ,"e2321p1_client": ["'FILTRARCFOP'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV68SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'},{av:'AV52TxtTela',fld:'vTXTTELA'},{av:'AV54SnPreVenda',fld:'vSNPREVENDA'},{av:'AV53filtros',fld:'vFILTROS'},{av:'AV55SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV56SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV57SnEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV58SnSimplesREmessa',fld:'vSNSIMPLESREMESSA'},{av:'AV59SnDAV',fld:'vSNDAV'},{av:'AV60SnCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV61SnCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV62SnNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV72SnNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV64SnNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV65SnDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV66SnAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV79SNCompraVenda',fld:'vSNCOMPRAVENDA'},{av:'AV80SNDevolucao',fld:'vSNDEVOLUCAO'},{av:'AV81SNTransferenciaCFO',fld:'vSNTRANSFERENCIACFO'},{av:'AV82SNEnergiaEletrica',fld:'vSNENERGIAELETRICA'},{av:'AV83SNServicoComunicacao',fld:'vSNSERVICOCOMUNICACAO'},{av:'AV84SNServicoTransporte',fld:'vSNSERVICOTRANSPORTE'},{av:'AV85SNSistemaIntegracao',fld:'vSNSISTEMAINTEGRACAO'},{av:'AV86SNAtivoImobilizado',fld:'vSNATIVOIMOBILIZADO'},{av:'AV87SNUsoConsumo',fld:'vSNUSOCONSUMO'},{av:'AV78SNCredRessICMS',fld:'vSNCREDRESSICMS'},{av:'AV88SNSimplesRemessaCFO',fld:'vSNSIMPLESREMESSACFO'},{av:'AV89SNEntregaFuturaCFO',fld:'vSNENTREGAFUTURACFO'},{av:'AV90SNOutros',fld:'vSNOUTROS'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'}],[{av:'AV44Txt',fld:'vTXT'},{av:'gx.fn.getCtrlProperty("TABLEAGRUPAMENTO","Visible")',ctrl:'TABLEAGRUPAMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("FILTRARFILIAL","Visible")',ctrl:'FILTRARFILIAL',prop:'Visible'},{av:'AV52TxtTela',fld:'vTXTTELA'},{av:'AV98GXV2',fld:'vGXV2'},{av:'AV69SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{ctrl:'vORDENACAO'},{ctrl:'vIDENTIFICACAOPRODUTO'},{av:'AV74SNTxt',fld:'vSNTXT'},{av:'AV96GXV1',fld:'vGXV1'},{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'},{av:'AV36TpData',fld:'vTPDATA'},{av:'AV54SnPreVenda',fld:'vSNPREVENDA'},{av:'AV55SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV56SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV57SnEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV58SnSimplesREmessa',fld:'vSNSIMPLESREMESSA'},{av:'AV59SnDAV',fld:'vSNDAV'},{av:'AV60SnCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV61SnCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV62SnNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV72SnNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV64SnNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV65SnDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV66SnAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV75TpCalculo',fld:'vTPCALCULO'},{av:'AV77SnPedidoPendente',fld:'vSNPEDIDOPENDENTE'},{av:'AV79SNCompraVenda',fld:'vSNCOMPRAVENDA'},{av:'AV80SNDevolucao',fld:'vSNDEVOLUCAO'},{av:'AV81SNTransferenciaCFO',fld:'vSNTRANSFERENCIACFO'},{av:'AV82SNEnergiaEletrica',fld:'vSNENERGIAELETRICA'},{av:'AV83SNServicoComunicacao',fld:'vSNSERVICOCOMUNICACAO'},{av:'AV84SNServicoTransporte',fld:'vSNSERVICOTRANSPORTE'},{av:'AV85SNSistemaIntegracao',fld:'vSNSISTEMAINTEGRACAO'},{av:'AV86SNAtivoImobilizado',fld:'vSNATIVOIMOBILIZADO'},{av:'AV87SNUsoConsumo',fld:'vSNUSOCONSUMO'},{av:'AV78SNCredRessICMS',fld:'vSNCREDRESSICMS'},{av:'AV88SNSimplesRemessaCFO',fld:'vSNSIMPLESREMESSACFO'},{av:'AV89SNEntregaFuturaCFO',fld:'vSNENTREGAFUTURACFO'},{av:'AV90SNOutros',fld:'vSNOUTROS'},{av:'AV53filtros',fld:'vFILTROS'},{av:'AV7CustoSaidaDescricao',fld:'vCUSTOSAIDADESCRICAO'},{av:'gx.fn.getCtrlProperty("vSNPEDIDOPENDENTE","Visible")',ctrl:'vSNPEDIDOPENDENTE',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV35TpErro',fld:'vTPERRO'},{av:'AV52TxtTela',fld:'vTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV51DescOrdenacao',fld:'vDESCORDENACAO'},{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'},{av:'AV36TpData',fld:'vTPDATA'},{av:'AV12DataPreco',fld:'vDATAPRECO'},{av:'AV9DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV8DataEmissaoFin',fld:'vDATAEMISSAOFIN'},{av:'AV11DataIni',fld:'vDATAINI'},{av:'AV10DataFin',fld:'vDATAFIN'},{av:'AV14DocumentoIni',fld:'vDOCUMENTOINI'},{av:'AV13DocumentoFin',fld:'vDOCUMENTOFIN'},{av:'AV5ClienteIni',fld:'vCLIENTEINI'},{av:'AV40ClienteFin',fld:'vCLIENTEFIN'},{av:'AV39VendedorIni',fld:'vVENDEDORINI'},{av:'AV38VendedorFin',fld:'vVENDEDORFIN'},{av:'AV20FamiliaIni',fld:'vFAMILIAINI'},{av:'AV19FamiliaFin',fld:'vFAMILIAFIN'},{av:'AV17FabricanteIni',fld:'vFABRICANTEINI'},{av:'AV16FabricanteFin',fld:'vFABRICANTEFIN'},{av:'AV47TratFatura',fld:'vTRATFATURA'},{av:'AV75TpCalculo',fld:'vTPCALCULO'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'},{av:'AV22GerarCSV',fld:'vGERARCSV'},{av:'AV77SnPedidoPendente',fld:'vSNPEDIDOPENDENTE'},{av:'AV94Pgmdesc',fld:'vPGMDESC'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'}],[{av:'AV73SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV52TxtTela',fld:'vTXTTELA'},{av:'AV51DescOrdenacao',fld:'vDESCORDENACAO'},{av:'AV49NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV48NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV50QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV35TpErro',fld:'vTPERRO'},{av:'AV8DataEmissaoFin',fld:'vDATAEMISSAOFIN'},{av:'AV10DataFin',fld:'vDATAFIN'},{av:'AV95GXLvl181',fld:'vGXLVL181'},{av:'AV53filtros',fld:'vFILTROS'},{av:'AV54SnPreVenda',fld:'vSNPREVENDA'},{av:'AV55SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV56SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV57SnEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV58SnSimplesREmessa',fld:'vSNSIMPLESREMESSA'},{av:'AV59SnDAV',fld:'vSNDAV'},{av:'AV60SnCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV61SnCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV62SnNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV72SnNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV64SnNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV65SnDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV66SnAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV79SNCompraVenda',fld:'vSNCOMPRAVENDA'},{av:'AV80SNDevolucao',fld:'vSNDEVOLUCAO'},{av:'AV81SNTransferenciaCFO',fld:'vSNTRANSFERENCIACFO'},{av:'AV82SNEnergiaEletrica',fld:'vSNENERGIAELETRICA'},{av:'AV83SNServicoComunicacao',fld:'vSNSERVICOCOMUNICACAO'},{av:'AV84SNServicoTransporte',fld:'vSNSERVICOTRANSPORTE'},{av:'AV85SNSistemaIntegracao',fld:'vSNSISTEMAINTEGRACAO'},{av:'AV86SNAtivoImobilizado',fld:'vSNATIVOIMOBILIZADO'},{av:'AV87SNUsoConsumo',fld:'vSNUSOCONSUMO'},{av:'AV78SNCredRessICMS',fld:'vSNCREDRESSICMS'},{av:'AV88SNSimplesRemessaCFO',fld:'vSNSIMPLESREMESSACFO'},{av:'AV89SNEntregaFuturaCFO',fld:'vSNENTREGAFUTURACFO'},{av:'AV90SNOutros',fld:'vSNOUTROS'},{av:'AV67OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'FILTRARFILIAL'"] = [[],[]];
   this.EvtParms["'FILTRARTIPOMOVIMENTO'"] = [[],[]];
   this.EvtParms["VCUSTOSAIDA.ISVALID"] = [[{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'}],[{av:'AV7CustoSaidaDescricao',fld:'vCUSTOSAIDADESCRICAO'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV52TxtTela',fld:'vTXTTELA'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'},{av:'AV36TpData',fld:'vTPDATA'},{av:'AV75TpCalculo',fld:'vTPCALCULO'},{av:'AV77SnPedidoPendente',fld:'vSNPEDIDOPENDENTE'}],[{av:'AV53filtros',fld:'vFILTROS'},{av:'AV54SnPreVenda',fld:'vSNPREVENDA'},{av:'AV55SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV56SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV57SnEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV58SnSimplesREmessa',fld:'vSNSIMPLESREMESSA'},{av:'AV59SnDAV',fld:'vSNDAV'},{av:'AV60SnCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV61SnCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV62SnNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV72SnNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV64SnNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV65SnDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV66SnAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV79SNCompraVenda',fld:'vSNCOMPRAVENDA'},{av:'AV80SNDevolucao',fld:'vSNDEVOLUCAO'},{av:'AV81SNTransferenciaCFO',fld:'vSNTRANSFERENCIACFO'},{av:'AV82SNEnergiaEletrica',fld:'vSNENERGIAELETRICA'},{av:'AV83SNServicoComunicacao',fld:'vSNSERVICOCOMUNICACAO'},{av:'AV84SNServicoTransporte',fld:'vSNSERVICOTRANSPORTE'},{av:'AV85SNSistemaIntegracao',fld:'vSNSISTEMAINTEGRACAO'},{av:'AV86SNAtivoImobilizado',fld:'vSNATIVOIMOBILIZADO'},{av:'AV87SNUsoConsumo',fld:'vSNUSOCONSUMO'},{av:'AV78SNCredRessICMS',fld:'vSNCREDRESSICMS'},{av:'AV88SNSimplesRemessaCFO',fld:'vSNSIMPLESREMESSACFO'},{av:'AV89SNEntregaFuturaCFO',fld:'vSNENTREGAFUTURACFO'},{av:'AV90SNOutros',fld:'vSNOUTROS'},{av:'AV67OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV68SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV52TxtTela',fld:'vTXTTELA'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV54SnPreVenda',fld:'vSNPREVENDA'},{av:'AV53filtros',fld:'vFILTROS'},{av:'AV55SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV56SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV57SnEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV58SnSimplesREmessa',fld:'vSNSIMPLESREMESSA'},{av:'AV59SnDAV',fld:'vSNDAV'},{av:'AV60SnCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV61SnCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV62SnNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV72SnNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV64SnNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV65SnDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV66SnAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV79SNCompraVenda',fld:'vSNCOMPRAVENDA'},{av:'AV80SNDevolucao',fld:'vSNDEVOLUCAO'},{av:'AV81SNTransferenciaCFO',fld:'vSNTRANSFERENCIACFO'},{av:'AV82SNEnergiaEletrica',fld:'vSNENERGIAELETRICA'},{av:'AV83SNServicoComunicacao',fld:'vSNSERVICOCOMUNICACAO'},{av:'AV84SNServicoTransporte',fld:'vSNSERVICOTRANSPORTE'},{av:'AV85SNSistemaIntegracao',fld:'vSNSISTEMAINTEGRACAO'},{av:'AV86SNAtivoImobilizado',fld:'vSNATIVOIMOBILIZADO'},{av:'AV87SNUsoConsumo',fld:'vSNUSOCONSUMO'},{av:'AV78SNCredRessICMS',fld:'vSNCREDRESSICMS'},{av:'AV88SNSimplesRemessaCFO',fld:'vSNSIMPLESREMESSACFO'},{av:'AV89SNEntregaFuturaCFO',fld:'vSNENTREGAFUTURACFO'},{av:'AV90SNOutros',fld:'vSNOUTROS'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV31PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'}],[{av:'AV74SNTxt',fld:'vSNTXT'},{av:'AV96GXV1',fld:'vGXV1'},{av:'AV69SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{av:'AV6CustoSaida',fld:'vCUSTOSAIDA'},{av:'AV36TpData',fld:'vTPDATA'},{av:'AV54SnPreVenda',fld:'vSNPREVENDA'},{av:'AV55SnCondicional',fld:'vSNCONDICIONAL'},{av:'AV56SnOrcamento',fld:'vSNORCAMENTO'},{av:'AV57SnEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV58SnSimplesREmessa',fld:'vSNSIMPLESREMESSA'},{av:'AV59SnDAV',fld:'vSNDAV'},{av:'AV60SnCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV61SnCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV62SnNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV72SnNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV64SnNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV65SnDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV66SnAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV75TpCalculo',fld:'vTPCALCULO'},{av:'AV77SnPedidoPendente',fld:'vSNPEDIDOPENDENTE'},{av:'AV79SNCompraVenda',fld:'vSNCOMPRAVENDA'},{av:'AV80SNDevolucao',fld:'vSNDEVOLUCAO'},{av:'AV81SNTransferenciaCFO',fld:'vSNTRANSFERENCIACFO'},{av:'AV82SNEnergiaEletrica',fld:'vSNENERGIAELETRICA'},{av:'AV83SNServicoComunicacao',fld:'vSNSERVICOCOMUNICACAO'},{av:'AV84SNServicoTransporte',fld:'vSNSERVICOTRANSPORTE'},{av:'AV85SNSistemaIntegracao',fld:'vSNSISTEMAINTEGRACAO'},{av:'AV86SNAtivoImobilizado',fld:'vSNATIVOIMOBILIZADO'},{av:'AV87SNUsoConsumo',fld:'vSNUSOCONSUMO'},{av:'AV78SNCredRessICMS',fld:'vSNCREDRESSICMS'},{av:'AV88SNSimplesRemessaCFO',fld:'vSNSIMPLESREMESSACFO'},{av:'AV89SNEntregaFuturaCFO',fld:'vSNENTREGAFUTURACFO'},{av:'AV90SNOutros',fld:'vSNOUTROS'},{av:'AV53filtros',fld:'vFILTROS'},{av:'AV7CustoSaidaDescricao',fld:'vCUSTOSAIDADESCRICAO'},{av:'gx.fn.getCtrlProperty("vSNPEDIDOPENDENTE","Visible")',ctrl:'vSNPEDIDOPENDENTE',prop:'Visible'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV52TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["VMODELORELATORIO.ISVALID"] = [[{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'}],[{av:'gx.fn.getCtrlProperty("TABLEAGRUPAMENTO","Visible")',ctrl:'TABLEAGRUPAMENTO',prop:'Visible'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{ctrl:'vORDENACAO'},{ctrl:'vIDENTIFICACAOPRODUTO'}]];
   this.EvtParms["VAGRUPAMENTO.ISVALID"] = [[{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'}],[{av:'gx.fn.getCtrlProperty("TABLEAGRUPAMENTO","Visible")',ctrl:'TABLEAGRUPAMENTO',prop:'Visible'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{ctrl:'vORDENACAO'},{ctrl:'vIDENTIFICACAOPRODUTO'}]];
   this.EvtParms["VAGRUPAMENTO.CLICK"] = [[{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'}],[{av:'gx.fn.getCtrlProperty("TABLEAGRUPAMENTO","Visible")',ctrl:'TABLEAGRUPAMENTO',prop:'Visible'},{av:'AV28Ordenacao',fld:'vORDENACAO'},{av:'AV23IdentificacaoProduto',fld:'vIDENTIFICACAOPRODUTO'},{ctrl:'vORDENACAO'},{ctrl:'vIDENTIFICACAOPRODUTO'},{av:'gx.fn.getCtrlProperty("vSNPEDIDOPENDENTE","Visible")',ctrl:'vSNPEDIDOPENDENTE',prop:'Visible'}]];
   this.EvtParms["VMODELORELATORIO.CLICK"] = [[{av:'AV25ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV76Agrupamento',fld:'vAGRUPAMENTO'}],[{av:'gx.fn.getCtrlProperty("vSNPEDIDOPENDENTE","Visible")',ctrl:'vSNPEDIDOPENDENTE',prop:'Visible'}]];
   this.EvtParms["'FILTRARCFOP'"] = [[],[]];
   this.setPrompt("PROMPT_CUSTOSAIDA", [58]);
   this.setPrompt("PROMPT_CLIENTEINI", [141]);
   this.setPrompt("PROMPT_CLIENTEFIN", [145]);
   this.setPrompt("PROMPT_VENDEDORINI", [153]);
   this.setPrompt("PROMPT_VENDEDORFIN", [157]);
   this.setPrompt("PROMPT_FAMILIAINI", [165]);
   this.setPrompt("PROMPT_FAMILIAFIN", [169]);
   this.setPrompt("PROMPT_FABRICANTEINI", [177]);
   this.setPrompt("PROMPT_FABRICANTEFIN", [181]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocustosaida());
