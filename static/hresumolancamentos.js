/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:25:20.50
*/
gx.evt.autoSkip = false;
gx.define('hresumolancamentos', false, function () {
   this.ServerClass =  "hresumolancamentos" ;
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
      this.AV142ContaPagRecPagRecParm=gx.fn.getControlValue("vCONTAPAGRECPAGRECPARM") ;
   };
   this.Validv_Pessoatipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOATIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV26PessoaTipoPessoa == "T" || this.AV26PessoaTipoPessoa == "F" || this.AV26PessoaTipoPessoa == "J" ) )
         {
            try {
               gxballoon.setError("Campo PessoaTipoPessoa fora do intervalo");
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
   this.Validv_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID");
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
   this.Validv_Contacontabilsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV192ContaContabilSituacao == "I" || this.AV192ContaContabilSituacao == "A" ) )
         {
            try {
               gxballoon.setError("Campo ContaContabilSituacao fora do intervalo");
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
   this.Validv_Contacontabiltipolancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILTIPOLANCAMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV191ContaContabilTipoLancamento == "C" || this.AV191ContaContabilTipoLancamento == "E" || this.AV191ContaContabilTipoLancamento == "N" ) )
         {
            try {
               gxballoon.setError("Campo ContaContabilTipoLancamento fora do intervalo");
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
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
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
      gx.fn.setCtrlProperty("vSALTARPAGINA","Visible", 0 );
      gx.fn.setCtrlProperty("vIMPRIMIROBSCONTA","Visible", 0 );
      if ( this.AV20Modelo == "A" )
      {
         gx.fn.setCtrlProperty("TABLE3","Visible", 1 );
         gx.fn.setCtrlProperty("TABLE6","Visible", 1 );
         gx.fn.setCtrlProperty("vSALTARPAGINA","Visible", 1 );
         gx.fn.setCtrlProperty("vIMPRIMIROBSCONTA","Visible", 1 );
      }
      else
      {
         if ( this.AV20Modelo == "C" || this.AV20Modelo == "F" )
         {
            gx.fn.setCtrlProperty("TABLE6","Visible", 1 );
         }
         else
         {
            gx.fn.setCtrlProperty("TABLE3","Visible", 0 );
            gx.fn.setCtrlProperty("TABLE6","Visible", 0 );
            this.AV117Totalizacao =  "0"  ;
            this.AV14Ordenacao =  "0"  ;
         }
      }
   };
   this.s162_client=function()
   {
      if ( this.AV14Ordenacao == "C" )
      {
         this.AV13OrdenacaoDescricao =  "Código cliente/Fornecedor"  ;
      }
      else if ( this.AV14Ordenacao == "F" )
      {
         this.AV13OrdenacaoDescricao =  "Fantasia"  ;
      }
      else if ( this.AV14Ordenacao == "R" )
      {
         this.AV13OrdenacaoDescricao =  "Razão Social"  ;
      }
      else if ( this.AV14Ordenacao == "N" )
      {
         this.AV13OrdenacaoDescricao =  "Número da Conta"  ;
      }
      else if ( this.AV14Ordenacao == "E" )
      {
         this.AV13OrdenacaoDescricao =  "Espécie"  ;
      }
      else if ( this.AV14Ordenacao == "I" )
      {
         this.AV13OrdenacaoDescricao =  "Filial"  ;
      }
      else if ( this.AV14Ordenacao == "O" )
      {
         this.AV13OrdenacaoDescricao =  "Tipo de Conta"  ;
      }
      else if ( this.AV14Ordenacao == "B" )
      {
         this.AV13OrdenacaoDescricao =  "Tipo de Cobrança"  ;
      }
      else if ( this.AV14Ordenacao == "M" )
      {
         this.AV13OrdenacaoDescricao =  "Data de Emissão"  ;
      }
      else if ( this.AV14Ordenacao == "V" )
      {
         this.AV13OrdenacaoDescricao =  "Data de Vencimento"  ;
      }
      else if ( this.AV14Ordenacao == "U" )
      {
         this.AV13OrdenacaoDescricao =  "Número Documento"  ;
      }
      else if ( this.AV14Ordenacao == "P" )
      {
         this.AV13OrdenacaoDescricao =  "CPF/CNPJ"  ;
      }
   };
   this.e11dn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dn2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16dn2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17dn2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19dn2_client=function()
   {
      this.executeServerEvent("VMODELO.CLICK", true, null, false, true);
   };
   this.e20dn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,21,24,27,35,37,39,41,43,45,46,49,51,57,60,62,68,73,75,77,80,82,84,87,89,91,94,96,98,99,102,108,110,112,114,117,119,121,124,126,128,130,133,135,137,140,142,145,147,149,151,153,156,158,160,163,165,168,169,170,172,174,175,176,178,180,183,185,187,190,192,195,197,199,201,203,206,208,210,213,215,217,219,222,224,226,229,231,234,236,238,240,242,245,247,249,252,254,255,257,259,262,264,266,269,271,274,277,280,291,293,295,297,300,302,304,308,310,312,314,317,320,324,326,327,329,331,332,338,343,345,347,349,352,354,356,359,361,363,366,368,370,373,375,377,379,382,384,386,389,391,393,396,398,400,403,405,407,409,412,414,416,419,421,423,426,428,430,433,435,437,439,442,444,446,449,451,453,456,458,460,463,465,467,469,472,474,476,479,481,483,486,488,490,491,498,500,501,503,505,506,507,508,509,512,514,515,516,517,518,519,520,523,525,527,529,532,534,536,538,539,542,545,563,565,567,569,572,574,576,579,581,583,586,588,590,594,596,598,601,603,605,608,610,612,615,617,619,623,625,627,630,632,634,637,639,641,644,646,648,652,654,656,659,661,663,666,668,670,673,675,677,686,687,688,689,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783];
   this.GXLastCtrlId =783;
   this.TABCSSContainer = gx.uc.getNew(this, 20, 13, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV229Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV229Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV229Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hresumolancamentos_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV213TxtTela",gxold:"OV213TxtTela",gxvar:"AV213TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV213TxtTela=Value},v2z:function(Value){gx.O.ZV213TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV213TxtTela)},c2v:function(){gx.O.AV213TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TAB1",grid:0};
   GXValidFnc[24]={fld:"TABLE11",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV20Modelo",gxold:"OV20Modelo",gxvar:"AV20Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Modelo=Value},v2z:function(Value){gx.O.ZV20Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV20Modelo)},c2v:function(){gx.O.AV20Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMDATAINI",gxz:"ZV119ContaLancamDataIni",gxold:"OV119ContaLancamDataIni",gxvar:"AV119ContaLancamDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119ContaLancamDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV119ContaLancamDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMDATAINI",gx.O.AV119ContaLancamDataIni,0)},c2v:function(){gx.O.AV119ContaLancamDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTALANCAMDATAINI")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMDATAFIM",gxz:"ZV120ContaLancamDataFim",gxold:"OV120ContaLancamDataFim",gxvar:"AV120ContaLancamDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120ContaLancamDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV120ContaLancamDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMDATAFIM",gx.O.AV120ContaLancamDataFim,0)},c2v:function(){gx.O.AV120ContaLancamDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTALANCAMDATAFIM")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE3",grid:0};
   GXValidFnc[49]={fld:"TXTTOTALIZACAO", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALIZACAO",gxz:"ZV117Totalizacao",gxold:"OV117Totalizacao",gxvar:"AV117Totalizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV117Totalizacao=Value},v2z:function(Value){gx.O.ZV117Totalizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTOTALIZACAO",gx.O.AV117Totalizacao)},c2v:function(){gx.O.AV117Totalizacao=this.val()},val:function(){return gx.fn.getControlValue("vTOTALIZACAO")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLE6",grid:0};
   GXValidFnc[60]={fld:"TXTORDENACAO", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV14Ordenacao",gxold:"OV14Ordenacao",gxvar:"AV14Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Ordenacao=Value},v2z:function(Value){gx.O.ZV14Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV14Ordenacao)},c2v:function(){gx.O.AV14Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TABLE4",grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRINCLUSAO",gxz:"ZV122ImprimirInclusao",gxold:"OV122ImprimirInclusao",gxvar:"AV122ImprimirInclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV122ImprimirInclusao=Value},v2z:function(Value){gx.O.ZV122ImprimirInclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRINCLUSAO",gx.O.AV122ImprimirInclusao,"S")},c2v:function(){gx.O.AV122ImprimirInclusao=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRINCLUSAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRLANCESTORNO",gxz:"ZV126ImprimirLancEstorno",gxold:"OV126ImprimirLancEstorno",gxvar:"AV126ImprimirLancEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV126ImprimirLancEstorno=Value},v2z:function(Value){gx.O.ZV126ImprimirLancEstorno=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRLANCESTORNO",gx.O.AV126ImprimirLancEstorno,"S")},c2v:function(){gx.O.AV126ImprimirLancEstorno=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRLANCESTORNO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[77]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNNORMAL",gxz:"ZV22ImprimirCliFornNormal",gxold:"OV22ImprimirCliFornNormal",gxvar:"AV22ImprimirCliFornNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ImprimirCliFornNormal=Value},v2z:function(Value){gx.O.ZV22ImprimirCliFornNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNNORMAL",gx.O.AV22ImprimirCliFornNormal,"S")},c2v:function(){gx.O.AV22ImprimirCliFornNormal=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRACRESCIMO",gxz:"ZV123ImprimirAcrescimo",gxold:"OV123ImprimirAcrescimo",gxvar:"AV123ImprimirAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV123ImprimirAcrescimo=Value},v2z:function(Value){gx.O.ZV123ImprimirAcrescimo=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRACRESCIMO",gx.O.AV123ImprimirAcrescimo,"S")},c2v:function(){gx.O.AV123ImprimirAcrescimo=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRACRESCIMO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[82]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRLANCNORMAL",gxz:"ZV127ImprimirLancNormal",gxold:"OV127ImprimirLancNormal",gxvar:"AV127ImprimirLancNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV127ImprimirLancNormal=Value},v2z:function(Value){gx.O.ZV127ImprimirLancNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRLANCNORMAL",gx.O.AV127ImprimirLancNormal,"S")},c2v:function(){gx.O.AV127ImprimirLancNormal=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRLANCNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNCANCELADO",gxz:"ZV23ImprimirCliFornCancelado",gxold:"OV23ImprimirCliFornCancelado",gxvar:"AV23ImprimirCliFornCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23ImprimirCliFornCancelado=Value},v2z:function(Value){gx.O.ZV23ImprimirCliFornCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNCANCELADO",gx.O.AV23ImprimirCliFornCancelado,"S")},c2v:function(){gx.O.AV23ImprimirCliFornCancelado=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[87]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRDESCONTO",gxz:"ZV124ImprimirDesconto",gxold:"OV124ImprimirDesconto",gxvar:"AV124ImprimirDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV124ImprimirDesconto=Value},v2z:function(Value){gx.O.ZV124ImprimirDesconto=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRDESCONTO",gx.O.AV124ImprimirDesconto,"S")},c2v:function(){gx.O.AV124ImprimirDesconto=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRDESCONTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALTARPAGINA",gxz:"ZV118SaltarPagina",gxold:"OV118SaltarPagina",gxvar:"AV118SaltarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV118SaltarPagina=Value},v2z:function(Value){gx.O.ZV118SaltarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSALTARPAGINA",gx.O.AV118SaltarPagina,"S")},c2v:function(){gx.O.AV118SaltarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSALTARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[91]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNSUSPENSO",gxz:"ZV24ImprimirCliFornSuspenso",gxold:"OV24ImprimirCliFornSuspenso",gxvar:"AV24ImprimirCliFornSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24ImprimirCliFornSuspenso=Value},v2z:function(Value){gx.O.ZV24ImprimirCliFornSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNSUSPENSO",gx.O.AV24ImprimirCliFornSuspenso,"S")},c2v:function(){gx.O.AV24ImprimirCliFornSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRBAIXA",gxz:"ZV125ImprimirBaixa",gxold:"OV125ImprimirBaixa",gxvar:"AV125ImprimirBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV125ImprimirBaixa=Value},v2z:function(Value){gx.O.ZV125ImprimirBaixa=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRBAIXA",gx.O.AV125ImprimirBaixa,"S")},c2v:function(){gx.O.AV125ImprimirBaixa=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRBAIXA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIROBSCONTA",gxz:"ZV128ImprimirObsConta",gxold:"OV128ImprimirObsConta",gxvar:"AV128ImprimirObsConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV128ImprimirObsConta=Value},v2z:function(Value){gx.O.ZV128ImprimirObsConta=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIROBSCONTA",gx.O.AV128ImprimirObsConta,"S")},c2v:function(){gx.O.AV128ImprimirObsConta=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIROBSCONTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV228SnGerarCSV",gxold:"OV228SnGerarCSV",gxvar:"AV228SnGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV228SnGerarCSV=Value},v2z:function(Value){gx.O.ZV228SnGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV228SnGerarCSV,"S")},c2v:function(){gx.O.AV228SnGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[99]={fld:"TABLE12",grid:0};
   GXValidFnc[102]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[108]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOCONTA",gxz:"ZV25SituacaoConta",gxold:"OV25SituacaoConta",gxvar:"AV25SituacaoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25SituacaoConta=Value},v2z:function(Value){gx.O.ZV25SituacaoConta=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOCONTA",gx.O.AV25SituacaoConta)},c2v:function(){gx.O.AV25SituacaoConta=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOCONTA")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[114]={fld:"TABLE18",grid:0};
   GXValidFnc[117]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOINI",gxz:"ZV27ContaPagRecDtEmissaoIni",gxold:"OV27ContaPagRecDtEmissaoIni",gxvar:"AV27ContaPagRecDtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOINI",gx.O.AV27ContaPagRecDtEmissaoIni,0)},c2v:function(){gx.O.AV27ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOFIM",gxz:"ZV28ContaPagRecDtEmissaoFim",gxold:"OV28ContaPagRecDtEmissaoFim",gxvar:"AV28ContaPagRecDtEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOFIM",gx.O.AV28ContaPagRecDtEmissaoFim,0)},c2v:function(){gx.O.AV28ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoatipopessoa,isvalid:null,rgrid:[],fld:"vPESSOATIPOPESSOA",gxz:"ZV26PessoaTipoPessoa",gxold:"OV26PessoaTipoPessoa",gxvar:"AV26PessoaTipoPessoa",ucs:[],op:[126],ip:[126],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26PessoaTipoPessoa=Value},v2z:function(Value){gx.O.ZV26PessoaTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOPESSOA",gx.O.AV26PessoaTipoPessoa)},c2v:function(){gx.O.AV26PessoaTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[130]={fld:"TABLE20",grid:0};
   GXValidFnc[133]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTACEITEINI",gxz:"ZV31ContaPagRecDtAceiteIni",gxold:"OV31ContaPagRecDtAceiteIni",gxvar:"AV31ContaPagRecDtAceiteIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaPagRecDtAceiteIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31ContaPagRecDtAceiteIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTACEITEINI",gx.O.AV31ContaPagRecDtAceiteIni,0)},c2v:function(){gx.O.AV31ContaPagRecDtAceiteIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTACEITEINI")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTACEITEFIM",gxz:"ZV32ContaPagRecDtAceiteFim",gxold:"OV32ContaPagRecDtAceiteFim",gxvar:"AV32ContaPagRecDtAceiteFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaPagRecDtAceiteFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32ContaPagRecDtAceiteFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTACEITEFIM",gx.O.AV32ContaPagRecDtAceiteFim,0)},c2v:function(){gx.O.AV32ContaPagRecDtAceiteFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTACEITEFIM")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[142]={fld:"TABLE14",grid:0};
   GXValidFnc[145]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROINI",gxz:"ZV29ContaPagRecNumeroIni",gxold:"OV29ContaPagRecNumeroIni",gxvar:"AV29ContaPagRecNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaPagRecNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ContaPagRecNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROINI",gx.O.AV29ContaPagRecNumeroIni,0)},c2v:function(){gx.O.AV29ContaPagRecNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROFIM",gxz:"ZV30ContaPagRecNumeroFim",gxold:"OV30ContaPagRecNumeroFim",gxvar:"AV30ContaPagRecNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaPagRecNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ContaPagRecNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROFIM",gx.O.AV30ContaPagRecNumeroFim,0)},c2v:function(){gx.O.AV30ContaPagRecNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[153]={fld:"TABLE21",grid:0};
   GXValidFnc[156]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCORIGINALINI",gxz:"ZV37ContaPagRecDtVencOriginalIni",gxold:"OV37ContaPagRecDtVencOriginalIni",gxvar:"AV37ContaPagRecDtVencOriginalIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ContaPagRecDtVencOriginalIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV37ContaPagRecDtVencOriginalIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCORIGINALINI",gx.O.AV37ContaPagRecDtVencOriginalIni,0)},c2v:function(){gx.O.AV37ContaPagRecDtVencOriginalIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCORIGINALINI")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK68", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCORIGINALFIM",gxz:"ZV38ContaPagRecDtVencOriginalFim",gxold:"OV38ContaPagRecDtVencOriginalFim",gxvar:"AV38ContaPagRecDtVencOriginalFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ContaPagRecDtVencOriginalFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV38ContaPagRecDtVencOriginalFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCORIGINALFIM",gx.O.AV38ContaPagRecDtVencOriginalFim,0)},c2v:function(){gx.O.AV38ContaPagRecDtVencOriginalFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCORIGINALFIM")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[165]={fld:"TABLE15",grid:0};
   GXValidFnc[168]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTOINI",gxz:"ZV33ContaPagRecDocumentoIni",gxold:"OV33ContaPagRecDocumentoIni",gxvar:"AV33ContaPagRecDocumentoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ContaPagRecDocumentoIni=Value},v2z:function(Value){gx.O.ZV33ContaPagRecDocumentoIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTOINI",gx.O.AV33ContaPagRecDocumentoIni,0)},c2v:function(){gx.O.AV33ContaPagRecDocumentoIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTOINI")},nac:gx.falseFn};
   GXValidFnc[169]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSEQDOCUMEINI",gxz:"ZV34ContaPagRecSeqDocumeIni",gxold:"OV34ContaPagRecSeqDocumeIni",gxvar:"AV34ContaPagRecSeqDocumeIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ContaPagRecSeqDocumeIni=Value},v2z:function(Value){gx.O.ZV34ContaPagRecSeqDocumeIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECSEQDOCUMEINI",gx.O.AV34ContaPagRecSeqDocumeIni,0)},c2v:function(){gx.O.AV34ContaPagRecSeqDocumeIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSEQDOCUMEINI")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTOFIM",gxz:"ZV35ContaPagRecDocumentoFim",gxold:"OV35ContaPagRecDocumentoFim",gxvar:"AV35ContaPagRecDocumentoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ContaPagRecDocumentoFim=Value},v2z:function(Value){gx.O.ZV35ContaPagRecDocumentoFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTOFIM",gx.O.AV35ContaPagRecDocumentoFim,0)},c2v:function(){gx.O.AV35ContaPagRecDocumentoFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[176]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSEQDOCUMEFIM",gxz:"ZV36ContaPagRecSeqDocumeFim",gxold:"OV36ContaPagRecSeqDocumeFim",gxvar:"AV36ContaPagRecSeqDocumeFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ContaPagRecSeqDocumeFim=Value},v2z:function(Value){gx.O.ZV36ContaPagRecSeqDocumeFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECSEQDOCUMEFIM",gx.O.AV36ContaPagRecSeqDocumeFim,0)},c2v:function(){gx.O.AV36ContaPagRecSeqDocumeFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSEQDOCUMEFIM")},nac:gx.falseFn};
   GXValidFnc[178]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[180]={fld:"TABLE22",grid:0};
   GXValidFnc[183]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOINI",gxz:"ZV41ContaPagRecDtVencimentoIni",gxold:"OV41ContaPagRecDtVencimentoIni",gxvar:"AV41ContaPagRecDtVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOINI",gx.O.AV41ContaPagRecDtVencimentoIni,0)},c2v:function(){gx.O.AV41ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[185]={fld:"TEXTBLOCK69", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOFIM",gxz:"ZV42ContaPagRecDtVencimentoFim",gxold:"OV42ContaPagRecDtVencimentoFim",gxvar:"AV42ContaPagRecDtVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV42ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOFIM",gx.O.AV42ContaPagRecDtVencimentoFim,0)},c2v:function(){gx.O.AV42ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[190]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[192]={fld:"TABLE16",grid:0};
   GXValidFnc[195]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDINI",gxz:"ZV39PessoaIdIni",gxold:"OV39PessoaIdIni",gxvar:"AV39PessoaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39PessoaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39PessoaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDINI",gx.O.AV39PessoaIdIni,0)},c2v:function(){gx.O.AV39PessoaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDFIM",gxz:"ZV40PessoaIdFim",gxold:"OV40PessoaIdFim",gxvar:"AV40PessoaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40PessoaIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40PessoaIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFIM",gx.O.AV40PessoaIdFim,0)},c2v:function(){gx.O.AV40PessoaIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[201]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[203]={fld:"TABLE23",grid:0};
   GXValidFnc[206]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPAGAMENTOINI",gxz:"ZV45ContaPagRecDtPagamentoIni",gxold:"OV45ContaPagRecDtPagamentoIni",gxvar:"AV45ContaPagRecDtPagamentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ContaPagRecDtPagamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45ContaPagRecDtPagamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPAGAMENTOINI",gx.O.AV45ContaPagRecDtPagamentoIni,0)},c2v:function(){gx.O.AV45ContaPagRecDtPagamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPAGAMENTOINI")},nac:gx.falseFn};
   GXValidFnc[208]={fld:"TEXTBLOCK70", format:0,grid:0};
   GXValidFnc[210]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPAGAMENTOFIM",gxz:"ZV46ContaPagRecDtPagamentoFim",gxold:"OV46ContaPagRecDtPagamentoFim",gxvar:"AV46ContaPagRecDtPagamentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ContaPagRecDtPagamentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV46ContaPagRecDtPagamentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPAGAMENTOFIM",gx.O.AV46ContaPagRecDtPagamentoFim,0)},c2v:function(){gx.O.AV46ContaPagRecDtPagamentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPAGAMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[213]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[215]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCNPJBASE",gxz:"ZV201CNPJBase",gxold:"OV201CNPJBase",gxvar:"AV201CNPJBase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV201CNPJBase=Value},v2z:function(Value){gx.O.ZV201CNPJBase=Value},v2c:function(){gx.fn.setControlValue("vCNPJBASE",gx.O.AV201CNPJBase,0)},c2v:function(){gx.O.AV201CNPJBase=this.val()},val:function(){return gx.fn.getControlValue("vCNPJBASE")},nac:gx.falseFn};
   GXValidFnc[217]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[219]={fld:"TABLE24",grid:0};
   GXValidFnc[222]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTLIBPAGTOINI",gxz:"ZV146ContaPagRecDtLibPagtoIni",gxold:"OV146ContaPagRecDtLibPagtoIni",gxvar:"AV146ContaPagRecDtLibPagtoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV146ContaPagRecDtLibPagtoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV146ContaPagRecDtLibPagtoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTLIBPAGTOINI",gx.O.AV146ContaPagRecDtLibPagtoIni,0)},c2v:function(){gx.O.AV146ContaPagRecDtLibPagtoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTLIBPAGTOINI")},nac:gx.falseFn};
   GXValidFnc[224]={fld:"TEXTBLOCK71", format:0,grid:0};
   GXValidFnc[226]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTLIBPAGTOFIM",gxz:"ZV147ContaPagRecDtLibPagtoFim",gxold:"OV147ContaPagRecDtLibPagtoFim",gxvar:"AV147ContaPagRecDtLibPagtoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147ContaPagRecDtLibPagtoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV147ContaPagRecDtLibPagtoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTLIBPAGTOFIM",gx.O.AV147ContaPagRecDtLibPagtoFim,0)},c2v:function(){gx.O.AV147ContaPagRecDtLibPagtoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTLIBPAGTOFIM")},nac:gx.falseFn};
   GXValidFnc[229]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[231]={fld:"TABLE17",grid:0};
   GXValidFnc[234]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFATURAINI",gxz:"ZV43ContaPagRecFaturaIni",gxold:"OV43ContaPagRecFaturaIni",gxvar:"AV43ContaPagRecFaturaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ContaPagRecFaturaIni=Value},v2z:function(Value){gx.O.ZV43ContaPagRecFaturaIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFATURAINI",gx.O.AV43ContaPagRecFaturaIni,0)},c2v:function(){gx.O.AV43ContaPagRecFaturaIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFATURAINI")},nac:gx.falseFn};
   GXValidFnc[236]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[238]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFATURAFIM",gxz:"ZV44ContaPagRecFaturaFim",gxold:"OV44ContaPagRecFaturaFim",gxvar:"AV44ContaPagRecFaturaFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ContaPagRecFaturaFim=Value},v2z:function(Value){gx.O.ZV44ContaPagRecFaturaFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFATURAFIM",gx.O.AV44ContaPagRecFaturaFim,0)},c2v:function(){gx.O.AV44ContaPagRecFaturaFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFATURAFIM")},nac:gx.falseFn};
   GXValidFnc[240]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[242]={fld:"TABLE25",grid:0};
   GXValidFnc[245]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAOCORRENCIADATAINI",gxz:"ZV49ContaOcorrenciaDataIni",gxold:"OV49ContaOcorrenciaDataIni",gxvar:"AV49ContaOcorrenciaDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaOcorrenciaDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV49ContaOcorrenciaDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAOCORRENCIADATAINI",gx.O.AV49ContaOcorrenciaDataIni,0)},c2v:function(){gx.O.AV49ContaOcorrenciaDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAOCORRENCIADATAINI")},nac:gx.falseFn};
   GXValidFnc[247]={fld:"TEXTBLOCK72", format:0,grid:0};
   GXValidFnc[249]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAOCORRENCIADATAFIM",gxz:"ZV50ContaOcorrenciaDataFim",gxold:"OV50ContaOcorrenciaDataFim",gxvar:"AV50ContaOcorrenciaDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ContaOcorrenciaDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV50ContaOcorrenciaDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAOCORRENCIADATAFIM",gx.O.AV50ContaOcorrenciaDataFim,0)},c2v:function(){gx.O.AV50ContaOcorrenciaDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAOCORRENCIADATAFIM")},nac:gx.falseFn};
   GXValidFnc[252]={fld:"TEXTBLOCK96", format:0,grid:0};
   GXValidFnc[254]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV47CaixaBancoId",gxold:"OV47CaixaBancoId",gxvar:"AV47CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV47CaixaBancoId,0)},c2v:function(){gx.O.AV47CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[255]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV48CaixaBancoDescricao",gxold:"OV48CaixaBancoDescricao",gxvar:"AV48CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV48CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV48CaixaBancoDescricao,0)},c2v:function(){gx.O.AV48CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[257]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[259]={fld:"TABLE19",grid:0};
   GXValidFnc[262]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTAINI",gxz:"ZV56ContaPagRecVlrContaIni",gxold:"OV56ContaPagRecVlrContaIni",gxvar:"AV56ContaPagRecVlrContaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ContaPagRecVlrContaIni=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV56ContaPagRecVlrContaIni=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRCONTAINI",gx.O.AV56ContaPagRecVlrContaIni,2,',')},c2v:function(){gx.O.AV56ContaPagRecVlrContaIni=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRCONTAINI",'.',',')},nac:gx.falseFn};
   GXValidFnc[264]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[266]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTAFIM",gxz:"ZV57ContaPagRecVlrContaFim",gxold:"OV57ContaPagRecVlrContaFim",gxvar:"AV57ContaPagRecVlrContaFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ContaPagRecVlrContaFim=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV57ContaPagRecVlrContaFim=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRCONTAFIM",gx.O.AV57ContaPagRecVlrContaFim,2,',')},c2v:function(){gx.O.AV57ContaPagRecVlrContaFim=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRCONTAFIM",'.',',')},nac:gx.falseFn};
   GXValidFnc[269]={fld:"TEXTBLOCK99", format:0,grid:0};
   GXValidFnc[271]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMDOCBAIXA",gxz:"ZV51ContaLancamDocBaixa",gxold:"OV51ContaLancamDocBaixa",gxvar:"AV51ContaLancamDocBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ContaLancamDocBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51ContaLancamDocBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMDOCBAIXA",gx.O.AV51ContaLancamDocBaixa,0)},c2v:function(){gx.O.AV51ContaLancamDocBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTALANCAMDOCBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[274]={fld:"TAB2",grid:0};
   GXValidFnc[277]={fld:"TABLE9",grid:0};
   GXValidFnc[280]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[291]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[293]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIAIDINI1",gxz:"ZV54OcorrenciaIdIni1",gxold:"OV54OcorrenciaIdIni1",gxvar:"AV54OcorrenciaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54OcorrenciaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54OcorrenciaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAIDINI1",gx.O.AV54OcorrenciaIdIni1,0)},c2v:function(){gx.O.AV54OcorrenciaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[295]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[297]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIAIDFIM1",gxz:"ZV55OcorrenciaIdFim1",gxold:"OV55OcorrenciaIdFim1",gxvar:"AV55OcorrenciaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55OcorrenciaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55OcorrenciaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAIDFIM1",gx.O.AV55OcorrenciaIdFim1,0)},c2v:function(){gx.O.AV55OcorrenciaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[300]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIAIDINI2",gxz:"ZV148OcorrenciaIdIni2",gxold:"OV148OcorrenciaIdIni2",gxvar:"AV148OcorrenciaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV148OcorrenciaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV148OcorrenciaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAIDINI2",gx.O.AV148OcorrenciaIdIni2,0)},c2v:function(){gx.O.AV148OcorrenciaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[302]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[304]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIAIDFIM2",gxz:"ZV149OcorrenciaIdFim2",gxold:"OV149OcorrenciaIdFim2",gxvar:"AV149OcorrenciaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV149OcorrenciaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV149OcorrenciaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAIDFIM2",gx.O.AV149OcorrenciaIdFim2,0)},c2v:function(){gx.O.AV149OcorrenciaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[308]={fld:"TEXTBLOCK102", format:0,grid:0};
   GXValidFnc[310]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETONUMEROINI",gxz:"ZV202BoletoNumeroIni",gxold:"OV202BoletoNumeroIni",gxvar:"AV202BoletoNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV202BoletoNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV202BoletoNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETONUMEROINI",gx.O.AV202BoletoNumeroIni,0)},c2v:function(){gx.O.AV202BoletoNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETONUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[312]={fld:"TEXTBLOCK106", format:0,grid:0};
   GXValidFnc[314]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETONUMEROFIM",gxz:"ZV203BoletoNumeroFim",gxold:"OV203BoletoNumeroFim",gxvar:"AV203BoletoNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV203BoletoNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV203BoletoNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETONUMEROFIM",gx.O.AV203BoletoNumeroFim,0)},c2v:function(){gx.O.AV203BoletoNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETONUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[317]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOIDINI",gxz:"ZV58BoletoIdIni",gxold:"OV58BoletoIdIni",gxvar:"AV58BoletoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58BoletoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58BoletoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETOIDINI",gx.O.AV58BoletoIdIni,0)},c2v:function(){gx.O.AV58BoletoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[320]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOIDFIM",gxz:"ZV59BoletoIdFim",gxold:"OV59BoletoIdFim",gxvar:"AV59BoletoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59BoletoIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59BoletoIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBOLETOIDFIM",gx.O.AV59BoletoIdFim,0)},c2v:function(){gx.O.AV59BoletoIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBOLETOIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[324]={fld:"TEXTBLOCK98", format:0,grid:0};
   GXValidFnc[326]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOIDINI",gxz:"ZV60BancoIdIni",gxold:"OV60BancoIdIni",gxvar:"AV60BancoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60BancoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60BancoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOIDINI",gx.O.AV60BancoIdIni,0)},c2v:function(){gx.O.AV60BancoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[327]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAIDINI",gxz:"ZV61BancoAgenciaIdIni",gxold:"OV61BancoAgenciaIdIni",gxvar:"AV61BancoAgenciaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61BancoAgenciaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61BancoAgenciaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAIDINI",gx.O.AV61BancoAgenciaIdIni,0)},c2v:function(){gx.O.AV61BancoAgenciaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[329]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[331]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOIDFIM",gxz:"ZV62BancoIdFim",gxold:"OV62BancoIdFim",gxvar:"AV62BancoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62BancoIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62BancoIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOIDFIM",gx.O.AV62BancoIdFim,0)},c2v:function(){gx.O.AV62BancoIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[332]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAIDFIM",gxz:"ZV63BancoAgenciaIdFim",gxold:"OV63BancoAgenciaIdFim",gxvar:"AV63BancoAgenciaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63BancoAgenciaIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63BancoAgenciaIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAIDFIM",gx.O.AV63BancoAgenciaIdFim,0)},c2v:function(){gx.O.AV63BancoAgenciaIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[338]={fld:"TABLE10",grid:0};
   GXValidFnc[343]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[345]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI1",gxz:"ZV64TipoCobrancaIdIni1",gxold:"OV64TipoCobrancaIdIni1",gxvar:"AV64TipoCobrancaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TipoCobrancaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64TipoCobrancaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI1",gx.O.AV64TipoCobrancaIdIni1,0)},c2v:function(){gx.O.AV64TipoCobrancaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[347]={fld:"TEXTBLOCK132", format:0,grid:0};
   GXValidFnc[349]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM1",gxz:"ZV65TipoCobrancaIdFim1",gxold:"OV65TipoCobrancaIdFim1",gxvar:"AV65TipoCobrancaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65TipoCobrancaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65TipoCobrancaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM1",gx.O.AV65TipoCobrancaIdFim1,0)},c2v:function(){gx.O.AV65TipoCobrancaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[352]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI2",gxz:"ZV66TipoCobrancaIdIni2",gxold:"OV66TipoCobrancaIdIni2",gxvar:"AV66TipoCobrancaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66TipoCobrancaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66TipoCobrancaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI2",gx.O.AV66TipoCobrancaIdIni2,0)},c2v:function(){gx.O.AV66TipoCobrancaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[354]={fld:"TEXTBLOCK103", format:0,grid:0};
   GXValidFnc[356]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM2",gxz:"ZV67TipoCobrancaIdFim2",gxold:"OV67TipoCobrancaIdFim2",gxvar:"AV67TipoCobrancaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TipoCobrancaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67TipoCobrancaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM2",gx.O.AV67TipoCobrancaIdFim2,0)},c2v:function(){gx.O.AV67TipoCobrancaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[359]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI3",gxz:"ZV68TipoCobrancaIdIni3",gxold:"OV68TipoCobrancaIdIni3",gxvar:"AV68TipoCobrancaIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TipoCobrancaIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68TipoCobrancaIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI3",gx.O.AV68TipoCobrancaIdIni3,0)},c2v:function(){gx.O.AV68TipoCobrancaIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[361]={fld:"TEXTBLOCK107", format:0,grid:0};
   GXValidFnc[363]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM3",gxz:"ZV69TipoCobrancaIdFim3",gxold:"OV69TipoCobrancaIdFim3",gxvar:"AV69TipoCobrancaIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69TipoCobrancaIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69TipoCobrancaIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM3",gx.O.AV69TipoCobrancaIdFim3,0)},c2v:function(){gx.O.AV69TipoCobrancaIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[366]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDINI4",gxz:"ZV70TipoCobrancaIdIni4",gxold:"OV70TipoCobrancaIdIni4",gxvar:"AV70TipoCobrancaIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70TipoCobrancaIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70TipoCobrancaIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDINI4",gx.O.AV70TipoCobrancaIdIni4,0)},c2v:function(){gx.O.AV70TipoCobrancaIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[368]={fld:"TEXTBLOCK110", format:0,grid:0};
   GXValidFnc[370]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAIDFIM4",gxz:"ZV71TipoCobrancaIdFim4",gxold:"OV71TipoCobrancaIdFim4",gxvar:"AV71TipoCobrancaIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71TipoCobrancaIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71TipoCobrancaIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAIDFIM4",gx.O.AV71TipoCobrancaIdFim4,0)},c2v:function(){gx.O.AV71TipoCobrancaIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[373]={fld:"TEXTBLOCK137", format:0,grid:0};
   GXValidFnc[375]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDINI1",gxz:"ZV72VendedorIdIni1",gxold:"OV72VendedorIdIni1",gxvar:"AV72VendedorIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72VendedorIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72VendedorIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDINI1",gx.O.AV72VendedorIdIni1,0)},c2v:function(){gx.O.AV72VendedorIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[377]={fld:"TEXTBLOCK146", format:0,grid:0};
   GXValidFnc[379]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDFIM1",gxz:"ZV73VendedorIdFim1",gxold:"OV73VendedorIdFim1",gxvar:"AV73VendedorIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73VendedorIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73VendedorIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDFIM1",gx.O.AV73VendedorIdFim1,0)},c2v:function(){gx.O.AV73VendedorIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[382]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDINI2",gxz:"ZV74VendedorIdIni2",gxold:"OV74VendedorIdIni2",gxvar:"AV74VendedorIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74VendedorIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74VendedorIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDINI2",gx.O.AV74VendedorIdIni2,0)},c2v:function(){gx.O.AV74VendedorIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[384]={fld:"TEXTBLOCK147", format:0,grid:0};
   GXValidFnc[386]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDFIM2",gxz:"ZV75VendedorIdFim2",gxold:"OV75VendedorIdFim2",gxvar:"AV75VendedorIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75VendedorIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75VendedorIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDFIM2",gx.O.AV75VendedorIdFim2,0)},c2v:function(){gx.O.AV75VendedorIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[389]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDINI3",gxz:"ZV76VendedorIdIni3",gxold:"OV76VendedorIdIni3",gxvar:"AV76VendedorIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76VendedorIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76VendedorIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDINI3",gx.O.AV76VendedorIdIni3,0)},c2v:function(){gx.O.AV76VendedorIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[391]={fld:"TEXTBLOCK148", format:0,grid:0};
   GXValidFnc[393]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDFIM3",gxz:"ZV77VendedorIdFim3",gxold:"OV77VendedorIdFim3",gxvar:"AV77VendedorIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77VendedorIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77VendedorIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDFIM3",gx.O.AV77VendedorIdFim3,0)},c2v:function(){gx.O.AV77VendedorIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[396]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDINI4",gxz:"ZV78VendedorIdIni4",gxold:"OV78VendedorIdIni4",gxvar:"AV78VendedorIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78VendedorIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78VendedorIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDINI4",gx.O.AV78VendedorIdIni4,0)},c2v:function(){gx.O.AV78VendedorIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[398]={fld:"TEXTBLOCK149", format:0,grid:0};
   GXValidFnc[400]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORIDFIM4",gxz:"ZV79VendedorIdFim4",gxold:"OV79VendedorIdFim4",gxvar:"AV79VendedorIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79VendedorIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79VendedorIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORIDFIM4",gx.O.AV79VendedorIdFim4,0)},c2v:function(){gx.O.AV79VendedorIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[403]={fld:"TEXTBLOCK150", format:0,grid:0};
   GXValidFnc[405]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI1",gxz:"ZV80EspecieIdIni1",gxold:"OV80EspecieIdIni1",gxvar:"AV80EspecieIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80EspecieIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80EspecieIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI1",gx.O.AV80EspecieIdIni1,0)},c2v:function(){gx.O.AV80EspecieIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[407]={fld:"TEXTBLOCK151", format:0,grid:0};
   GXValidFnc[409]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM1",gxz:"ZV81EspecieIdFim1",gxold:"OV81EspecieIdFim1",gxvar:"AV81EspecieIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81EspecieIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81EspecieIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM1",gx.O.AV81EspecieIdFim1,0)},c2v:function(){gx.O.AV81EspecieIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[412]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI2",gxz:"ZV82EspecieIdIni2",gxold:"OV82EspecieIdIni2",gxvar:"AV82EspecieIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82EspecieIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82EspecieIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI2",gx.O.AV82EspecieIdIni2,0)},c2v:function(){gx.O.AV82EspecieIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[414]={fld:"TEXTBLOCK152", format:0,grid:0};
   GXValidFnc[416]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM2",gxz:"ZV83EspecieIdFim2",gxold:"OV83EspecieIdFim2",gxvar:"AV83EspecieIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83EspecieIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83EspecieIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM2",gx.O.AV83EspecieIdFim2,0)},c2v:function(){gx.O.AV83EspecieIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[419]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI3",gxz:"ZV84EspecieIdIni3",gxold:"OV84EspecieIdIni3",gxvar:"AV84EspecieIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84EspecieIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84EspecieIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI3",gx.O.AV84EspecieIdIni3,0)},c2v:function(){gx.O.AV84EspecieIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[421]={fld:"TEXTBLOCK153", format:0,grid:0};
   GXValidFnc[423]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM3",gxz:"ZV85EspecieIdFim3",gxold:"OV85EspecieIdFim3",gxvar:"AV85EspecieIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85EspecieIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85EspecieIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM3",gx.O.AV85EspecieIdFim3,0)},c2v:function(){gx.O.AV85EspecieIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[426]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDINI4",gxz:"ZV86EspecieIdIni4",gxold:"OV86EspecieIdIni4",gxvar:"AV86EspecieIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86EspecieIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86EspecieIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDINI4",gx.O.AV86EspecieIdIni4,0)},c2v:function(){gx.O.AV86EspecieIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[428]={fld:"TEXTBLOCK154", format:0,grid:0};
   GXValidFnc[430]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEIDFIM4",gxz:"ZV87EspecieIdFim4",gxold:"OV87EspecieIdFim4",gxvar:"AV87EspecieIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87EspecieIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87EspecieIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEIDFIM4",gx.O.AV87EspecieIdFim4,0)},c2v:function(){gx.O.AV87EspecieIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[433]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[435]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI1",gxz:"ZV88FilialIdIni1",gxold:"OV88FilialIdIni1",gxvar:"AV88FilialIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88FilialIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88FilialIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI1",gx.O.AV88FilialIdIni1,0)},c2v:function(){gx.O.AV88FilialIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[437]={fld:"TEXTBLOCK155", format:0,grid:0};
   GXValidFnc[439]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM1",gxz:"ZV89FilialIdFim1",gxold:"OV89FilialIdFim1",gxvar:"AV89FilialIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89FilialIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89FilialIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM1",gx.O.AV89FilialIdFim1,0)},c2v:function(){gx.O.AV89FilialIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[442]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI2",gxz:"ZV90FilialIdIni2",gxold:"OV90FilialIdIni2",gxvar:"AV90FilialIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90FilialIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90FilialIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI2",gx.O.AV90FilialIdIni2,0)},c2v:function(){gx.O.AV90FilialIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[444]={fld:"TEXTBLOCK156", format:0,grid:0};
   GXValidFnc[446]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM2",gxz:"ZV91FilialIdFim2",gxold:"OV91FilialIdFim2",gxvar:"AV91FilialIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91FilialIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91FilialIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM2",gx.O.AV91FilialIdFim2,0)},c2v:function(){gx.O.AV91FilialIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[449]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI3",gxz:"ZV92FilialIdIni3",gxold:"OV92FilialIdIni3",gxvar:"AV92FilialIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92FilialIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92FilialIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI3",gx.O.AV92FilialIdIni3,0)},c2v:function(){gx.O.AV92FilialIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[451]={fld:"TEXTBLOCK157", format:0,grid:0};
   GXValidFnc[453]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM3",gxz:"ZV93FilialIdFim3",gxold:"OV93FilialIdFim3",gxvar:"AV93FilialIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93FilialIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93FilialIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM3",gx.O.AV93FilialIdFim3,0)},c2v:function(){gx.O.AV93FilialIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[456]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDINI4",gxz:"ZV94FilialIdIni4",gxold:"OV94FilialIdIni4",gxvar:"AV94FilialIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94FilialIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94FilialIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDINI4",gx.O.AV94FilialIdIni4,0)},c2v:function(){gx.O.AV94FilialIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[458]={fld:"TEXTBLOCK158", format:0,grid:0};
   GXValidFnc[460]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFIM4",gxz:"ZV95FilialIdFim4",gxold:"OV95FilialIdFim4",gxvar:"AV95FilialIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95FilialIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95FilialIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFIM4",gx.O.AV95FilialIdFim4,0)},c2v:function(){gx.O.AV95FilialIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[463]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[465]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI1",gxz:"ZV96TipoContaIdIni1",gxold:"OV96TipoContaIdIni1",gxvar:"AV96TipoContaIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96TipoContaIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96TipoContaIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI1",gx.O.AV96TipoContaIdIni1,0)},c2v:function(){gx.O.AV96TipoContaIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[467]={fld:"TEXTBLOCK159", format:0,grid:0};
   GXValidFnc[469]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM1",gxz:"ZV97TipoContaIdFim1",gxold:"OV97TipoContaIdFim1",gxvar:"AV97TipoContaIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97TipoContaIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97TipoContaIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM1",gx.O.AV97TipoContaIdFim1,0)},c2v:function(){gx.O.AV97TipoContaIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[472]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI2",gxz:"ZV98TipoContaIdIni2",gxold:"OV98TipoContaIdIni2",gxvar:"AV98TipoContaIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98TipoContaIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98TipoContaIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI2",gx.O.AV98TipoContaIdIni2,0)},c2v:function(){gx.O.AV98TipoContaIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[474]={fld:"TEXTBLOCK160", format:0,grid:0};
   GXValidFnc[476]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM2",gxz:"ZV99TipoContaIdFim2",gxold:"OV99TipoContaIdFim2",gxvar:"AV99TipoContaIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99TipoContaIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99TipoContaIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM2",gx.O.AV99TipoContaIdFim2,0)},c2v:function(){gx.O.AV99TipoContaIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[479]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI3",gxz:"ZV100TipoContaIdIni3",gxold:"OV100TipoContaIdIni3",gxvar:"AV100TipoContaIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100TipoContaIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100TipoContaIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI3",gx.O.AV100TipoContaIdIni3,0)},c2v:function(){gx.O.AV100TipoContaIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[481]={fld:"TEXTBLOCK161", format:0,grid:0};
   GXValidFnc[483]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM3",gxz:"ZV101TipoContaIdFim3",gxold:"OV101TipoContaIdFim3",gxvar:"AV101TipoContaIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101TipoContaIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101TipoContaIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM3",gx.O.AV101TipoContaIdFim3,0)},c2v:function(){gx.O.AV101TipoContaIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[486]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDINI4",gxz:"ZV102TipoContaIdIni4",gxold:"OV102TipoContaIdIni4",gxvar:"AV102TipoContaIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102TipoContaIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102TipoContaIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDINI4",gx.O.AV102TipoContaIdIni4,0)},c2v:function(){gx.O.AV102TipoContaIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[488]={fld:"TEXTBLOCK162", format:0,grid:0};
   GXValidFnc[490]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTAIDFIM4",gxz:"ZV103TipoContaIdFim4",gxold:"OV103TipoContaIdFim4",gxvar:"AV103TipoContaIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103TipoContaIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103TipoContaIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTAIDFIM4",gx.O.AV103TipoContaIdFim4,0)},c2v:function(){gx.O.AV103TipoContaIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTAIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[491]={fld:"TABLEPROCESSOCONTA",grid:0};
   GXValidFnc[498]={fld:"TXTCONVENIO", format:0,grid:0};
   GXValidFnc[500]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV104ConvenioId",gxold:"OV104ConvenioId",gxvar:"AV104ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV104ConvenioId,0)},c2v:function(){gx.O.AV104ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[501]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV105ConvenioDescricao",gxold:"OV105ConvenioDescricao",gxvar:"AV105ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV105ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV105ConvenioDescricao,0)},c2v:function(){gx.O.AV105ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[503]={fld:"TXTPROCESSOANO", format:0,grid:0};
   GXValidFnc[505]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPROCESSO",gxz:"ZV106ContaPagRecNoProcesso",gxold:"OV106ContaPagRecNoProcesso",gxvar:"AV106ContaPagRecNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106ContaPagRecNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV106ContaPagRecNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOPROCESSO",gx.O.AV106ContaPagRecNoProcesso,0)},c2v:function(){gx.O.AV106ContaPagRecNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[506]={fld:"TXTBARRAPROCESSOANO", format:0,grid:0};
   GXValidFnc[507]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECANOPROCESSO",gxz:"ZV107ContaPagRecAnoProcesso",gxold:"OV107ContaPagRecAnoProcesso",gxvar:"AV107ContaPagRecAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107ContaPagRecAnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107ContaPagRecAnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECANOPROCESSO",gx.O.AV107ContaPagRecAnoProcesso,0)},c2v:function(){gx.O.AV107ContaPagRecAnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[508]={fld:"PROMPTNOPROCESSO",grid:0};
   GXValidFnc[509]={fld:"TABLE7",grid:0};
   GXValidFnc[512]={fld:"TEXTBLOCK105", format:0,grid:0};
   GXValidFnc[514]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV108ContaContabilTradutor",gxold:"OV108ContaContabilTradutor",gxvar:"AV108ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV108ContaContabilTradutor,0)},c2v:function(){gx.O.AV108ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[515]={fld:"IMGCCONT1",grid:0};
   GXValidFnc[516]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV109ContaContabilNome",gxold:"OV109ContaContabilNome",gxvar:"AV109ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109ContaContabilNome=Value},v2z:function(Value){gx.O.ZV109ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV109ContaContabilNome,0)},c2v:function(){gx.O.AV109ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[517]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV112ContaContabilId",gxold:"OV112ContaContabilId",gxvar:"AV112ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112ContaContabilId=Value},v2z:function(Value){gx.O.ZV112ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV112ContaContabilId,0)},c2v:function(){gx.O.AV112ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[518]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilsituacao,isvalid:null,rgrid:[],fld:"vCONTACONTABILSITUACAO",gxz:"ZV192ContaContabilSituacao",gxold:"OV192ContaContabilSituacao",gxvar:"AV192ContaContabilSituacao",ucs:[],op:[518],ip:[518],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV192ContaContabilSituacao=Value},v2z:function(Value){gx.O.ZV192ContaContabilSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONTACONTABILSITUACAO",gx.O.AV192ContaContabilSituacao,"A")},c2v:function(){gx.O.AV192ContaContabilSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[519]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabiltipolancamento,isvalid:null,rgrid:[],fld:"vCONTACONTABILTIPOLANCAMENTO",gxz:"ZV191ContaContabilTipoLancamento",gxold:"OV191ContaContabilTipoLancamento",gxvar:"AV191ContaContabilTipoLancamento",ucs:[],op:[519],ip:[519],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV191ContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.ZV191ContaContabilTipoLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILTIPOLANCAMENTO",gx.O.AV191ContaContabilTipoLancamento)},c2v:function(){gx.O.AV191ContaContabilTipoLancamento=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTIPOLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[520]={fld:"TABLE8",grid:0};
   GXValidFnc[523]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[525]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDINI",gxz:"ZV110CentroCustoIdIni",gxold:"OV110CentroCustoIdIni",gxvar:"AV110CentroCustoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110CentroCustoIdIni=Value},v2z:function(Value){gx.O.ZV110CentroCustoIdIni=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDINI",gx.O.AV110CentroCustoIdIni,0)},c2v:function(){gx.O.AV110CentroCustoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDINI")},nac:gx.falseFn};
   GXValidFnc[527]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[529]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDFIM",gxz:"ZV111CentroCustoIdFim",gxold:"OV111CentroCustoIdFim",gxvar:"AV111CentroCustoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111CentroCustoIdFim=Value},v2z:function(Value){gx.O.ZV111CentroCustoIdFim=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDFIM",gx.O.AV111CentroCustoIdFim,0)},c2v:function(){gx.O.AV111CentroCustoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDFIM")},nac:gx.falseFn};
   GXValidFnc[532]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[534]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAIDINI",gxz:"ZV113NaturezaIdIni",gxold:"OV113NaturezaIdIni",gxvar:"AV113NaturezaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113NaturezaIdIni=Value},v2z:function(Value){gx.O.ZV113NaturezaIdIni=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAIDINI",gx.O.AV113NaturezaIdIni,0)},c2v:function(){gx.O.AV113NaturezaIdIni=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAIDINI")},nac:gx.falseFn};
   GXValidFnc[536]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[538]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAIDFIM",gxz:"ZV114NaturezaIdFim",gxold:"OV114NaturezaIdFim",gxvar:"AV114NaturezaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114NaturezaIdFim=Value},v2z:function(Value){gx.O.ZV114NaturezaIdFim=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAIDFIM",gx.O.AV114NaturezaIdFim,0)},c2v:function(){gx.O.AV114NaturezaIdFim=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAIDFIM")},nac:gx.falseFn};
   GXValidFnc[539]={fld:"TAB3",grid:0};
   GXValidFnc[542]={fld:"TABLE13",grid:0};
   GXValidFnc[545]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[563]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[565]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI1",gxz:"ZV153TipoLancamentoIdIni1",gxold:"OV153TipoLancamentoIdIni1",gxvar:"AV153TipoLancamentoIdIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV153TipoLancamentoIdIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV153TipoLancamentoIdIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI1",gx.O.AV153TipoLancamentoIdIni1,0)},c2v:function(){gx.O.AV153TipoLancamentoIdIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI1",'.')},nac:gx.falseFn};
   GXValidFnc[567]={fld:"TEXTBLOCK128", format:0,grid:0};
   GXValidFnc[569]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM1",gxz:"ZV154TipoLancamentoIdFim1",gxold:"OV154TipoLancamentoIdFim1",gxvar:"AV154TipoLancamentoIdFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV154TipoLancamentoIdFim1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV154TipoLancamentoIdFim1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM1",gx.O.AV154TipoLancamentoIdFim1,0)},c2v:function(){gx.O.AV154TipoLancamentoIdFim1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM1",'.')},nac:gx.falseFn};
   GXValidFnc[572]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI2",gxz:"ZV155TipoLancamentoIdIni2",gxold:"OV155TipoLancamentoIdIni2",gxvar:"AV155TipoLancamentoIdIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV155TipoLancamentoIdIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV155TipoLancamentoIdIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI2",gx.O.AV155TipoLancamentoIdIni2,0)},c2v:function(){gx.O.AV155TipoLancamentoIdIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI2",'.')},nac:gx.falseFn};
   GXValidFnc[574]={fld:"TEXTBLOCK129", format:0,grid:0};
   GXValidFnc[576]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM2",gxz:"ZV156TipoLancamentoIdFim2",gxold:"OV156TipoLancamentoIdFim2",gxvar:"AV156TipoLancamentoIdFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV156TipoLancamentoIdFim2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV156TipoLancamentoIdFim2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM2",gx.O.AV156TipoLancamentoIdFim2,0)},c2v:function(){gx.O.AV156TipoLancamentoIdFim2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM2",'.')},nac:gx.falseFn};
   GXValidFnc[579]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI3",gxz:"ZV157TipoLancamentoIdIni3",gxold:"OV157TipoLancamentoIdIni3",gxvar:"AV157TipoLancamentoIdIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV157TipoLancamentoIdIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV157TipoLancamentoIdIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI3",gx.O.AV157TipoLancamentoIdIni3,0)},c2v:function(){gx.O.AV157TipoLancamentoIdIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI3",'.')},nac:gx.falseFn};
   GXValidFnc[581]={fld:"TEXTBLOCK130", format:0,grid:0};
   GXValidFnc[583]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM3",gxz:"ZV158TipoLancamentoIdFim3",gxold:"OV158TipoLancamentoIdFim3",gxvar:"AV158TipoLancamentoIdFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV158TipoLancamentoIdFim3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV158TipoLancamentoIdFim3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM3",gx.O.AV158TipoLancamentoIdFim3,0)},c2v:function(){gx.O.AV158TipoLancamentoIdFim3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM3",'.')},nac:gx.falseFn};
   GXValidFnc[586]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI4",gxz:"ZV159TipoLancamentoIdIni4",gxold:"OV159TipoLancamentoIdIni4",gxvar:"AV159TipoLancamentoIdIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV159TipoLancamentoIdIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV159TipoLancamentoIdIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI4",gx.O.AV159TipoLancamentoIdIni4,0)},c2v:function(){gx.O.AV159TipoLancamentoIdIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI4",'.')},nac:gx.falseFn};
   GXValidFnc[588]={fld:"TEXTBLOCK131", format:0,grid:0};
   GXValidFnc[590]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM4",gxz:"ZV160TipoLancamentoIdFim4",gxold:"OV160TipoLancamentoIdFim4",gxvar:"AV160TipoLancamentoIdFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV160TipoLancamentoIdFim4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV160TipoLancamentoIdFim4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM4",gx.O.AV160TipoLancamentoIdFim4,0)},c2v:function(){gx.O.AV160TipoLancamentoIdFim4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM4",'.')},nac:gx.falseFn};
   GXValidFnc[594]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI5",gxz:"ZV161TipoLancamentoIdIni5",gxold:"OV161TipoLancamentoIdIni5",gxvar:"AV161TipoLancamentoIdIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV161TipoLancamentoIdIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV161TipoLancamentoIdIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI5",gx.O.AV161TipoLancamentoIdIni5,0)},c2v:function(){gx.O.AV161TipoLancamentoIdIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI5",'.')},nac:gx.falseFn};
   GXValidFnc[596]={fld:"TEXTBLOCK133", format:0,grid:0};
   GXValidFnc[598]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM5",gxz:"ZV162TipoLancamentoIdFim5",gxold:"OV162TipoLancamentoIdFim5",gxvar:"AV162TipoLancamentoIdFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV162TipoLancamentoIdFim5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV162TipoLancamentoIdFim5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM5",gx.O.AV162TipoLancamentoIdFim5,0)},c2v:function(){gx.O.AV162TipoLancamentoIdFim5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM5",'.')},nac:gx.falseFn};
   GXValidFnc[601]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI6",gxz:"ZV163TipoLancamentoIdIni6",gxold:"OV163TipoLancamentoIdIni6",gxvar:"AV163TipoLancamentoIdIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV163TipoLancamentoIdIni6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV163TipoLancamentoIdIni6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI6",gx.O.AV163TipoLancamentoIdIni6,0)},c2v:function(){gx.O.AV163TipoLancamentoIdIni6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI6",'.')},nac:gx.falseFn};
   GXValidFnc[603]={fld:"TEXTBLOCK134", format:0,grid:0};
   GXValidFnc[605]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM6",gxz:"ZV164TipoLancamentoIdFim6",gxold:"OV164TipoLancamentoIdFim6",gxvar:"AV164TipoLancamentoIdFim6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV164TipoLancamentoIdFim6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV164TipoLancamentoIdFim6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM6",gx.O.AV164TipoLancamentoIdFim6,0)},c2v:function(){gx.O.AV164TipoLancamentoIdFim6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM6",'.')},nac:gx.falseFn};
   GXValidFnc[608]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI7",gxz:"ZV165TipoLancamentoIdIni7",gxold:"OV165TipoLancamentoIdIni7",gxvar:"AV165TipoLancamentoIdIni7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV165TipoLancamentoIdIni7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV165TipoLancamentoIdIni7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI7",gx.O.AV165TipoLancamentoIdIni7,0)},c2v:function(){gx.O.AV165TipoLancamentoIdIni7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI7",'.')},nac:gx.falseFn};
   GXValidFnc[610]={fld:"TEXTBLOCK135", format:0,grid:0};
   GXValidFnc[612]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM7",gxz:"ZV166TipoLancamentoIdFim7",gxold:"OV166TipoLancamentoIdFim7",gxvar:"AV166TipoLancamentoIdFim7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV166TipoLancamentoIdFim7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV166TipoLancamentoIdFim7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM7",gx.O.AV166TipoLancamentoIdFim7,0)},c2v:function(){gx.O.AV166TipoLancamentoIdFim7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM7",'.')},nac:gx.falseFn};
   GXValidFnc[615]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI8",gxz:"ZV167TipoLancamentoIdIni8",gxold:"OV167TipoLancamentoIdIni8",gxvar:"AV167TipoLancamentoIdIni8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV167TipoLancamentoIdIni8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV167TipoLancamentoIdIni8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI8",gx.O.AV167TipoLancamentoIdIni8,0)},c2v:function(){gx.O.AV167TipoLancamentoIdIni8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI8",'.')},nac:gx.falseFn};
   GXValidFnc[617]={fld:"TEXTBLOCK136", format:0,grid:0};
   GXValidFnc[619]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM8",gxz:"ZV168TipoLancamentoIdFim8",gxold:"OV168TipoLancamentoIdFim8",gxvar:"AV168TipoLancamentoIdFim8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV168TipoLancamentoIdFim8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV168TipoLancamentoIdFim8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM8",gx.O.AV168TipoLancamentoIdFim8,0)},c2v:function(){gx.O.AV168TipoLancamentoIdFim8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM8",'.')},nac:gx.falseFn};
   GXValidFnc[623]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI9",gxz:"ZV169TipoLancamentoIdIni9",gxold:"OV169TipoLancamentoIdIni9",gxvar:"AV169TipoLancamentoIdIni9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV169TipoLancamentoIdIni9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV169TipoLancamentoIdIni9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI9",gx.O.AV169TipoLancamentoIdIni9,0)},c2v:function(){gx.O.AV169TipoLancamentoIdIni9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI9",'.')},nac:gx.falseFn};
   GXValidFnc[625]={fld:"TEXTBLOCK138", format:0,grid:0};
   GXValidFnc[627]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM9",gxz:"ZV170TipoLancamentoIdFim9",gxold:"OV170TipoLancamentoIdFim9",gxvar:"AV170TipoLancamentoIdFim9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV170TipoLancamentoIdFim9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV170TipoLancamentoIdFim9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM9",gx.O.AV170TipoLancamentoIdFim9,0)},c2v:function(){gx.O.AV170TipoLancamentoIdFim9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM9",'.')},nac:gx.falseFn};
   GXValidFnc[630]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI10",gxz:"ZV171TipoLancamentoIdIni10",gxold:"OV171TipoLancamentoIdIni10",gxvar:"AV171TipoLancamentoIdIni10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV171TipoLancamentoIdIni10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV171TipoLancamentoIdIni10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI10",gx.O.AV171TipoLancamentoIdIni10,0)},c2v:function(){gx.O.AV171TipoLancamentoIdIni10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI10",'.')},nac:gx.falseFn};
   GXValidFnc[632]={fld:"TEXTBLOCK139", format:0,grid:0};
   GXValidFnc[634]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM10",gxz:"ZV172TipoLancamentoIdFim10",gxold:"OV172TipoLancamentoIdFim10",gxvar:"AV172TipoLancamentoIdFim10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV172TipoLancamentoIdFim10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV172TipoLancamentoIdFim10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM10",gx.O.AV172TipoLancamentoIdFim10,0)},c2v:function(){gx.O.AV172TipoLancamentoIdFim10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM10",'.')},nac:gx.falseFn};
   GXValidFnc[637]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI11",gxz:"ZV173TipoLancamentoIdIni11",gxold:"OV173TipoLancamentoIdIni11",gxvar:"AV173TipoLancamentoIdIni11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV173TipoLancamentoIdIni11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV173TipoLancamentoIdIni11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI11",gx.O.AV173TipoLancamentoIdIni11,0)},c2v:function(){gx.O.AV173TipoLancamentoIdIni11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI11",'.')},nac:gx.falseFn};
   GXValidFnc[639]={fld:"TEXTBLOCK140", format:0,grid:0};
   GXValidFnc[641]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM11",gxz:"ZV174TipoLancamentoIdFim11",gxold:"OV174TipoLancamentoIdFim11",gxvar:"AV174TipoLancamentoIdFim11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV174TipoLancamentoIdFim11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV174TipoLancamentoIdFim11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM11",gx.O.AV174TipoLancamentoIdFim11,0)},c2v:function(){gx.O.AV174TipoLancamentoIdFim11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM11",'.')},nac:gx.falseFn};
   GXValidFnc[644]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI12",gxz:"ZV175TipoLancamentoIdIni12",gxold:"OV175TipoLancamentoIdIni12",gxvar:"AV175TipoLancamentoIdIni12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV175TipoLancamentoIdIni12=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV175TipoLancamentoIdIni12=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI12",gx.O.AV175TipoLancamentoIdIni12,0)},c2v:function(){gx.O.AV175TipoLancamentoIdIni12=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI12",'.')},nac:gx.falseFn};
   GXValidFnc[646]={fld:"TEXTBLOCK141", format:0,grid:0};
   GXValidFnc[648]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM12",gxz:"ZV176TipoLancamentoIdFim12",gxold:"OV176TipoLancamentoIdFim12",gxvar:"AV176TipoLancamentoIdFim12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV176TipoLancamentoIdFim12=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV176TipoLancamentoIdFim12=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM12",gx.O.AV176TipoLancamentoIdFim12,0)},c2v:function(){gx.O.AV176TipoLancamentoIdFim12=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM12",'.')},nac:gx.falseFn};
   GXValidFnc[652]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI13",gxz:"ZV177TipoLancamentoIdIni13",gxold:"OV177TipoLancamentoIdIni13",gxvar:"AV177TipoLancamentoIdIni13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV177TipoLancamentoIdIni13=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV177TipoLancamentoIdIni13=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI13",gx.O.AV177TipoLancamentoIdIni13,0)},c2v:function(){gx.O.AV177TipoLancamentoIdIni13=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI13",'.')},nac:gx.falseFn};
   GXValidFnc[654]={fld:"TEXTBLOCK142", format:0,grid:0};
   GXValidFnc[656]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM13",gxz:"ZV178TipoLancamentoIdFim13",gxold:"OV178TipoLancamentoIdFim13",gxvar:"AV178TipoLancamentoIdFim13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV178TipoLancamentoIdFim13=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV178TipoLancamentoIdFim13=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM13",gx.O.AV178TipoLancamentoIdFim13,0)},c2v:function(){gx.O.AV178TipoLancamentoIdFim13=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM13",'.')},nac:gx.falseFn};
   GXValidFnc[659]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI14",gxz:"ZV179TipoLancamentoIdIni14",gxold:"OV179TipoLancamentoIdIni14",gxvar:"AV179TipoLancamentoIdIni14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV179TipoLancamentoIdIni14=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV179TipoLancamentoIdIni14=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI14",gx.O.AV179TipoLancamentoIdIni14,0)},c2v:function(){gx.O.AV179TipoLancamentoIdIni14=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI14",'.')},nac:gx.falseFn};
   GXValidFnc[661]={fld:"TEXTBLOCK143", format:0,grid:0};
   GXValidFnc[663]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM14",gxz:"ZV180TipoLancamentoIdFim14",gxold:"OV180TipoLancamentoIdFim14",gxvar:"AV180TipoLancamentoIdFim14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180TipoLancamentoIdFim14=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV180TipoLancamentoIdFim14=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM14",gx.O.AV180TipoLancamentoIdFim14,0)},c2v:function(){gx.O.AV180TipoLancamentoIdFim14=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM14",'.')},nac:gx.falseFn};
   GXValidFnc[666]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI15",gxz:"ZV181TipoLancamentoIdIni15",gxold:"OV181TipoLancamentoIdIni15",gxvar:"AV181TipoLancamentoIdIni15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV181TipoLancamentoIdIni15=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV181TipoLancamentoIdIni15=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI15",gx.O.AV181TipoLancamentoIdIni15,0)},c2v:function(){gx.O.AV181TipoLancamentoIdIni15=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI15",'.')},nac:gx.falseFn};
   GXValidFnc[668]={fld:"TEXTBLOCK144", format:0,grid:0};
   GXValidFnc[670]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM15",gxz:"ZV182TipoLancamentoIdFim15",gxold:"OV182TipoLancamentoIdFim15",gxvar:"AV182TipoLancamentoIdFim15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV182TipoLancamentoIdFim15=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV182TipoLancamentoIdFim15=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM15",gx.O.AV182TipoLancamentoIdFim15,0)},c2v:function(){gx.O.AV182TipoLancamentoIdFim15=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM15",'.')},nac:gx.falseFn};
   GXValidFnc[673]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDINI16",gxz:"ZV183TipoLancamentoIdIni16",gxold:"OV183TipoLancamentoIdIni16",gxvar:"AV183TipoLancamentoIdIni16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV183TipoLancamentoIdIni16=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV183TipoLancamentoIdIni16=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDINI16",gx.O.AV183TipoLancamentoIdIni16,0)},c2v:function(){gx.O.AV183TipoLancamentoIdIni16=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDINI16",'.')},nac:gx.falseFn};
   GXValidFnc[675]={fld:"TEXTBLOCK145", format:0,grid:0};
   GXValidFnc[677]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOIDFIM16",gxz:"ZV184TipoLancamentoIdFim16",gxold:"OV184TipoLancamentoIdFim16",gxvar:"AV184TipoLancamentoIdFim16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV184TipoLancamentoIdFim16=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV184TipoLancamentoIdFim16=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOIDFIM16",gx.O.AV184TipoLancamentoIdFim16,0)},c2v:function(){gx.O.AV184TipoLancamentoIdFim16=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOIDFIM16",'.')},nac:gx.falseFn};
   GXValidFnc[686]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV137ConvenioEmpresaId",gxold:"OV137ConvenioEmpresaId",gxvar:"AV137ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV137ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV137ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV137ConvenioEmpresaId,0)},c2v:function(){gx.O.AV137ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[687]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV140EmpresaContaContabilEmpresaId",gxold:"OV140EmpresaContaContabilEmpresaId",gxvar:"AV140EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV140EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV140EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV140EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[688]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV136CaixaBancoEmpresaId",gxold:"OV136CaixaBancoEmpresaId",gxvar:"AV136CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV136CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV136CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV136CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV136CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[689]={fld:"JS", format:2,grid:0};
   GXValidFnc[691]={fld:"BTNHELP",grid:0};
   GXValidFnc[692]={fld:"PROMPT_CONTAPAGRECNUMEROINI",grid:0};
   GXValidFnc[693]={fld:"PROMPT_CONTAPAGRECNUMEROFIM",grid:0};
   GXValidFnc[694]={fld:"PROMPT_SIM_SIM_NAO_PESSOAIDINI",grid:0};
   GXValidFnc[695]={fld:"PROMPT_SIM_SIM_NAO_PESSOAIDFIM",grid:0};
   GXValidFnc[696]={fld:"PROMPT_CAIXABANCOID",grid:0};
   GXValidFnc[697]={fld:"PROMPT_OCORRENCIAIDINI1",grid:0};
   GXValidFnc[698]={fld:"PROMPT_OCORRENCIAIDFIM1",grid:0};
   GXValidFnc[699]={fld:"PROMPT_OCORRENCIAIDINI2",grid:0};
   GXValidFnc[700]={fld:"PROMPT_OCORRENCIAIDFIM2",grid:0};
   GXValidFnc[701]={fld:"PROMPT_BOLETOIDINI_BOLETONUMEROINI",grid:0};
   GXValidFnc[702]={fld:"PROMPT_BOLETOIDFIM_BOLETONUMEROFIM",grid:0};
   GXValidFnc[703]={fld:"PROMPT_BANCOIDINI",grid:0};
   GXValidFnc[704]={fld:"PROMPT_BANCOAGENCIAIDINI",grid:0};
   GXValidFnc[705]={fld:"PROMPT_BANCOIDFIM",grid:0};
   GXValidFnc[706]={fld:"PROMPT_BANCOAGENCIAIDFIM",grid:0};
   GXValidFnc[707]={fld:"PROMPT_TIPOCOBRANCAIDINI1",grid:0};
   GXValidFnc[708]={fld:"PROMPT_TIPOCOBRANCAIDFIM1",grid:0};
   GXValidFnc[709]={fld:"PROMPT_TIPOCOBRANCAIDINI2",grid:0};
   GXValidFnc[710]={fld:"PROMPT_TIPOCOBRANCAIDFIM2",grid:0};
   GXValidFnc[711]={fld:"PROMPT_TIPOCOBRANCAIDINI3",grid:0};
   GXValidFnc[712]={fld:"PROMPT_TIPOCOBRANCAIDFIM3",grid:0};
   GXValidFnc[713]={fld:"PROMPT_TIPOCOBRANCAIDINI4",grid:0};
   GXValidFnc[714]={fld:"PROMPT_TIPOCOBRANCAIDFIM4",grid:0};
   GXValidFnc[715]={fld:"PROMPT_VENDEDORIDINI1",grid:0};
   GXValidFnc[716]={fld:"PROMPT_VENDEDORIDFIM1",grid:0};
   GXValidFnc[717]={fld:"PROMPT_VENDEDORIDINI2",grid:0};
   GXValidFnc[718]={fld:"PROMPT_VENDEDORIDFIM2",grid:0};
   GXValidFnc[719]={fld:"PROMPT_VENDEDORIDINI3",grid:0};
   GXValidFnc[720]={fld:"PROMPT_VENDEDORIDFIM3",grid:0};
   GXValidFnc[721]={fld:"PROMPT_VENDEDORIDINI4",grid:0};
   GXValidFnc[722]={fld:"PROMPT_VENDEDORIDFIM4",grid:0};
   GXValidFnc[723]={fld:"PROMPT_ESPECIEIDINI1",grid:0};
   GXValidFnc[724]={fld:"PROMPT_ESPECIEIDFIM1",grid:0};
   GXValidFnc[725]={fld:"PROMPT_ESPECIEIDINI2",grid:0};
   GXValidFnc[726]={fld:"PROMPT_ESPECIEIDFIM2",grid:0};
   GXValidFnc[727]={fld:"PROMPT_ESPECIEIDINI3",grid:0};
   GXValidFnc[728]={fld:"PROMPT_ESPECIEIDFIM3",grid:0};
   GXValidFnc[729]={fld:"PROMPT_ESPECIEIDINI4",grid:0};
   GXValidFnc[730]={fld:"PROMPT_ESPECIEIDFIM4",grid:0};
   GXValidFnc[731]={fld:"PROMPT_FILIALIDINI1",grid:0};
   GXValidFnc[732]={fld:"PROMPT_FILIALIDFIM1",grid:0};
   GXValidFnc[733]={fld:"PROMPT_FILIALIDINI2",grid:0};
   GXValidFnc[734]={fld:"PROMPT_FILIALIDFIM2",grid:0};
   GXValidFnc[735]={fld:"PROMPT_FILIALIDINI3",grid:0};
   GXValidFnc[736]={fld:"PROMPT_FILIALIDFIM3",grid:0};
   GXValidFnc[737]={fld:"PROMPT_FILIALIDINI4",grid:0};
   GXValidFnc[738]={fld:"PROMPT_FILIALIDFIM4",grid:0};
   GXValidFnc[739]={fld:"PROMPT_TIPOCONTAIDINI1",grid:0};
   GXValidFnc[740]={fld:"PROMPT_TIPOCONTAIDFIM1",grid:0};
   GXValidFnc[741]={fld:"PROMPT_TIPOCONTAIDINI2",grid:0};
   GXValidFnc[742]={fld:"PROMPT_TIPOCONTAIDFIM2",grid:0};
   GXValidFnc[743]={fld:"PROMPT_TIPOCONTAIDINI3",grid:0};
   GXValidFnc[744]={fld:"PROMPT_TIPOCONTAIDFIM3",grid:0};
   GXValidFnc[745]={fld:"PROMPT_TIPOCONTAIDINI4",grid:0};
   GXValidFnc[746]={fld:"PROMPT_TIPOCONTAIDFIM4",grid:0};
   GXValidFnc[747]={fld:"PROMPT_CONVENIOID",grid:0};
   GXValidFnc[748]={fld:"PROMPT_CENTROCUSTOIDINI",grid:0};
   GXValidFnc[749]={fld:"PROMPT_CENTROCUSTOIDFIM",grid:0};
   GXValidFnc[750]={fld:"PROMPT_NATUREZAIDINI",grid:0};
   GXValidFnc[751]={fld:"PROMPT_NATUREZAIDFIM",grid:0};
   GXValidFnc[752]={fld:"PROMPT_TIPOLANCAMENTOIDINI1",grid:0};
   GXValidFnc[753]={fld:"PROMPT_TIPOLANCAMENTOIDFIM1",grid:0};
   GXValidFnc[754]={fld:"PROMPT_TIPOLANCAMENTOIDINI2",grid:0};
   GXValidFnc[755]={fld:"PROMPT_TIPOLANCAMENTOIDFIM2",grid:0};
   GXValidFnc[756]={fld:"PROMPT_TIPOLANCAMENTOIDINI3",grid:0};
   GXValidFnc[757]={fld:"PROMPT_TIPOLANCAMENTOIDFIM3",grid:0};
   GXValidFnc[758]={fld:"PROMPT_TIPOLANCAMENTOIDINI4",grid:0};
   GXValidFnc[759]={fld:"PROMPT_TIPOLANCAMENTOIDFIM4",grid:0};
   GXValidFnc[760]={fld:"PROMPT_TIPOLANCAMENTOIDINI5",grid:0};
   GXValidFnc[761]={fld:"PROMPT_TIPOLANCAMENTOIDFIM5",grid:0};
   GXValidFnc[762]={fld:"PROMPT_TIPOLANCAMENTOIDINI6",grid:0};
   GXValidFnc[763]={fld:"PROMPT_TIPOLANCAMENTOIDFIM6",grid:0};
   GXValidFnc[764]={fld:"PROMPT_TIPOLANCAMENTOIDINI7",grid:0};
   GXValidFnc[765]={fld:"PROMPT_TIPOLANCAMENTOIDFIM7",grid:0};
   GXValidFnc[766]={fld:"PROMPT_TIPOLANCAMENTOIDINI8",grid:0};
   GXValidFnc[767]={fld:"PROMPT_TIPOLANCAMENTOIDFIM8",grid:0};
   GXValidFnc[768]={fld:"PROMPT_TIPOLANCAMENTOIDINI9",grid:0};
   GXValidFnc[769]={fld:"PROMPT_TIPOLANCAMENTOIDFIM9",grid:0};
   GXValidFnc[770]={fld:"PROMPT_TIPOLANCAMENTOIDINI10",grid:0};
   GXValidFnc[771]={fld:"PROMPT_TIPOLANCAMENTOIDFIM10",grid:0};
   GXValidFnc[772]={fld:"PROMPT_TIPOLANCAMENTOIDINI11",grid:0};
   GXValidFnc[773]={fld:"PROMPT_TIPOLANCAMENTOIDFIM11",grid:0};
   GXValidFnc[774]={fld:"PROMPT_TIPOLANCAMENTOIDINI12",grid:0};
   GXValidFnc[775]={fld:"PROMPT_TIPOLANCAMENTOIDFIM12",grid:0};
   GXValidFnc[776]={fld:"PROMPT_TIPOLANCAMENTOIDINI13",grid:0};
   GXValidFnc[777]={fld:"PROMPT_TIPOLANCAMENTOIDFIM13",grid:0};
   GXValidFnc[778]={fld:"PROMPT_TIPOLANCAMENTOIDINI14",grid:0};
   GXValidFnc[779]={fld:"PROMPT_TIPOLANCAMENTOIDFIM14",grid:0};
   GXValidFnc[780]={fld:"PROMPT_TIPOLANCAMENTOIDINI15",grid:0};
   GXValidFnc[781]={fld:"PROMPT_TIPOLANCAMENTOIDFIM15",grid:0};
   GXValidFnc[782]={fld:"PROMPT_TIPOLANCAMENTOIDINI16",grid:0};
   GXValidFnc[783]={fld:"PROMPT_TIPOLANCAMENTOIDFIM16",grid:0};
   this.AV213TxtTela = "" ;
   this.ZV213TxtTela = "" ;
   this.OV213TxtTela = "" ;
   this.AV20Modelo = "" ;
   this.ZV20Modelo = "" ;
   this.OV20Modelo = "" ;
   this.AV119ContaLancamDataIni = gx.date.nullDate() ;
   this.ZV119ContaLancamDataIni = gx.date.nullDate() ;
   this.OV119ContaLancamDataIni = gx.date.nullDate() ;
   this.AV120ContaLancamDataFim = gx.date.nullDate() ;
   this.ZV120ContaLancamDataFim = gx.date.nullDate() ;
   this.OV120ContaLancamDataFim = gx.date.nullDate() ;
   this.AV117Totalizacao = "" ;
   this.ZV117Totalizacao = "" ;
   this.OV117Totalizacao = "" ;
   this.AV14Ordenacao = "" ;
   this.ZV14Ordenacao = "" ;
   this.OV14Ordenacao = "" ;
   this.AV122ImprimirInclusao = "" ;
   this.ZV122ImprimirInclusao = "" ;
   this.OV122ImprimirInclusao = "" ;
   this.AV126ImprimirLancEstorno = "" ;
   this.ZV126ImprimirLancEstorno = "" ;
   this.OV126ImprimirLancEstorno = "" ;
   this.AV22ImprimirCliFornNormal = "" ;
   this.ZV22ImprimirCliFornNormal = "" ;
   this.OV22ImprimirCliFornNormal = "" ;
   this.AV123ImprimirAcrescimo = "" ;
   this.ZV123ImprimirAcrescimo = "" ;
   this.OV123ImprimirAcrescimo = "" ;
   this.AV127ImprimirLancNormal = "" ;
   this.ZV127ImprimirLancNormal = "" ;
   this.OV127ImprimirLancNormal = "" ;
   this.AV23ImprimirCliFornCancelado = "" ;
   this.ZV23ImprimirCliFornCancelado = "" ;
   this.OV23ImprimirCliFornCancelado = "" ;
   this.AV124ImprimirDesconto = "" ;
   this.ZV124ImprimirDesconto = "" ;
   this.OV124ImprimirDesconto = "" ;
   this.AV118SaltarPagina = "" ;
   this.ZV118SaltarPagina = "" ;
   this.OV118SaltarPagina = "" ;
   this.AV24ImprimirCliFornSuspenso = "" ;
   this.ZV24ImprimirCliFornSuspenso = "" ;
   this.OV24ImprimirCliFornSuspenso = "" ;
   this.AV125ImprimirBaixa = "" ;
   this.ZV125ImprimirBaixa = "" ;
   this.OV125ImprimirBaixa = "" ;
   this.AV128ImprimirObsConta = "" ;
   this.ZV128ImprimirObsConta = "" ;
   this.OV128ImprimirObsConta = "" ;
   this.AV228SnGerarCSV = "" ;
   this.ZV228SnGerarCSV = "" ;
   this.OV228SnGerarCSV = "" ;
   this.AV25SituacaoConta = "" ;
   this.ZV25SituacaoConta = "" ;
   this.OV25SituacaoConta = "" ;
   this.AV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.ZV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.OV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.ZV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.OV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV26PessoaTipoPessoa = "" ;
   this.ZV26PessoaTipoPessoa = "" ;
   this.OV26PessoaTipoPessoa = "" ;
   this.AV31ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.ZV31ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.OV31ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.AV32ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.ZV32ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.OV32ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.AV29ContaPagRecNumeroIni = 0 ;
   this.ZV29ContaPagRecNumeroIni = 0 ;
   this.OV29ContaPagRecNumeroIni = 0 ;
   this.AV30ContaPagRecNumeroFim = 0 ;
   this.ZV30ContaPagRecNumeroFim = 0 ;
   this.OV30ContaPagRecNumeroFim = 0 ;
   this.AV37ContaPagRecDtVencOriginalIni = gx.date.nullDate() ;
   this.ZV37ContaPagRecDtVencOriginalIni = gx.date.nullDate() ;
   this.OV37ContaPagRecDtVencOriginalIni = gx.date.nullDate() ;
   this.AV38ContaPagRecDtVencOriginalFim = gx.date.nullDate() ;
   this.ZV38ContaPagRecDtVencOriginalFim = gx.date.nullDate() ;
   this.OV38ContaPagRecDtVencOriginalFim = gx.date.nullDate() ;
   this.AV33ContaPagRecDocumentoIni = "" ;
   this.ZV33ContaPagRecDocumentoIni = "" ;
   this.OV33ContaPagRecDocumentoIni = "" ;
   this.AV34ContaPagRecSeqDocumeIni = "" ;
   this.ZV34ContaPagRecSeqDocumeIni = "" ;
   this.OV34ContaPagRecSeqDocumeIni = "" ;
   this.AV35ContaPagRecDocumentoFim = "" ;
   this.ZV35ContaPagRecDocumentoFim = "" ;
   this.OV35ContaPagRecDocumentoFim = "" ;
   this.AV36ContaPagRecSeqDocumeFim = "" ;
   this.ZV36ContaPagRecSeqDocumeFim = "" ;
   this.OV36ContaPagRecSeqDocumeFim = "" ;
   this.AV41ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.ZV41ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.OV41ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV42ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.ZV42ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.OV42ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV39PessoaIdIni = 0 ;
   this.ZV39PessoaIdIni = 0 ;
   this.OV39PessoaIdIni = 0 ;
   this.AV40PessoaIdFim = 0 ;
   this.ZV40PessoaIdFim = 0 ;
   this.OV40PessoaIdFim = 0 ;
   this.AV45ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.ZV45ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.OV45ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.AV46ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.ZV46ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.OV46ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.AV201CNPJBase = "" ;
   this.ZV201CNPJBase = "" ;
   this.OV201CNPJBase = "" ;
   this.AV146ContaPagRecDtLibPagtoIni = gx.date.nullDate() ;
   this.ZV146ContaPagRecDtLibPagtoIni = gx.date.nullDate() ;
   this.OV146ContaPagRecDtLibPagtoIni = gx.date.nullDate() ;
   this.AV147ContaPagRecDtLibPagtoFim = gx.date.nullDate() ;
   this.ZV147ContaPagRecDtLibPagtoFim = gx.date.nullDate() ;
   this.OV147ContaPagRecDtLibPagtoFim = gx.date.nullDate() ;
   this.AV43ContaPagRecFaturaIni = "" ;
   this.ZV43ContaPagRecFaturaIni = "" ;
   this.OV43ContaPagRecFaturaIni = "" ;
   this.AV44ContaPagRecFaturaFim = "" ;
   this.ZV44ContaPagRecFaturaFim = "" ;
   this.OV44ContaPagRecFaturaFim = "" ;
   this.AV49ContaOcorrenciaDataIni = gx.date.nullDate() ;
   this.ZV49ContaOcorrenciaDataIni = gx.date.nullDate() ;
   this.OV49ContaOcorrenciaDataIni = gx.date.nullDate() ;
   this.AV50ContaOcorrenciaDataFim = gx.date.nullDate() ;
   this.ZV50ContaOcorrenciaDataFim = gx.date.nullDate() ;
   this.OV50ContaOcorrenciaDataFim = gx.date.nullDate() ;
   this.AV47CaixaBancoId = 0 ;
   this.ZV47CaixaBancoId = 0 ;
   this.OV47CaixaBancoId = 0 ;
   this.AV48CaixaBancoDescricao = "" ;
   this.ZV48CaixaBancoDescricao = "" ;
   this.OV48CaixaBancoDescricao = "" ;
   this.AV56ContaPagRecVlrContaIni = 0 ;
   this.ZV56ContaPagRecVlrContaIni = 0 ;
   this.OV56ContaPagRecVlrContaIni = 0 ;
   this.AV57ContaPagRecVlrContaFim = 0 ;
   this.ZV57ContaPagRecVlrContaFim = 0 ;
   this.OV57ContaPagRecVlrContaFim = 0 ;
   this.AV51ContaLancamDocBaixa = 0 ;
   this.ZV51ContaLancamDocBaixa = 0 ;
   this.OV51ContaLancamDocBaixa = 0 ;
   this.AV54OcorrenciaIdIni1 = 0 ;
   this.ZV54OcorrenciaIdIni1 = 0 ;
   this.OV54OcorrenciaIdIni1 = 0 ;
   this.AV55OcorrenciaIdFim1 = 0 ;
   this.ZV55OcorrenciaIdFim1 = 0 ;
   this.OV55OcorrenciaIdFim1 = 0 ;
   this.AV148OcorrenciaIdIni2 = 0 ;
   this.ZV148OcorrenciaIdIni2 = 0 ;
   this.OV148OcorrenciaIdIni2 = 0 ;
   this.AV149OcorrenciaIdFim2 = 0 ;
   this.ZV149OcorrenciaIdFim2 = 0 ;
   this.OV149OcorrenciaIdFim2 = 0 ;
   this.AV202BoletoNumeroIni = 0 ;
   this.ZV202BoletoNumeroIni = 0 ;
   this.OV202BoletoNumeroIni = 0 ;
   this.AV203BoletoNumeroFim = 0 ;
   this.ZV203BoletoNumeroFim = 0 ;
   this.OV203BoletoNumeroFim = 0 ;
   this.AV58BoletoIdIni = 0 ;
   this.ZV58BoletoIdIni = 0 ;
   this.OV58BoletoIdIni = 0 ;
   this.AV59BoletoIdFim = 0 ;
   this.ZV59BoletoIdFim = 0 ;
   this.OV59BoletoIdFim = 0 ;
   this.AV60BancoIdIni = 0 ;
   this.ZV60BancoIdIni = 0 ;
   this.OV60BancoIdIni = 0 ;
   this.AV61BancoAgenciaIdIni = 0 ;
   this.ZV61BancoAgenciaIdIni = 0 ;
   this.OV61BancoAgenciaIdIni = 0 ;
   this.AV62BancoIdFim = 0 ;
   this.ZV62BancoIdFim = 0 ;
   this.OV62BancoIdFim = 0 ;
   this.AV63BancoAgenciaIdFim = 0 ;
   this.ZV63BancoAgenciaIdFim = 0 ;
   this.OV63BancoAgenciaIdFim = 0 ;
   this.AV64TipoCobrancaIdIni1 = 0 ;
   this.ZV64TipoCobrancaIdIni1 = 0 ;
   this.OV64TipoCobrancaIdIni1 = 0 ;
   this.AV65TipoCobrancaIdFim1 = 0 ;
   this.ZV65TipoCobrancaIdFim1 = 0 ;
   this.OV65TipoCobrancaIdFim1 = 0 ;
   this.AV66TipoCobrancaIdIni2 = 0 ;
   this.ZV66TipoCobrancaIdIni2 = 0 ;
   this.OV66TipoCobrancaIdIni2 = 0 ;
   this.AV67TipoCobrancaIdFim2 = 0 ;
   this.ZV67TipoCobrancaIdFim2 = 0 ;
   this.OV67TipoCobrancaIdFim2 = 0 ;
   this.AV68TipoCobrancaIdIni3 = 0 ;
   this.ZV68TipoCobrancaIdIni3 = 0 ;
   this.OV68TipoCobrancaIdIni3 = 0 ;
   this.AV69TipoCobrancaIdFim3 = 0 ;
   this.ZV69TipoCobrancaIdFim3 = 0 ;
   this.OV69TipoCobrancaIdFim3 = 0 ;
   this.AV70TipoCobrancaIdIni4 = 0 ;
   this.ZV70TipoCobrancaIdIni4 = 0 ;
   this.OV70TipoCobrancaIdIni4 = 0 ;
   this.AV71TipoCobrancaIdFim4 = 0 ;
   this.ZV71TipoCobrancaIdFim4 = 0 ;
   this.OV71TipoCobrancaIdFim4 = 0 ;
   this.AV72VendedorIdIni1 = 0 ;
   this.ZV72VendedorIdIni1 = 0 ;
   this.OV72VendedorIdIni1 = 0 ;
   this.AV73VendedorIdFim1 = 0 ;
   this.ZV73VendedorIdFim1 = 0 ;
   this.OV73VendedorIdFim1 = 0 ;
   this.AV74VendedorIdIni2 = 0 ;
   this.ZV74VendedorIdIni2 = 0 ;
   this.OV74VendedorIdIni2 = 0 ;
   this.AV75VendedorIdFim2 = 0 ;
   this.ZV75VendedorIdFim2 = 0 ;
   this.OV75VendedorIdFim2 = 0 ;
   this.AV76VendedorIdIni3 = 0 ;
   this.ZV76VendedorIdIni3 = 0 ;
   this.OV76VendedorIdIni3 = 0 ;
   this.AV77VendedorIdFim3 = 0 ;
   this.ZV77VendedorIdFim3 = 0 ;
   this.OV77VendedorIdFim3 = 0 ;
   this.AV78VendedorIdIni4 = 0 ;
   this.ZV78VendedorIdIni4 = 0 ;
   this.OV78VendedorIdIni4 = 0 ;
   this.AV79VendedorIdFim4 = 0 ;
   this.ZV79VendedorIdFim4 = 0 ;
   this.OV79VendedorIdFim4 = 0 ;
   this.AV80EspecieIdIni1 = 0 ;
   this.ZV80EspecieIdIni1 = 0 ;
   this.OV80EspecieIdIni1 = 0 ;
   this.AV81EspecieIdFim1 = 0 ;
   this.ZV81EspecieIdFim1 = 0 ;
   this.OV81EspecieIdFim1 = 0 ;
   this.AV82EspecieIdIni2 = 0 ;
   this.ZV82EspecieIdIni2 = 0 ;
   this.OV82EspecieIdIni2 = 0 ;
   this.AV83EspecieIdFim2 = 0 ;
   this.ZV83EspecieIdFim2 = 0 ;
   this.OV83EspecieIdFim2 = 0 ;
   this.AV84EspecieIdIni3 = 0 ;
   this.ZV84EspecieIdIni3 = 0 ;
   this.OV84EspecieIdIni3 = 0 ;
   this.AV85EspecieIdFim3 = 0 ;
   this.ZV85EspecieIdFim3 = 0 ;
   this.OV85EspecieIdFim3 = 0 ;
   this.AV86EspecieIdIni4 = 0 ;
   this.ZV86EspecieIdIni4 = 0 ;
   this.OV86EspecieIdIni4 = 0 ;
   this.AV87EspecieIdFim4 = 0 ;
   this.ZV87EspecieIdFim4 = 0 ;
   this.OV87EspecieIdFim4 = 0 ;
   this.AV88FilialIdIni1 = 0 ;
   this.ZV88FilialIdIni1 = 0 ;
   this.OV88FilialIdIni1 = 0 ;
   this.AV89FilialIdFim1 = 0 ;
   this.ZV89FilialIdFim1 = 0 ;
   this.OV89FilialIdFim1 = 0 ;
   this.AV90FilialIdIni2 = 0 ;
   this.ZV90FilialIdIni2 = 0 ;
   this.OV90FilialIdIni2 = 0 ;
   this.AV91FilialIdFim2 = 0 ;
   this.ZV91FilialIdFim2 = 0 ;
   this.OV91FilialIdFim2 = 0 ;
   this.AV92FilialIdIni3 = 0 ;
   this.ZV92FilialIdIni3 = 0 ;
   this.OV92FilialIdIni3 = 0 ;
   this.AV93FilialIdFim3 = 0 ;
   this.ZV93FilialIdFim3 = 0 ;
   this.OV93FilialIdFim3 = 0 ;
   this.AV94FilialIdIni4 = 0 ;
   this.ZV94FilialIdIni4 = 0 ;
   this.OV94FilialIdIni4 = 0 ;
   this.AV95FilialIdFim4 = 0 ;
   this.ZV95FilialIdFim4 = 0 ;
   this.OV95FilialIdFim4 = 0 ;
   this.AV96TipoContaIdIni1 = 0 ;
   this.ZV96TipoContaIdIni1 = 0 ;
   this.OV96TipoContaIdIni1 = 0 ;
   this.AV97TipoContaIdFim1 = 0 ;
   this.ZV97TipoContaIdFim1 = 0 ;
   this.OV97TipoContaIdFim1 = 0 ;
   this.AV98TipoContaIdIni2 = 0 ;
   this.ZV98TipoContaIdIni2 = 0 ;
   this.OV98TipoContaIdIni2 = 0 ;
   this.AV99TipoContaIdFim2 = 0 ;
   this.ZV99TipoContaIdFim2 = 0 ;
   this.OV99TipoContaIdFim2 = 0 ;
   this.AV100TipoContaIdIni3 = 0 ;
   this.ZV100TipoContaIdIni3 = 0 ;
   this.OV100TipoContaIdIni3 = 0 ;
   this.AV101TipoContaIdFim3 = 0 ;
   this.ZV101TipoContaIdFim3 = 0 ;
   this.OV101TipoContaIdFim3 = 0 ;
   this.AV102TipoContaIdIni4 = 0 ;
   this.ZV102TipoContaIdIni4 = 0 ;
   this.OV102TipoContaIdIni4 = 0 ;
   this.AV103TipoContaIdFim4 = 0 ;
   this.ZV103TipoContaIdFim4 = 0 ;
   this.OV103TipoContaIdFim4 = 0 ;
   this.AV104ConvenioId = 0 ;
   this.ZV104ConvenioId = 0 ;
   this.OV104ConvenioId = 0 ;
   this.AV105ConvenioDescricao = "" ;
   this.ZV105ConvenioDescricao = "" ;
   this.OV105ConvenioDescricao = "" ;
   this.AV106ContaPagRecNoProcesso = 0 ;
   this.ZV106ContaPagRecNoProcesso = 0 ;
   this.OV106ContaPagRecNoProcesso = 0 ;
   this.AV107ContaPagRecAnoProcesso = 0 ;
   this.ZV107ContaPagRecAnoProcesso = 0 ;
   this.OV107ContaPagRecAnoProcesso = 0 ;
   this.AV108ContaContabilTradutor = 0 ;
   this.ZV108ContaContabilTradutor = 0 ;
   this.OV108ContaContabilTradutor = 0 ;
   this.AV109ContaContabilNome = "" ;
   this.ZV109ContaContabilNome = "" ;
   this.OV109ContaContabilNome = "" ;
   this.AV112ContaContabilId = "" ;
   this.ZV112ContaContabilId = "" ;
   this.OV112ContaContabilId = "" ;
   this.AV192ContaContabilSituacao = "" ;
   this.ZV192ContaContabilSituacao = "" ;
   this.OV192ContaContabilSituacao = "" ;
   this.AV191ContaContabilTipoLancamento = "" ;
   this.ZV191ContaContabilTipoLancamento = "" ;
   this.OV191ContaContabilTipoLancamento = "" ;
   this.AV110CentroCustoIdIni = "" ;
   this.ZV110CentroCustoIdIni = "" ;
   this.OV110CentroCustoIdIni = "" ;
   this.AV111CentroCustoIdFim = "" ;
   this.ZV111CentroCustoIdFim = "" ;
   this.OV111CentroCustoIdFim = "" ;
   this.AV113NaturezaIdIni = "" ;
   this.ZV113NaturezaIdIni = "" ;
   this.OV113NaturezaIdIni = "" ;
   this.AV114NaturezaIdFim = "" ;
   this.ZV114NaturezaIdFim = "" ;
   this.OV114NaturezaIdFim = "" ;
   this.AV153TipoLancamentoIdIni1 = 0 ;
   this.ZV153TipoLancamentoIdIni1 = 0 ;
   this.OV153TipoLancamentoIdIni1 = 0 ;
   this.AV154TipoLancamentoIdFim1 = 0 ;
   this.ZV154TipoLancamentoIdFim1 = 0 ;
   this.OV154TipoLancamentoIdFim1 = 0 ;
   this.AV155TipoLancamentoIdIni2 = 0 ;
   this.ZV155TipoLancamentoIdIni2 = 0 ;
   this.OV155TipoLancamentoIdIni2 = 0 ;
   this.AV156TipoLancamentoIdFim2 = 0 ;
   this.ZV156TipoLancamentoIdFim2 = 0 ;
   this.OV156TipoLancamentoIdFim2 = 0 ;
   this.AV157TipoLancamentoIdIni3 = 0 ;
   this.ZV157TipoLancamentoIdIni3 = 0 ;
   this.OV157TipoLancamentoIdIni3 = 0 ;
   this.AV158TipoLancamentoIdFim3 = 0 ;
   this.ZV158TipoLancamentoIdFim3 = 0 ;
   this.OV158TipoLancamentoIdFim3 = 0 ;
   this.AV159TipoLancamentoIdIni4 = 0 ;
   this.ZV159TipoLancamentoIdIni4 = 0 ;
   this.OV159TipoLancamentoIdIni4 = 0 ;
   this.AV160TipoLancamentoIdFim4 = 0 ;
   this.ZV160TipoLancamentoIdFim4 = 0 ;
   this.OV160TipoLancamentoIdFim4 = 0 ;
   this.AV161TipoLancamentoIdIni5 = 0 ;
   this.ZV161TipoLancamentoIdIni5 = 0 ;
   this.OV161TipoLancamentoIdIni5 = 0 ;
   this.AV162TipoLancamentoIdFim5 = 0 ;
   this.ZV162TipoLancamentoIdFim5 = 0 ;
   this.OV162TipoLancamentoIdFim5 = 0 ;
   this.AV163TipoLancamentoIdIni6 = 0 ;
   this.ZV163TipoLancamentoIdIni6 = 0 ;
   this.OV163TipoLancamentoIdIni6 = 0 ;
   this.AV164TipoLancamentoIdFim6 = 0 ;
   this.ZV164TipoLancamentoIdFim6 = 0 ;
   this.OV164TipoLancamentoIdFim6 = 0 ;
   this.AV165TipoLancamentoIdIni7 = 0 ;
   this.ZV165TipoLancamentoIdIni7 = 0 ;
   this.OV165TipoLancamentoIdIni7 = 0 ;
   this.AV166TipoLancamentoIdFim7 = 0 ;
   this.ZV166TipoLancamentoIdFim7 = 0 ;
   this.OV166TipoLancamentoIdFim7 = 0 ;
   this.AV167TipoLancamentoIdIni8 = 0 ;
   this.ZV167TipoLancamentoIdIni8 = 0 ;
   this.OV167TipoLancamentoIdIni8 = 0 ;
   this.AV168TipoLancamentoIdFim8 = 0 ;
   this.ZV168TipoLancamentoIdFim8 = 0 ;
   this.OV168TipoLancamentoIdFim8 = 0 ;
   this.AV169TipoLancamentoIdIni9 = 0 ;
   this.ZV169TipoLancamentoIdIni9 = 0 ;
   this.OV169TipoLancamentoIdIni9 = 0 ;
   this.AV170TipoLancamentoIdFim9 = 0 ;
   this.ZV170TipoLancamentoIdFim9 = 0 ;
   this.OV170TipoLancamentoIdFim9 = 0 ;
   this.AV171TipoLancamentoIdIni10 = 0 ;
   this.ZV171TipoLancamentoIdIni10 = 0 ;
   this.OV171TipoLancamentoIdIni10 = 0 ;
   this.AV172TipoLancamentoIdFim10 = 0 ;
   this.ZV172TipoLancamentoIdFim10 = 0 ;
   this.OV172TipoLancamentoIdFim10 = 0 ;
   this.AV173TipoLancamentoIdIni11 = 0 ;
   this.ZV173TipoLancamentoIdIni11 = 0 ;
   this.OV173TipoLancamentoIdIni11 = 0 ;
   this.AV174TipoLancamentoIdFim11 = 0 ;
   this.ZV174TipoLancamentoIdFim11 = 0 ;
   this.OV174TipoLancamentoIdFim11 = 0 ;
   this.AV175TipoLancamentoIdIni12 = 0 ;
   this.ZV175TipoLancamentoIdIni12 = 0 ;
   this.OV175TipoLancamentoIdIni12 = 0 ;
   this.AV176TipoLancamentoIdFim12 = 0 ;
   this.ZV176TipoLancamentoIdFim12 = 0 ;
   this.OV176TipoLancamentoIdFim12 = 0 ;
   this.AV177TipoLancamentoIdIni13 = 0 ;
   this.ZV177TipoLancamentoIdIni13 = 0 ;
   this.OV177TipoLancamentoIdIni13 = 0 ;
   this.AV178TipoLancamentoIdFim13 = 0 ;
   this.ZV178TipoLancamentoIdFim13 = 0 ;
   this.OV178TipoLancamentoIdFim13 = 0 ;
   this.AV179TipoLancamentoIdIni14 = 0 ;
   this.ZV179TipoLancamentoIdIni14 = 0 ;
   this.OV179TipoLancamentoIdIni14 = 0 ;
   this.AV180TipoLancamentoIdFim14 = 0 ;
   this.ZV180TipoLancamentoIdFim14 = 0 ;
   this.OV180TipoLancamentoIdFim14 = 0 ;
   this.AV181TipoLancamentoIdIni15 = 0 ;
   this.ZV181TipoLancamentoIdIni15 = 0 ;
   this.OV181TipoLancamentoIdIni15 = 0 ;
   this.AV182TipoLancamentoIdFim15 = 0 ;
   this.ZV182TipoLancamentoIdFim15 = 0 ;
   this.OV182TipoLancamentoIdFim15 = 0 ;
   this.AV183TipoLancamentoIdIni16 = 0 ;
   this.ZV183TipoLancamentoIdIni16 = 0 ;
   this.OV183TipoLancamentoIdIni16 = 0 ;
   this.AV184TipoLancamentoIdFim16 = 0 ;
   this.ZV184TipoLancamentoIdFim16 = 0 ;
   this.OV184TipoLancamentoIdFim16 = 0 ;
   this.AV137ConvenioEmpresaId = "" ;
   this.ZV137ConvenioEmpresaId = "" ;
   this.OV137ConvenioEmpresaId = "" ;
   this.AV140EmpresaContaContabilEmpresaId = "" ;
   this.ZV140EmpresaContaContabilEmpresaId = "" ;
   this.OV140EmpresaContaContabilEmpresaId = "" ;
   this.AV136CaixaBancoEmpresaId = "" ;
   this.ZV136CaixaBancoEmpresaId = "" ;
   this.OV136CaixaBancoEmpresaId = "" ;
   this.AV213TxtTela = "" ;
   this.AV229Tab = [ ] ;
   this.AV20Modelo = "" ;
   this.AV119ContaLancamDataIni = gx.date.nullDate() ;
   this.AV120ContaLancamDataFim = gx.date.nullDate() ;
   this.AV117Totalizacao = "" ;
   this.AV14Ordenacao = "" ;
   this.AV122ImprimirInclusao = "" ;
   this.AV126ImprimirLancEstorno = "" ;
   this.AV22ImprimirCliFornNormal = "" ;
   this.AV123ImprimirAcrescimo = "" ;
   this.AV127ImprimirLancNormal = "" ;
   this.AV23ImprimirCliFornCancelado = "" ;
   this.AV124ImprimirDesconto = "" ;
   this.AV118SaltarPagina = "" ;
   this.AV24ImprimirCliFornSuspenso = "" ;
   this.AV125ImprimirBaixa = "" ;
   this.AV128ImprimirObsConta = "" ;
   this.AV228SnGerarCSV = "" ;
   this.AV25SituacaoConta = "" ;
   this.AV27ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV28ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV26PessoaTipoPessoa = "" ;
   this.AV31ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.AV32ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.AV29ContaPagRecNumeroIni = 0 ;
   this.AV30ContaPagRecNumeroFim = 0 ;
   this.AV37ContaPagRecDtVencOriginalIni = gx.date.nullDate() ;
   this.AV38ContaPagRecDtVencOriginalFim = gx.date.nullDate() ;
   this.AV33ContaPagRecDocumentoIni = "" ;
   this.AV34ContaPagRecSeqDocumeIni = "" ;
   this.AV35ContaPagRecDocumentoFim = "" ;
   this.AV36ContaPagRecSeqDocumeFim = "" ;
   this.AV41ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV42ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV39PessoaIdIni = 0 ;
   this.AV40PessoaIdFim = 0 ;
   this.AV45ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.AV46ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.AV201CNPJBase = "" ;
   this.AV146ContaPagRecDtLibPagtoIni = gx.date.nullDate() ;
   this.AV147ContaPagRecDtLibPagtoFim = gx.date.nullDate() ;
   this.AV43ContaPagRecFaturaIni = "" ;
   this.AV44ContaPagRecFaturaFim = "" ;
   this.AV49ContaOcorrenciaDataIni = gx.date.nullDate() ;
   this.AV50ContaOcorrenciaDataFim = gx.date.nullDate() ;
   this.AV47CaixaBancoId = 0 ;
   this.AV48CaixaBancoDescricao = "" ;
   this.AV56ContaPagRecVlrContaIni = 0 ;
   this.AV57ContaPagRecVlrContaFim = 0 ;
   this.AV51ContaLancamDocBaixa = 0 ;
   this.AV54OcorrenciaIdIni1 = 0 ;
   this.AV55OcorrenciaIdFim1 = 0 ;
   this.AV148OcorrenciaIdIni2 = 0 ;
   this.AV149OcorrenciaIdFim2 = 0 ;
   this.AV202BoletoNumeroIni = 0 ;
   this.AV203BoletoNumeroFim = 0 ;
   this.AV58BoletoIdIni = 0 ;
   this.AV59BoletoIdFim = 0 ;
   this.AV60BancoIdIni = 0 ;
   this.AV61BancoAgenciaIdIni = 0 ;
   this.AV62BancoIdFim = 0 ;
   this.AV63BancoAgenciaIdFim = 0 ;
   this.AV64TipoCobrancaIdIni1 = 0 ;
   this.AV65TipoCobrancaIdFim1 = 0 ;
   this.AV66TipoCobrancaIdIni2 = 0 ;
   this.AV67TipoCobrancaIdFim2 = 0 ;
   this.AV68TipoCobrancaIdIni3 = 0 ;
   this.AV69TipoCobrancaIdFim3 = 0 ;
   this.AV70TipoCobrancaIdIni4 = 0 ;
   this.AV71TipoCobrancaIdFim4 = 0 ;
   this.AV72VendedorIdIni1 = 0 ;
   this.AV73VendedorIdFim1 = 0 ;
   this.AV74VendedorIdIni2 = 0 ;
   this.AV75VendedorIdFim2 = 0 ;
   this.AV76VendedorIdIni3 = 0 ;
   this.AV77VendedorIdFim3 = 0 ;
   this.AV78VendedorIdIni4 = 0 ;
   this.AV79VendedorIdFim4 = 0 ;
   this.AV80EspecieIdIni1 = 0 ;
   this.AV81EspecieIdFim1 = 0 ;
   this.AV82EspecieIdIni2 = 0 ;
   this.AV83EspecieIdFim2 = 0 ;
   this.AV84EspecieIdIni3 = 0 ;
   this.AV85EspecieIdFim3 = 0 ;
   this.AV86EspecieIdIni4 = 0 ;
   this.AV87EspecieIdFim4 = 0 ;
   this.AV88FilialIdIni1 = 0 ;
   this.AV89FilialIdFim1 = 0 ;
   this.AV90FilialIdIni2 = 0 ;
   this.AV91FilialIdFim2 = 0 ;
   this.AV92FilialIdIni3 = 0 ;
   this.AV93FilialIdFim3 = 0 ;
   this.AV94FilialIdIni4 = 0 ;
   this.AV95FilialIdFim4 = 0 ;
   this.AV96TipoContaIdIni1 = 0 ;
   this.AV97TipoContaIdFim1 = 0 ;
   this.AV98TipoContaIdIni2 = 0 ;
   this.AV99TipoContaIdFim2 = 0 ;
   this.AV100TipoContaIdIni3 = 0 ;
   this.AV101TipoContaIdFim3 = 0 ;
   this.AV102TipoContaIdIni4 = 0 ;
   this.AV103TipoContaIdFim4 = 0 ;
   this.AV104ConvenioId = 0 ;
   this.AV105ConvenioDescricao = "" ;
   this.AV106ContaPagRecNoProcesso = 0 ;
   this.AV107ContaPagRecAnoProcesso = 0 ;
   this.AV108ContaContabilTradutor = 0 ;
   this.AV109ContaContabilNome = "" ;
   this.AV112ContaContabilId = "" ;
   this.AV192ContaContabilSituacao = "" ;
   this.AV191ContaContabilTipoLancamento = "" ;
   this.AV110CentroCustoIdIni = "" ;
   this.AV111CentroCustoIdFim = "" ;
   this.AV113NaturezaIdIni = "" ;
   this.AV114NaturezaIdFim = "" ;
   this.AV153TipoLancamentoIdIni1 = 0 ;
   this.AV154TipoLancamentoIdFim1 = 0 ;
   this.AV155TipoLancamentoIdIni2 = 0 ;
   this.AV156TipoLancamentoIdFim2 = 0 ;
   this.AV157TipoLancamentoIdIni3 = 0 ;
   this.AV158TipoLancamentoIdFim3 = 0 ;
   this.AV159TipoLancamentoIdIni4 = 0 ;
   this.AV160TipoLancamentoIdFim4 = 0 ;
   this.AV161TipoLancamentoIdIni5 = 0 ;
   this.AV162TipoLancamentoIdFim5 = 0 ;
   this.AV163TipoLancamentoIdIni6 = 0 ;
   this.AV164TipoLancamentoIdFim6 = 0 ;
   this.AV165TipoLancamentoIdIni7 = 0 ;
   this.AV166TipoLancamentoIdFim7 = 0 ;
   this.AV167TipoLancamentoIdIni8 = 0 ;
   this.AV168TipoLancamentoIdFim8 = 0 ;
   this.AV169TipoLancamentoIdIni9 = 0 ;
   this.AV170TipoLancamentoIdFim9 = 0 ;
   this.AV171TipoLancamentoIdIni10 = 0 ;
   this.AV172TipoLancamentoIdFim10 = 0 ;
   this.AV173TipoLancamentoIdIni11 = 0 ;
   this.AV174TipoLancamentoIdFim11 = 0 ;
   this.AV175TipoLancamentoIdIni12 = 0 ;
   this.AV176TipoLancamentoIdFim12 = 0 ;
   this.AV177TipoLancamentoIdIni13 = 0 ;
   this.AV178TipoLancamentoIdFim13 = 0 ;
   this.AV179TipoLancamentoIdIni14 = 0 ;
   this.AV180TipoLancamentoIdFim14 = 0 ;
   this.AV181TipoLancamentoIdIni15 = 0 ;
   this.AV182TipoLancamentoIdFim15 = 0 ;
   this.AV183TipoLancamentoIdIni16 = 0 ;
   this.AV184TipoLancamentoIdFim16 = 0 ;
   this.AV137ConvenioEmpresaId = "" ;
   this.AV140EmpresaContaContabilEmpresaId = "" ;
   this.AV136CaixaBancoEmpresaId = "" ;
   this.AV142ContaPagRecPagRecParm = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.AV13OrdenacaoDescricao = "" ;
   this.Events = {"e11dn2_client": ["'FECHAR'", true] ,"e13dn2_client": ["ENTER", true] ,"e15dn2_client": ["'SALVARTXT'", true] ,"e16dn2_client": ["VTXTTELA.CLICK", true] ,"e17dn2_client": ["'EXCLUIRTXT'", true] ,"e19dn2_client": ["VMODELO.CLICK", true] ,"e20dn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV237Pgmname',fld:'vPGMNAME'},{av:'AV232SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV20Modelo',fld:'vMODELO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV213TxtTela',fld:'vTXTTELA'}],[{av:'AV213TxtTela',fld:'vTXTTELA'},{av:'AV243GXV2',fld:'vGXV2'},{av:'AV234SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'gx.fn.getCtrlProperty("vSALTARPAGINA","Visible")',ctrl:'vSALTARPAGINA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vIMPRIMIROBSCONTA","Visible")',ctrl:'vIMPRIMIROBSCONTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'AV117Totalizacao',fld:'vTOTALIZACAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'gx.fn.getCtrlProperty("TABLE6","Visible")',ctrl:'TABLE6',prop:'Visible'},{av:'AV88FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV89FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI1","Enabled")',ctrl:'vFILIALIDINI1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM1","Enabled")',ctrl:'vFILIALIDFIM1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI2","Enabled")',ctrl:'vFILIALIDINI2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM2","Enabled")',ctrl:'vFILIALIDFIM2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI3","Enabled")',ctrl:'vFILIALIDINI3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM3","Enabled")',ctrl:'vFILIALIDFIM3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDINI4","Enabled")',ctrl:'vFILIALIDINI4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILIALIDFIM4","Enabled")',ctrl:'vFILIALIDFIM4',prop:'Enabled'},{av:'AV242GXV1',fld:'vGXV1'},{av:'AV20Modelo',fld:'vMODELO'},{av:'AV122ImprimirInclusao',fld:'vIMPRIMIRINCLUSAO'},{av:'AV123ImprimirAcrescimo',fld:'vIMPRIMIRACRESCIMO'},{av:'AV124ImprimirDesconto',fld:'vIMPRIMIRDESCONTO'},{av:'AV125ImprimirBaixa',fld:'vIMPRIMIRBAIXA'},{av:'AV126ImprimirLancEstorno',fld:'vIMPRIMIRLANCESTORNO'},{av:'AV127ImprimirLancNormal',fld:'vIMPRIMIRLANCNORMAL'},{av:'AV118SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV128ImprimirObsConta',fld:'vIMPRIMIROBSCONTA'},{av:'AV22ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV23ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV24ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV153TipoLancamentoIdIni1',fld:'vTIPOLANCAMENTOIDINI1'},{av:'AV154TipoLancamentoIdFim1',fld:'vTIPOLANCAMENTOIDFIM1'},{av:'AV155TipoLancamentoIdIni2',fld:'vTIPOLANCAMENTOIDINI2'},{av:'AV156TipoLancamentoIdFim2',fld:'vTIPOLANCAMENTOIDFIM2'},{av:'AV157TipoLancamentoIdIni3',fld:'vTIPOLANCAMENTOIDINI3'},{av:'AV158TipoLancamentoIdFim3',fld:'vTIPOLANCAMENTOIDFIM3'},{av:'AV159TipoLancamentoIdIni4',fld:'vTIPOLANCAMENTOIDINI4'},{av:'AV160TipoLancamentoIdFim4',fld:'vTIPOLANCAMENTOIDFIM4'},{av:'AV161TipoLancamentoIdIni5',fld:'vTIPOLANCAMENTOIDINI5'},{av:'AV162TipoLancamentoIdFim5',fld:'vTIPOLANCAMENTOIDFIM5'},{av:'AV163TipoLancamentoIdIni6',fld:'vTIPOLANCAMENTOIDINI6'},{av:'AV164TipoLancamentoIdFim6',fld:'vTIPOLANCAMENTOIDFIM6'},{av:'AV165TipoLancamentoIdIni7',fld:'vTIPOLANCAMENTOIDINI7'},{av:'AV166TipoLancamentoIdFim7',fld:'vTIPOLANCAMENTOIDFIM7'},{av:'AV167TipoLancamentoIdIni8',fld:'vTIPOLANCAMENTOIDINI8'},{av:'AV168TipoLancamentoIdFim8',fld:'vTIPOLANCAMENTOIDFIM8'},{av:'AV169TipoLancamentoIdIni9',fld:'vTIPOLANCAMENTOIDINI9'},{av:'AV170TipoLancamentoIdFim9',fld:'vTIPOLANCAMENTOIDFIM9'},{av:'AV171TipoLancamentoIdIni10',fld:'vTIPOLANCAMENTOIDINI10'},{av:'AV172TipoLancamentoIdFim10',fld:'vTIPOLANCAMENTOIDFIM10'},{av:'AV173TipoLancamentoIdIni11',fld:'vTIPOLANCAMENTOIDINI11'},{av:'AV174TipoLancamentoIdFim11',fld:'vTIPOLANCAMENTOIDFIM11'},{av:'AV175TipoLancamentoIdIni12',fld:'vTIPOLANCAMENTOIDINI12'},{av:'AV176TipoLancamentoIdFim12',fld:'vTIPOLANCAMENTOIDFIM12'},{av:'AV177TipoLancamentoIdIni13',fld:'vTIPOLANCAMENTOIDINI13'},{av:'AV178TipoLancamentoIdFim13',fld:'vTIPOLANCAMENTOIDFIM13'},{av:'AV179TipoLancamentoIdIni14',fld:'vTIPOLANCAMENTOIDINI14'},{av:'AV180TipoLancamentoIdFim14',fld:'vTIPOLANCAMENTOIDFIM14'},{av:'AV181TipoLancamentoIdIni15',fld:'vTIPOLANCAMENTOIDINI15'},{av:'AV182TipoLancamentoIdFim15',fld:'vTIPOLANCAMENTOIDFIM15'},{av:'AV183TipoLancamentoIdIni16',fld:'vTIPOLANCAMENTOIDINI16'},{av:'AV184TipoLancamentoIdFim16',fld:'vTIPOLANCAMENTOIDFIM16'},{av:'AV228SnGerarCSV',fld:'vSNGERARCSV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV115Ok',fld:'vOK'},{av:'AV213TxtTela',fld:'vTXTTELA'},{av:'AV225SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV237Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV63BancoAgenciaIdFim',fld:'vBANCOAGENCIAIDFIM'},{av:'AV61BancoAgenciaIdIni',fld:'vBANCOAGENCIAIDINI'},{av:'AV62BancoIdFim',fld:'vBANCOIDFIM'},{av:'AV60BancoIdIni',fld:'vBANCOIDINI'},{av:'AV203BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV202BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV47CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV111CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV110CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV112ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV108ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV120ContaLancamDataFim',fld:'vCONTALANCAMDATAFIM'},{av:'AV119ContaLancamDataIni',fld:'vCONTALANCAMDATAINI'},{av:'AV51ContaLancamDocBaixa',fld:'vCONTALANCAMDOCBAIXA'},{av:'AV50ContaOcorrenciaDataFim',fld:'vCONTAOCORRENCIADATAFIM'},{av:'AV49ContaOcorrenciaDataIni',fld:'vCONTAOCORRENCIADATAINI'},{av:'AV107ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV35ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV33ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'},{av:'AV32ContaPagRecDtAceiteFim',fld:'vCONTAPAGRECDTACEITEFIM'},{av:'AV31ContaPagRecDtAceiteIni',fld:'vCONTAPAGRECDTACEITEINI'},{av:'AV28ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV27ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV147ContaPagRecDtLibPagtoFim',fld:'vCONTAPAGRECDTLIBPAGTOFIM'},{av:'AV146ContaPagRecDtLibPagtoIni',fld:'vCONTAPAGRECDTLIBPAGTOINI'},{av:'AV46ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV45ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV42ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV41ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV38ContaPagRecDtVencOriginalFim',fld:'vCONTAPAGRECDTVENCORIGINALFIM'},{av:'AV37ContaPagRecDtVencOriginalIni',fld:'vCONTAPAGRECDTVENCORIGINALINI'},{av:'AV44ContaPagRecFaturaFim',fld:'vCONTAPAGRECFATURAFIM'},{av:'AV43ContaPagRecFaturaIni',fld:'vCONTAPAGRECFATURAINI'},{av:'AV106ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV30ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV29ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV116ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV36ContaPagRecSeqDocumeFim',fld:'vCONTAPAGRECSEQDOCUMEFIM'},{av:'AV34ContaPagRecSeqDocumeIni',fld:'vCONTAPAGRECSEQDOCUMEINI'},{av:'AV57ContaPagRecVlrContaFim',fld:'vCONTAPAGRECVLRCONTAFIM'},{av:'AV56ContaPagRecVlrContaIni',fld:'vCONTAPAGRECVLRCONTAINI'},{av:'AV104ConvenioId',fld:'vCONVENIOID'},{av:'AV81EspecieIdFim1',fld:'vESPECIEIDFIM1'},{av:'AV83EspecieIdFim2',fld:'vESPECIEIDFIM2'},{av:'AV85EspecieIdFim3',fld:'vESPECIEIDFIM3'},{av:'AV87EspecieIdFim4',fld:'vESPECIEIDFIM4'},{av:'AV80EspecieIdIni1',fld:'vESPECIEIDINI1'},{av:'AV82EspecieIdIni2',fld:'vESPECIEIDINI2'},{av:'AV84EspecieIdIni3',fld:'vESPECIEIDINI3'},{av:'AV86EspecieIdIni4',fld:'vESPECIEIDINI4'},{av:'AV89FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'AV91FilialIdFim2',fld:'vFILIALIDFIM2'},{av:'AV93FilialIdFim3',fld:'vFILIALIDFIM3'},{av:'AV95FilialIdFim4',fld:'vFILIALIDFIM4'},{av:'AV88FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV90FilialIdIni2',fld:'vFILIALIDINI2'},{av:'AV92FilialIdIni3',fld:'vFILIALIDINI3'},{av:'AV94FilialIdIni4',fld:'vFILIALIDINI4'},{av:'AV123ImprimirAcrescimo',fld:'vIMPRIMIRACRESCIMO'},{av:'AV125ImprimirBaixa',fld:'vIMPRIMIRBAIXA'},{av:'AV23ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV22ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV24ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV124ImprimirDesconto',fld:'vIMPRIMIRDESCONTO'},{av:'AV122ImprimirInclusao',fld:'vIMPRIMIRINCLUSAO'},{av:'AV126ImprimirLancEstorno',fld:'vIMPRIMIRLANCESTORNO'},{av:'AV127ImprimirLancNormal',fld:'vIMPRIMIRLANCNORMAL'},{av:'AV128ImprimirObsConta',fld:'vIMPRIMIROBSCONTA'},{av:'AV20Modelo',fld:'vMODELO'},{av:'AV114NaturezaIdFim',fld:'vNATUREZAIDFIM'},{av:'AV113NaturezaIdIni',fld:'vNATUREZAIDINI'},{av:'AV55OcorrenciaIdFim1',fld:'vOCORRENCIAIDFIM1'},{av:'AV149OcorrenciaIdFim2',fld:'vOCORRENCIAIDFIM2'},{av:'AV54OcorrenciaIdIni1',fld:'vOCORRENCIAIDINI1'},{av:'AV148OcorrenciaIdIni2',fld:'vOCORRENCIAIDINI2'},{av:'AV40PessoaIdFim',fld:'vPESSOAIDFIM'},{av:'AV39PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV26PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV118SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV25SituacaoConta',fld:'vSITUACAOCONTA'},{av:'AV65TipoCobrancaIdFim1',fld:'vTIPOCOBRANCAIDFIM1'},{av:'AV67TipoCobrancaIdFim2',fld:'vTIPOCOBRANCAIDFIM2'},{av:'AV69TipoCobrancaIdFim3',fld:'vTIPOCOBRANCAIDFIM3'},{av:'AV71TipoCobrancaIdFim4',fld:'vTIPOCOBRANCAIDFIM4'},{av:'AV64TipoCobrancaIdIni1',fld:'vTIPOCOBRANCAIDINI1'},{av:'AV66TipoCobrancaIdIni2',fld:'vTIPOCOBRANCAIDINI2'},{av:'AV68TipoCobrancaIdIni3',fld:'vTIPOCOBRANCAIDINI3'},{av:'AV70TipoCobrancaIdIni4',fld:'vTIPOCOBRANCAIDINI4'},{av:'AV97TipoContaIdFim1',fld:'vTIPOCONTAIDFIM1'},{av:'AV99TipoContaIdFim2',fld:'vTIPOCONTAIDFIM2'},{av:'AV101TipoContaIdFim3',fld:'vTIPOCONTAIDFIM3'},{av:'AV103TipoContaIdFim4',fld:'vTIPOCONTAIDFIM4'},{av:'AV96TipoContaIdIni1',fld:'vTIPOCONTAIDINI1'},{av:'AV98TipoContaIdIni2',fld:'vTIPOCONTAIDINI2'},{av:'AV100TipoContaIdIni3',fld:'vTIPOCONTAIDINI3'},{av:'AV102TipoContaIdIni4',fld:'vTIPOCONTAIDINI4'},{av:'AV117Totalizacao',fld:'vTOTALIZACAO'},{av:'AV73VendedorIdFim1',fld:'vVENDEDORIDFIM1'},{av:'AV75VendedorIdFim2',fld:'vVENDEDORIDFIM2'},{av:'AV77VendedorIdFim3',fld:'vVENDEDORIDFIM3'},{av:'AV79VendedorIdFim4',fld:'vVENDEDORIDFIM4'},{av:'AV72VendedorIdIni1',fld:'vVENDEDORIDINI1'},{av:'AV74VendedorIdIni2',fld:'vVENDEDORIDINI2'},{av:'AV76VendedorIdIni3',fld:'vVENDEDORIDINI3'},{av:'AV78VendedorIdIni4',fld:'vVENDEDORIDINI4'},{av:'AV153TipoLancamentoIdIni1',fld:'vTIPOLANCAMENTOIDINI1'},{av:'AV155TipoLancamentoIdIni2',fld:'vTIPOLANCAMENTOIDINI2'},{av:'AV157TipoLancamentoIdIni3',fld:'vTIPOLANCAMENTOIDINI3'},{av:'AV159TipoLancamentoIdIni4',fld:'vTIPOLANCAMENTOIDINI4'},{av:'AV161TipoLancamentoIdIni5',fld:'vTIPOLANCAMENTOIDINI5'},{av:'AV163TipoLancamentoIdIni6',fld:'vTIPOLANCAMENTOIDINI6'},{av:'AV165TipoLancamentoIdIni7',fld:'vTIPOLANCAMENTOIDINI7'},{av:'AV167TipoLancamentoIdIni8',fld:'vTIPOLANCAMENTOIDINI8'},{av:'AV169TipoLancamentoIdIni9',fld:'vTIPOLANCAMENTOIDINI9'},{av:'AV171TipoLancamentoIdIni10',fld:'vTIPOLANCAMENTOIDINI10'},{av:'AV173TipoLancamentoIdIni11',fld:'vTIPOLANCAMENTOIDINI11'},{av:'AV175TipoLancamentoIdIni12',fld:'vTIPOLANCAMENTOIDINI12'},{av:'AV177TipoLancamentoIdIni13',fld:'vTIPOLANCAMENTOIDINI13'},{av:'AV179TipoLancamentoIdIni14',fld:'vTIPOLANCAMENTOIDINI14'},{av:'AV181TipoLancamentoIdIni15',fld:'vTIPOLANCAMENTOIDINI15'},{av:'AV183TipoLancamentoIdIni16',fld:'vTIPOLANCAMENTOIDINI16'},{av:'AV154TipoLancamentoIdFim1',fld:'vTIPOLANCAMENTOIDFIM1'},{av:'AV156TipoLancamentoIdFim2',fld:'vTIPOLANCAMENTOIDFIM2'},{av:'AV158TipoLancamentoIdFim3',fld:'vTIPOLANCAMENTOIDFIM3'},{av:'AV160TipoLancamentoIdFim4',fld:'vTIPOLANCAMENTOIDFIM4'},{av:'AV162TipoLancamentoIdFim5',fld:'vTIPOLANCAMENTOIDFIM5'},{av:'AV164TipoLancamentoIdFim6',fld:'vTIPOLANCAMENTOIDFIM6'},{av:'AV166TipoLancamentoIdFim7',fld:'vTIPOLANCAMENTOIDFIM7'},{av:'AV168TipoLancamentoIdFim8',fld:'vTIPOLANCAMENTOIDFIM8'},{av:'AV170TipoLancamentoIdFim9',fld:'vTIPOLANCAMENTOIDFIM9'},{av:'AV172TipoLancamentoIdFim10',fld:'vTIPOLANCAMENTOIDFIM10'},{av:'AV174TipoLancamentoIdFim11',fld:'vTIPOLANCAMENTOIDFIM11'},{av:'AV176TipoLancamentoIdFim12',fld:'vTIPOLANCAMENTOIDFIM12'},{av:'AV178TipoLancamentoIdFim13',fld:'vTIPOLANCAMENTOIDFIM13'},{av:'AV180TipoLancamentoIdFim14',fld:'vTIPOLANCAMENTOIDFIM14'},{av:'AV182TipoLancamentoIdFim15',fld:'vTIPOLANCAMENTOIDFIM15'},{av:'AV184TipoLancamentoIdFim16',fld:'vTIPOLANCAMENTOIDFIM16'},{av:'AV201CNPJBase',fld:'vCNPJBASE'},{av:'AV228SnGerarCSV',fld:'vSNGERARCSV'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV136CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV137ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV140EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV228SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV201CNPJBase',fld:'vCNPJBASE'},{av:'AV184TipoLancamentoIdFim16',fld:'vTIPOLANCAMENTOIDFIM16'},{av:'AV182TipoLancamentoIdFim15',fld:'vTIPOLANCAMENTOIDFIM15'},{av:'AV180TipoLancamentoIdFim14',fld:'vTIPOLANCAMENTOIDFIM14'},{av:'AV178TipoLancamentoIdFim13',fld:'vTIPOLANCAMENTOIDFIM13'},{av:'AV176TipoLancamentoIdFim12',fld:'vTIPOLANCAMENTOIDFIM12'},{av:'AV174TipoLancamentoIdFim11',fld:'vTIPOLANCAMENTOIDFIM11'},{av:'AV172TipoLancamentoIdFim10',fld:'vTIPOLANCAMENTOIDFIM10'},{av:'AV170TipoLancamentoIdFim9',fld:'vTIPOLANCAMENTOIDFIM9'},{av:'AV168TipoLancamentoIdFim8',fld:'vTIPOLANCAMENTOIDFIM8'},{av:'AV166TipoLancamentoIdFim7',fld:'vTIPOLANCAMENTOIDFIM7'},{av:'AV164TipoLancamentoIdFim6',fld:'vTIPOLANCAMENTOIDFIM6'},{av:'AV162TipoLancamentoIdFim5',fld:'vTIPOLANCAMENTOIDFIM5'},{av:'AV160TipoLancamentoIdFim4',fld:'vTIPOLANCAMENTOIDFIM4'},{av:'AV158TipoLancamentoIdFim3',fld:'vTIPOLANCAMENTOIDFIM3'},{av:'AV156TipoLancamentoIdFim2',fld:'vTIPOLANCAMENTOIDFIM2'},{av:'AV154TipoLancamentoIdFim1',fld:'vTIPOLANCAMENTOIDFIM1'},{av:'AV183TipoLancamentoIdIni16',fld:'vTIPOLANCAMENTOIDINI16'},{av:'AV181TipoLancamentoIdIni15',fld:'vTIPOLANCAMENTOIDINI15'},{av:'AV179TipoLancamentoIdIni14',fld:'vTIPOLANCAMENTOIDINI14'},{av:'AV177TipoLancamentoIdIni13',fld:'vTIPOLANCAMENTOIDINI13'},{av:'AV175TipoLancamentoIdIni12',fld:'vTIPOLANCAMENTOIDINI12'},{av:'AV173TipoLancamentoIdIni11',fld:'vTIPOLANCAMENTOIDINI11'},{av:'AV171TipoLancamentoIdIni10',fld:'vTIPOLANCAMENTOIDINI10'},{av:'AV169TipoLancamentoIdIni9',fld:'vTIPOLANCAMENTOIDINI9'},{av:'AV167TipoLancamentoIdIni8',fld:'vTIPOLANCAMENTOIDINI8'},{av:'AV165TipoLancamentoIdIni7',fld:'vTIPOLANCAMENTOIDINI7'},{av:'AV163TipoLancamentoIdIni6',fld:'vTIPOLANCAMENTOIDINI6'},{av:'AV161TipoLancamentoIdIni5',fld:'vTIPOLANCAMENTOIDINI5'},{av:'AV159TipoLancamentoIdIni4',fld:'vTIPOLANCAMENTOIDINI4'},{av:'AV157TipoLancamentoIdIni3',fld:'vTIPOLANCAMENTOIDINI3'},{av:'AV155TipoLancamentoIdIni2',fld:'vTIPOLANCAMENTOIDINI2'},{av:'AV153TipoLancamentoIdIni1',fld:'vTIPOLANCAMENTOIDINI1'},{av:'AV78VendedorIdIni4',fld:'vVENDEDORIDINI4'},{av:'AV76VendedorIdIni3',fld:'vVENDEDORIDINI3'},{av:'AV74VendedorIdIni2',fld:'vVENDEDORIDINI2'},{av:'AV72VendedorIdIni1',fld:'vVENDEDORIDINI1'},{av:'AV79VendedorIdFim4',fld:'vVENDEDORIDFIM4'},{av:'AV77VendedorIdFim3',fld:'vVENDEDORIDFIM3'},{av:'AV75VendedorIdFim2',fld:'vVENDEDORIDFIM2'},{av:'AV73VendedorIdFim1',fld:'vVENDEDORIDFIM1'},{av:'AV117Totalizacao',fld:'vTOTALIZACAO'},{av:'AV102TipoContaIdIni4',fld:'vTIPOCONTAIDINI4'},{av:'AV100TipoContaIdIni3',fld:'vTIPOCONTAIDINI3'},{av:'AV98TipoContaIdIni2',fld:'vTIPOCONTAIDINI2'},{av:'AV96TipoContaIdIni1',fld:'vTIPOCONTAIDINI1'},{av:'AV103TipoContaIdFim4',fld:'vTIPOCONTAIDFIM4'},{av:'AV101TipoContaIdFim3',fld:'vTIPOCONTAIDFIM3'},{av:'AV99TipoContaIdFim2',fld:'vTIPOCONTAIDFIM2'},{av:'AV97TipoContaIdFim1',fld:'vTIPOCONTAIDFIM1'},{av:'AV70TipoCobrancaIdIni4',fld:'vTIPOCOBRANCAIDINI4'},{av:'AV68TipoCobrancaIdIni3',fld:'vTIPOCOBRANCAIDINI3'},{av:'AV66TipoCobrancaIdIni2',fld:'vTIPOCOBRANCAIDINI2'},{av:'AV64TipoCobrancaIdIni1',fld:'vTIPOCOBRANCAIDINI1'},{av:'AV71TipoCobrancaIdFim4',fld:'vTIPOCOBRANCAIDFIM4'},{av:'AV69TipoCobrancaIdFim3',fld:'vTIPOCOBRANCAIDFIM3'},{av:'AV67TipoCobrancaIdFim2',fld:'vTIPOCOBRANCAIDFIM2'},{av:'AV65TipoCobrancaIdFim1',fld:'vTIPOCOBRANCAIDFIM1'},{av:'AV25SituacaoConta',fld:'vSITUACAOCONTA'},{av:'AV118SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV26PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'},{av:'AV39PessoaIdIni',fld:'vPESSOAIDINI'},{av:'AV40PessoaIdFim',fld:'vPESSOAIDFIM'},{av:'AV148OcorrenciaIdIni2',fld:'vOCORRENCIAIDINI2'},{av:'AV54OcorrenciaIdIni1',fld:'vOCORRENCIAIDINI1'},{av:'AV149OcorrenciaIdFim2',fld:'vOCORRENCIAIDFIM2'},{av:'AV55OcorrenciaIdFim1',fld:'vOCORRENCIAIDFIM1'},{av:'AV113NaturezaIdIni',fld:'vNATUREZAIDINI'},{av:'AV114NaturezaIdFim',fld:'vNATUREZAIDFIM'},{av:'AV20Modelo',fld:'vMODELO'},{av:'AV128ImprimirObsConta',fld:'vIMPRIMIROBSCONTA'},{av:'AV127ImprimirLancNormal',fld:'vIMPRIMIRLANCNORMAL'},{av:'AV126ImprimirLancEstorno',fld:'vIMPRIMIRLANCESTORNO'},{av:'AV122ImprimirInclusao',fld:'vIMPRIMIRINCLUSAO'},{av:'AV124ImprimirDesconto',fld:'vIMPRIMIRDESCONTO'},{av:'AV24ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV22ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV23ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV125ImprimirBaixa',fld:'vIMPRIMIRBAIXA'},{av:'AV123ImprimirAcrescimo',fld:'vIMPRIMIRACRESCIMO'},{av:'AV94FilialIdIni4',fld:'vFILIALIDINI4'},{av:'AV92FilialIdIni3',fld:'vFILIALIDINI3'},{av:'AV90FilialIdIni2',fld:'vFILIALIDINI2'},{av:'AV88FilialIdIni1',fld:'vFILIALIDINI1'},{av:'AV95FilialIdFim4',fld:'vFILIALIDFIM4'},{av:'AV93FilialIdFim3',fld:'vFILIALIDFIM3'},{av:'AV91FilialIdFim2',fld:'vFILIALIDFIM2'},{av:'AV89FilialIdFim1',fld:'vFILIALIDFIM1'},{av:'AV86EspecieIdIni4',fld:'vESPECIEIDINI4'},{av:'AV84EspecieIdIni3',fld:'vESPECIEIDINI3'},{av:'AV82EspecieIdIni2',fld:'vESPECIEIDINI2'},{av:'AV80EspecieIdIni1',fld:'vESPECIEIDINI1'},{av:'AV87EspecieIdFim4',fld:'vESPECIEIDFIM4'},{av:'AV85EspecieIdFim3',fld:'vESPECIEIDFIM3'},{av:'AV83EspecieIdFim2',fld:'vESPECIEIDFIM2'},{av:'AV81EspecieIdFim1',fld:'vESPECIEIDFIM1'},{av:'AV104ConvenioId',fld:'vCONVENIOID'},{av:'AV56ContaPagRecVlrContaIni',fld:'vCONTAPAGRECVLRCONTAINI'},{av:'AV57ContaPagRecVlrContaFim',fld:'vCONTAPAGRECVLRCONTAFIM'},{av:'AV34ContaPagRecSeqDocumeIni',fld:'vCONTAPAGRECSEQDOCUMEINI'},{av:'AV36ContaPagRecSeqDocumeFim',fld:'vCONTAPAGRECSEQDOCUMEFIM'},{av:'AV116ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV29ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV30ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV106ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV43ContaPagRecFaturaIni',fld:'vCONTAPAGRECFATURAINI'},{av:'AV44ContaPagRecFaturaFim',fld:'vCONTAPAGRECFATURAFIM'},{av:'AV37ContaPagRecDtVencOriginalIni',fld:'vCONTAPAGRECDTVENCORIGINALINI'},{av:'AV38ContaPagRecDtVencOriginalFim',fld:'vCONTAPAGRECDTVENCORIGINALFIM'},{av:'AV41ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV42ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV45ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV46ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV146ContaPagRecDtLibPagtoIni',fld:'vCONTAPAGRECDTLIBPAGTOINI'},{av:'AV147ContaPagRecDtLibPagtoFim',fld:'vCONTAPAGRECDTLIBPAGTOFIM'},{av:'AV27ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV28ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV31ContaPagRecDtAceiteIni',fld:'vCONTAPAGRECDTACEITEINI'},{av:'AV32ContaPagRecDtAceiteFim',fld:'vCONTAPAGRECDTACEITEFIM'},{av:'AV33ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'},{av:'AV35ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV107ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV49ContaOcorrenciaDataIni',fld:'vCONTAOCORRENCIADATAINI'},{av:'AV50ContaOcorrenciaDataFim',fld:'vCONTAOCORRENCIADATAFIM'},{av:'AV51ContaLancamDocBaixa',fld:'vCONTALANCAMDOCBAIXA'},{av:'AV119ContaLancamDataIni',fld:'vCONTALANCAMDATAINI'},{av:'AV120ContaLancamDataFim',fld:'vCONTALANCAMDATAFIM'},{av:'AV108ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV112ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV110CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV111CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV47CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV202BoletoNumeroIni',fld:'vBOLETONUMEROINI'},{av:'AV203BoletoNumeroFim',fld:'vBOLETONUMEROFIM'},{av:'AV60BancoIdIni',fld:'vBANCOIDINI'},{av:'AV62BancoIdFim',fld:'vBANCOIDFIM'},{av:'AV61BancoAgenciaIdIni',fld:'vBANCOAGENCIAIDINI'},{av:'AV63BancoAgenciaIdFim',fld:'vBANCOAGENCIAIDFIM'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV115Ok',fld:'vOK'},{av:'AV131ErroCxaBcoBaixa',fld:'vERROCXABCOBAIXA'},{av:'AV239GXLvl451',fld:'vGXLVL451'},{av:'AV48CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV132ErroConvenio',fld:'vERROCONVENIO'},{av:'AV240GXLvl462',fld:'vGXLVL462'},{av:'AV105ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV133ErroTradutor',fld:'vERROTRADUTOR'},{av:'AV241GXLvl473',fld:'vGXLVL473'},{av:'AV109ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV231OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VMODELO.CLICK"] = [[{av:'AV20Modelo',fld:'vMODELO'}],[{av:'gx.fn.getCtrlProperty("vSALTARPAGINA","Visible")',ctrl:'vSALTARPAGINA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vIMPRIMIROBSCONTA","Visible")',ctrl:'vIMPRIMIROBSCONTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'AV117Totalizacao',fld:'vTOTALIZACAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'gx.fn.getCtrlProperty("TABLE6","Visible")',ctrl:'TABLE6',prop:'Visible'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV213TxtTela',fld:'vTXTTELA'},{av:'AV237Pgmname',fld:'vPGMNAME'},{av:'AV20Modelo',fld:'vMODELO'},{av:'AV117Totalizacao',fld:'vTOTALIZACAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV122ImprimirInclusao',fld:'vIMPRIMIRINCLUSAO'},{av:'AV123ImprimirAcrescimo',fld:'vIMPRIMIRACRESCIMO'},{av:'AV124ImprimirDesconto',fld:'vIMPRIMIRDESCONTO'},{av:'AV125ImprimirBaixa',fld:'vIMPRIMIRBAIXA'},{av:'AV126ImprimirLancEstorno',fld:'vIMPRIMIRLANCESTORNO'},{av:'AV127ImprimirLancNormal',fld:'vIMPRIMIRLANCNORMAL'},{av:'AV118SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV128ImprimirObsConta',fld:'vIMPRIMIROBSCONTA'},{av:'AV22ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV23ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV24ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV153TipoLancamentoIdIni1',fld:'vTIPOLANCAMENTOIDINI1'},{av:'AV154TipoLancamentoIdFim1',fld:'vTIPOLANCAMENTOIDFIM1'},{av:'AV155TipoLancamentoIdIni2',fld:'vTIPOLANCAMENTOIDINI2'},{av:'AV156TipoLancamentoIdFim2',fld:'vTIPOLANCAMENTOIDFIM2'},{av:'AV157TipoLancamentoIdIni3',fld:'vTIPOLANCAMENTOIDINI3'},{av:'AV158TipoLancamentoIdFim3',fld:'vTIPOLANCAMENTOIDFIM3'},{av:'AV159TipoLancamentoIdIni4',fld:'vTIPOLANCAMENTOIDINI4'},{av:'AV160TipoLancamentoIdFim4',fld:'vTIPOLANCAMENTOIDFIM4'},{av:'AV161TipoLancamentoIdIni5',fld:'vTIPOLANCAMENTOIDINI5'},{av:'AV162TipoLancamentoIdFim5',fld:'vTIPOLANCAMENTOIDFIM5'},{av:'AV163TipoLancamentoIdIni6',fld:'vTIPOLANCAMENTOIDINI6'},{av:'AV164TipoLancamentoIdFim6',fld:'vTIPOLANCAMENTOIDFIM6'},{av:'AV165TipoLancamentoIdIni7',fld:'vTIPOLANCAMENTOIDINI7'},{av:'AV166TipoLancamentoIdFim7',fld:'vTIPOLANCAMENTOIDFIM7'},{av:'AV167TipoLancamentoIdIni8',fld:'vTIPOLANCAMENTOIDINI8'},{av:'AV168TipoLancamentoIdFim8',fld:'vTIPOLANCAMENTOIDFIM8'},{av:'AV169TipoLancamentoIdIni9',fld:'vTIPOLANCAMENTOIDINI9'},{av:'AV170TipoLancamentoIdFim9',fld:'vTIPOLANCAMENTOIDFIM9'},{av:'AV171TipoLancamentoIdIni10',fld:'vTIPOLANCAMENTOIDINI10'},{av:'AV172TipoLancamentoIdFim10',fld:'vTIPOLANCAMENTOIDFIM10'},{av:'AV173TipoLancamentoIdIni11',fld:'vTIPOLANCAMENTOIDINI11'},{av:'AV174TipoLancamentoIdFim11',fld:'vTIPOLANCAMENTOIDFIM11'},{av:'AV175TipoLancamentoIdIni12',fld:'vTIPOLANCAMENTOIDINI12'},{av:'AV176TipoLancamentoIdFim12',fld:'vTIPOLANCAMENTOIDFIM12'},{av:'AV177TipoLancamentoIdIni13',fld:'vTIPOLANCAMENTOIDINI13'},{av:'AV178TipoLancamentoIdFim13',fld:'vTIPOLANCAMENTOIDFIM13'},{av:'AV179TipoLancamentoIdIni14',fld:'vTIPOLANCAMENTOIDINI14'},{av:'AV180TipoLancamentoIdFim14',fld:'vTIPOLANCAMENTOIDFIM14'},{av:'AV181TipoLancamentoIdIni15',fld:'vTIPOLANCAMENTOIDINI15'},{av:'AV182TipoLancamentoIdFim15',fld:'vTIPOLANCAMENTOIDFIM15'},{av:'AV183TipoLancamentoIdIni16',fld:'vTIPOLANCAMENTOIDINI16'},{av:'AV184TipoLancamentoIdFim16',fld:'vTIPOLANCAMENTOIDFIM16'},{av:'AV228SnGerarCSV',fld:'vSNGERARCSV'}],[{av:'AV231OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV237Pgmname',fld:'vPGMNAME'},{av:'AV232SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV213TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV242GXV1',fld:'vGXV1'},{av:'AV234SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV20Modelo',fld:'vMODELO'},{av:'AV117Totalizacao',fld:'vTOTALIZACAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV122ImprimirInclusao',fld:'vIMPRIMIRINCLUSAO'},{av:'AV123ImprimirAcrescimo',fld:'vIMPRIMIRACRESCIMO'},{av:'AV124ImprimirDesconto',fld:'vIMPRIMIRDESCONTO'},{av:'AV125ImprimirBaixa',fld:'vIMPRIMIRBAIXA'},{av:'AV126ImprimirLancEstorno',fld:'vIMPRIMIRLANCESTORNO'},{av:'AV127ImprimirLancNormal',fld:'vIMPRIMIRLANCNORMAL'},{av:'AV118SaltarPagina',fld:'vSALTARPAGINA'},{av:'AV128ImprimirObsConta',fld:'vIMPRIMIROBSCONTA'},{av:'AV22ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV23ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV24ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV153TipoLancamentoIdIni1',fld:'vTIPOLANCAMENTOIDINI1'},{av:'AV154TipoLancamentoIdFim1',fld:'vTIPOLANCAMENTOIDFIM1'},{av:'AV155TipoLancamentoIdIni2',fld:'vTIPOLANCAMENTOIDINI2'},{av:'AV156TipoLancamentoIdFim2',fld:'vTIPOLANCAMENTOIDFIM2'},{av:'AV157TipoLancamentoIdIni3',fld:'vTIPOLANCAMENTOIDINI3'},{av:'AV158TipoLancamentoIdFim3',fld:'vTIPOLANCAMENTOIDFIM3'},{av:'AV159TipoLancamentoIdIni4',fld:'vTIPOLANCAMENTOIDINI4'},{av:'AV160TipoLancamentoIdFim4',fld:'vTIPOLANCAMENTOIDFIM4'},{av:'AV161TipoLancamentoIdIni5',fld:'vTIPOLANCAMENTOIDINI5'},{av:'AV162TipoLancamentoIdFim5',fld:'vTIPOLANCAMENTOIDFIM5'},{av:'AV163TipoLancamentoIdIni6',fld:'vTIPOLANCAMENTOIDINI6'},{av:'AV164TipoLancamentoIdFim6',fld:'vTIPOLANCAMENTOIDFIM6'},{av:'AV165TipoLancamentoIdIni7',fld:'vTIPOLANCAMENTOIDINI7'},{av:'AV166TipoLancamentoIdFim7',fld:'vTIPOLANCAMENTOIDFIM7'},{av:'AV167TipoLancamentoIdIni8',fld:'vTIPOLANCAMENTOIDINI8'},{av:'AV168TipoLancamentoIdFim8',fld:'vTIPOLANCAMENTOIDFIM8'},{av:'AV169TipoLancamentoIdIni9',fld:'vTIPOLANCAMENTOIDINI9'},{av:'AV170TipoLancamentoIdFim9',fld:'vTIPOLANCAMENTOIDFIM9'},{av:'AV171TipoLancamentoIdIni10',fld:'vTIPOLANCAMENTOIDINI10'},{av:'AV172TipoLancamentoIdFim10',fld:'vTIPOLANCAMENTOIDFIM10'},{av:'AV173TipoLancamentoIdIni11',fld:'vTIPOLANCAMENTOIDINI11'},{av:'AV174TipoLancamentoIdFim11',fld:'vTIPOLANCAMENTOIDFIM11'},{av:'AV175TipoLancamentoIdIni12',fld:'vTIPOLANCAMENTOIDINI12'},{av:'AV176TipoLancamentoIdFim12',fld:'vTIPOLANCAMENTOIDFIM12'},{av:'AV177TipoLancamentoIdIni13',fld:'vTIPOLANCAMENTOIDINI13'},{av:'AV178TipoLancamentoIdFim13',fld:'vTIPOLANCAMENTOIDFIM13'},{av:'AV179TipoLancamentoIdIni14',fld:'vTIPOLANCAMENTOIDINI14'},{av:'AV180TipoLancamentoIdFim14',fld:'vTIPOLANCAMENTOIDFIM14'},{av:'AV181TipoLancamentoIdIni15',fld:'vTIPOLANCAMENTOIDINI15'},{av:'AV182TipoLancamentoIdFim15',fld:'vTIPOLANCAMENTOIDFIM15'},{av:'AV183TipoLancamentoIdIni16',fld:'vTIPOLANCAMENTOIDINI16'},{av:'AV184TipoLancamentoIdFim16',fld:'vTIPOLANCAMENTOIDFIM16'},{av:'AV228SnGerarCSV',fld:'vSNGERARCSV'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV237Pgmname',fld:'vPGMNAME'},{av:'AV213TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPTNOPROCESSO", [507]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMEROINI", [145]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMEROFIM", [149]);
   this.setPrompt("PROMPT_SIM_SIM_NAO_PESSOAIDINI", [195]);
   this.setPrompt("PROMPT_SIM_SIM_NAO_PESSOAIDFIM", [199]);
   this.setPrompt("PROMPT_CAIXABANCOID", [254]);
   this.setPrompt("PROMPT_OCORRENCIAIDINI1", [293]);
   this.setPrompt("PROMPT_OCORRENCIAIDFIM1", [297]);
   this.setPrompt("PROMPT_OCORRENCIAIDINI2", [300]);
   this.setPrompt("PROMPT_OCORRENCIAIDFIM2", [304]);
   this.setPrompt("PROMPT_BOLETOIDINI_BOLETONUMEROINI", [317,310]);
   this.setPrompt("PROMPT_BOLETOIDFIM_BOLETONUMEROFIM", [320,314]);
   this.setPrompt("PROMPT_BANCOIDINI", [326]);
   this.setPrompt("PROMPT_BANCOAGENCIAIDINI", [327]);
   this.setPrompt("PROMPT_BANCOIDFIM", [331]);
   this.setPrompt("PROMPT_BANCOAGENCIAIDFIM", [332]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI1", [345]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM1", [349]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI2", [352]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM2", [356]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI3", [359]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM3", [363]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDINI4", [366]);
   this.setPrompt("PROMPT_TIPOCOBRANCAIDFIM4", [370]);
   this.setPrompt("PROMPT_VENDEDORIDINI1", [375]);
   this.setPrompt("PROMPT_VENDEDORIDFIM1", [379]);
   this.setPrompt("PROMPT_VENDEDORIDINI2", [382]);
   this.setPrompt("PROMPT_VENDEDORIDFIM2", [386]);
   this.setPrompt("PROMPT_VENDEDORIDINI3", [389]);
   this.setPrompt("PROMPT_VENDEDORIDFIM3", [393]);
   this.setPrompt("PROMPT_VENDEDORIDINI4", [396]);
   this.setPrompt("PROMPT_VENDEDORIDFIM4", [400]);
   this.setPrompt("PROMPT_ESPECIEIDINI1", [405]);
   this.setPrompt("PROMPT_ESPECIEIDFIM1", [409]);
   this.setPrompt("PROMPT_ESPECIEIDINI2", [412]);
   this.setPrompt("PROMPT_ESPECIEIDFIM2", [416]);
   this.setPrompt("PROMPT_ESPECIEIDINI3", [419]);
   this.setPrompt("PROMPT_ESPECIEIDFIM3", [423]);
   this.setPrompt("PROMPT_ESPECIEIDINI4", [426]);
   this.setPrompt("PROMPT_ESPECIEIDFIM4", [430]);
   this.setPrompt("PROMPT_FILIALIDINI1", [435]);
   this.setPrompt("PROMPT_FILIALIDFIM1", [439]);
   this.setPrompt("PROMPT_FILIALIDINI2", [442]);
   this.setPrompt("PROMPT_FILIALIDFIM2", [446]);
   this.setPrompt("PROMPT_FILIALIDINI3", [449]);
   this.setPrompt("PROMPT_FILIALIDFIM3", [453]);
   this.setPrompt("PROMPT_FILIALIDINI4", [456]);
   this.setPrompt("PROMPT_FILIALIDFIM4", [460]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI1", [465]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM1", [469]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI2", [472]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM2", [476]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI3", [479]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM3", [483]);
   this.setPrompt("PROMPT_TIPOCONTAIDINI4", [486]);
   this.setPrompt("PROMPT_TIPOCONTAIDFIM4", [490]);
   this.setPrompt("PROMPT_CONVENIOID", [500]);
   this.setPrompt("IMGCCONT1", [517,514]);
   this.setPrompt("PROMPT_CENTROCUSTOIDINI", [525]);
   this.setPrompt("PROMPT_CENTROCUSTOIDFIM", [529]);
   this.setPrompt("PROMPT_NATUREZAIDINI", [534]);
   this.setPrompt("PROMPT_NATUREZAIDFIM", [538]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI1", [565]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM1", [569]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI2", [572]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM2", [576]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI3", [579]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM3", [583]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI4", [586]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM4", [590]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI5", [594]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM5", [598]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI6", [601]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM6", [605]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI7", [608]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM7", [612]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI8", [615]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM8", [619]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI9", [623]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM9", [627]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI10", [630]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM10", [634]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI11", [637]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM11", [641]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI12", [644]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM12", [648]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI13", [652]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM13", [656]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI14", [659]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM14", [663]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI15", [666]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM15", [670]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDINI16", [673]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOIDFIM16", [677]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV142ContaPagRecPagRecParm", "vCONTAPAGRECPAGRECPARM", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hresumolancamentos());
