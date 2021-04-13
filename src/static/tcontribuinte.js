/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:33.19
*/
gx.evt.autoSkip = false;
gx.define('tcontribuinte', false, function () {
   this.ServerClass =  "tcontribuinte" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV18ContribuinteId=gx.fn.getIntegerValue("vCONTRIBUINTEID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2867ContribuinteEmpresaId=gx.fn.getControlValue("CONTRIBUINTEEMPRESAID") ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV19ErroCNPJ=gx.fn.getIntegerValue("vERROCNPJ",'.') ;
      this.AV20ErroCPF=gx.fn.getIntegerValue("vERROCPF",'.') ;
      this.AV21ErroCPF2=gx.fn.getIntegerValue("vERROCPF2",'.') ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contribuinteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuintenome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTENOME");
         this.AnyError  = 0;
         if ( (""==this.A2869ContribuinteNome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Contribuinte");
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
   this.Valid_Contribuintecnpj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTECNPJ");
         this.AnyError  = 0;
         if ( (""==this.A2870ContribuinteCNPJ) )
         {
            try {
               gxballoon.setError("Informe o CNPJ");
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
   this.Valid_Contribuintenaturezadec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTENATUREZADEC");
         this.AnyError  = 0;
         if ( (""==this.A2866ContribuinteNaturezaDec) )
         {
            try {
               gxballoon.setError("Informe a Natureza do Declarante");
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
   this.Valid_Contribuintecpfrespcnpj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTECPFRESPCNPJ");
         this.AnyError  = 0;
         if ( (""==this.A2873ContribuinteCPFRespCNPJ) )
         {
            try {
               gxballoon.setError("Informe o CPF do Responsável pelo CNPJ");
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
   this.Valid_Contribuintecpfresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTECPFRESPONSAVEL");
         this.AnyError  = 0;
         if ( (""==this.A2874ContribuinteCPFResponsavel) )
         {
            try {
               gxballoon.setError("Informe o CPF do Responsável pela Declaração");
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
   this.Valid_Contribuintenomeresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTENOMERESPONSAVEL");
         this.AnyError  = 0;
         if ( (""==this.A2875ContribuinteNomeResponsavel) )
         {
            try {
               gxballoon.setError("Informe o Nome do Responsável pela Declaração");
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
   this.Valid_Contribuintedddresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEDDDRESPONSAVEL");
         this.AnyError  = 0;
         if ( (0==this.A2876ContribuinteDDDResponsavel) )
         {
            try {
               gxballoon.setError("Informe o DDD do Responsávelpela Declaração");
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
   this.Valid_Contribuintefoneresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEFONERESPONSAVEL");
         this.AnyError  = 0;
         if ( (0==this.A2877ContribuinteFoneResponsavel) )
         {
            try {
               gxballoon.setError("Informe o Telefone do Responsável pela Declaração");
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
   this.Valid_Contribuintefaxresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEFAXRESPONSAVEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuinteramalresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTERAMALRESPONSAVEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuinteemailresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEEMAILRESPONSAVEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuintesninstfinanc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTESNINSTFINANC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuintesnadmfundo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTESNADMFUNDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuintedecdepositario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEDECDEPOSITARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuinteindplanopri=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEINDPLANOPRI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuintedecsocost=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEDECSOCOST");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contribuintepgrendimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRIBUINTEPGRENDIMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12572_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13572_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1457296_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1557296_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,21,23,26,28,31,33,36,38,41,44,47,50,52,55,57,60,62,65,67,70,72,75,77,80,82,84,89,92,95,98,101,104,107,110,112,114,120,126,127,129];
   this.GXLastCtrlId =129;
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TABLE7",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contribuinteid,isvalid:null,rgrid:[],fld:"CONTRIBUINTEID",gxz:"Z2868ContribuinteId",gxold:"O2868ContribuinteId",gxvar:"A2868ContribuinteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2868ContribuinteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2868ContribuinteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEID",gx.O.A2868ContribuinteId,0)},c2v:function(){gx.O.A2868ContribuinteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRIBUINTEID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintenome,isvalid:null,rgrid:[],fld:"CONTRIBUINTENOME",gxz:"Z2869ContribuinteNome",gxold:"O2869ContribuinteNome",gxvar:"A2869ContribuinteNome",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2869ContribuinteNome=Value},v2z:function(Value){gx.O.Z2869ContribuinteNome=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTENOME",gx.O.A2869ContribuinteNome,0)},c2v:function(){gx.O.A2869ContribuinteNome=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTENOME")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintecnpj,isvalid:null,rgrid:[],fld:"CONTRIBUINTECNPJ",gxz:"Z2870ContribuinteCNPJ",gxold:"O2870ContribuinteCNPJ",gxvar:"A2870ContribuinteCNPJ",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2870ContribuinteCNPJ=Value},v2z:function(Value){gx.O.Z2870ContribuinteCNPJ=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTECNPJ",gx.O.A2870ContribuinteCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2870ContribuinteCNPJ=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTECNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintenaturezadec,isvalid:null,rgrid:[],fld:"CONTRIBUINTENATUREZADEC",gxz:"Z2866ContribuinteNaturezaDec",gxold:"O2866ContribuinteNaturezaDec",gxvar:"A2866ContribuinteNaturezaDec",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2866ContribuinteNaturezaDec=Value},v2z:function(Value){gx.O.Z2866ContribuinteNaturezaDec=Value},v2c:function(){gx.fn.setComboBoxValue("CONTRIBUINTENATUREZADEC",gx.O.A2866ContribuinteNaturezaDec)},c2v:function(){gx.O.A2866ContribuinteNaturezaDec=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTENATUREZADEC")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintecpfrespcnpj,isvalid:null,rgrid:[],fld:"CONTRIBUINTECPFRESPCNPJ",gxz:"Z2873ContribuinteCPFRespCNPJ",gxold:"O2873ContribuinteCPFRespCNPJ",gxvar:"A2873ContribuinteCPFRespCNPJ",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2873ContribuinteCPFRespCNPJ=Value},v2z:function(Value){gx.O.Z2873ContribuinteCPFRespCNPJ=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTECPFRESPCNPJ",gx.O.A2873ContribuinteCPFRespCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2873ContribuinteCPFRespCNPJ=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTECPFRESPCNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TABLE8",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintecpfresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTECPFRESPONSAVEL",gxz:"Z2874ContribuinteCPFResponsavel",gxold:"O2874ContribuinteCPFResponsavel",gxvar:"A2874ContribuinteCPFResponsavel",ucs:[],op:[52],ip:[52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2874ContribuinteCPFResponsavel=Value},v2z:function(Value){gx.O.Z2874ContribuinteCPFResponsavel=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTECPFRESPONSAVEL",gx.O.A2874ContribuinteCPFResponsavel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2874ContribuinteCPFResponsavel=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTECPFRESPONSAVEL")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintenomeresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTENOMERESPONSAVEL",gxz:"Z2875ContribuinteNomeResponsavel",gxold:"O2875ContribuinteNomeResponsavel",gxvar:"A2875ContribuinteNomeResponsavel",ucs:[],op:[57],ip:[57],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2875ContribuinteNomeResponsavel=Value},v2z:function(Value){gx.O.Z2875ContribuinteNomeResponsavel=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTENOMERESPONSAVEL",gx.O.A2875ContribuinteNomeResponsavel,0)},c2v:function(){gx.O.A2875ContribuinteNomeResponsavel=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTENOMERESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintedddresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTEDDDRESPONSAVEL",gxz:"Z2876ContribuinteDDDResponsavel",gxold:"O2876ContribuinteDDDResponsavel",gxvar:"A2876ContribuinteDDDResponsavel",ucs:[],op:[62],ip:[62],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2876ContribuinteDDDResponsavel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2876ContribuinteDDDResponsavel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEDDDRESPONSAVEL",gx.O.A2876ContribuinteDDDResponsavel,0)},c2v:function(){gx.O.A2876ContribuinteDDDResponsavel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRIBUINTEDDDRESPONSAVEL",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"99999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintefoneresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTEFONERESPONSAVEL",gxz:"Z2877ContribuinteFoneResponsavel",gxold:"O2877ContribuinteFoneResponsavel",gxvar:"A2877ContribuinteFoneResponsavel",ucs:[],op:[67],ip:[67],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2877ContribuinteFoneResponsavel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2877ContribuinteFoneResponsavel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEFONERESPONSAVEL",gx.O.A2877ContribuinteFoneResponsavel,0)},c2v:function(){gx.O.A2877ContribuinteFoneResponsavel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRIBUINTEFONERESPONSAVEL",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"99999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintefaxresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTEFAXRESPONSAVEL",gxz:"Z2879ContribuinteFaxResponsavel",gxold:"O2879ContribuinteFaxResponsavel",gxvar:"A2879ContribuinteFaxResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2879ContribuinteFaxResponsavel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2879ContribuinteFaxResponsavel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEFAXRESPONSAVEL",gx.O.A2879ContribuinteFaxResponsavel,0)},c2v:function(){gx.O.A2879ContribuinteFaxResponsavel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRIBUINTEFAXRESPONSAVEL",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuinteramalresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTERAMALRESPONSAVEL",gxz:"Z2878ContribuinteRamalResponsavel",gxold:"O2878ContribuinteRamalResponsavel",gxvar:"A2878ContribuinteRamalResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2878ContribuinteRamalResponsavel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2878ContribuinteRamalResponsavel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRIBUINTERAMALRESPONSAVEL",gx.O.A2878ContribuinteRamalResponsavel,0)},c2v:function(){gx.O.A2878ContribuinteRamalResponsavel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRIBUINTERAMALRESPONSAVEL",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuinteemailresponsavel,isvalid:null,rgrid:[],fld:"CONTRIBUINTEEMAILRESPONSAVEL",gxz:"Z2880ContribuinteEmailResponsavel",gxold:"O2880ContribuinteEmailResponsavel",gxvar:"A2880ContribuinteEmailResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2880ContribuinteEmailResponsavel=Value},v2z:function(Value){gx.O.Z2880ContribuinteEmailResponsavel=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEEMAILRESPONSAVEL",gx.O.A2880ContribuinteEmailResponsavel,0)},c2v:function(){gx.O.A2880ContribuinteEmailResponsavel=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTEEMAILRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TABLE6",grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintesninstfinanc,isvalid:null,rgrid:[],fld:"CONTRIBUINTESNINSTFINANC",gxz:"Z2872ContribuinteSnInstFinanc",gxold:"O2872ContribuinteSnInstFinanc",gxvar:"A2872ContribuinteSnInstFinanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2872ContribuinteSnInstFinanc=Value},v2z:function(Value){gx.O.Z2872ContribuinteSnInstFinanc=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRIBUINTESNINSTFINANC",gx.O.A2872ContribuinteSnInstFinanc,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2872ContribuinteSnInstFinanc=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTESNINSTFINANC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintesnadmfundo,isvalid:null,rgrid:[],fld:"CONTRIBUINTESNADMFUNDO",gxz:"Z2871ContribuinteSnAdmFundo",gxold:"O2871ContribuinteSnAdmFundo",gxvar:"A2871ContribuinteSnAdmFundo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2871ContribuinteSnAdmFundo=Value},v2z:function(Value){gx.O.Z2871ContribuinteSnAdmFundo=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRIBUINTESNADMFUNDO",gx.O.A2871ContribuinteSnAdmFundo,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2871ContribuinteSnAdmFundo=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTESNADMFUNDO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[95]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintedecdepositario,isvalid:null,rgrid:[],fld:"CONTRIBUINTEDECDEPOSITARIO",gxz:"Z2992ContribuinteDecDepositario",gxold:"O2992ContribuinteDecDepositario",gxvar:"A2992ContribuinteDecDepositario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2992ContribuinteDecDepositario=Value},v2z:function(Value){gx.O.Z2992ContribuinteDecDepositario=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRIBUINTEDECDEPOSITARIO",gx.O.A2992ContribuinteDecDepositario,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2992ContribuinteDecDepositario=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTEDECDEPOSITARIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuinteindplanopri,isvalid:null,rgrid:[],fld:"CONTRIBUINTEINDPLANOPRI",gxz:"Z2994ContribuinteIndPlanoPri",gxold:"O2994ContribuinteIndPlanoPri",gxvar:"A2994ContribuinteIndPlanoPri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2994ContribuinteIndPlanoPri=Value},v2z:function(Value){gx.O.Z2994ContribuinteIndPlanoPri=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRIBUINTEINDPLANOPRI",gx.O.A2994ContribuinteIndPlanoPri,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2994ContribuinteIndPlanoPri=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTEINDPLANOPRI")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintedecsocost,isvalid:null,rgrid:[],fld:"CONTRIBUINTEDECSOCOST",gxz:"Z2991ContribuinteDecSocOst",gxold:"O2991ContribuinteDecSocOst",gxvar:"A2991ContribuinteDecSocOst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2991ContribuinteDecSocOst=Value},v2z:function(Value){gx.O.Z2991ContribuinteDecSocOst=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRIBUINTEDECSOCOST",gx.O.A2991ContribuinteDecSocOst,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2991ContribuinteDecSocOst=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTEDECSOCOST")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 101 , function() {
   });
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contribuintepgrendimento,isvalid:null,rgrid:[],fld:"CONTRIBUINTEPGRENDIMENTO",gxz:"Z2993ContribuintePgRendimento",gxold:"O2993ContribuintePgRendimento",gxvar:"A2993ContribuintePgRendimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2993ContribuintePgRendimento=Value},v2z:function(Value){gx.O.Z2993ContribuintePgRendimento=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRIBUINTEPGRENDIMENTO",gx.O.A2993ContribuintePgRendimento,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2993ContribuintePgRendimento=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTEPGRENDIMENTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[107]={fld:"TABLE4",grid:0};
   GXValidFnc[110]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRIBUINTEUSUARIOALT",gxz:"Z2881ContribuinteUsuarioAlt",gxold:"O2881ContribuinteUsuarioAlt",gxvar:"A2881ContribuinteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2881ContribuinteUsuarioAlt=Value},v2z:function(Value){gx.O.Z2881ContribuinteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEUSUARIOALT",gx.O.A2881ContribuinteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2881ContribuinteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTRIBUINTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[114]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRIBUINTEDATAHORAALT",gxz:"Z2882ContribuinteDataHoraAlt",gxold:"O2882ContribuinteDataHoraAlt",gxvar:"A2882ContribuinteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2882ContribuinteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2882ContribuinteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTRIBUINTEDATAHORAALT",gx.O.A2882ContribuinteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2882ContribuinteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTRIBUINTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[120]={fld:"TABLE9",grid:0};
   GXValidFnc[126]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"JS", format:2,grid:0};
   GXValidFnc[129]={fld:"BTNHELP",grid:0};
   this.A2868ContribuinteId = 0 ;
   this.Z2868ContribuinteId = 0 ;
   this.O2868ContribuinteId = 0 ;
   this.A2869ContribuinteNome = "" ;
   this.Z2869ContribuinteNome = "" ;
   this.O2869ContribuinteNome = "" ;
   this.A2870ContribuinteCNPJ = "" ;
   this.Z2870ContribuinteCNPJ = "" ;
   this.O2870ContribuinteCNPJ = "" ;
   this.A2866ContribuinteNaturezaDec = "" ;
   this.Z2866ContribuinteNaturezaDec = "" ;
   this.O2866ContribuinteNaturezaDec = "" ;
   this.A2873ContribuinteCPFRespCNPJ = "" ;
   this.Z2873ContribuinteCPFRespCNPJ = "" ;
   this.O2873ContribuinteCPFRespCNPJ = "" ;
   this.A2874ContribuinteCPFResponsavel = "" ;
   this.Z2874ContribuinteCPFResponsavel = "" ;
   this.O2874ContribuinteCPFResponsavel = "" ;
   this.A2875ContribuinteNomeResponsavel = "" ;
   this.Z2875ContribuinteNomeResponsavel = "" ;
   this.O2875ContribuinteNomeResponsavel = "" ;
   this.A2876ContribuinteDDDResponsavel = 0 ;
   this.Z2876ContribuinteDDDResponsavel = 0 ;
   this.O2876ContribuinteDDDResponsavel = 0 ;
   this.A2877ContribuinteFoneResponsavel = 0 ;
   this.Z2877ContribuinteFoneResponsavel = 0 ;
   this.O2877ContribuinteFoneResponsavel = 0 ;
   this.A2879ContribuinteFaxResponsavel = 0 ;
   this.Z2879ContribuinteFaxResponsavel = 0 ;
   this.O2879ContribuinteFaxResponsavel = 0 ;
   this.A2878ContribuinteRamalResponsavel = 0 ;
   this.Z2878ContribuinteRamalResponsavel = 0 ;
   this.O2878ContribuinteRamalResponsavel = 0 ;
   this.A2880ContribuinteEmailResponsavel = "" ;
   this.Z2880ContribuinteEmailResponsavel = "" ;
   this.O2880ContribuinteEmailResponsavel = "" ;
   this.A2872ContribuinteSnInstFinanc = "" ;
   this.Z2872ContribuinteSnInstFinanc = "" ;
   this.O2872ContribuinteSnInstFinanc = "" ;
   this.A2871ContribuinteSnAdmFundo = "" ;
   this.Z2871ContribuinteSnAdmFundo = "" ;
   this.O2871ContribuinteSnAdmFundo = "" ;
   this.A2992ContribuinteDecDepositario = "" ;
   this.Z2992ContribuinteDecDepositario = "" ;
   this.O2992ContribuinteDecDepositario = "" ;
   this.A2994ContribuinteIndPlanoPri = "" ;
   this.Z2994ContribuinteIndPlanoPri = "" ;
   this.O2994ContribuinteIndPlanoPri = "" ;
   this.A2991ContribuinteDecSocOst = "" ;
   this.Z2991ContribuinteDecSocOst = "" ;
   this.O2991ContribuinteDecSocOst = "" ;
   this.A2993ContribuintePgRendimento = "" ;
   this.Z2993ContribuintePgRendimento = "" ;
   this.O2993ContribuintePgRendimento = "" ;
   this.A2881ContribuinteUsuarioAlt = "" ;
   this.Z2881ContribuinteUsuarioAlt = "" ;
   this.O2881ContribuinteUsuarioAlt = "" ;
   this.A2882ContribuinteDataHoraAlt = gx.date.nullDate() ;
   this.Z2882ContribuinteDataHoraAlt = gx.date.nullDate() ;
   this.O2882ContribuinteDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19ErroCNPJ = 0 ;
   this.AV20ErroCPF = 0 ;
   this.AV21ErroCPF2 = 0 ;
   this.AV18ContribuinteId = 0 ;
   this.A2867ContribuinteEmpresaId = "" ;
   this.A2868ContribuinteId = 0 ;
   this.AV22SnAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A2869ContribuinteNome = "" ;
   this.A2870ContribuinteCNPJ = "" ;
   this.A2871ContribuinteSnAdmFundo = "" ;
   this.A2872ContribuinteSnInstFinanc = "" ;
   this.A2866ContribuinteNaturezaDec = "" ;
   this.A2873ContribuinteCPFRespCNPJ = "" ;
   this.A2874ContribuinteCPFResponsavel = "" ;
   this.A2875ContribuinteNomeResponsavel = "" ;
   this.A2876ContribuinteDDDResponsavel = 0 ;
   this.A2877ContribuinteFoneResponsavel = 0 ;
   this.A2878ContribuinteRamalResponsavel = 0 ;
   this.A2879ContribuinteFaxResponsavel = 0 ;
   this.A2880ContribuinteEmailResponsavel = "" ;
   this.A2991ContribuinteDecSocOst = "" ;
   this.A2992ContribuinteDecDepositario = "" ;
   this.A2993ContribuintePgRendimento = "" ;
   this.A2994ContribuinteIndPlanoPri = "" ;
   this.A2881ContribuinteUsuarioAlt = "" ;
   this.A2882ContribuinteDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12572_client": ["'FECHAR'", true] ,"e13572_client": ["AFTER TRN", true] ,"e1457296_client": ["ENTER", true] ,"e1557296_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ContribuinteId',fld:'vCONTRIBUINTEID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ContribuinteId", "vCONTRIBUINTEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2867ContribuinteEmpresaId", "CONTRIBUINTEEMPRESAID", 0, "char");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV19ErroCNPJ", "vERROCNPJ", 0, "int");
   this.setVCMap("AV20ErroCPF", "vERROCPF", 0, "int");
   this.setVCMap("AV21ErroCPF2", "vERROCPF2", 0, "int");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 296 ]= ["O2880ContribuinteEmailResponsavel","O2994ContribuinteIndPlanoPri","O2993ContribuintePgRendimento","O2992ContribuinteDecDepositario","O2991ContribuinteDecSocOst","O2872ContribuinteSnInstFinanc","O2871ContribuinteSnAdmFundo","O2878ContribuinteRamalResponsavel","O2879ContribuinteFaxResponsavel","O2877ContribuinteFoneResponsavel","O2876ContribuinteDDDResponsavel","O2875ContribuinteNomeResponsavel","O2874ContribuinteCPFResponsavel","O2873ContribuinteCPFRespCNPJ","O2866ContribuinteNaturezaDec","O2870ContribuinteCNPJ","O2869ContribuinteNome"] ;
});
gx.setParentObj(new tcontribuinte());
