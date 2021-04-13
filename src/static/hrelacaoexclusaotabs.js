/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:19:7.78
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoexclusaotabs', false, function () {
   this.ServerClass =  "hrelacaoexclusaotabs" ;
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
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      this.AV125SnFilial =  "N"  ;
      if ( gx.text.trim( this.AV29TabelaId) == "ContaPagRec" )
      {
         if ( gx.text.trim( this.AV124NomeCampo) == "Filial" )
         {
            this.AV125SnFilial =  "S"  ;
         }
      }
      else if ( gx.text.trim( this.AV29TabelaId) == "ContaLancam" )
      {
         if ( gx.text.trim( this.AV124NomeCampo) == "Filial" )
         {
            this.AV125SnFilial =  "S"  ;
         }
      }
      else if ( gx.text.trim( this.AV29TabelaId) == "LancamentoCxaBco" )
      {
         if ( gx.text.trim( this.AV124NomeCampo) == "Lancamento Cxa Bco Filial Id" )
         {
            this.AV125SnFilial =  "S"  ;
         }
      }
   };
   this.e11ct2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ct2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14ct2_client=function()
   {
      this.executeServerEvent("VTABELAID.CLICK", true, null, false, true);
   };
   this.e17ct2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,20,22,25,27,29,32,34,37,39,40,43,46,52,54,57,59,61,64,66,69,71,73,76,78,81,83,85,88,90,93,95,97,100,102,105,107,109,112,114,117,119,121,124,126,129,131,133,136,138,141,143,145,148,150,153,155,157,160,162,165,167,169,176,179,181,182];
   this.GXLastCtrlId =182;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TABLE4",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLERDTEXCLUSAO",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEXCINI",gxz:"ZV27DataExcIni",gxold:"OV27DataExcIni",gxvar:"AV27DataExcIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DataExcIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DataExcIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEXCINI",gx.O.AV27DataExcIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DataExcIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEXCINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEXCFIM",gxz:"ZV28DataExcFim",gxold:"OV28DataExcFim",gxvar:"AV28DataExcFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DataExcFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DataExcFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEXCFIM",gx.O.AV28DataExcFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DataExcFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEXCFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTABELAID",gxz:"ZV29TabelaId",gxold:"OV29TabelaId",gxvar:"AV29TabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29TabelaId=Value},v2z:function(Value){gx.O.ZV29TabelaId=Value},v2c:function(){gx.fn.setComboBoxValue("vTABELAID",gx.O.AV29TabelaId)},c2v:function(){gx.O.AV29TabelaId=this.val()},val:function(){return gx.fn.getControlValue("vTABELAID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV30UsuarioId",gxold:"OV30UsuarioId",gxvar:"AV30UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30UsuarioId=Value},v2z:function(Value){gx.O.ZV30UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV30UsuarioId,0)},c2v:function(){gx.O.AV30UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV31UsuarioNome",gxold:"OV31UsuarioNome",gxvar:"AV31UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31UsuarioNome=Value},v2z:function(Value){gx.O.ZV31UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV31UsuarioNome,0)},c2v:function(){gx.O.AV31UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLE5",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO1",gxz:"ZV32NomeCampo1",gxold:"OV32NomeCampo1",gxvar:"AV32NomeCampo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32NomeCampo1=Value},v2z:function(Value){gx.O.ZV32NomeCampo1=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO1",gx.O.AV32NomeCampo1)},c2v:function(){gx.O.AV32NomeCampo1=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO1")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLER1",grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI1",gxz:"ZV33IntervaloIni1",gxold:"OV33IntervaloIni1",gxvar:"AV33IntervaloIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33IntervaloIni1=Value},v2z:function(Value){gx.O.ZV33IntervaloIni1=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI1",gx.O.AV33IntervaloIni1,0)},c2v:function(){gx.O.AV33IntervaloIni1=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI1")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM1",gxz:"ZV34IntervaloFim1",gxold:"OV34IntervaloFim1",gxvar:"AV34IntervaloFim1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34IntervaloFim1=Value},v2z:function(Value){gx.O.ZV34IntervaloFim1=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM1",gx.O.AV34IntervaloFim1,0)},c2v:function(){gx.O.AV34IntervaloFim1=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM1")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO2",gxz:"ZV35NomeCampo2",gxold:"OV35NomeCampo2",gxvar:"AV35NomeCampo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35NomeCampo2=Value},v2z:function(Value){gx.O.ZV35NomeCampo2=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO2",gx.O.AV35NomeCampo2)},c2v:function(){gx.O.AV35NomeCampo2=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO2")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLER2",grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI2",gxz:"ZV36IntervaloIni2",gxold:"OV36IntervaloIni2",gxvar:"AV36IntervaloIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36IntervaloIni2=Value},v2z:function(Value){gx.O.ZV36IntervaloIni2=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI2",gx.O.AV36IntervaloIni2,0)},c2v:function(){gx.O.AV36IntervaloIni2=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI2")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM2",gxz:"ZV37IntervaloFim2",gxold:"OV37IntervaloFim2",gxvar:"AV37IntervaloFim2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37IntervaloFim2=Value},v2z:function(Value){gx.O.ZV37IntervaloFim2=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM2",gx.O.AV37IntervaloFim2,0)},c2v:function(){gx.O.AV37IntervaloFim2=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM2")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO3",gxz:"ZV38NomeCampo3",gxold:"OV38NomeCampo3",gxvar:"AV38NomeCampo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38NomeCampo3=Value},v2z:function(Value){gx.O.ZV38NomeCampo3=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO3",gx.O.AV38NomeCampo3)},c2v:function(){gx.O.AV38NomeCampo3=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO3")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABLER3",grid:0};
   GXValidFnc[81]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI3",gxz:"ZV39IntervaloIni3",gxold:"OV39IntervaloIni3",gxvar:"AV39IntervaloIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39IntervaloIni3=Value},v2z:function(Value){gx.O.ZV39IntervaloIni3=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI3",gx.O.AV39IntervaloIni3,0)},c2v:function(){gx.O.AV39IntervaloIni3=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI3")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM3",gxz:"ZV40IntervaloFim3",gxold:"OV40IntervaloFim3",gxvar:"AV40IntervaloFim3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40IntervaloFim3=Value},v2z:function(Value){gx.O.ZV40IntervaloFim3=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM3",gx.O.AV40IntervaloFim3,0)},c2v:function(){gx.O.AV40IntervaloFim3=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM3")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO4",gxz:"ZV41NomeCampo4",gxold:"OV41NomeCampo4",gxvar:"AV41NomeCampo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV41NomeCampo4=Value},v2z:function(Value){gx.O.ZV41NomeCampo4=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO4",gx.O.AV41NomeCampo4)},c2v:function(){gx.O.AV41NomeCampo4=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO4")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TABLER4",grid:0};
   GXValidFnc[93]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI4",gxz:"ZV42IntervaloIni4",gxold:"OV42IntervaloIni4",gxvar:"AV42IntervaloIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42IntervaloIni4=Value},v2z:function(Value){gx.O.ZV42IntervaloIni4=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI4",gx.O.AV42IntervaloIni4,0)},c2v:function(){gx.O.AV42IntervaloIni4=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI4")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM4",gxz:"ZV43IntervaloFim4",gxold:"OV43IntervaloFim4",gxvar:"AV43IntervaloFim4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43IntervaloFim4=Value},v2z:function(Value){gx.O.ZV43IntervaloFim4=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM4",gx.O.AV43IntervaloFim4,0)},c2v:function(){gx.O.AV43IntervaloFim4=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM4")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO5",gxz:"ZV44NomeCampo5",gxold:"OV44NomeCampo5",gxvar:"AV44NomeCampo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV44NomeCampo5=Value},v2z:function(Value){gx.O.ZV44NomeCampo5=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO5",gx.O.AV44NomeCampo5)},c2v:function(){gx.O.AV44NomeCampo5=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO5")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TABLER5",grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI5",gxz:"ZV45IntervaloIni5",gxold:"OV45IntervaloIni5",gxvar:"AV45IntervaloIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45IntervaloIni5=Value},v2z:function(Value){gx.O.ZV45IntervaloIni5=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI5",gx.O.AV45IntervaloIni5,0)},c2v:function(){gx.O.AV45IntervaloIni5=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI5")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM5",gxz:"ZV46IntervaloFim5",gxold:"OV46IntervaloFim5",gxvar:"AV46IntervaloFim5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46IntervaloFim5=Value},v2z:function(Value){gx.O.ZV46IntervaloFim5=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM5",gx.O.AV46IntervaloFim5,0)},c2v:function(){gx.O.AV46IntervaloFim5=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM5")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO6",gxz:"ZV47NomeCampo6",gxold:"OV47NomeCampo6",gxvar:"AV47NomeCampo6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47NomeCampo6=Value},v2z:function(Value){gx.O.ZV47NomeCampo6=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO6",gx.O.AV47NomeCampo6)},c2v:function(){gx.O.AV47NomeCampo6=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO6")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TABLER6",grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI6",gxz:"ZV48IntervaloIni6",gxold:"OV48IntervaloIni6",gxvar:"AV48IntervaloIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48IntervaloIni6=Value},v2z:function(Value){gx.O.ZV48IntervaloIni6=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI6",gx.O.AV48IntervaloIni6,0)},c2v:function(){gx.O.AV48IntervaloIni6=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI6")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM6",gxz:"ZV49IntervaloFim6",gxold:"OV49IntervaloFim6",gxvar:"AV49IntervaloFim6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49IntervaloFim6=Value},v2z:function(Value){gx.O.ZV49IntervaloFim6=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM6",gx.O.AV49IntervaloFim6,0)},c2v:function(){gx.O.AV49IntervaloFim6=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM6")},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO7",gxz:"ZV50NomeCampo7",gxold:"OV50NomeCampo7",gxvar:"AV50NomeCampo7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50NomeCampo7=Value},v2z:function(Value){gx.O.ZV50NomeCampo7=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO7",gx.O.AV50NomeCampo7)},c2v:function(){gx.O.AV50NomeCampo7=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO7")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TABLER7",grid:0};
   GXValidFnc[129]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI7",gxz:"ZV51IntervaloIni7",gxold:"OV51IntervaloIni7",gxvar:"AV51IntervaloIni7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51IntervaloIni7=Value},v2z:function(Value){gx.O.ZV51IntervaloIni7=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI7",gx.O.AV51IntervaloIni7,0)},c2v:function(){gx.O.AV51IntervaloIni7=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI7")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM7",gxz:"ZV52IntervaloFim7",gxold:"OV52IntervaloFim7",gxvar:"AV52IntervaloFim7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52IntervaloFim7=Value},v2z:function(Value){gx.O.ZV52IntervaloFim7=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM7",gx.O.AV52IntervaloFim7,0)},c2v:function(){gx.O.AV52IntervaloFim7=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM7")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO8",gxz:"ZV53NomeCampo8",gxold:"OV53NomeCampo8",gxvar:"AV53NomeCampo8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53NomeCampo8=Value},v2z:function(Value){gx.O.ZV53NomeCampo8=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO8",gx.O.AV53NomeCampo8)},c2v:function(){gx.O.AV53NomeCampo8=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO8")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TABLER8",grid:0};
   GXValidFnc[141]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI8",gxz:"ZV54IntervaloIni8",gxold:"OV54IntervaloIni8",gxvar:"AV54IntervaloIni8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54IntervaloIni8=Value},v2z:function(Value){gx.O.ZV54IntervaloIni8=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI8",gx.O.AV54IntervaloIni8,0)},c2v:function(){gx.O.AV54IntervaloIni8=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI8")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM8",gxz:"ZV55IntervaloFim8",gxold:"OV55IntervaloFim8",gxvar:"AV55IntervaloFim8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55IntervaloFim8=Value},v2z:function(Value){gx.O.ZV55IntervaloFim8=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM8",gx.O.AV55IntervaloFim8,0)},c2v:function(){gx.O.AV55IntervaloFim8=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM8")},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO9",gxz:"ZV56NomeCampo9",gxold:"OV56NomeCampo9",gxvar:"AV56NomeCampo9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV56NomeCampo9=Value},v2z:function(Value){gx.O.ZV56NomeCampo9=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO9",gx.O.AV56NomeCampo9)},c2v:function(){gx.O.AV56NomeCampo9=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO9")},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TABLER9",grid:0};
   GXValidFnc[153]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI9",gxz:"ZV57IntervaloIni9",gxold:"OV57IntervaloIni9",gxvar:"AV57IntervaloIni9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57IntervaloIni9=Value},v2z:function(Value){gx.O.ZV57IntervaloIni9=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI9",gx.O.AV57IntervaloIni9,0)},c2v:function(){gx.O.AV57IntervaloIni9=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI9")},nac:gx.falseFn};
   GXValidFnc[155]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM9",gxz:"ZV58IntervaloFim9",gxold:"OV58IntervaloFim9",gxvar:"AV58IntervaloFim9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58IntervaloFim9=Value},v2z:function(Value){gx.O.ZV58IntervaloFim9=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM9",gx.O.AV58IntervaloFim9,0)},c2v:function(){gx.O.AV58IntervaloFim9=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM9")},nac:gx.falseFn};
   GXValidFnc[160]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO10",gxz:"ZV59NomeCampo10",gxold:"OV59NomeCampo10",gxvar:"AV59NomeCampo10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV59NomeCampo10=Value},v2z:function(Value){gx.O.ZV59NomeCampo10=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO10",gx.O.AV59NomeCampo10)},c2v:function(){gx.O.AV59NomeCampo10=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO10")},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TABLER10",grid:0};
   GXValidFnc[165]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOINI10",gxz:"ZV60IntervaloIni10",gxold:"OV60IntervaloIni10",gxvar:"AV60IntervaloIni10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60IntervaloIni10=Value},v2z:function(Value){gx.O.ZV60IntervaloIni10=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOINI10",gx.O.AV60IntervaloIni10,0)},c2v:function(){gx.O.AV60IntervaloIni10=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOINI10")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTERVALOFIM10",gxz:"ZV61IntervaloFim10",gxold:"OV61IntervaloFim10",gxvar:"AV61IntervaloFim10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61IntervaloFim10=Value},v2z:function(Value){gx.O.ZV61IntervaloFim10=Value},v2c:function(){gx.fn.setControlValue("vINTERVALOFIM10",gx.O.AV61IntervaloFim10,0)},c2v:function(){gx.O.AV61IntervaloFim10=this.val()},val:function(){return gx.fn.getControlValue("vINTERVALOFIM10")},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOFILIALID",gxz:"ZV126UsuarioFilialId",gxold:"OV126UsuarioFilialId",gxvar:"AV126UsuarioFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126UsuarioFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV126UsuarioFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSUARIOFILIALID",gx.O.AV126UsuarioFilialId,0)},c2v:function(){gx.O.AV126UsuarioFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSUARIOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[179]={fld:"JS", format:2,grid:0};
   GXValidFnc[181]={fld:"BTNHELP",grid:0};
   GXValidFnc[182]={fld:"PROMPT_USUARIOID",grid:0};
   this.AV27DataExcIni = gx.date.nullDate() ;
   this.ZV27DataExcIni = gx.date.nullDate() ;
   this.OV27DataExcIni = gx.date.nullDate() ;
   this.AV28DataExcFim = gx.date.nullDate() ;
   this.ZV28DataExcFim = gx.date.nullDate() ;
   this.OV28DataExcFim = gx.date.nullDate() ;
   this.AV29TabelaId = "" ;
   this.ZV29TabelaId = "" ;
   this.OV29TabelaId = "" ;
   this.AV30UsuarioId = "" ;
   this.ZV30UsuarioId = "" ;
   this.OV30UsuarioId = "" ;
   this.AV31UsuarioNome = "" ;
   this.ZV31UsuarioNome = "" ;
   this.OV31UsuarioNome = "" ;
   this.AV32NomeCampo1 = "" ;
   this.ZV32NomeCampo1 = "" ;
   this.OV32NomeCampo1 = "" ;
   this.AV33IntervaloIni1 = "" ;
   this.ZV33IntervaloIni1 = "" ;
   this.OV33IntervaloIni1 = "" ;
   this.AV34IntervaloFim1 = "" ;
   this.ZV34IntervaloFim1 = "" ;
   this.OV34IntervaloFim1 = "" ;
   this.AV35NomeCampo2 = "" ;
   this.ZV35NomeCampo2 = "" ;
   this.OV35NomeCampo2 = "" ;
   this.AV36IntervaloIni2 = "" ;
   this.ZV36IntervaloIni2 = "" ;
   this.OV36IntervaloIni2 = "" ;
   this.AV37IntervaloFim2 = "" ;
   this.ZV37IntervaloFim2 = "" ;
   this.OV37IntervaloFim2 = "" ;
   this.AV38NomeCampo3 = "" ;
   this.ZV38NomeCampo3 = "" ;
   this.OV38NomeCampo3 = "" ;
   this.AV39IntervaloIni3 = "" ;
   this.ZV39IntervaloIni3 = "" ;
   this.OV39IntervaloIni3 = "" ;
   this.AV40IntervaloFim3 = "" ;
   this.ZV40IntervaloFim3 = "" ;
   this.OV40IntervaloFim3 = "" ;
   this.AV41NomeCampo4 = "" ;
   this.ZV41NomeCampo4 = "" ;
   this.OV41NomeCampo4 = "" ;
   this.AV42IntervaloIni4 = "" ;
   this.ZV42IntervaloIni4 = "" ;
   this.OV42IntervaloIni4 = "" ;
   this.AV43IntervaloFim4 = "" ;
   this.ZV43IntervaloFim4 = "" ;
   this.OV43IntervaloFim4 = "" ;
   this.AV44NomeCampo5 = "" ;
   this.ZV44NomeCampo5 = "" ;
   this.OV44NomeCampo5 = "" ;
   this.AV45IntervaloIni5 = "" ;
   this.ZV45IntervaloIni5 = "" ;
   this.OV45IntervaloIni5 = "" ;
   this.AV46IntervaloFim5 = "" ;
   this.ZV46IntervaloFim5 = "" ;
   this.OV46IntervaloFim5 = "" ;
   this.AV47NomeCampo6 = "" ;
   this.ZV47NomeCampo6 = "" ;
   this.OV47NomeCampo6 = "" ;
   this.AV48IntervaloIni6 = "" ;
   this.ZV48IntervaloIni6 = "" ;
   this.OV48IntervaloIni6 = "" ;
   this.AV49IntervaloFim6 = "" ;
   this.ZV49IntervaloFim6 = "" ;
   this.OV49IntervaloFim6 = "" ;
   this.AV50NomeCampo7 = "" ;
   this.ZV50NomeCampo7 = "" ;
   this.OV50NomeCampo7 = "" ;
   this.AV51IntervaloIni7 = "" ;
   this.ZV51IntervaloIni7 = "" ;
   this.OV51IntervaloIni7 = "" ;
   this.AV52IntervaloFim7 = "" ;
   this.ZV52IntervaloFim7 = "" ;
   this.OV52IntervaloFim7 = "" ;
   this.AV53NomeCampo8 = "" ;
   this.ZV53NomeCampo8 = "" ;
   this.OV53NomeCampo8 = "" ;
   this.AV54IntervaloIni8 = "" ;
   this.ZV54IntervaloIni8 = "" ;
   this.OV54IntervaloIni8 = "" ;
   this.AV55IntervaloFim8 = "" ;
   this.ZV55IntervaloFim8 = "" ;
   this.OV55IntervaloFim8 = "" ;
   this.AV56NomeCampo9 = "" ;
   this.ZV56NomeCampo9 = "" ;
   this.OV56NomeCampo9 = "" ;
   this.AV57IntervaloIni9 = "" ;
   this.ZV57IntervaloIni9 = "" ;
   this.OV57IntervaloIni9 = "" ;
   this.AV58IntervaloFim9 = "" ;
   this.ZV58IntervaloFim9 = "" ;
   this.OV58IntervaloFim9 = "" ;
   this.AV59NomeCampo10 = "" ;
   this.ZV59NomeCampo10 = "" ;
   this.OV59NomeCampo10 = "" ;
   this.AV60IntervaloIni10 = "" ;
   this.ZV60IntervaloIni10 = "" ;
   this.OV60IntervaloIni10 = "" ;
   this.AV61IntervaloFim10 = "" ;
   this.ZV61IntervaloFim10 = "" ;
   this.OV61IntervaloFim10 = "" ;
   this.AV126UsuarioFilialId = 0 ;
   this.ZV126UsuarioFilialId = 0 ;
   this.OV126UsuarioFilialId = 0 ;
   this.AV27DataExcIni = gx.date.nullDate() ;
   this.AV28DataExcFim = gx.date.nullDate() ;
   this.AV29TabelaId = "" ;
   this.AV30UsuarioId = "" ;
   this.AV31UsuarioNome = "" ;
   this.AV32NomeCampo1 = "" ;
   this.AV33IntervaloIni1 = "" ;
   this.AV34IntervaloFim1 = "" ;
   this.AV35NomeCampo2 = "" ;
   this.AV36IntervaloIni2 = "" ;
   this.AV37IntervaloFim2 = "" ;
   this.AV38NomeCampo3 = "" ;
   this.AV39IntervaloIni3 = "" ;
   this.AV40IntervaloFim3 = "" ;
   this.AV41NomeCampo4 = "" ;
   this.AV42IntervaloIni4 = "" ;
   this.AV43IntervaloFim4 = "" ;
   this.AV44NomeCampo5 = "" ;
   this.AV45IntervaloIni5 = "" ;
   this.AV46IntervaloFim5 = "" ;
   this.AV47NomeCampo6 = "" ;
   this.AV48IntervaloIni6 = "" ;
   this.AV49IntervaloFim6 = "" ;
   this.AV50NomeCampo7 = "" ;
   this.AV51IntervaloIni7 = "" ;
   this.AV52IntervaloFim7 = "" ;
   this.AV53NomeCampo8 = "" ;
   this.AV54IntervaloIni8 = "" ;
   this.AV55IntervaloFim8 = "" ;
   this.AV56NomeCampo9 = "" ;
   this.AV57IntervaloIni9 = "" ;
   this.AV58IntervaloFim9 = "" ;
   this.AV59NomeCampo10 = "" ;
   this.AV60IntervaloIni10 = "" ;
   this.AV61IntervaloFim10 = "" ;
   this.AV126UsuarioFilialId = 0 ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A1614LogTabelaId = 0 ;
   this.A1604LogTabelaOperacao = "" ;
   this.A1603LogTabelaNome = "" ;
   this.A1615LogTabelaCampo = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.AV124NomeCampo = "" ;
   this.AV125SnFilial = "" ;
   this.Events = {"e11ct2_client": ["'FECHAR'", true] ,"e13ct2_client": ["ENTER", true] ,"e14ct2_client": ["VTABELAID.CLICK", true] ,"e17ct2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A1614LogTabelaId',fld:'LOGTABELAID'},{av:'A1603LogTabelaNome',fld:'LOGTABELANOME'},{av:'AV29TabelaId',fld:'vTABELAID'},{av:'A1604LogTabelaOperacao',fld:'LOGTABELAOPERACAO'},{av:'A1615LogTabelaCampo',fld:'LOGTABELACAMPO'}],[{av:'AV32NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV35NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV38NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV41NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV44NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV47NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV50NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV53NomeCampo8',fld:'vNOMECAMPO8'},{av:'AV56NomeCampo9',fld:'vNOMECAMPO9'},{av:'AV59NomeCampo10',fld:'vNOMECAMPO10'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV67ValidacaoOk',fld:'vVALIDACAOOK'},{av:'AV131Pgmname',fld:'vPGMNAME'},{av:'AV27DataExcIni',fld:'vDATAEXCINI'},{av:'AV28DataExcFim',fld:'vDATAEXCFIM'},{av:'AV68Ordenacao',fld:'vORDENACAO'},{av:'AV69QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29TabelaId',fld:'vTABELAID'},{av:'AV31UsuarioNome',fld:'vUSUARIONOME'},{av:'AV32NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV33IntervaloIni1',fld:'vINTERVALOINI1'},{av:'AV34IntervaloFim1',fld:'vINTERVALOFIM1'},{av:'AV35NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV36IntervaloIni2',fld:'vINTERVALOINI2'},{av:'AV37IntervaloFim2',fld:'vINTERVALOFIM2'},{av:'AV38NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV39IntervaloIni3',fld:'vINTERVALOINI3'},{av:'AV40IntervaloFim3',fld:'vINTERVALOFIM3'},{av:'AV41NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV42IntervaloIni4',fld:'vINTERVALOINI4'},{av:'AV43IntervaloFim4',fld:'vINTERVALOFIM4'},{av:'AV44NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV45IntervaloIni5',fld:'vINTERVALOINI5'},{av:'AV46IntervaloFim5',fld:'vINTERVALOFIM5'},{av:'AV47NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV48IntervaloIni6',fld:'vINTERVALOINI6'},{av:'AV49IntervaloFim6',fld:'vINTERVALOFIM6'},{av:'AV50NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV51IntervaloIni7',fld:'vINTERVALOINI7'},{av:'AV52IntervaloFim7',fld:'vINTERVALOFIM7'},{av:'AV53NomeCampo8',fld:'vNOMECAMPO8'},{av:'AV54IntervaloIni8',fld:'vINTERVALOINI8'},{av:'AV55IntervaloFim8',fld:'vINTERVALOFIM8'},{av:'AV56NomeCampo9',fld:'vNOMECAMPO9'},{av:'AV57IntervaloIni9',fld:'vINTERVALOINI9'},{av:'AV58IntervaloFim9',fld:'vINTERVALOFIM9'},{av:'AV59NomeCampo10',fld:'vNOMECAMPO10'},{av:'AV60IntervaloIni10',fld:'vINTERVALOINI10'},{av:'AV61IntervaloFim10',fld:'vINTERVALOFIM10'},{av:'AV132Pgmdesc',fld:'vPGMDESC'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV30UsuarioId',fld:'vUSUARIOID'},{av:'AV126UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV125SnFilial',fld:'vSNFILIAL'},{av:'AV124NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV62DataHoraIniStr',fld:'vDATAHORAINISTR'},{av:'AV63DataHoraFimStr',fld:'vDATAHORAFIMSTR'},{av:'AV64DataHoraIni',fld:'vDATAHORAINI'},{av:'AV65DataHoraFim',fld:'vDATAHORAFIM'},{av:'AV61IntervaloFim10',fld:'vINTERVALOFIM10'},{av:'AV60IntervaloIni10',fld:'vINTERVALOINI10'},{av:'AV59NomeCampo10',fld:'vNOMECAMPO10'},{av:'AV58IntervaloFim9',fld:'vINTERVALOFIM9'},{av:'AV57IntervaloIni9',fld:'vINTERVALOINI9'},{av:'AV56NomeCampo9',fld:'vNOMECAMPO9'},{av:'AV55IntervaloFim8',fld:'vINTERVALOFIM8'},{av:'AV54IntervaloIni8',fld:'vINTERVALOINI8'},{av:'AV53NomeCampo8',fld:'vNOMECAMPO8'},{av:'AV52IntervaloFim7',fld:'vINTERVALOFIM7'},{av:'AV51IntervaloIni7',fld:'vINTERVALOINI7'},{av:'AV50NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV49IntervaloFim6',fld:'vINTERVALOFIM6'},{av:'AV48IntervaloIni6',fld:'vINTERVALOINI6'},{av:'AV47NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV46IntervaloFim5',fld:'vINTERVALOFIM5'},{av:'AV45IntervaloIni5',fld:'vINTERVALOINI5'},{av:'AV44NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV43IntervaloFim4',fld:'vINTERVALOFIM4'},{av:'AV42IntervaloIni4',fld:'vINTERVALOINI4'},{av:'AV41NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV40IntervaloFim3',fld:'vINTERVALOFIM3'},{av:'AV39IntervaloIni3',fld:'vINTERVALOINI3'},{av:'AV38NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV37IntervaloFim2',fld:'vINTERVALOFIM2'},{av:'AV36IntervaloIni2',fld:'vINTERVALOINI2'},{av:'AV35NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV34IntervaloFim1',fld:'vINTERVALOFIM1'},{av:'AV33IntervaloIni1',fld:'vINTERVALOINI1'},{av:'AV32NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV31UsuarioNome',fld:'vUSUARIONOME'},{av:'AV29TabelaId',fld:'vTABELAID'},{av:'AV69QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV67ValidacaoOk',fld:'vVALIDACAOOK'},{av:'AV136GXLvl212',fld:'vGXLVL212'},{av:'AV124NomeCampo',fld:'vNOMECAMPO'},{av:'AV125SnFilial',fld:'vSNFILIAL'}]];
   this.EvtParms["VTABELAID.CLICK"] = [[{av:'A1614LogTabelaId',fld:'LOGTABELAID'},{av:'A1603LogTabelaNome',fld:'LOGTABELANOME'},{av:'AV29TabelaId',fld:'vTABELAID'},{av:'A1604LogTabelaOperacao',fld:'LOGTABELAOPERACAO'},{av:'A1615LogTabelaCampo',fld:'LOGTABELACAMPO'}],[{av:'AV32NomeCampo1',fld:'vNOMECAMPO1'},{av:'AV35NomeCampo2',fld:'vNOMECAMPO2'},{av:'AV38NomeCampo3',fld:'vNOMECAMPO3'},{av:'AV41NomeCampo4',fld:'vNOMECAMPO4'},{av:'AV44NomeCampo5',fld:'vNOMECAMPO5'},{av:'AV47NomeCampo6',fld:'vNOMECAMPO6'},{av:'AV50NomeCampo7',fld:'vNOMECAMPO7'},{av:'AV53NomeCampo8',fld:'vNOMECAMPO8'},{av:'AV56NomeCampo9',fld:'vNOMECAMPO9'},{av:'AV59NomeCampo10',fld:'vNOMECAMPO10'}]];
   this.setPrompt("PROMPT_USUARIOID", [39]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoexclusaotabs());
