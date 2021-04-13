/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:54.56
*/
gx.evt.autoSkip = false;
gx.define('hfuncionarioprodserv', false, function () {
   this.ServerClass =  "hfuncionarioprodserv" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicovendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filtroprofissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILTROPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s162_client=function()
   {
      if ( ! (new gx.date.gxdate("").compare(this.AV8MinOrdemServicoDataHoraFechamento)==0) )
      {
         if ( (new gx.date.gxdate("").compare(this.AV6MaxOrdemServicoDataHoraFechamento)==0) )
         {
            this.AV32snErro =  "S"  ;
            this.addMessage("A data final de fechamento não foi preenchida");
            gx.fn.usrSetFocus("vMAXORDEMSERVICODATAHORAFECHAMENTO") ;
         }
         else
         {
            if ( new gx.date.gxdate( this.AV8MinOrdemServicoDataHoraFechamento ).compare( this.AV6MaxOrdemServicoDataHoraFechamento ) > 0 )
            {
               this.AV32snErro =  "S"  ;
               this.addMessage("A data de fechamento inicial não pode ser posterior à final");
               gx.fn.usrSetFocus("vMINORDEMSERVICODATAHORAFECHAMENTO") ;
            }
         }
      }
      else
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV6MaxOrdemServicoDataHoraFechamento)==0) )
         {
            this.AV32snErro =  "S"  ;
            this.addMessage("A data inicial de fechamento não foi preenchida");
            gx.fn.usrSetFocus("vMINORDEMSERVICODATAHORAFECHAMENTO") ;
         }
      }
      if ( this.AV32snErro == "N" )
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV9MinOrdemServicoDatHoraEmissao)==0) )
         {
            if ( (new gx.date.gxdate("").compare(this.AV7MaxOrdemServicoDatHoraEmissao)==0) )
            {
               this.AV32snErro =  "S"  ;
               this.addMessage("A data final de Abertura não foi preenchida");
               gx.fn.usrSetFocus("vMAXORDEMSERVICODATHORAEMISSAO") ;
            }
            else
            {
               if ( new gx.date.gxdate( this.AV9MinOrdemServicoDatHoraEmissao ).compare( this.AV7MaxOrdemServicoDatHoraEmissao ) > 0 )
               {
                  this.AV32snErro =  "S"  ;
                  this.addMessage("A data de Abertura inicial não pode ser posterior à final");
                  gx.fn.usrSetFocus("vMINORDEMSERVICODATHORAEMISSAO") ;
               }
            }
         }
         else
         {
            if ( ! (new gx.date.gxdate("").compare(this.AV7MaxOrdemServicoDatHoraEmissao)==0) )
            {
               this.AV32snErro =  "S"  ;
               this.addMessage("A data inicial de Abertura não foi preenchida");
               gx.fn.usrSetFocus("vMINORDEMSERVICODATHORAEMISSAO") ;
            }
         }
         if ( this.AV32snErro == "N" )
         {
            if ( ! (0==this.AV12OrdemServicoVendedorId) && (""==this.AV13OrdemServicoVendedorNome) )
            {
               this.AV32snErro =  "S"  ;
               this.addMessage("Não foi encontrado vendedor com o código informado");
               gx.fn.usrSetFocus("vORDEMSERVICOVENDEDORID") ;
            }
            else
            {
               if ( ! (0==this.AV41FiltroProfissionalId) && (""==this.AV15ProfissionalNome) )
               {
                  this.AV32snErro =  "S"  ;
                  this.addMessage("Não foi encontrado profissional com o código informado");
                  gx.fn.usrSetFocus("vFILTROPROFISSIONALID") ;
               }
               else
               {
                  if ( ! (0==this.AV5FilialId) && (""==this.AV31FilialNome) )
                  {
                     this.addMessage("Não foi encontrada filial com o código informado");
                     gx.fn.usrSetFocus("vFILIALID") ;
                  }
               }
            }
         }
      }
   };
   this.e132aa2_client=function()
   {
      this.executeServerEvent("'FILTROS'", false, null, false, false);
   };
   this.e142aa2_client=function()
   {
      this.executeServerEvent("VORDEMSERVICOVENDEDORID.ISVALID", true, null, false, true);
   };
   this.e152aa2_client=function()
   {
      this.executeServerEvent("VFILTROPROFISSIONALID.ISVALID", true, null, false, true);
   };
   this.e162aa2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e172aa2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e182aa2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e192aa2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e202aa2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e212aa2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e222aa2_client=function()
   {
      this.executeServerEvent("'TAXAS'", false, null, false, false);
   };
   this.e242aa2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,19,22,25,27,32,34,35,37,40,42,45,47,49,54,56,59,61,63,66,68,71,73,74,77,79,80,83,85,86,98,99,100,101];
   this.GXLastCtrlId =101;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV17TxtTela",gxold:"OV17TxtTela",gxvar:"AV17TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17TxtTela=Value},v2z:function(Value){gx.O.ZV17TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV17TxtTela)},c2v:function(){gx.O.AV17TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE3",grid:0};
   GXValidFnc[19]={fld:"TABLE",grid:0};
   GXValidFnc[22]={fld:"TABLE2",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV16TipoRelatorio",gxold:"OV16TipoRelatorio",gxvar:"AV16TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16TipoRelatorio=Value},v2z:function(Value){gx.O.ZV16TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV16TipoRelatorio)},c2v:function(){gx.O.AV16TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e162aa2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV5FilialId",gxold:"OV5FilialId",gxvar:"AV5FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV5FilialId,0)},c2v:function(){gx.O.AV5FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV31FilialNome",gxold:"OV31FilialNome",gxvar:"AV31FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialNome=Value},v2z:function(Value){gx.O.ZV31FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV31FilialNome,0)},c2v:function(){gx.O.AV31FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISCONSIDERATAXAS",gxz:"ZV40isConsideraTaxas",gxold:"OV40isConsideraTaxas",gxvar:"AV40isConsideraTaxas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40isConsideraTaxas=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV40isConsideraTaxas=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISCONSIDERATAXAS",gx.O.AV40isConsideraTaxas,true)},c2v:function(){gx.O.AV40isConsideraTaxas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISCONSIDERATAXAS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[40]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE3",grid:0};
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINORDEMSERVICODATHORAEMISSAO",gxz:"ZV9MinOrdemServicoDatHoraEmissao",gxold:"OV9MinOrdemServicoDatHoraEmissao",gxvar:"AV9MinOrdemServicoDatHoraEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9MinOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9MinOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMINORDEMSERVICODATHORAEMISSAO",gx.O.AV9MinOrdemServicoDatHoraEmissao,0)},c2v:function(){gx.O.AV9MinOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMINORDEMSERVICODATHORAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAXORDEMSERVICODATHORAEMISSAO",gxz:"ZV7MaxOrdemServicoDatHoraEmissao",gxold:"OV7MaxOrdemServicoDatHoraEmissao",gxvar:"AV7MaxOrdemServicoDatHoraEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7MaxOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7MaxOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMAXORDEMSERVICODATHORAEMISSAO",gx.O.AV7MaxOrdemServicoDatHoraEmissao,0)},c2v:function(){gx.O.AV7MaxOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMAXORDEMSERVICODATHORAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   GXValidFnc[59]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINORDEMSERVICODATAHORAFECHAMENTO",gxz:"ZV8MinOrdemServicoDataHoraFechamento",gxold:"OV8MinOrdemServicoDataHoraFechamento",gxvar:"AV8MinOrdemServicoDataHoraFechamento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8MinOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8MinOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMINORDEMSERVICODATAHORAFECHAMENTO",gx.O.AV8MinOrdemServicoDataHoraFechamento,0)},c2v:function(){gx.O.AV8MinOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMINORDEMSERVICODATAHORAFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAXORDEMSERVICODATAHORAFECHAMENTO",gxz:"ZV6MaxOrdemServicoDataHoraFechamento",gxold:"OV6MaxOrdemServicoDataHoraFechamento",gxvar:"AV6MaxOrdemServicoDataHoraFechamento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6MaxOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6MaxOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMAXORDEMSERVICODATAHORAFECHAMENTO",gx.O.AV6MaxOrdemServicoDataHoraFechamento,0)},c2v:function(){gx.O.AV6MaxOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMAXORDEMSERVICODATAHORAFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOTIPOID",gxz:"ZV11OrdemServicoTipoId",gxold:"OV11OrdemServicoTipoId",gxvar:"AV11OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV11OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOTIPOID",gx.O.AV11OrdemServicoTipoId)},c2v:function(){gx.O.AV11OrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicovendedorid,isvalid:'e142aa2_client',rgrid:[],fld:"vORDEMSERVICOVENDEDORID",gxz:"ZV12OrdemServicoVendedorId",gxold:"OV12OrdemServicoVendedorId",gxvar:"AV12OrdemServicoVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12OrdemServicoVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12OrdemServicoVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORID",gx.O.AV12OrdemServicoVendedorId,0)},c2v:function(){gx.O.AV12OrdemServicoVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDORNOME",gxz:"ZV13OrdemServicoVendedorNome",gxold:"OV13OrdemServicoVendedorNome",gxvar:"AV13OrdemServicoVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13OrdemServicoVendedorNome=Value},v2z:function(Value){gx.O.ZV13OrdemServicoVendedorNome=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORNOME",gx.O.AV13OrdemServicoVendedorNome,0)},c2v:function(){gx.O.AV13OrdemServicoVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filtroprofissionalid,isvalid:'e152aa2_client',rgrid:[],fld:"vFILTROPROFISSIONALID",gxz:"ZV41FiltroProfissionalId",gxold:"OV41FiltroProfissionalId",gxvar:"AV41FiltroProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41FiltroProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41FiltroProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILTROPROFISSIONALID",gx.O.AV41FiltroProfissionalId,0)},c2v:function(){gx.O.AV41FiltroProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILTROPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV15ProfissionalNome",gxold:"OV15ProfissionalNome",gxvar:"AV15ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProfissionalNome=Value},v2z:function(Value){gx.O.ZV15ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV15ProfissionalNome,0)},c2v:function(){gx.O.AV15ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOSITUACAO",gxz:"ZV10OrdemServicoSituacao",gxold:"OV10OrdemServicoSituacao",gxvar:"AV10OrdemServicoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10OrdemServicoSituacao=Value},v2z:function(Value){gx.O.ZV10OrdemServicoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOSITUACAO",gx.O.AV10OrdemServicoSituacao)},c2v:function(){gx.O.AV10OrdemServicoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:3000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOIDLIST",gxz:"ZV24ServicoIdList",gxold:"OV24ServicoIdList",gxvar:"AV24ServicoIdList",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ServicoIdList=Value},v2z:function(Value){gx.O.ZV24ServicoIdList=Value},v2c:function(){gx.fn.setControlValue("vSERVICOIDLIST",gx.O.AV24ServicoIdList,0)},c2v:function(){gx.O.AV24ServicoIdList=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOIDLIST")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"BTNHELP",grid:0};
   GXValidFnc[99]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[100]={fld:"PROMPT_ORDEMSERVICOVENDEDORID",grid:0};
   GXValidFnc[101]={fld:"PROMPT_FILTROPROFISSIONALID",grid:0};
   this.AV17TxtTela = "" ;
   this.ZV17TxtTela = "" ;
   this.OV17TxtTela = "" ;
   this.AV16TipoRelatorio = "" ;
   this.ZV16TipoRelatorio = "" ;
   this.OV16TipoRelatorio = "" ;
   this.AV5FilialId = 0 ;
   this.ZV5FilialId = 0 ;
   this.OV5FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.ZV31FilialNome = "" ;
   this.OV31FilialNome = "" ;
   this.AV40isConsideraTaxas = false ;
   this.ZV40isConsideraTaxas = false ;
   this.OV40isConsideraTaxas = false ;
   this.AV9MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.ZV9MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.OV9MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV7MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.ZV7MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.OV7MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV8MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.ZV8MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.OV8MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV6MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.ZV6MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.OV6MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV11OrdemServicoTipoId = 0 ;
   this.ZV11OrdemServicoTipoId = 0 ;
   this.OV11OrdemServicoTipoId = 0 ;
   this.AV12OrdemServicoVendedorId = 0 ;
   this.ZV12OrdemServicoVendedorId = 0 ;
   this.OV12OrdemServicoVendedorId = 0 ;
   this.AV13OrdemServicoVendedorNome = "" ;
   this.ZV13OrdemServicoVendedorNome = "" ;
   this.OV13OrdemServicoVendedorNome = "" ;
   this.AV41FiltroProfissionalId = 0 ;
   this.ZV41FiltroProfissionalId = 0 ;
   this.OV41FiltroProfissionalId = 0 ;
   this.AV15ProfissionalNome = "" ;
   this.ZV15ProfissionalNome = "" ;
   this.OV15ProfissionalNome = "" ;
   this.AV10OrdemServicoSituacao = "" ;
   this.ZV10OrdemServicoSituacao = "" ;
   this.OV10OrdemServicoSituacao = "" ;
   this.AV24ServicoIdList = "" ;
   this.ZV24ServicoIdList = "" ;
   this.OV24ServicoIdList = "" ;
   this.AV17TxtTela = "" ;
   this.AV16TipoRelatorio = "" ;
   this.AV5FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.AV40isConsideraTaxas = false ;
   this.AV9MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV7MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV8MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV6MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV11OrdemServicoTipoId = 0 ;
   this.AV12OrdemServicoVendedorId = 0 ;
   this.AV13OrdemServicoVendedorNome = "" ;
   this.AV41FiltroProfissionalId = 0 ;
   this.AV15ProfissionalNome = "" ;
   this.AV10OrdemServicoSituacao = "" ;
   this.AV24ServicoIdList = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.A1148VendedorNome = "" ;
   this.AV32snErro = "" ;
   this.Events = {"e132aa2_client": ["'FILTROS'", true] ,"e142aa2_client": ["VORDEMSERVICOVENDEDORID.ISVALID", true] ,"e152aa2_client": ["VFILTROPROFISSIONALID.ISVALID", true] ,"e162aa2_client": ["VFILIALID.ISVALID", true] ,"e172aa2_client": ["ENTER", true] ,"e182aa2_client": ["'SALVARTXT'", true] ,"e192aa2_client": ["VTXTTELA.CLICK", true] ,"e202aa2_client": ["'EXCLUIRTXT'", true] ,"e212aa2_client": ["'FECHAR'", true] ,"e222aa2_client": ["'TAXAS'", true] ,"e242aa2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV21SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV12OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV41FiltroProfissionalId',fld:'vFILTROPROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV17TxtTela',fld:'vTXTTELA'}],[{av:'AV17TxtTela',fld:'vTXTTELA'},{av:'AV49GXV2',fld:'vGXV2'},{av:'AV22SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV45GXLvl43',fld:'vGXLVL43'},{av:'AV13OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'},{av:'AV46GXLvl53',fld:'vGXLVL53'},{av:'AV15ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV47GXLvl63',fld:'vGXLVL63'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV48GXV1',fld:'vGXV1'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'AV6MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV7MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV8MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV9MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV10OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV16TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'}]];
   this.EvtParms["'FILTROS'"] = [[{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV17TxtTela',fld:'vTXTTELA'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'AV6MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV7MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV8MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV9MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV10OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV16TipoRelatorio',fld:'vTIPORELATORIO'}],[{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV20OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VORDEMSERVICOVENDEDORID.ISVALID"] = [[{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV12OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV45GXLvl43',fld:'vGXLVL43'},{av:'AV13OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'}]];
   this.EvtParms["VFILTROPROFISSIONALID.ISVALID"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV41FiltroProfissionalId',fld:'vFILTROPROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'}],[{av:'AV46GXLvl53',fld:'vGXLVL53'},{av:'AV15ProfissionalNome',fld:'vPROFISSIONALNOME'}]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV47GXLvl63',fld:'vGXLVL63'},{av:'AV31FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["ENTER"] = [[{av:'AV17TxtTela',fld:'vTXTTELA'},{av:'AV39SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV16TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'AV6MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV7MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV8MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV9MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV10OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV12OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV41FiltroProfissionalId',fld:'vFILTROPROFISSIONALID'},{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV40isConsideraTaxas',fld:'vISCONSIDERATAXAS'},{av:'AV32snErro',fld:'vSNERRO'},{av:'AV13OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'},{av:'AV15ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV31FilialNome',fld:'vFILIALNOME'}],[{av:'AV17TxtTela',fld:'vTXTTELA'},{av:'AV32snErro',fld:'vSNERRO'},{av:'AV41FiltroProfissionalId',fld:'vFILTROPROFISSIONALID'},{av:'AV27NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV26nomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV40isConsideraTaxas',fld:'vISCONSIDERATAXAS'},{av:'AV16TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV12OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV10OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV9MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV8MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV7MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV6MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'AV20OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV17TxtTela',fld:'vTXTTELA'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'AV6MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV7MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV8MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV9MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV10OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV16TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'}],[{av:'AV20OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV21SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV17TxtTela',fld:'vTXTTELA'},{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV48GXV1',fld:'vGXV1'},{av:'AV22SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV5FilialId',fld:'vFILIALID'},{av:'AV6MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV7MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV8MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV9MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV10OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV16TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV24ServicoIdList',fld:'vSERVICOIDLIST'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV35EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV17TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'TAXAS'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALID", [34]);
   this.setPrompt("PROMPT_ORDEMSERVICOVENDEDORID", [73]);
   this.setPrompt("PROMPT_FILTROPROFISSIONALID", [79]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfuncionarioprodserv());
