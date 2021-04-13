/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:6.79
*/
gx.evt.autoSkip = false;
gx.define('hcopiarprevisao', false, function () {
   this.ServerClass =  "hcopiarprevisao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV21TpOperacao=gx.fn.getIntegerValue("vTPOPERACAO",'.') ;
      this.AV22PagRecParm=gx.fn.getControlValue("vPAGRECPARM") ;
      this.AV23DtLancmtoParm=gx.fn.getDateValue("vDTLANCMTOPARM") ;
      this.AV24NumeroParm=gx.fn.getIntegerValue("vNUMEROPARM",'.') ;
   };
   this.s112_client=function()
   {
      if ( this.AV21TpOperacao == 1 )
      {
         gx.fn.setCtrlProperty("TAB1","Visible", 1 );
         gx.fn.setCtrlProperty("TAB2","Visible", 1 );
         gx.fn.setCtrlProperty("TAB3","Visible", 1 );
         gx.fn.setCtrlProperty("TAB4","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TAB1","Visible", 0 );
         gx.fn.setCtrlProperty("TAB2","Visible", 1 );
         gx.fn.setCtrlProperty("TAB3","Visible", 0 );
         gx.fn.setCtrlProperty("TAB4","Visible", 1 );
      }
   };
   this.s122_client=function()
   {
      this.AV17SnErro =  "N"  ;
      if ( this.AV21TpOperacao == 1 )
      {
         if ( (""==this.AV11PrevisaoPagRec) )
         {
            this.addMessage("Informe o tipo");
            gx.fn.usrSetFocus("vPREVISAOPAGREC") ;
            this.AV17SnErro =  "S"  ;
         }
         else
         {
            if ( (new gx.date.gxdate("").compare(this.AV12PrevisaoDtLancmto)==0) )
            {
               this.addMessage("Informe a nova data de lançamento");
               gx.fn.usrSetFocus("vPREVISAODTLANCMTO") ;
               this.AV17SnErro =  "S"  ;
            }
            else
            {
               if ( (0==this.AV19mesOrigem) )
               {
                  this.addMessage("Informe o mês de Origem");
                  gx.fn.usrSetFocus("vMESORIGEM") ;
                  this.AV17SnErro =  "S"  ;
               }
               else
               {
                  if ( (0==this.AV13anoOrigem) )
                  {
                     this.addMessage("Informe o ano de Origem");
                     gx.fn.usrSetFocus("vANOORIGEM") ;
                     this.AV17SnErro =  "S"  ;
                  }
                  else
                  {
                     if ( this.AV19mesOrigem < 1 || this.AV19mesOrigem > 12 )
                     {
                        this.addMessage("Mês de Origem Inválido");
                        gx.fn.usrSetFocus("vMESORIGEM") ;
                        this.AV17SnErro =  "S"  ;
                     }
                     else
                     {
                        if ( this.AV13anoOrigem < 1900 )
                        {
                           this.addMessage("Ano de Origem Inválido");
                           gx.fn.usrSetFocus("vANOORIGEM") ;
                           this.AV17SnErro =  "S"  ;
                        }
                        else
                        {
                           if ( (0==this.AV18mesDestinoIni) && (0==this.AV26anodestinoini) )
                           {
                              this.addMessage("Informe o mês/ano inicial de Destino");
                              gx.fn.usrSetFocus("vMESDESTINOINI") ;
                              this.AV17SnErro =  "S"  ;
                           }
                           else
                           {
                              if ( (0==this.AV20mesDestinoFin) && (0==this.AV25anoDestinofin) )
                              {
                                 this.addMessage("Informe o mês/ano final de Destino");
                                 gx.fn.usrSetFocus("vMESDESTINOFIN") ;
                                 this.AV17SnErro =  "S"  ;
                              }
                              else
                              {
                                 if ( this.AV18mesDestinoIni <= 0 || this.AV18mesDestinoIni > 12 )
                                 {
                                    this.addMessage("Mês inicial de Destino Inválido");
                                    gx.fn.usrSetFocus("vMESDESTINOINI") ;
                                    this.AV17SnErro =  "S"  ;
                                 }
                                 else
                                 {
                                    if ( this.AV20mesDestinoFin <= 0 || this.AV20mesDestinoFin > 12 )
                                    {
                                       this.addMessage("Mês final de Destino Inválido");
                                       gx.fn.usrSetFocus("vMESDESTINOFIN") ;
                                       this.AV17SnErro =  "S"  ;
                                    }
                                    else
                                    {
                                       if ( this.AV26anodestinoini > this.AV25anoDestinofin )
                                       {
                                          this.addMessage("Ano final de destino deve ser maior ou igual ao ano inicial");
                                          gx.fn.usrSetFocus("vANODESTINOFIN") ;
                                          this.AV17SnErro =  "S"  ;
                                       }
                                       else
                                       {
                                          if ( ( this.AV18mesDestinoIni > this.AV20mesDestinoFin ) && ( this.AV26anodestinoini == this.AV25anoDestinofin ) )
                                          {
                                             this.addMessage("Mês final de Destino deve ser maior ou igual ao mês inicial");
                                             gx.fn.usrSetFocus("vMESDESTINOFIN") ;
                                             this.AV17SnErro =  "S"  ;
                                          }
                                          else
                                          {
                                             if ( ( this.AV18mesDestinoIni < this.AV19mesOrigem ) && ( this.AV26anodestinoini <= this.AV13anoOrigem ) )
                                             {
                                                this.addMessage("Mês/Ano Origem deve ser menor ou igual ao Destino");
                                                gx.fn.usrSetFocus("vMESORIGEM") ;
                                                this.AV17SnErro =  "S"  ;
                                             }
                                             else
                                             {
                                                if ( this.AV26anodestinoini < 1900 )
                                                {
                                                   this.addMessage("Ano de Destino Inicial Inválido");
                                                   gx.fn.usrSetFocus("vANODESTINOINI") ;
                                                   this.AV17SnErro =  "S"  ;
                                                }
                                                else
                                                {
                                                   if ( this.AV25anoDestinofin < 1900 )
                                                   {
                                                      this.addMessage("Ano de Destino final Inválido");
                                                      gx.fn.usrSetFocus("vANODESTINOFIN") ;
                                                      this.AV17SnErro =  "S"  ;
                                                   }
                                                }
                                             }
                                          }
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
      else
      {
         if ( (new gx.date.gxdate("").compare(this.AV12PrevisaoDtLancmto)==0) )
         {
            this.addMessage("Informe a nova data de lançamento");
            gx.fn.usrSetFocus("vPREVISAODTLANCMTO") ;
            this.AV17SnErro =  "S"  ;
         }
         else
         {
            if ( (0==this.AV18mesDestinoIni) && (0==this.AV26anodestinoini) )
            {
               this.addMessage("Informe o mês/ano inicial de Destino");
               gx.fn.usrSetFocus("vMESDESTINOINI") ;
               this.AV17SnErro =  "S"  ;
            }
            else
            {
               if ( (0==this.AV20mesDestinoFin) && (0==this.AV25anoDestinofin) )
               {
                  this.addMessage("Informe o mês/ano final de Destino");
                  gx.fn.usrSetFocus("vMESDESTINOFIN") ;
                  this.AV17SnErro =  "S"  ;
               }
               else
               {
                  if ( this.AV18mesDestinoIni <= 0 || this.AV18mesDestinoIni > 12 )
                  {
                     this.addMessage("Mês inicial de Destino Inválido");
                     gx.fn.usrSetFocus("vMESDESTINOINI") ;
                     this.AV17SnErro =  "S"  ;
                  }
                  else
                  {
                     if ( this.AV20mesDestinoFin <= 0 || this.AV20mesDestinoFin > 12 )
                     {
                        this.addMessage("Mês final de Destino Inválido");
                        gx.fn.usrSetFocus("vMESDESTINOFIN") ;
                        this.AV17SnErro =  "S"  ;
                     }
                     else
                     {
                        if ( this.AV26anodestinoini > this.AV25anoDestinofin )
                        {
                           this.addMessage("Ano final de destino deve ser maior ou igual ao ano inicial");
                           gx.fn.usrSetFocus("vANODESTINOFIN") ;
                           this.AV17SnErro =  "S"  ;
                        }
                        else
                        {
                           if ( ( this.AV18mesDestinoIni > this.AV20mesDestinoFin ) && ( this.AV26anodestinoini == this.AV25anoDestinofin ) )
                           {
                              this.addMessage("Mês final de Destino deve ser maior ou igual ao mês inicial");
                              gx.fn.usrSetFocus("vMESDESTINOFIN") ;
                              this.AV17SnErro =  "S"  ;
                           }
                           else
                           {
                              if ( this.AV26anodestinoini < 1900 )
                              {
                                 this.addMessage("Ano de Destino Inicial Inválido");
                                 gx.fn.usrSetFocus("vANODESTINOINI") ;
                                 this.AV17SnErro =  "S"  ;
                              }
                              else
                              {
                                 if ( this.AV25anoDestinofin < 1900 )
                                 {
                                    this.addMessage("Ano de Destino final Inválido");
                                    gx.fn.usrSetFocus("vANODESTINOFIN") ;
                                    this.AV17SnErro =  "S"  ;
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   };
   this.e12lw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13lw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16lw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,20,22,25,27,29,30,33,35,38,41,43,45,47,49,52,54,56,64];
   this.GXLastCtrlId =64;
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPREVISAOPAGREC",gxz:"ZV11PrevisaoPagRec",gxold:"OV11PrevisaoPagRec",gxvar:"AV11PrevisaoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11PrevisaoPagRec=Value},v2z:function(Value){gx.O.ZV11PrevisaoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vPREVISAOPAGREC",gx.O.AV11PrevisaoPagRec)},c2v:function(){gx.O.AV11PrevisaoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vPREVISAOPAGREC")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"TAB2",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPREVISAODTLANCMTO",gxz:"ZV12PrevisaoDtLancmto",gxold:"OV12PrevisaoDtLancmto",gxvar:"AV12PrevisaoDtLancmto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PrevisaoDtLancmto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12PrevisaoDtLancmto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPREVISAODTLANCMTO",gx.O.AV12PrevisaoDtLancmto,0)},c2v:function(){gx.O.AV12PrevisaoDtLancmto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPREVISAODTLANCMTO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TAB3",grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESORIGEM",gxz:"ZV19mesOrigem",gxold:"OV19mesOrigem",gxvar:"AV19mesOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19mesOrigem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19mesOrigem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESORIGEM",gx.O.AV19mesOrigem,0)},c2v:function(){gx.O.AV19mesOrigem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESORIGEM",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOORIGEM",gxz:"ZV13anoOrigem",gxold:"OV13anoOrigem",gxvar:"AV13anoOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13anoOrigem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13anoOrigem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOORIGEM",gx.O.AV13anoOrigem,0)},c2v:function(){gx.O.AV13anoOrigem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOORIGEM",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TAB4",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[38]={fld:"TABLE2",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESDESTINOINI",gxz:"ZV18mesDestinoIni",gxold:"OV18mesDestinoIni",gxvar:"AV18mesDestinoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18mesDestinoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18mesDestinoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESDESTINOINI",gx.O.AV18mesDestinoIni,0)},c2v:function(){gx.O.AV18mesDestinoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESDESTINOINI",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANODESTINOINI",gxz:"ZV26anodestinoini",gxold:"OV26anodestinoini",gxvar:"AV26anodestinoini",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26anodestinoini=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26anodestinoini=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANODESTINOINI",gx.O.AV26anodestinoini,0)},c2v:function(){gx.O.AV26anodestinoini=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANODESTINOINI",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESDESTINOFIN",gxz:"ZV20mesDestinoFin",gxold:"OV20mesDestinoFin",gxvar:"AV20mesDestinoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20mesDestinoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20mesDestinoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESDESTINOFIN",gx.O.AV20mesDestinoFin,0)},c2v:function(){gx.O.AV20mesDestinoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESDESTINOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANODESTINOFIN",gxz:"ZV25anoDestinofin",gxold:"OV25anoDestinofin",gxvar:"AV25anoDestinofin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25anoDestinofin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25anoDestinofin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANODESTINOFIN",gx.O.AV25anoDestinofin,0)},c2v:function(){gx.O.AV25anoDestinofin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANODESTINOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"JS", format:2,grid:0};
   this.AV11PrevisaoPagRec = "" ;
   this.ZV11PrevisaoPagRec = "" ;
   this.OV11PrevisaoPagRec = "" ;
   this.AV12PrevisaoDtLancmto = gx.date.nullDate() ;
   this.ZV12PrevisaoDtLancmto = gx.date.nullDate() ;
   this.OV12PrevisaoDtLancmto = gx.date.nullDate() ;
   this.AV19mesOrigem = 0 ;
   this.ZV19mesOrigem = 0 ;
   this.OV19mesOrigem = 0 ;
   this.AV13anoOrigem = 0 ;
   this.ZV13anoOrigem = 0 ;
   this.OV13anoOrigem = 0 ;
   this.AV18mesDestinoIni = 0 ;
   this.ZV18mesDestinoIni = 0 ;
   this.OV18mesDestinoIni = 0 ;
   this.AV26anodestinoini = 0 ;
   this.ZV26anodestinoini = 0 ;
   this.OV26anodestinoini = 0 ;
   this.AV20mesDestinoFin = 0 ;
   this.ZV20mesDestinoFin = 0 ;
   this.OV20mesDestinoFin = 0 ;
   this.AV25anoDestinofin = 0 ;
   this.ZV25anoDestinofin = 0 ;
   this.OV25anoDestinofin = 0 ;
   this.AV11PrevisaoPagRec = "" ;
   this.AV12PrevisaoDtLancmto = gx.date.nullDate() ;
   this.AV19mesOrigem = 0 ;
   this.AV13anoOrigem = 0 ;
   this.AV18mesDestinoIni = 0 ;
   this.AV26anodestinoini = 0 ;
   this.AV20mesDestinoFin = 0 ;
   this.AV25anoDestinofin = 0 ;
   this.AV21TpOperacao = 0 ;
   this.AV22PagRecParm = "" ;
   this.AV23DtLancmtoParm = gx.date.nullDate() ;
   this.AV24NumeroParm = 0 ;
   this.AV17SnErro = "" ;
   this.Events = {"e12lw2_client": ["ENTER", true] ,"e13lw2_client": ["'FECHAR'", true] ,"e16lw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV21TpOperacao',fld:'vTPOPERACAO'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV21TpOperacao',fld:'vTPOPERACAO'},{av:'AV22PagRecParm',fld:'vPAGRECPARM'},{av:'AV23DtLancmtoParm',fld:'vDTLANCMTOPARM'},{av:'AV24NumeroParm',fld:'vNUMEROPARM'},{av:'AV19mesOrigem',fld:'vMESORIGEM'},{av:'AV13anoOrigem',fld:'vANOORIGEM'},{av:'AV18mesDestinoIni',fld:'vMESDESTINOINI'},{av:'AV26anodestinoini',fld:'vANODESTINOINI'},{av:'AV20mesDestinoFin',fld:'vMESDESTINOFIN'},{av:'AV25anoDestinofin',fld:'vANODESTINOFIN'},{av:'AV15PrevisaoEmpresaId',fld:'vPREVISAOEMPRESAID'},{av:'AV11PrevisaoPagRec',fld:'vPREVISAOPAGREC'},{av:'AV12PrevisaoDtLancmto',fld:'vPREVISAODTLANCMTO'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV17SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV24NumeroParm',fld:'vNUMEROPARM'},{av:'AV23DtLancmtoParm',fld:'vDTLANCMTOPARM'},{av:'AV22PagRecParm',fld:'vPAGRECPARM'},{av:'AV21TpOperacao',fld:'vTPOPERACAO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV21TpOperacao", "vTPOPERACAO", 0, "int");
   this.setVCMap("AV22PagRecParm", "vPAGRECPARM", 0, "char");
   this.setVCMap("AV23DtLancmtoParm", "vDTLANCMTOPARM", 0, "date");
   this.setVCMap("AV24NumeroParm", "vNUMEROPARM", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarprevisao());
