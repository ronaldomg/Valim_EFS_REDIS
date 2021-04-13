/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:49:4.78
*/
gx.evt.autoSkip = false;
gx.define('hfiltroscontaspagrec', false, function () {
   this.ServerClass =  "hfiltroscontaspagrec" ;
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
      this.AV131RelEstFinEmpresaId=gx.fn.getControlValue("vRELESTFINEMPRESAID") ;
   };
   this.Validv_Relestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRELESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Movestfinfiltrosid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMOVESTFINFILTROSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      this.AV21SnErro =  "N"  ;
      if ( this.AV21SnErro == "N" )
      {
         this.AV27x = gx.num.trunc( 1 ,0) ;
         while ( this.AV27x <= 5 && this.AV21SnErro == "N" )
         {
            if ( this.AV27x == 1 )
            {
               this.AV127TpCobIni = gx.num.trunc( this.AV28MovEstFinFiltrosTipoCobrIni1 ,0) ;
               this.AV128TpCobFin = gx.num.trunc( this.AV29MovEstFinFiltrosTipoCobrFin1 ,0) ;
            }
            else if ( this.AV27x == 2 )
            {
               this.AV127TpCobIni = gx.num.trunc( this.AV30MovEstFinFiltrosTipoCobrIni2 ,0) ;
               this.AV128TpCobFin = gx.num.trunc( this.AV31MovEstFinFiltrosTipoCobrFin2 ,0) ;
            }
            else if ( this.AV27x == 3 )
            {
               this.AV127TpCobIni = gx.num.trunc( this.AV32MovEstFinFiltrosTipoCobrIni3 ,0) ;
               this.AV128TpCobFin = gx.num.trunc( this.AV33MovEstFinFiltrosTipoCobrFin3 ,0) ;
            }
            else if ( this.AV27x == 4 )
            {
               this.AV127TpCobIni = gx.num.trunc( this.AV34MovEstFinFiltrosTipoCobrIni4 ,0) ;
               this.AV128TpCobFin = gx.num.trunc( this.AV35MovEstFinFiltrosTipoCobrFin4 ,0) ;
            }
            else if ( this.AV27x == 5 )
            {
               this.AV127TpCobIni = gx.num.trunc( this.AV36MovEstFinFiltrosTipoCobrIni5 ,0) ;
               this.AV128TpCobFin = gx.num.trunc( this.AV37MovEstFinFiltrosTipoCobrFin5 ,0) ;
            }
            if ( this.AV127TpCobIni > this.AV128TpCobFin )
            {
               this.addMessage("Tipo de cobrança inicial deve ser menor ou igual ao final");
               this.AV21SnErro =  "S"  ;
               if ( this.AV27x == 1 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSTIPOCOBRINI1") ;
               }
               else if ( this.AV27x == 2 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSTIPOCOBRINI2") ;
               }
               else if ( this.AV27x == 3 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSTIPOCOBRINI3") ;
               }
               else if ( this.AV27x == 4 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSTIPOCOBRINI4") ;
               }
               else if ( this.AV27x == 5 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSTIPOCOBRINI5") ;
               }
            }
            this.AV27x = gx.num.trunc( this.AV27x + 1 ,0) ;
         }
      }
      if ( this.AV21SnErro == "N" )
      {
         this.AV27x = gx.num.trunc( 1 ,0) ;
         while ( this.AV27x <= 5 && this.AV21SnErro == "N" )
         {
            if ( this.AV27x == 1 )
            {
               this.AV125EspecieIni = gx.num.trunc( this.AV114MovEstFinFiltrosEspecieIni1 ,0) ;
               this.AV126EspecieFin = gx.num.trunc( this.AV113MovEstFinFiltrosEspecieFin1 ,0) ;
            }
            else if ( this.AV27x == 2 )
            {
               this.AV125EspecieIni = gx.num.trunc( this.AV112MovEstFinFiltrosEspecieIni2 ,0) ;
               this.AV126EspecieFin = gx.num.trunc( this.AV115MovEstFinFiltrosEspecieFin2 ,0) ;
            }
            else if ( this.AV27x == 3 )
            {
               this.AV125EspecieIni = gx.num.trunc( this.AV121MovEstFinFiltrosEspecieIni3 ,0) ;
               this.AV126EspecieFin = gx.num.trunc( this.AV117MovEstFinFiltrosEspecieFin3 ,0) ;
            }
            else if ( this.AV27x == 4 )
            {
               this.AV125EspecieIni = gx.num.trunc( this.AV118MovEstFinFiltrosEspecieIni4 ,0) ;
               this.AV126EspecieFin = gx.num.trunc( this.AV120MovEstFinFiltrosEspecieFin4 ,0) ;
            }
            else if ( this.AV27x == 5 )
            {
               this.AV125EspecieIni = gx.num.trunc( this.AV116MovEstFinFiltrosEspecieIni5 ,0) ;
               this.AV126EspecieFin = gx.num.trunc( this.AV119MovEstFinFiltrosEspecieFin5 ,0) ;
            }
            if ( this.AV125EspecieIni > this.AV126EspecieFin )
            {
               this.addMessage("Espécie inicial deve ser menor ou igual a final");
               this.AV21SnErro =  "S"  ;
               if ( this.AV27x == 1 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSESPECIEINI1") ;
               }
               else if ( this.AV27x == 2 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSESPECIEINI2") ;
               }
               else if ( this.AV27x == 3 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSESPECIEINI3") ;
               }
               else if ( this.AV27x == 4 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSESPECIEINI4") ;
               }
               else if ( this.AV27x == 5 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSESPECIEINI5") ;
               }
            }
            this.AV27x = gx.num.trunc( this.AV27x + 1 ,0) ;
         }
      }
      if ( this.AV21SnErro == "N" )
      {
         this.AV27x = gx.num.trunc( 1 ,0) ;
         while ( this.AV27x <= 10 && this.AV21SnErro == "N" )
         {
            if ( this.AV27x == 1 )
            {
               this.AV25CCustoIni =  this.AV83MovEstFinFiltrosCCustoIni1  ;
               this.AV26CCustoFin =  this.AV82MovEstFinFiltrosCCustoFin1  ;
            }
            else if ( this.AV27x == 2 )
            {
               this.AV25CCustoIni =  this.AV81MovEstFinFiltrosCCustoIni2  ;
               this.AV26CCustoFin =  this.AV85MovEstFinFiltrosCCustoFin2  ;
            }
            else if ( this.AV27x == 3 )
            {
               this.AV25CCustoIni =  this.AV86MovEstFinFiltrosCCustoIni3  ;
               this.AV26CCustoFin =  this.AV87MovEstFinFiltrosCCustoFin3  ;
            }
            else if ( this.AV27x == 4 )
            {
               this.AV25CCustoIni =  this.AV88MovEstFinFiltrosCCustoIni4  ;
               this.AV26CCustoFin =  this.AV92MovEstFinFiltrosCCustoFin4  ;
            }
            else if ( this.AV27x == 5 )
            {
               this.AV25CCustoIni =  this.AV91MovEstFinFiltrosCCustoIni5  ;
               this.AV26CCustoFin =  this.AV90MovEstFinFiltrosCCustoFin5  ;
            }
            else if ( this.AV27x == 6 )
            {
               this.AV25CCustoIni =  this.AV89MovEstFinFiltrosCCustoIni6  ;
               this.AV26CCustoFin =  this.AV93MovEstFinFiltrosCCustoFin6  ;
            }
            else if ( this.AV27x == 7 )
            {
               this.AV25CCustoIni =  this.AV94MovEstFinFiltrosCCustoIni7  ;
               this.AV26CCustoFin =  this.AV95MovEstFinFiltrosCCustoFin7  ;
            }
            else if ( this.AV27x == 8 )
            {
               this.AV25CCustoIni =  this.AV96MovEstFinFiltrosCCustoIni8  ;
               this.AV26CCustoFin =  this.AV100MovEstFinFiltrosCCustoFin8  ;
            }
            else if ( this.AV27x == 9 )
            {
               this.AV25CCustoIni =  this.AV99MovEstFinFiltrosCCustoIni9  ;
               this.AV26CCustoFin =  this.AV98MovEstFinFiltrosCCustoFin9  ;
            }
            else if ( this.AV27x == 10 )
            {
               this.AV25CCustoIni =  this.AV97MovEstFinFiltrosCCustoIni10  ;
               this.AV26CCustoFin =  this.AV101MovEstFinFiltrosCCustoFin10  ;
            }
            if ( this.AV25CCustoIni > this.AV26CCustoFin )
            {
               this.addMessage("Centro de custo inicial deve ser menor ou igual ao final");
               this.AV21SnErro =  "S"  ;
               if ( this.AV27x == 1 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI1") ;
               }
               else if ( this.AV27x == 2 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI2") ;
               }
               else if ( this.AV27x == 3 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI3") ;
               }
               else if ( this.AV27x == 4 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI4") ;
               }
               else if ( this.AV27x == 5 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI5") ;
               }
               else if ( this.AV27x == 6 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI6") ;
               }
               else if ( this.AV27x == 7 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI7") ;
               }
               else if ( this.AV27x == 8 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI8") ;
               }
               else if ( this.AV27x == 9 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI9") ;
               }
               else if ( this.AV27x == 10 )
               {
                  gx.fn.usrSetFocus("vMOVESTFINFILTROSCCUSTOINI10") ;
               }
            }
            this.AV27x = gx.num.trunc( this.AV27x + 1 ,0) ;
         }
      }
   };
   this.e111gw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131gw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151gw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,19,21,23,24,38,40,42,44,46,48,50,52,54,56,60,62,64,66,68,70,74,88,90,92,94,96,98,100,102,104,106,110,112,114,116,118,120,124,135,137,139,141,143,145,147,151,153,155,157,159,161,165,167,169,171,173,175,179,181,183,185,187,189,193,195,197,199,201,203,204,207,209,211,220,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262];
   this.GXLastCtrlId =262;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE6",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Relestfinid,isvalid:null,rgrid:[],fld:"vRELESTFINID",gxz:"ZV133RelEstFinId",gxold:"OV133RelEstFinId",gxvar:"AV133RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV133RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRELESTFINID",gx.O.AV133RelEstFinId,0)},c2v:function(){gx.O.AV133RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRELESTFINDESCRICAO",gxz:"ZV132RelEstFinDescricao",gxold:"OV132RelEstFinDescricao",gxvar:"AV132RelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132RelEstFinDescricao=Value},v2z:function(Value){gx.O.ZV132RelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vRELESTFINDESCRICAO",gx.O.AV132RelEstFinDescricao,0)},c2v:function(){gx.O.AV132RelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Movestfinfiltrosid,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSID",gxz:"ZV130MovEstFinFiltrosId",gxold:"OV130MovEstFinFiltrosId",gxvar:"AV130MovEstFinFiltrosId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130MovEstFinFiltrosId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130MovEstFinFiltrosId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSID",gx.O.AV130MovEstFinFiltrosId,0)},c2v:function(){gx.O.AV130MovEstFinFiltrosId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINDESCRICAO",gxz:"ZV24MovEstFinDescricao",gxold:"OV24MovEstFinDescricao",gxvar:"AV24MovEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24MovEstFinDescricao=Value},v2z:function(Value){gx.O.ZV24MovEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINDESCRICAO",gx.O.AV24MovEstFinDescricao,0)},c2v:function(){gx.O.AV24MovEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE7",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRINI1",gxz:"ZV28MovEstFinFiltrosTipoCobrIni1",gxold:"OV28MovEstFinFiltrosTipoCobrIni1",gxvar:"AV28MovEstFinFiltrosTipoCobrIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28MovEstFinFiltrosTipoCobrIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28MovEstFinFiltrosTipoCobrIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRINI1",gx.O.AV28MovEstFinFiltrosTipoCobrIni1,0)},c2v:function(){gx.O.AV28MovEstFinFiltrosTipoCobrIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRINI1",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRFIN1",gxz:"ZV29MovEstFinFiltrosTipoCobrFin1",gxold:"OV29MovEstFinFiltrosTipoCobrFin1",gxvar:"AV29MovEstFinFiltrosTipoCobrFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29MovEstFinFiltrosTipoCobrFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29MovEstFinFiltrosTipoCobrFin1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRFIN1",gx.O.AV29MovEstFinFiltrosTipoCobrFin1,0)},c2v:function(){gx.O.AV29MovEstFinFiltrosTipoCobrFin1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRFIN1",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRINI2",gxz:"ZV30MovEstFinFiltrosTipoCobrIni2",gxold:"OV30MovEstFinFiltrosTipoCobrIni2",gxvar:"AV30MovEstFinFiltrosTipoCobrIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30MovEstFinFiltrosTipoCobrIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30MovEstFinFiltrosTipoCobrIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRINI2",gx.O.AV30MovEstFinFiltrosTipoCobrIni2,0)},c2v:function(){gx.O.AV30MovEstFinFiltrosTipoCobrIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRINI2",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRFIN2",gxz:"ZV31MovEstFinFiltrosTipoCobrFin2",gxold:"OV31MovEstFinFiltrosTipoCobrFin2",gxvar:"AV31MovEstFinFiltrosTipoCobrFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31MovEstFinFiltrosTipoCobrFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31MovEstFinFiltrosTipoCobrFin2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRFIN2",gx.O.AV31MovEstFinFiltrosTipoCobrFin2,0)},c2v:function(){gx.O.AV31MovEstFinFiltrosTipoCobrFin2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRFIN2",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRINI3",gxz:"ZV32MovEstFinFiltrosTipoCobrIni3",gxold:"OV32MovEstFinFiltrosTipoCobrIni3",gxvar:"AV32MovEstFinFiltrosTipoCobrIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32MovEstFinFiltrosTipoCobrIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32MovEstFinFiltrosTipoCobrIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRINI3",gx.O.AV32MovEstFinFiltrosTipoCobrIni3,0)},c2v:function(){gx.O.AV32MovEstFinFiltrosTipoCobrIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRINI3",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRFIN3",gxz:"ZV33MovEstFinFiltrosTipoCobrFin3",gxold:"OV33MovEstFinFiltrosTipoCobrFin3",gxvar:"AV33MovEstFinFiltrosTipoCobrFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33MovEstFinFiltrosTipoCobrFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33MovEstFinFiltrosTipoCobrFin3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRFIN3",gx.O.AV33MovEstFinFiltrosTipoCobrFin3,0)},c2v:function(){gx.O.AV33MovEstFinFiltrosTipoCobrFin3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRFIN3",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRINI4",gxz:"ZV34MovEstFinFiltrosTipoCobrIni4",gxold:"OV34MovEstFinFiltrosTipoCobrIni4",gxvar:"AV34MovEstFinFiltrosTipoCobrIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34MovEstFinFiltrosTipoCobrIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34MovEstFinFiltrosTipoCobrIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRINI4",gx.O.AV34MovEstFinFiltrosTipoCobrIni4,0)},c2v:function(){gx.O.AV34MovEstFinFiltrosTipoCobrIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRINI4",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRFIN4",gxz:"ZV35MovEstFinFiltrosTipoCobrFin4",gxold:"OV35MovEstFinFiltrosTipoCobrFin4",gxvar:"AV35MovEstFinFiltrosTipoCobrFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35MovEstFinFiltrosTipoCobrFin4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35MovEstFinFiltrosTipoCobrFin4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRFIN4",gx.O.AV35MovEstFinFiltrosTipoCobrFin4,0)},c2v:function(){gx.O.AV35MovEstFinFiltrosTipoCobrFin4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRFIN4",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRINI5",gxz:"ZV36MovEstFinFiltrosTipoCobrIni5",gxold:"OV36MovEstFinFiltrosTipoCobrIni5",gxvar:"AV36MovEstFinFiltrosTipoCobrIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36MovEstFinFiltrosTipoCobrIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36MovEstFinFiltrosTipoCobrIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRINI5",gx.O.AV36MovEstFinFiltrosTipoCobrIni5,0)},c2v:function(){gx.O.AV36MovEstFinFiltrosTipoCobrIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRINI5",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSTIPOCOBRFIN5",gxz:"ZV37MovEstFinFiltrosTipoCobrFin5",gxold:"OV37MovEstFinFiltrosTipoCobrFin5",gxvar:"AV37MovEstFinFiltrosTipoCobrFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37MovEstFinFiltrosTipoCobrFin5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37MovEstFinFiltrosTipoCobrFin5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSTIPOCOBRFIN5",gx.O.AV37MovEstFinFiltrosTipoCobrFin5,0)},c2v:function(){gx.O.AV37MovEstFinFiltrosTipoCobrFin5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSTIPOCOBRFIN5",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TABLE4",grid:0};
   GXValidFnc[88]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEINI1",gxz:"ZV114MovEstFinFiltrosEspecieIni1",gxold:"OV114MovEstFinFiltrosEspecieIni1",gxvar:"AV114MovEstFinFiltrosEspecieIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114MovEstFinFiltrosEspecieIni1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV114MovEstFinFiltrosEspecieIni1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEINI1",gx.O.AV114MovEstFinFiltrosEspecieIni1,0)},c2v:function(){gx.O.AV114MovEstFinFiltrosEspecieIni1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEINI1",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEFIN1",gxz:"ZV113MovEstFinFiltrosEspecieFin1",gxold:"OV113MovEstFinFiltrosEspecieFin1",gxvar:"AV113MovEstFinFiltrosEspecieFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113MovEstFinFiltrosEspecieFin1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113MovEstFinFiltrosEspecieFin1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEFIN1",gx.O.AV113MovEstFinFiltrosEspecieFin1,0)},c2v:function(){gx.O.AV113MovEstFinFiltrosEspecieFin1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEFIN1",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEINI2",gxz:"ZV112MovEstFinFiltrosEspecieIni2",gxold:"OV112MovEstFinFiltrosEspecieIni2",gxvar:"AV112MovEstFinFiltrosEspecieIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112MovEstFinFiltrosEspecieIni2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112MovEstFinFiltrosEspecieIni2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEINI2",gx.O.AV112MovEstFinFiltrosEspecieIni2,0)},c2v:function(){gx.O.AV112MovEstFinFiltrosEspecieIni2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEINI2",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEFIN2",gxz:"ZV115MovEstFinFiltrosEspecieFin2",gxold:"OV115MovEstFinFiltrosEspecieFin2",gxvar:"AV115MovEstFinFiltrosEspecieFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115MovEstFinFiltrosEspecieFin2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115MovEstFinFiltrosEspecieFin2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEFIN2",gx.O.AV115MovEstFinFiltrosEspecieFin2,0)},c2v:function(){gx.O.AV115MovEstFinFiltrosEspecieFin2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEFIN2",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEINI3",gxz:"ZV121MovEstFinFiltrosEspecieIni3",gxold:"OV121MovEstFinFiltrosEspecieIni3",gxvar:"AV121MovEstFinFiltrosEspecieIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121MovEstFinFiltrosEspecieIni3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV121MovEstFinFiltrosEspecieIni3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEINI3",gx.O.AV121MovEstFinFiltrosEspecieIni3,0)},c2v:function(){gx.O.AV121MovEstFinFiltrosEspecieIni3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEINI3",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEFIN3",gxz:"ZV117MovEstFinFiltrosEspecieFin3",gxold:"OV117MovEstFinFiltrosEspecieFin3",gxvar:"AV117MovEstFinFiltrosEspecieFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117MovEstFinFiltrosEspecieFin3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117MovEstFinFiltrosEspecieFin3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEFIN3",gx.O.AV117MovEstFinFiltrosEspecieFin3,0)},c2v:function(){gx.O.AV117MovEstFinFiltrosEspecieFin3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEFIN3",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEINI4",gxz:"ZV118MovEstFinFiltrosEspecieIni4",gxold:"OV118MovEstFinFiltrosEspecieIni4",gxvar:"AV118MovEstFinFiltrosEspecieIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118MovEstFinFiltrosEspecieIni4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118MovEstFinFiltrosEspecieIni4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEINI4",gx.O.AV118MovEstFinFiltrosEspecieIni4,0)},c2v:function(){gx.O.AV118MovEstFinFiltrosEspecieIni4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEINI4",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEFIN4",gxz:"ZV120MovEstFinFiltrosEspecieFin4",gxold:"OV120MovEstFinFiltrosEspecieFin4",gxvar:"AV120MovEstFinFiltrosEspecieFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120MovEstFinFiltrosEspecieFin4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120MovEstFinFiltrosEspecieFin4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEFIN4",gx.O.AV120MovEstFinFiltrosEspecieFin4,0)},c2v:function(){gx.O.AV120MovEstFinFiltrosEspecieFin4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEFIN4",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEINI5",gxz:"ZV116MovEstFinFiltrosEspecieIni5",gxold:"OV116MovEstFinFiltrosEspecieIni5",gxvar:"AV116MovEstFinFiltrosEspecieIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116MovEstFinFiltrosEspecieIni5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV116MovEstFinFiltrosEspecieIni5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEINI5",gx.O.AV116MovEstFinFiltrosEspecieIni5,0)},c2v:function(){gx.O.AV116MovEstFinFiltrosEspecieIni5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEINI5",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSESPECIEFIN5",gxz:"ZV119MovEstFinFiltrosEspecieFin5",gxold:"OV119MovEstFinFiltrosEspecieFin5",gxvar:"AV119MovEstFinFiltrosEspecieFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119MovEstFinFiltrosEspecieFin5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV119MovEstFinFiltrosEspecieFin5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSESPECIEFIN5",gx.O.AV119MovEstFinFiltrosEspecieFin5,0)},c2v:function(){gx.O.AV119MovEstFinFiltrosEspecieFin5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINFILTROSESPECIEFIN5",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TABLE3",grid:0};
   GXValidFnc[135]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI1",gxz:"ZV83MovEstFinFiltrosCCustoIni1",gxold:"OV83MovEstFinFiltrosCCustoIni1",gxvar:"AV83MovEstFinFiltrosCCustoIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83MovEstFinFiltrosCCustoIni1=Value},v2z:function(Value){gx.O.ZV83MovEstFinFiltrosCCustoIni1=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI1",gx.O.AV83MovEstFinFiltrosCCustoIni1,0)},c2v:function(){gx.O.AV83MovEstFinFiltrosCCustoIni1=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI1")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN1",gxz:"ZV82MovEstFinFiltrosCCustoFin1",gxold:"OV82MovEstFinFiltrosCCustoFin1",gxvar:"AV82MovEstFinFiltrosCCustoFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82MovEstFinFiltrosCCustoFin1=Value},v2z:function(Value){gx.O.ZV82MovEstFinFiltrosCCustoFin1=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN1",gx.O.AV82MovEstFinFiltrosCCustoFin1,0)},c2v:function(){gx.O.AV82MovEstFinFiltrosCCustoFin1=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN1")},nac:gx.falseFn};
   GXValidFnc[143]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI2",gxz:"ZV81MovEstFinFiltrosCCustoIni2",gxold:"OV81MovEstFinFiltrosCCustoIni2",gxvar:"AV81MovEstFinFiltrosCCustoIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81MovEstFinFiltrosCCustoIni2=Value},v2z:function(Value){gx.O.ZV81MovEstFinFiltrosCCustoIni2=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI2",gx.O.AV81MovEstFinFiltrosCCustoIni2,0)},c2v:function(){gx.O.AV81MovEstFinFiltrosCCustoIni2=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI2")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN2",gxz:"ZV85MovEstFinFiltrosCCustoFin2",gxold:"OV85MovEstFinFiltrosCCustoFin2",gxvar:"AV85MovEstFinFiltrosCCustoFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85MovEstFinFiltrosCCustoFin2=Value},v2z:function(Value){gx.O.ZV85MovEstFinFiltrosCCustoFin2=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN2",gx.O.AV85MovEstFinFiltrosCCustoFin2,0)},c2v:function(){gx.O.AV85MovEstFinFiltrosCCustoFin2=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN2")},nac:gx.falseFn};
   GXValidFnc[151]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI3",gxz:"ZV86MovEstFinFiltrosCCustoIni3",gxold:"OV86MovEstFinFiltrosCCustoIni3",gxvar:"AV86MovEstFinFiltrosCCustoIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86MovEstFinFiltrosCCustoIni3=Value},v2z:function(Value){gx.O.ZV86MovEstFinFiltrosCCustoIni3=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI3",gx.O.AV86MovEstFinFiltrosCCustoIni3,0)},c2v:function(){gx.O.AV86MovEstFinFiltrosCCustoIni3=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI3")},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN3",gxz:"ZV87MovEstFinFiltrosCCustoFin3",gxold:"OV87MovEstFinFiltrosCCustoFin3",gxvar:"AV87MovEstFinFiltrosCCustoFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87MovEstFinFiltrosCCustoFin3=Value},v2z:function(Value){gx.O.ZV87MovEstFinFiltrosCCustoFin3=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN3",gx.O.AV87MovEstFinFiltrosCCustoFin3,0)},c2v:function(){gx.O.AV87MovEstFinFiltrosCCustoFin3=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN3")},nac:gx.falseFn};
   GXValidFnc[157]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI4",gxz:"ZV88MovEstFinFiltrosCCustoIni4",gxold:"OV88MovEstFinFiltrosCCustoIni4",gxvar:"AV88MovEstFinFiltrosCCustoIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88MovEstFinFiltrosCCustoIni4=Value},v2z:function(Value){gx.O.ZV88MovEstFinFiltrosCCustoIni4=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI4",gx.O.AV88MovEstFinFiltrosCCustoIni4,0)},c2v:function(){gx.O.AV88MovEstFinFiltrosCCustoIni4=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI4")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN4",gxz:"ZV92MovEstFinFiltrosCCustoFin4",gxold:"OV92MovEstFinFiltrosCCustoFin4",gxvar:"AV92MovEstFinFiltrosCCustoFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92MovEstFinFiltrosCCustoFin4=Value},v2z:function(Value){gx.O.ZV92MovEstFinFiltrosCCustoFin4=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN4",gx.O.AV92MovEstFinFiltrosCCustoFin4,0)},c2v:function(){gx.O.AV92MovEstFinFiltrosCCustoFin4=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN4")},nac:gx.falseFn};
   GXValidFnc[165]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI5",gxz:"ZV91MovEstFinFiltrosCCustoIni5",gxold:"OV91MovEstFinFiltrosCCustoIni5",gxvar:"AV91MovEstFinFiltrosCCustoIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91MovEstFinFiltrosCCustoIni5=Value},v2z:function(Value){gx.O.ZV91MovEstFinFiltrosCCustoIni5=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI5",gx.O.AV91MovEstFinFiltrosCCustoIni5,0)},c2v:function(){gx.O.AV91MovEstFinFiltrosCCustoIni5=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI5")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN5",gxz:"ZV90MovEstFinFiltrosCCustoFin5",gxold:"OV90MovEstFinFiltrosCCustoFin5",gxvar:"AV90MovEstFinFiltrosCCustoFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90MovEstFinFiltrosCCustoFin5=Value},v2z:function(Value){gx.O.ZV90MovEstFinFiltrosCCustoFin5=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN5",gx.O.AV90MovEstFinFiltrosCCustoFin5,0)},c2v:function(){gx.O.AV90MovEstFinFiltrosCCustoFin5=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN5")},nac:gx.falseFn};
   GXValidFnc[171]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI6",gxz:"ZV89MovEstFinFiltrosCCustoIni6",gxold:"OV89MovEstFinFiltrosCCustoIni6",gxvar:"AV89MovEstFinFiltrosCCustoIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89MovEstFinFiltrosCCustoIni6=Value},v2z:function(Value){gx.O.ZV89MovEstFinFiltrosCCustoIni6=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI6",gx.O.AV89MovEstFinFiltrosCCustoIni6,0)},c2v:function(){gx.O.AV89MovEstFinFiltrosCCustoIni6=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI6")},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[175]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN6",gxz:"ZV93MovEstFinFiltrosCCustoFin6",gxold:"OV93MovEstFinFiltrosCCustoFin6",gxvar:"AV93MovEstFinFiltrosCCustoFin6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93MovEstFinFiltrosCCustoFin6=Value},v2z:function(Value){gx.O.ZV93MovEstFinFiltrosCCustoFin6=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN6",gx.O.AV93MovEstFinFiltrosCCustoFin6,0)},c2v:function(){gx.O.AV93MovEstFinFiltrosCCustoFin6=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN6")},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI7",gxz:"ZV94MovEstFinFiltrosCCustoIni7",gxold:"OV94MovEstFinFiltrosCCustoIni7",gxvar:"AV94MovEstFinFiltrosCCustoIni7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94MovEstFinFiltrosCCustoIni7=Value},v2z:function(Value){gx.O.ZV94MovEstFinFiltrosCCustoIni7=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI7",gx.O.AV94MovEstFinFiltrosCCustoIni7,0)},c2v:function(){gx.O.AV94MovEstFinFiltrosCCustoIni7=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI7")},nac:gx.falseFn};
   GXValidFnc[181]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[183]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN7",gxz:"ZV95MovEstFinFiltrosCCustoFin7",gxold:"OV95MovEstFinFiltrosCCustoFin7",gxvar:"AV95MovEstFinFiltrosCCustoFin7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95MovEstFinFiltrosCCustoFin7=Value},v2z:function(Value){gx.O.ZV95MovEstFinFiltrosCCustoFin7=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN7",gx.O.AV95MovEstFinFiltrosCCustoFin7,0)},c2v:function(){gx.O.AV95MovEstFinFiltrosCCustoFin7=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN7")},nac:gx.falseFn};
   GXValidFnc[185]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI8",gxz:"ZV96MovEstFinFiltrosCCustoIni8",gxold:"OV96MovEstFinFiltrosCCustoIni8",gxvar:"AV96MovEstFinFiltrosCCustoIni8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96MovEstFinFiltrosCCustoIni8=Value},v2z:function(Value){gx.O.ZV96MovEstFinFiltrosCCustoIni8=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI8",gx.O.AV96MovEstFinFiltrosCCustoIni8,0)},c2v:function(){gx.O.AV96MovEstFinFiltrosCCustoIni8=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI8")},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN8",gxz:"ZV100MovEstFinFiltrosCCustoFin8",gxold:"OV100MovEstFinFiltrosCCustoFin8",gxvar:"AV100MovEstFinFiltrosCCustoFin8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100MovEstFinFiltrosCCustoFin8=Value},v2z:function(Value){gx.O.ZV100MovEstFinFiltrosCCustoFin8=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN8",gx.O.AV100MovEstFinFiltrosCCustoFin8,0)},c2v:function(){gx.O.AV100MovEstFinFiltrosCCustoFin8=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN8")},nac:gx.falseFn};
   GXValidFnc[193]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI9",gxz:"ZV99MovEstFinFiltrosCCustoIni9",gxold:"OV99MovEstFinFiltrosCCustoIni9",gxvar:"AV99MovEstFinFiltrosCCustoIni9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99MovEstFinFiltrosCCustoIni9=Value},v2z:function(Value){gx.O.ZV99MovEstFinFiltrosCCustoIni9=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI9",gx.O.AV99MovEstFinFiltrosCCustoIni9,0)},c2v:function(){gx.O.AV99MovEstFinFiltrosCCustoIni9=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI9")},nac:gx.falseFn};
   GXValidFnc[195]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[197]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN9",gxz:"ZV98MovEstFinFiltrosCCustoFin9",gxold:"OV98MovEstFinFiltrosCCustoFin9",gxvar:"AV98MovEstFinFiltrosCCustoFin9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98MovEstFinFiltrosCCustoFin9=Value},v2z:function(Value){gx.O.ZV98MovEstFinFiltrosCCustoFin9=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN9",gx.O.AV98MovEstFinFiltrosCCustoFin9,0)},c2v:function(){gx.O.AV98MovEstFinFiltrosCCustoFin9=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN9")},nac:gx.falseFn};
   GXValidFnc[199]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOINI10",gxz:"ZV97MovEstFinFiltrosCCustoIni10",gxold:"OV97MovEstFinFiltrosCCustoIni10",gxvar:"AV97MovEstFinFiltrosCCustoIni10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97MovEstFinFiltrosCCustoIni10=Value},v2z:function(Value){gx.O.ZV97MovEstFinFiltrosCCustoIni10=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOINI10",gx.O.AV97MovEstFinFiltrosCCustoIni10,0)},c2v:function(){gx.O.AV97MovEstFinFiltrosCCustoIni10=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOINI10")},nac:gx.falseFn};
   GXValidFnc[201]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[203]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSCCUSTOFIN10",gxz:"ZV101MovEstFinFiltrosCCustoFin10",gxold:"OV101MovEstFinFiltrosCCustoFin10",gxvar:"AV101MovEstFinFiltrosCCustoFin10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101MovEstFinFiltrosCCustoFin10=Value},v2z:function(Value){gx.O.ZV101MovEstFinFiltrosCCustoFin10=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSCCUSTOFIN10",gx.O.AV101MovEstFinFiltrosCCustoFin10,0)},c2v:function(){gx.O.AV101MovEstFinFiltrosCCustoFin10=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSCCUSTOFIN10")},nac:gx.falseFn};
   GXValidFnc[204]={fld:"TABLE2",grid:0};
   GXValidFnc[207]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSUSUARIOALT",gxz:"ZV123MovEstFinFiltrosUsuarioAlt",gxold:"OV123MovEstFinFiltrosUsuarioAlt",gxvar:"AV123MovEstFinFiltrosUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123MovEstFinFiltrosUsuarioAlt=Value},v2z:function(Value){gx.O.ZV123MovEstFinFiltrosUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSUSUARIOALT",gx.O.AV123MovEstFinFiltrosUsuarioAlt,0)},c2v:function(){gx.O.AV123MovEstFinFiltrosUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINFILTROSUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[211]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINFILTROSDATAHORAALT",gxz:"ZV124MovEstFinFiltrosDataHoraAlt",gxold:"OV124MovEstFinFiltrosDataHoraAlt",gxvar:"AV124MovEstFinFiltrosDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124MovEstFinFiltrosDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV124MovEstFinFiltrosDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINFILTROSDATAHORAALT",gx.O.AV124MovEstFinFiltrosDataHoraAlt,0)},c2v:function(){gx.O.AV124MovEstFinFiltrosDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMOVESTFINFILTROSDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[220]={fld:"JS", format:2,grid:0};
   GXValidFnc[222]={fld:"BTNHELP",grid:0};
   GXValidFnc[223]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRINI1",grid:0};
   GXValidFnc[224]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRFIN1",grid:0};
   GXValidFnc[225]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRINI2",grid:0};
   GXValidFnc[226]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRFIN2",grid:0};
   GXValidFnc[227]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRINI3",grid:0};
   GXValidFnc[228]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRFIN3",grid:0};
   GXValidFnc[229]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRINI4",grid:0};
   GXValidFnc[230]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRFIN4",grid:0};
   GXValidFnc[231]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRINI5",grid:0};
   GXValidFnc[232]={fld:"PROMPT_MOVESTFINFILTROSTIPOCOBRFIN5",grid:0};
   GXValidFnc[233]={fld:"PROMPT_MOVESTFINFILTROSESPECIEINI1",grid:0};
   GXValidFnc[234]={fld:"PROMPT_MOVESTFINFILTROSESPECIEFIN1",grid:0};
   GXValidFnc[235]={fld:"PROMPT_MOVESTFINFILTROSESPECIEINI2",grid:0};
   GXValidFnc[236]={fld:"PROMPT_MOVESTFINFILTROSESPECIEFIN2",grid:0};
   GXValidFnc[237]={fld:"PROMPT_MOVESTFINFILTROSESPECIEINI3",grid:0};
   GXValidFnc[238]={fld:"PROMPT_MOVESTFINFILTROSESPECIEFIN3",grid:0};
   GXValidFnc[239]={fld:"PROMPT_MOVESTFINFILTROSESPECIEINI4",grid:0};
   GXValidFnc[240]={fld:"PROMPT_MOVESTFINFILTROSESPECIEFIN4",grid:0};
   GXValidFnc[241]={fld:"PROMPT_MOVESTFINFILTROSESPECIEINI5",grid:0};
   GXValidFnc[242]={fld:"PROMPT_MOVESTFINFILTROSESPECIEFIN5",grid:0};
   GXValidFnc[243]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI1",grid:0};
   GXValidFnc[244]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN1",grid:0};
   GXValidFnc[245]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI2",grid:0};
   GXValidFnc[246]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN2",grid:0};
   GXValidFnc[247]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI3",grid:0};
   GXValidFnc[248]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN3",grid:0};
   GXValidFnc[249]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI4",grid:0};
   GXValidFnc[250]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN4",grid:0};
   GXValidFnc[251]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI5",grid:0};
   GXValidFnc[252]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN5",grid:0};
   GXValidFnc[253]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI6",grid:0};
   GXValidFnc[254]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN6",grid:0};
   GXValidFnc[255]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI7",grid:0};
   GXValidFnc[256]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN7",grid:0};
   GXValidFnc[257]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI8",grid:0};
   GXValidFnc[258]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN8",grid:0};
   GXValidFnc[259]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI9",grid:0};
   GXValidFnc[260]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN9",grid:0};
   GXValidFnc[261]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOINI10",grid:0};
   GXValidFnc[262]={fld:"PROMPT_MOVESTFINFILTROSCCUSTOFIN10",grid:0};
   this.AV133RelEstFinId = 0 ;
   this.ZV133RelEstFinId = 0 ;
   this.OV133RelEstFinId = 0 ;
   this.AV132RelEstFinDescricao = "" ;
   this.ZV132RelEstFinDescricao = "" ;
   this.OV132RelEstFinDescricao = "" ;
   this.AV130MovEstFinFiltrosId = 0 ;
   this.ZV130MovEstFinFiltrosId = 0 ;
   this.OV130MovEstFinFiltrosId = 0 ;
   this.AV24MovEstFinDescricao = "" ;
   this.ZV24MovEstFinDescricao = "" ;
   this.OV24MovEstFinDescricao = "" ;
   this.AV28MovEstFinFiltrosTipoCobrIni1 = 0 ;
   this.ZV28MovEstFinFiltrosTipoCobrIni1 = 0 ;
   this.OV28MovEstFinFiltrosTipoCobrIni1 = 0 ;
   this.AV29MovEstFinFiltrosTipoCobrFin1 = 0 ;
   this.ZV29MovEstFinFiltrosTipoCobrFin1 = 0 ;
   this.OV29MovEstFinFiltrosTipoCobrFin1 = 0 ;
   this.AV30MovEstFinFiltrosTipoCobrIni2 = 0 ;
   this.ZV30MovEstFinFiltrosTipoCobrIni2 = 0 ;
   this.OV30MovEstFinFiltrosTipoCobrIni2 = 0 ;
   this.AV31MovEstFinFiltrosTipoCobrFin2 = 0 ;
   this.ZV31MovEstFinFiltrosTipoCobrFin2 = 0 ;
   this.OV31MovEstFinFiltrosTipoCobrFin2 = 0 ;
   this.AV32MovEstFinFiltrosTipoCobrIni3 = 0 ;
   this.ZV32MovEstFinFiltrosTipoCobrIni3 = 0 ;
   this.OV32MovEstFinFiltrosTipoCobrIni3 = 0 ;
   this.AV33MovEstFinFiltrosTipoCobrFin3 = 0 ;
   this.ZV33MovEstFinFiltrosTipoCobrFin3 = 0 ;
   this.OV33MovEstFinFiltrosTipoCobrFin3 = 0 ;
   this.AV34MovEstFinFiltrosTipoCobrIni4 = 0 ;
   this.ZV34MovEstFinFiltrosTipoCobrIni4 = 0 ;
   this.OV34MovEstFinFiltrosTipoCobrIni4 = 0 ;
   this.AV35MovEstFinFiltrosTipoCobrFin4 = 0 ;
   this.ZV35MovEstFinFiltrosTipoCobrFin4 = 0 ;
   this.OV35MovEstFinFiltrosTipoCobrFin4 = 0 ;
   this.AV36MovEstFinFiltrosTipoCobrIni5 = 0 ;
   this.ZV36MovEstFinFiltrosTipoCobrIni5 = 0 ;
   this.OV36MovEstFinFiltrosTipoCobrIni5 = 0 ;
   this.AV37MovEstFinFiltrosTipoCobrFin5 = 0 ;
   this.ZV37MovEstFinFiltrosTipoCobrFin5 = 0 ;
   this.OV37MovEstFinFiltrosTipoCobrFin5 = 0 ;
   this.AV114MovEstFinFiltrosEspecieIni1 = 0 ;
   this.ZV114MovEstFinFiltrosEspecieIni1 = 0 ;
   this.OV114MovEstFinFiltrosEspecieIni1 = 0 ;
   this.AV113MovEstFinFiltrosEspecieFin1 = 0 ;
   this.ZV113MovEstFinFiltrosEspecieFin1 = 0 ;
   this.OV113MovEstFinFiltrosEspecieFin1 = 0 ;
   this.AV112MovEstFinFiltrosEspecieIni2 = 0 ;
   this.ZV112MovEstFinFiltrosEspecieIni2 = 0 ;
   this.OV112MovEstFinFiltrosEspecieIni2 = 0 ;
   this.AV115MovEstFinFiltrosEspecieFin2 = 0 ;
   this.ZV115MovEstFinFiltrosEspecieFin2 = 0 ;
   this.OV115MovEstFinFiltrosEspecieFin2 = 0 ;
   this.AV121MovEstFinFiltrosEspecieIni3 = 0 ;
   this.ZV121MovEstFinFiltrosEspecieIni3 = 0 ;
   this.OV121MovEstFinFiltrosEspecieIni3 = 0 ;
   this.AV117MovEstFinFiltrosEspecieFin3 = 0 ;
   this.ZV117MovEstFinFiltrosEspecieFin3 = 0 ;
   this.OV117MovEstFinFiltrosEspecieFin3 = 0 ;
   this.AV118MovEstFinFiltrosEspecieIni4 = 0 ;
   this.ZV118MovEstFinFiltrosEspecieIni4 = 0 ;
   this.OV118MovEstFinFiltrosEspecieIni4 = 0 ;
   this.AV120MovEstFinFiltrosEspecieFin4 = 0 ;
   this.ZV120MovEstFinFiltrosEspecieFin4 = 0 ;
   this.OV120MovEstFinFiltrosEspecieFin4 = 0 ;
   this.AV116MovEstFinFiltrosEspecieIni5 = 0 ;
   this.ZV116MovEstFinFiltrosEspecieIni5 = 0 ;
   this.OV116MovEstFinFiltrosEspecieIni5 = 0 ;
   this.AV119MovEstFinFiltrosEspecieFin5 = 0 ;
   this.ZV119MovEstFinFiltrosEspecieFin5 = 0 ;
   this.OV119MovEstFinFiltrosEspecieFin5 = 0 ;
   this.AV83MovEstFinFiltrosCCustoIni1 = "" ;
   this.ZV83MovEstFinFiltrosCCustoIni1 = "" ;
   this.OV83MovEstFinFiltrosCCustoIni1 = "" ;
   this.AV82MovEstFinFiltrosCCustoFin1 = "" ;
   this.ZV82MovEstFinFiltrosCCustoFin1 = "" ;
   this.OV82MovEstFinFiltrosCCustoFin1 = "" ;
   this.AV81MovEstFinFiltrosCCustoIni2 = "" ;
   this.ZV81MovEstFinFiltrosCCustoIni2 = "" ;
   this.OV81MovEstFinFiltrosCCustoIni2 = "" ;
   this.AV85MovEstFinFiltrosCCustoFin2 = "" ;
   this.ZV85MovEstFinFiltrosCCustoFin2 = "" ;
   this.OV85MovEstFinFiltrosCCustoFin2 = "" ;
   this.AV86MovEstFinFiltrosCCustoIni3 = "" ;
   this.ZV86MovEstFinFiltrosCCustoIni3 = "" ;
   this.OV86MovEstFinFiltrosCCustoIni3 = "" ;
   this.AV87MovEstFinFiltrosCCustoFin3 = "" ;
   this.ZV87MovEstFinFiltrosCCustoFin3 = "" ;
   this.OV87MovEstFinFiltrosCCustoFin3 = "" ;
   this.AV88MovEstFinFiltrosCCustoIni4 = "" ;
   this.ZV88MovEstFinFiltrosCCustoIni4 = "" ;
   this.OV88MovEstFinFiltrosCCustoIni4 = "" ;
   this.AV92MovEstFinFiltrosCCustoFin4 = "" ;
   this.ZV92MovEstFinFiltrosCCustoFin4 = "" ;
   this.OV92MovEstFinFiltrosCCustoFin4 = "" ;
   this.AV91MovEstFinFiltrosCCustoIni5 = "" ;
   this.ZV91MovEstFinFiltrosCCustoIni5 = "" ;
   this.OV91MovEstFinFiltrosCCustoIni5 = "" ;
   this.AV90MovEstFinFiltrosCCustoFin5 = "" ;
   this.ZV90MovEstFinFiltrosCCustoFin5 = "" ;
   this.OV90MovEstFinFiltrosCCustoFin5 = "" ;
   this.AV89MovEstFinFiltrosCCustoIni6 = "" ;
   this.ZV89MovEstFinFiltrosCCustoIni6 = "" ;
   this.OV89MovEstFinFiltrosCCustoIni6 = "" ;
   this.AV93MovEstFinFiltrosCCustoFin6 = "" ;
   this.ZV93MovEstFinFiltrosCCustoFin6 = "" ;
   this.OV93MovEstFinFiltrosCCustoFin6 = "" ;
   this.AV94MovEstFinFiltrosCCustoIni7 = "" ;
   this.ZV94MovEstFinFiltrosCCustoIni7 = "" ;
   this.OV94MovEstFinFiltrosCCustoIni7 = "" ;
   this.AV95MovEstFinFiltrosCCustoFin7 = "" ;
   this.ZV95MovEstFinFiltrosCCustoFin7 = "" ;
   this.OV95MovEstFinFiltrosCCustoFin7 = "" ;
   this.AV96MovEstFinFiltrosCCustoIni8 = "" ;
   this.ZV96MovEstFinFiltrosCCustoIni8 = "" ;
   this.OV96MovEstFinFiltrosCCustoIni8 = "" ;
   this.AV100MovEstFinFiltrosCCustoFin8 = "" ;
   this.ZV100MovEstFinFiltrosCCustoFin8 = "" ;
   this.OV100MovEstFinFiltrosCCustoFin8 = "" ;
   this.AV99MovEstFinFiltrosCCustoIni9 = "" ;
   this.ZV99MovEstFinFiltrosCCustoIni9 = "" ;
   this.OV99MovEstFinFiltrosCCustoIni9 = "" ;
   this.AV98MovEstFinFiltrosCCustoFin9 = "" ;
   this.ZV98MovEstFinFiltrosCCustoFin9 = "" ;
   this.OV98MovEstFinFiltrosCCustoFin9 = "" ;
   this.AV97MovEstFinFiltrosCCustoIni10 = "" ;
   this.ZV97MovEstFinFiltrosCCustoIni10 = "" ;
   this.OV97MovEstFinFiltrosCCustoIni10 = "" ;
   this.AV101MovEstFinFiltrosCCustoFin10 = "" ;
   this.ZV101MovEstFinFiltrosCCustoFin10 = "" ;
   this.OV101MovEstFinFiltrosCCustoFin10 = "" ;
   this.AV123MovEstFinFiltrosUsuarioAlt = "" ;
   this.ZV123MovEstFinFiltrosUsuarioAlt = "" ;
   this.OV123MovEstFinFiltrosUsuarioAlt = "" ;
   this.AV124MovEstFinFiltrosDataHoraAlt = gx.date.nullDate() ;
   this.ZV124MovEstFinFiltrosDataHoraAlt = gx.date.nullDate() ;
   this.OV124MovEstFinFiltrosDataHoraAlt = gx.date.nullDate() ;
   this.AV133RelEstFinId = 0 ;
   this.AV132RelEstFinDescricao = "" ;
   this.AV130MovEstFinFiltrosId = 0 ;
   this.AV24MovEstFinDescricao = "" ;
   this.AV28MovEstFinFiltrosTipoCobrIni1 = 0 ;
   this.AV29MovEstFinFiltrosTipoCobrFin1 = 0 ;
   this.AV30MovEstFinFiltrosTipoCobrIni2 = 0 ;
   this.AV31MovEstFinFiltrosTipoCobrFin2 = 0 ;
   this.AV32MovEstFinFiltrosTipoCobrIni3 = 0 ;
   this.AV33MovEstFinFiltrosTipoCobrFin3 = 0 ;
   this.AV34MovEstFinFiltrosTipoCobrIni4 = 0 ;
   this.AV35MovEstFinFiltrosTipoCobrFin4 = 0 ;
   this.AV36MovEstFinFiltrosTipoCobrIni5 = 0 ;
   this.AV37MovEstFinFiltrosTipoCobrFin5 = 0 ;
   this.AV114MovEstFinFiltrosEspecieIni1 = 0 ;
   this.AV113MovEstFinFiltrosEspecieFin1 = 0 ;
   this.AV112MovEstFinFiltrosEspecieIni2 = 0 ;
   this.AV115MovEstFinFiltrosEspecieFin2 = 0 ;
   this.AV121MovEstFinFiltrosEspecieIni3 = 0 ;
   this.AV117MovEstFinFiltrosEspecieFin3 = 0 ;
   this.AV118MovEstFinFiltrosEspecieIni4 = 0 ;
   this.AV120MovEstFinFiltrosEspecieFin4 = 0 ;
   this.AV116MovEstFinFiltrosEspecieIni5 = 0 ;
   this.AV119MovEstFinFiltrosEspecieFin5 = 0 ;
   this.AV83MovEstFinFiltrosCCustoIni1 = "" ;
   this.AV82MovEstFinFiltrosCCustoFin1 = "" ;
   this.AV81MovEstFinFiltrosCCustoIni2 = "" ;
   this.AV85MovEstFinFiltrosCCustoFin2 = "" ;
   this.AV86MovEstFinFiltrosCCustoIni3 = "" ;
   this.AV87MovEstFinFiltrosCCustoFin3 = "" ;
   this.AV88MovEstFinFiltrosCCustoIni4 = "" ;
   this.AV92MovEstFinFiltrosCCustoFin4 = "" ;
   this.AV91MovEstFinFiltrosCCustoIni5 = "" ;
   this.AV90MovEstFinFiltrosCCustoFin5 = "" ;
   this.AV89MovEstFinFiltrosCCustoIni6 = "" ;
   this.AV93MovEstFinFiltrosCCustoFin6 = "" ;
   this.AV94MovEstFinFiltrosCCustoIni7 = "" ;
   this.AV95MovEstFinFiltrosCCustoFin7 = "" ;
   this.AV96MovEstFinFiltrosCCustoIni8 = "" ;
   this.AV100MovEstFinFiltrosCCustoFin8 = "" ;
   this.AV99MovEstFinFiltrosCCustoIni9 = "" ;
   this.AV98MovEstFinFiltrosCCustoFin9 = "" ;
   this.AV97MovEstFinFiltrosCCustoIni10 = "" ;
   this.AV101MovEstFinFiltrosCCustoFin10 = "" ;
   this.AV123MovEstFinFiltrosUsuarioAlt = "" ;
   this.AV124MovEstFinFiltrosDataHoraAlt = gx.date.nullDate() ;
   this.AV131RelEstFinEmpresaId = "" ;
   this.A9546MovEstFinFiltrosId = 0 ;
   this.A9548RelEstFinId = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9449MovEstFinFiltrosCFOPIni1 = 0 ;
   this.A9450MovEstFinFiltrosCFOPFin1 = 0 ;
   this.A9451MovEstFinFiltrosCFOPIni2 = 0 ;
   this.A9452MovEstFinFiltrosCFOPFin2 = 0 ;
   this.A9453MovEstFinFiltrosCFOPIni3 = 0 ;
   this.A9454MovEstFinFiltrosCFOPFin3 = 0 ;
   this.A9455MovEstFinFiltrosCFOPIni4 = 0 ;
   this.A9456MovEstFinFiltrosCFOPFin4 = 0 ;
   this.A9457MovEstFinFiltrosCFOPIni5 = 0 ;
   this.A9458MovEstFinFiltrosCFOPFin5 = 0 ;
   this.A9459MovEstFinFiltrosCFOPIni6 = 0 ;
   this.A9460MovEstFinFiltrosCFOPFin6 = 0 ;
   this.A9461MovEstFinFiltrosCFOPIni7 = 0 ;
   this.A9462MovEstFinFiltrosCFOPFin7 = 0 ;
   this.A9463MovEstFinFiltrosCFOPIni8 = 0 ;
   this.A9464MovEstFinFiltrosCFOPFin8 = 0 ;
   this.A9465MovEstFinFiltrosTransacao1 = "" ;
   this.A9466MovEstFinFiltrosTransacao2 = "" ;
   this.A9467MovEstFinFiltrosTransacao3 = "" ;
   this.A9468MovEstFinFiltrosTransacao4 = "" ;
   this.A9469MovEstFinFiltrosTransacao5 = "" ;
   this.A9470MovEstFinFiltrosTransacao6 = "" ;
   this.A9471MovEstFinFiltrosTransacao7 = "" ;
   this.A9472MovEstFinFiltrosTransacao8 = "" ;
   this.A9473MovEstFinFiltrosTransacao9 = "" ;
   this.A9474MovEstFinFiltrosTransacao10 = "" ;
   this.A9475MovEstFinFiltrosSnEntNormal = "" ;
   this.A9476MovEstFinFiltrosSnEntComplemen = "" ;
   this.A9477MovEstFinFiltrosSnAjuste = "" ;
   this.A9478MovEstFinFiltrosSnDevolucaoEnt = "" ;
   this.A9479MovEstFinFiltrosSnTrocaEnt = "" ;
   this.A9480MovEstFinFiltrosSnAjusteEnt = "" ;
   this.A9481MovEstFinFiltrosSnTransfEnt = "" ;
   this.A9482MovEstFinFiltrosSnPreVenda = "" ;
   this.A9483MovEstFinFiltrosSnDAV = "" ;
   this.A9484MovEstFinFiltrosSnCupom = "" ;
   this.A9485MovEstFinFiltrosSnCupomElet = "" ;
   this.A9486MovEstFinFiltrosSnSaiNormal = "" ;
   this.A9487MovEstFinFiltrosSnSaiComplemen = "" ;
   this.A9488MovEstFinFiltrosSnSaiAjuste = "" ;
   this.A9489MovEstFinFiltrosSnDevolucaoSai = "" ;
   this.A9490MovEstFinFiltrosSnTrocaSai = "" ;
   this.A9491MovEstFinFiltrosSnAjusteSai = "" ;
   this.A9492MovEstFinFiltrosSnTransfSai = "" ;
   this.A9727MovEstFinFiltrosSnCondicional = "" ;
   this.A9730MovEstFinFiltrosSnOrcamento = "" ;
   this.A9728MovEstFinFiltrosSnEntFutura = "" ;
   this.A9729MovEstFinFiltrosSnSimpleRemess = "" ;
   this.A9493MovEstFinFiltrosCCustoIni1 = "" ;
   this.A9494MovEstFinFiltrosCCustoFin1 = "" ;
   this.A9495MovEstFinFiltrosCCustoIni2 = "" ;
   this.A9496MovEstFinFiltrosCCustoFin2 = "" ;
   this.A9497MovEstFinFiltrosCCustoIni3 = "" ;
   this.A9498MovEstFinFiltrosCCustoFin3 = "" ;
   this.A9499MovEstFinFiltrosCCustoIni4 = "" ;
   this.A9500MovEstFinFiltrosCCustoFin4 = "" ;
   this.A9501MovEstFinFiltrosCCustoIni5 = "" ;
   this.A9502MovEstFinFiltrosCCustoFin5 = "" ;
   this.A9503MovEstFinFiltrosCCustoIni6 = "" ;
   this.A9504MovEstFinFiltrosCCustoFin6 = "" ;
   this.A9505MovEstFinFiltrosCCustoIni7 = "" ;
   this.A9506MovEstFinFiltrosCCustoFin7 = "" ;
   this.A9507MovEstFinFiltrosCCustoIni8 = "" ;
   this.A9508MovEstFinFiltrosCCustoFin8 = "" ;
   this.A9509MovEstFinFiltrosCCustoIni9 = "" ;
   this.A9510MovEstFinFiltrosCCustoFin9 = "" ;
   this.A9511MovEstFinFiltrosCCustoIni10 = "" ;
   this.A9512MovEstFinFiltrosCCustoFin10 = "" ;
   this.A9513MovEstFinFiltrosForma1 = 0 ;
   this.A9514MovEstFinFiltrosTipoCobr1 = 0 ;
   this.A9515MovEstFinFiltrosForma2 = 0 ;
   this.A9516MovEstFinFiltrosTipoCobr2 = 0 ;
   this.A9517MovEstFinFiltrosForma3 = 0 ;
   this.A9518MovEstFinFiltrosTipoCobr3 = 0 ;
   this.A9519MovEstFinFiltrosForma4 = 0 ;
   this.A9520MovEstFinFiltrosTipoCobr4 = 0 ;
   this.A9521MovEstFinFiltrosForma5 = 0 ;
   this.A9522MovEstFinFiltrosTipoCobr5 = 0 ;
   this.A9523MovEstFinFiltrosTipoCobrIni1 = 0 ;
   this.A9524MovEstFinFiltrosTipoCobrFin1 = 0 ;
   this.A9525MovEstFinFiltrosTipoCobrIni2 = 0 ;
   this.A9526MovEstFinFiltrosTipoCobrFin2 = 0 ;
   this.A9527MovEstFinFiltrosTipoCobrIni3 = 0 ;
   this.A9528MovEstFinFiltrosTipoCobrFin3 = 0 ;
   this.A9529MovEstFinFiltrosTipoCobrIni4 = 0 ;
   this.A9530MovEstFinFiltrosTipoCobrFin4 = 0 ;
   this.A9531MovEstFinFiltrosTipoCobrIni5 = 0 ;
   this.A9532MovEstFinFiltrosTipoCobrFin5 = 0 ;
   this.A9533MovEstFinFiltrosEspecieIni1 = 0 ;
   this.A9534MovEstFinFiltrosEspecieFin1 = 0 ;
   this.A9535MovEstFinFiltrosEspecieIni2 = 0 ;
   this.A9536MovEstFinFiltrosEspecieFin2 = 0 ;
   this.A9537MovEstFinFiltrosEspecieIni3 = 0 ;
   this.A9538MovEstFinFiltrosEspecieFin3 = 0 ;
   this.A9539MovEstFinFiltrosEspecieIni4 = 0 ;
   this.A9540MovEstFinFiltrosEspecieFin4 = 0 ;
   this.A9541MovEstFinFiltrosEspecieIni5 = 0 ;
   this.A9542MovEstFinFiltrosEspecieFin5 = 0 ;
   this.A9543MovEstFinFiltrosUsuarioAlt = "" ;
   this.A9544MovEstFinFiltrosDataHoraAlt = gx.date.nullDate() ;
   this.AV26CCustoFin = "" ;
   this.AV25CCustoIni = "" ;
   this.AV126EspecieFin = 0 ;
   this.AV125EspecieIni = 0 ;
   this.AV128TpCobFin = 0 ;
   this.AV127TpCobIni = 0 ;
   this.AV27x = 0 ;
   this.AV21SnErro = "" ;
   this.Events = {"e111gw2_client": ["'FECHAR'", true] ,"e131gw2_client": ["ENTER", true] ,"e151gw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV133RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV132RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true}],[{av:'AV132RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV133RelEstFinId',fld:'vRELESTFINID',hsh:true}]];
   this.EvtParms["ENTER"] = [[{av:'AV131RelEstFinEmpresaId',fld:'vRELESTFINEMPRESAID',hsh:true},{av:'AV133RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV130MovEstFinFiltrosId',fld:'vMOVESTFINFILTROSID',hsh:true},{av:'AV39MovEstFinFiltrosCFOPIni1',fld:'vMOVESTFINFILTROSCFOPINI1'},{av:'AV38MovEstFinFiltrosCFOPFin1',fld:'vMOVESTFINFILTROSCFOPFIN1'},{av:'AV40MovEstFinFiltrosCFOPIni2',fld:'vMOVESTFINFILTROSCFOPINI2'},{av:'AV44MovEstFinFiltrosCFOPFin2',fld:'vMOVESTFINFILTROSCFOPFIN2'},{av:'AV43MovEstFinFiltrosCFOPIni3',fld:'vMOVESTFINFILTROSCFOPINI3'},{av:'AV42MovEstFinFiltrosCFOPFin3',fld:'vMOVESTFINFILTROSCFOPFIN3'},{av:'AV41MovEstFinFiltrosCFOPIni4',fld:'vMOVESTFINFILTROSCFOPINI4'},{av:'AV45MovEstFinFiltrosCFOPFin4',fld:'vMOVESTFINFILTROSCFOPFIN4'},{av:'AV46MovEstFinFiltrosCFOPIni5',fld:'vMOVESTFINFILTROSCFOPINI5'},{av:'AV47MovEstFinFiltrosCFOPFin5',fld:'vMOVESTFINFILTROSCFOPFIN5'},{av:'AV48MovEstFinFiltrosCFOPIni6',fld:'vMOVESTFINFILTROSCFOPINI6'},{av:'AV52MovEstFinFiltrosCFOPFin6',fld:'vMOVESTFINFILTROSCFOPFIN6'},{av:'AV51MovEstFinFiltrosCFOPIni7',fld:'vMOVESTFINFILTROSCFOPINI7'},{av:'AV50MovEstFinFiltrosCFOPFin7',fld:'vMOVESTFINFILTROSCFOPFIN7'},{av:'AV49MovEstFinFiltrosCFOPIni8',fld:'vMOVESTFINFILTROSCFOPINI8'},{av:'AV53MovEstFinFiltrosCFOPFin8',fld:'vMOVESTFINFILTROSCFOPFIN8'},{av:'AV54MovEstFinFiltrosTransacao1',fld:'vMOVESTFINFILTROSTRANSACAO1'},{av:'AV55MovEstFinFiltrosTransacao2',fld:'vMOVESTFINFILTROSTRANSACAO2'},{av:'AV56MovEstFinFiltrosTransacao3',fld:'vMOVESTFINFILTROSTRANSACAO3'},{av:'AV60MovEstFinFiltrosTransacao4',fld:'vMOVESTFINFILTROSTRANSACAO4'},{av:'AV59MovEstFinFiltrosTransacao5',fld:'vMOVESTFINFILTROSTRANSACAO5'},{av:'AV58MovEstFinFiltrosTransacao6',fld:'vMOVESTFINFILTROSTRANSACAO6'},{av:'AV57MovEstFinFiltrosTransacao7',fld:'vMOVESTFINFILTROSTRANSACAO7'},{av:'AV61MovEstFinFiltrosTransacao8',fld:'vMOVESTFINFILTROSTRANSACAO8'},{av:'AV62MovEstFinFiltrosTransacao9',fld:'vMOVESTFINFILTROSTRANSACAO9'},{av:'AV63MovEstFinFiltrosTransacao10',fld:'vMOVESTFINFILTROSTRANSACAO10'},{av:'AV64MovEstFinFiltrosSnEntNormal',fld:'vMOVESTFINFILTROSSNENTNORMAL'},{av:'AV68MovEstFinFiltrosSnEntComplementar',fld:'vMOVESTFINFILTROSSNENTCOMPLEMENTAR'},{av:'AV67MovEstFinFiltrosSnAjuste',fld:'vMOVESTFINFILTROSSNAJUSTE'},{av:'AV66MovEstFinFiltrosSnDevolucaoEnt',fld:'vMOVESTFINFILTROSSNDEVOLUCAOENT'},{av:'AV65MovEstFinFiltrosSnTrocaEnt',fld:'vMOVESTFINFILTROSSNTROCAENT'},{av:'AV69MovEstFinFiltrosSnAjusteEnt',fld:'vMOVESTFINFILTROSSNAJUSTEENT'},{av:'AV70MovEstFinFiltrosSnTransfEnt',fld:'vMOVESTFINFILTROSSNTRANSFENT'},{av:'AV71MovEstFinFiltrosSnPreVenda',fld:'vMOVESTFINFILTROSSNPREVENDA'},{av:'AV72MovEstFinFiltrosSnDAV',fld:'vMOVESTFINFILTROSSNDAV'},{av:'AV76MovEstFinFiltrosSnCupom',fld:'vMOVESTFINFILTROSSNCUPOM'},{av:'AV75MovEstFinFiltrosSnCupomElet',fld:'vMOVESTFINFILTROSSNCUPOMELET'},{av:'AV74MovEstFinFiltrosSnSaiNormal',fld:'vMOVESTFINFILTROSSNSAINORMAL'},{av:'AV73MovEstFinFiltrosSnSaiComplementar',fld:'vMOVESTFINFILTROSSNSAICOMPLEMENTAR'},{av:'AV77MovEstFinFiltrosSnSaiAjuste',fld:'vMOVESTFINFILTROSSNSAIAJUSTE'},{av:'AV78MovEstFinFiltrosSnDevolucaoSai',fld:'vMOVESTFINFILTROSSNDEVOLUCAOSAI'},{av:'AV79MovEstFinFiltrosSnTrocaSai',fld:'vMOVESTFINFILTROSSNTROCASAI'},{av:'AV80MovEstFinFiltrosSnAjusteSai',fld:'vMOVESTFINFILTROSSNAJUSTESAI'},{av:'AV84MovEstFinFiltrosSnTransfSai',fld:'vMOVESTFINFILTROSSNTRANSFSAI'},{av:'AV83MovEstFinFiltrosCCustoIni1',fld:'vMOVESTFINFILTROSCCUSTOINI1'},{av:'AV82MovEstFinFiltrosCCustoFin1',fld:'vMOVESTFINFILTROSCCUSTOFIN1'},{av:'AV81MovEstFinFiltrosCCustoIni2',fld:'vMOVESTFINFILTROSCCUSTOINI2'},{av:'AV85MovEstFinFiltrosCCustoFin2',fld:'vMOVESTFINFILTROSCCUSTOFIN2'},{av:'AV86MovEstFinFiltrosCCustoIni3',fld:'vMOVESTFINFILTROSCCUSTOINI3'},{av:'AV87MovEstFinFiltrosCCustoFin3',fld:'vMOVESTFINFILTROSCCUSTOFIN3'},{av:'AV88MovEstFinFiltrosCCustoIni4',fld:'vMOVESTFINFILTROSCCUSTOINI4'},{av:'AV92MovEstFinFiltrosCCustoFin4',fld:'vMOVESTFINFILTROSCCUSTOFIN4'},{av:'AV91MovEstFinFiltrosCCustoIni5',fld:'vMOVESTFINFILTROSCCUSTOINI5'},{av:'AV90MovEstFinFiltrosCCustoFin5',fld:'vMOVESTFINFILTROSCCUSTOFIN5'},{av:'AV89MovEstFinFiltrosCCustoIni6',fld:'vMOVESTFINFILTROSCCUSTOINI6'},{av:'AV93MovEstFinFiltrosCCustoFin6',fld:'vMOVESTFINFILTROSCCUSTOFIN6'},{av:'AV94MovEstFinFiltrosCCustoIni7',fld:'vMOVESTFINFILTROSCCUSTOINI7'},{av:'AV95MovEstFinFiltrosCCustoFin7',fld:'vMOVESTFINFILTROSCCUSTOFIN7'},{av:'AV96MovEstFinFiltrosCCustoIni8',fld:'vMOVESTFINFILTROSCCUSTOINI8'},{av:'AV100MovEstFinFiltrosCCustoFin8',fld:'vMOVESTFINFILTROSCCUSTOFIN8'},{av:'AV99MovEstFinFiltrosCCustoIni9',fld:'vMOVESTFINFILTROSCCUSTOINI9'},{av:'AV98MovEstFinFiltrosCCustoFin9',fld:'vMOVESTFINFILTROSCCUSTOFIN9'},{av:'AV97MovEstFinFiltrosCCustoIni10',fld:'vMOVESTFINFILTROSCCUSTOINI10'},{av:'AV101MovEstFinFiltrosCCustoFin10',fld:'vMOVESTFINFILTROSCCUSTOFIN10'},{av:'AV102MovEstFinFiltrosForma1',fld:'vMOVESTFINFILTROSFORMA1'},{av:'AV103MovEstFinFiltrosTipoCobr1',fld:'vMOVESTFINFILTROSTIPOCOBR1'},{av:'AV104MovEstFinFiltrosForma2',fld:'vMOVESTFINFILTROSFORMA2'},{av:'AV108MovEstFinFiltrosTipoCobr2',fld:'vMOVESTFINFILTROSTIPOCOBR2'},{av:'AV107MovEstFinFiltrosForma3',fld:'vMOVESTFINFILTROSFORMA3'},{av:'AV106MovEstFinFiltrosTipoCobr3',fld:'vMOVESTFINFILTROSTIPOCOBR3'},{av:'AV105MovEstFinFiltrosForma4',fld:'vMOVESTFINFILTROSFORMA4'},{av:'AV109MovEstFinFiltrosTipoCobr4',fld:'vMOVESTFINFILTROSTIPOCOBR4'},{av:'AV110MovEstFinFiltrosForma5',fld:'vMOVESTFINFILTROSFORMA5'},{av:'AV111MovEstFinFiltrosTipoCobr5',fld:'vMOVESTFINFILTROSTIPOCOBR5'},{av:'AV28MovEstFinFiltrosTipoCobrIni1',fld:'vMOVESTFINFILTROSTIPOCOBRINI1'},{av:'AV29MovEstFinFiltrosTipoCobrFin1',fld:'vMOVESTFINFILTROSTIPOCOBRFIN1'},{av:'AV30MovEstFinFiltrosTipoCobrIni2',fld:'vMOVESTFINFILTROSTIPOCOBRINI2'},{av:'AV31MovEstFinFiltrosTipoCobrFin2',fld:'vMOVESTFINFILTROSTIPOCOBRFIN2'},{av:'AV32MovEstFinFiltrosTipoCobrIni3',fld:'vMOVESTFINFILTROSTIPOCOBRINI3'},{av:'AV33MovEstFinFiltrosTipoCobrFin3',fld:'vMOVESTFINFILTROSTIPOCOBRFIN3'},{av:'AV34MovEstFinFiltrosTipoCobrIni4',fld:'vMOVESTFINFILTROSTIPOCOBRINI4'},{av:'AV35MovEstFinFiltrosTipoCobrFin4',fld:'vMOVESTFINFILTROSTIPOCOBRFIN4'},{av:'AV36MovEstFinFiltrosTipoCobrIni5',fld:'vMOVESTFINFILTROSTIPOCOBRINI5'},{av:'AV37MovEstFinFiltrosTipoCobrFin5',fld:'vMOVESTFINFILTROSTIPOCOBRFIN5'},{av:'AV114MovEstFinFiltrosEspecieIni1',fld:'vMOVESTFINFILTROSESPECIEINI1'},{av:'AV113MovEstFinFiltrosEspecieFin1',fld:'vMOVESTFINFILTROSESPECIEFIN1'},{av:'AV112MovEstFinFiltrosEspecieIni2',fld:'vMOVESTFINFILTROSESPECIEINI2'},{av:'AV115MovEstFinFiltrosEspecieFin2',fld:'vMOVESTFINFILTROSESPECIEFIN2'},{av:'AV121MovEstFinFiltrosEspecieIni3',fld:'vMOVESTFINFILTROSESPECIEINI3'},{av:'AV117MovEstFinFiltrosEspecieFin3',fld:'vMOVESTFINFILTROSESPECIEFIN3'},{av:'AV118MovEstFinFiltrosEspecieIni4',fld:'vMOVESTFINFILTROSESPECIEINI4'},{av:'AV120MovEstFinFiltrosEspecieFin4',fld:'vMOVESTFINFILTROSESPECIEFIN4'},{av:'AV116MovEstFinFiltrosEspecieIni5',fld:'vMOVESTFINFILTROSESPECIEINI5'},{av:'AV119MovEstFinFiltrosEspecieFin5',fld:'vMOVESTFINFILTROSESPECIEFIN5'},{av:'AV134MovEstFinFiltrosSnCondicional',fld:'vMOVESTFINFILTROSSNCONDICIONAL'},{av:'AV137MovEstFinFiltrosSnOrcamento',fld:'vMOVESTFINFILTROSSNORCAMENTO'},{av:'AV136MovEstFinFiltrosSnEntFutura',fld:'vMOVESTFINFILTROSSNENTFUTURA'},{av:'AV135MovEstFinFiltrosSnSimpleRemessa',fld:'vMOVESTFINFILTROSSNSIMPLEREMESSA'},{av:'AV132RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV127TpCobIni',fld:'vTPCOBINI'},{av:'AV128TpCobFin',fld:'vTPCOBFIN'},{av:'AV125EspecieIni',fld:'vESPECIEINI'},{av:'AV126EspecieFin',fld:'vESPECIEFIN'},{av:'AV25CCustoIni',fld:'vCCUSTOINI'},{av:'AV26CCustoFin',fld:'vCCUSTOFIN'}],[{av:'AV21SnErro',fld:'vSNERRO'},{av:'AV132RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV133RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV27x',fld:'vX'},{av:'AV127TpCobIni',fld:'vTPCOBINI'},{av:'AV128TpCobFin',fld:'vTPCOBFIN'},{av:'AV125EspecieIni',fld:'vESPECIEINI'},{av:'AV126EspecieFin',fld:'vESPECIEFIN'},{av:'AV25CCustoIni',fld:'vCCUSTOINI'},{av:'AV26CCustoFin',fld:'vCCUSTOFIN'}]];
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRINI1", [40]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRFIN1", [44]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRINI2", [46]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRFIN2", [50]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRINI3", [52]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRFIN3", [56]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRINI4", [60]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRFIN4", [64]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRINI5", [66]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSTIPOCOBRFIN5", [70]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEINI1", [90]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEFIN1", [94]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEINI2", [96]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEFIN2", [100]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEINI3", [102]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEFIN3", [106]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEINI4", [110]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEFIN4", [114]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEINI5", [116]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSESPECIEFIN5", [120]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI1", [137]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN1", [141]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI2", [143]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN2", [147]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI3", [151]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN3", [155]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI4", [157]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN4", [161]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI5", [165]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN5", [169]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI6", [171]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN6", [175]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI7", [179]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN7", [183]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI8", [185]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN8", [189]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI9", [193]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN9", [197]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOINI10", [199]);
   this.setPrompt("PROMPT_MOVESTFINFILTROSCCUSTOFIN10", [203]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV131RelEstFinEmpresaId", "vRELESTFINEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfiltroscontaspagrec());
