/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:44:16.48
*/
gx.evt.autoSkip=!1;gx.define("hfaturarsempeditempar",!1,function(){var n,t;this.ServerClass="hfaturarsempeditempar";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Tpcobgrid=function(){try{var n=gx.util.balloon.getNew("vTPCOBGRID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s112_client=function(){this.AV32QtdeParcela=gx.num.trunc(0,0);this.AV34QtdeDiasEnt=gx.num.trunc(0,0);this.AV33DtPrimeiroVencimento=""};this.e112fx2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e122fx2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e152fx2_client=function(){this.executeServerEvent("'OBSERVACAO'",!0,arguments[0],!1,!1)};this.e162fx2_client=function(){this.executeServerEvent("'ACRESCIMODESCONTO'",!0,arguments[0],!1,!1)};this.e182fx2_client=function(){this.executeServerEvent("VTPCOBGRID.ISVALID",!0,arguments[0],!1,!1)};this.e192fx2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,16,19,21,22,25,27,29,31,34,36,40,43,46,49,52,54,57,60,67,69,70,71,72,73,74,75,76,84,85,88,89,90];this.GXLastCtrlId=90;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",68,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hfaturarsempeditempar",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!0,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("Seqgrid",69,"vSEQGRID","Seq","","SeqGrid","int",0,"px",6,6,"right",null,[],"Seqgrid","SeqGrid",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Vencimentogrid",70,"vVENCIMENTOGRID","Vencimento","","VencimentoGrid","date",0,"px",10,10,"right",null,[],"Vencimentogrid","VencimentoGrid",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Valorgrid",71,"vVALORGRID","Valor","","ValorGrid","decimal",0,"px",22,22,"right",null,[],"Valorgrid","ValorGrid",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Tpcobgrid",72,"vTPCOBGRID","Cod","","TpCobGrid","int",0,"px",3,3,"right",null,[],"Tpcobgrid","TpCobGrid",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("prompt_Tpcobgrid","PROMPT_TPCOBGRID",91,0,"",0,"",null,"","","gx-prompt Image","");t.addSingleLineEdit("Tpcobdesgrid",73,"vTPCOBDESGRID","Tipo de Cobrança","","TpCobDesGrid","svchar",0,"px",25,25,"left",null,[],"Tpcobdesgrid","TpCobDesGrid",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Bancogrid",74,"vBANCOGRID","Banco","","BancoGrid","int",0,"px",3,3,"right",null,[],"Bancogrid","BancoGrid",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("prompt_Bancogrid","PROMPT_BANCOGRID",92,0,"",0,"",null,"","","gx-prompt Image","");t.addSingleLineEdit("Agenciagrid",75,"vAGENCIAGRID","Agência","","AgenciaGrid","int",0,"px",4,4,"right",null,[],"Agenciagrid","AgenciaGrid",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("prompt_Agenciagrid","PROMPT_AGENCIAGRID",93,0,"",0,"",null,"","","gx-prompt Image","");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"TABLE5",grid:0};n[11]={fld:"TABLE4",grid:0};n[14]={fld:"TEXTBLOCK4",format:0,grid:0};n[16]={lvl:0,type:"svchar",len:70,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACODIGONOME",gxz:"ZV14PessoaCodigoNome",gxold:"OV14PessoaCodigoNome",gxvar:"AV14PessoaCodigoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14PessoaCodigoNome=n},v2z:function(n){gx.O.ZV14PessoaCodigoNome=n},v2c:function(){gx.fn.setControlValue("vPESSOACODIGONOME",gx.O.AV14PessoaCodigoNome,0)},c2v:function(){gx.O.AV14PessoaCodigoNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACODIGONOME")},nac:gx.falseFn};n[19]={fld:"TEXTBLOCK7",format:0,grid:0};n[21]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORFATURA",gxz:"ZV181ValorFatura",gxold:"OV181ValorFatura",gxvar:"AV181ValorFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV181ValorFatura=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV181ValorFatura=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vVALORFATURA",gx.O.AV181ValorFatura,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV181ValorFatura=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORFATURA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(21,function(){});n[22]={fld:"TABQTDEPAR",grid:0};n[25]={fld:"TEXTBLOCK6",format:0,grid:0};n[27]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPARCELA",gxz:"ZV32QtdeParcela",gxold:"OV32QtdeParcela",gxvar:"AV32QtdeParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32QtdeParcela=gx.num.intval(n)},v2z:function(n){gx.O.ZV32QtdeParcela=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDEPARCELA",gx.O.AV32QtdeParcela,0)},c2v:function(){gx.O.AV32QtdeParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPARCELA",".")},nac:gx.falseFn};n[29]={fld:"TEXTBLOCK10",format:0,grid:0};n[31]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPRIMEIROVENCIMENTO",gxz:"ZV33DtPrimeiroVencimento",gxold:"OV33DtPrimeiroVencimento",gxvar:"AV33DtPrimeiroVencimento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33DtPrimeiroVencimento=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV33DtPrimeiroVencimento=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDTPRIMEIROVENCIMENTO",gx.O.AV33DtPrimeiroVencimento,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV33DtPrimeiroVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPRIMEIROVENCIMENTO")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[34]={fld:"TEXTBLOCK9",format:0,grid:0};n[36]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASENT",gxz:"ZV34QtdeDiasEnt",gxold:"OV34QtdeDiasEnt",gxvar:"AV34QtdeDiasEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34QtdeDiasEnt=gx.num.intval(n)},v2z:function(n){gx.O.ZV34QtdeDiasEnt=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDEDIASENT",gx.O.AV34QtdeDiasEnt,0)},c2v:function(){gx.O.AV34QtdeDiasEnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASENT",".")},nac:gx.falseFn};n[40]={fld:"TABRETENCAO",grid:0};n[43]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETERISS",gxz:"ZV184SnReterISS",gxold:"OV184SnReterISS",gxvar:"AV184SnReterISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV184SnReterISS=n},v2z:function(n){gx.O.ZV184SnReterISS=n},v2c:function(){gx.fn.setCheckBoxValue("vSNRETERISS",gx.O.AV184SnReterISS,"S")},c2v:function(){gx.O.AV184SnReterISS=this.val()},val:function(){return gx.fn.getControlValue("vSNRETERISS")},nac:gx.falseFn,values:["S","N"]};n[46]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETERIRRF",gxz:"ZV185SnReterIRRF",gxold:"OV185SnReterIRRF",gxvar:"AV185SnReterIRRF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV185SnReterIRRF=n},v2z:function(n){gx.O.ZV185SnReterIRRF=n},v2c:function(){gx.fn.setCheckBoxValue("vSNRETERIRRF",gx.O.AV185SnReterIRRF,"S")},c2v:function(){gx.O.AV185SnReterIRRF=this.val()},val:function(){return gx.fn.getControlValue("vSNRETERIRRF")},nac:gx.falseFn,values:["S","N"]};n[49]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETERINSS",gxz:"ZV186SnReterINSS",gxold:"OV186SnReterINSS",gxvar:"AV186SnReterINSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV186SnReterINSS=n},v2z:function(n){gx.O.ZV186SnReterINSS=n},v2c:function(){gx.fn.setCheckBoxValue("vSNRETERINSS",gx.O.AV186SnReterINSS,"S")},c2v:function(){gx.O.AV186SnReterINSS=this.val()},val:function(){return gx.fn.getControlValue("vSNRETERINSS")},nac:gx.falseFn,values:["S","N"]};n[52]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETERPIS",gxz:"ZV187SnReterPIS",gxold:"OV187SnReterPIS",gxvar:"AV187SnReterPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV187SnReterPIS=n},v2z:function(n){gx.O.ZV187SnReterPIS=n},v2c:function(){gx.fn.setCheckBoxValue("vSNRETERPIS",gx.O.AV187SnReterPIS,"S")},c2v:function(){gx.O.AV187SnReterPIS=this.val()},val:function(){return gx.fn.getControlValue("vSNRETERPIS")},nac:gx.falseFn,values:["S","N"]};n[54]={fld:"TABRETENCAO2",grid:0};n[57]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETERCOFINS",gxz:"ZV188SnReterCOFINS",gxold:"OV188SnReterCOFINS",gxvar:"AV188SnReterCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV188SnReterCOFINS=n},v2z:function(n){gx.O.ZV188SnReterCOFINS=n},v2c:function(){gx.fn.setCheckBoxValue("vSNRETERCOFINS",gx.O.AV188SnReterCOFINS,"S")},c2v:function(){gx.O.AV188SnReterCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSNRETERCOFINS")},nac:gx.falseFn,values:["S","N"]};n[60]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRETERCSLL",gxz:"ZV189SnReterCSLL",gxold:"OV189SnReterCSLL",gxvar:"AV189SnReterCSLL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV189SnReterCSLL=n},v2z:function(n){gx.O.ZV189SnReterCSLL=n},v2c:function(){gx.fn.setCheckBoxValue("vSNRETERCSLL",gx.O.AV189SnReterCSLL,"S")},c2v:function(){gx.O.AV189SnReterCSLL=this.val()},val:function(){return gx.fn.getControlValue("vSNRETERCSLL")},nac:gx.falseFn,values:["S","N"]};n[67]={fld:"DIV1",format:2,grid:0};n[69]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEQGRID",gxz:"ZV100SeqGrid",gxold:"OV100SeqGrid",gxvar:"AV100SeqGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV100SeqGrid=gx.num.intval(n)},v2z:function(n){gx.O.ZV100SeqGrid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vSEQGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV100SeqGrid,0)},c2v:function(){gx.O.AV100SeqGrid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vSEQGRID",n||gx.fn.currentGridRowImpl(68),".")},nac:gx.falseFn};n[70]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVENCIMENTOGRID",gxz:"ZV95VencimentoGrid",gxold:"OV95VencimentoGrid",gxvar:"AV95VencimentoGrid",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV95VencimentoGrid=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV95VencimentoGrid=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("vVENCIMENTOGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV95VencimentoGrid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV95VencimentoGrid=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("vVENCIMENTOGRID",n||gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};n[71]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORGRID",gxz:"ZV96ValorGrid",gxold:"OV96ValorGrid",gxvar:"AV96ValorGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV96ValorGrid=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV96ValorGrid=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vVALORGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV96ValorGrid,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV96ValorGrid=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vVALORGRID",n||gx.fn.currentGridRowImpl(68),".",",")},nac:gx.falseFn};n[72]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:this.Validv_Tpcobgrid,isvalid:"e182fx2_client",rgrid:[],fld:"vTPCOBGRID",gxz:"ZV97TpCobGrid",gxold:"OV97TpCobGrid",gxvar:"AV97TpCobGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV97TpCobGrid=gx.num.intval(n)},v2z:function(n){gx.O.ZV97TpCobGrid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vTPCOBGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV97TpCobGrid,0)},c2v:function(){gx.O.AV97TpCobGrid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vTPCOBGRID",n||gx.fn.currentGridRowImpl(68),".")},nac:gx.falseFn};n[73]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOBDESGRID",gxz:"ZV101TpCobDesGrid",gxold:"OV101TpCobDesGrid",gxvar:"AV101TpCobDesGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV101TpCobDesGrid=n},v2z:function(n){gx.O.ZV101TpCobDesGrid=n},v2c:function(n){gx.fn.setGridControlValue("vTPCOBDESGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV101TpCobDesGrid,0)},c2v:function(){gx.O.AV101TpCobDesGrid=this.val()},val:function(n){return gx.fn.getGridControlValue("vTPCOBDESGRID",n||gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};n[74]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOGRID",gxz:"ZV98BancoGrid",gxold:"OV98BancoGrid",gxvar:"AV98BancoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV98BancoGrid=gx.num.intval(n)},v2z:function(n){gx.O.ZV98BancoGrid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vBANCOGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV98BancoGrid,0)},c2v:function(){gx.O.AV98BancoGrid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vBANCOGRID",n||gx.fn.currentGridRowImpl(68),".")},nac:gx.falseFn};n[75]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAGENCIAGRID",gxz:"ZV99AgenciaGrid",gxold:"OV99AgenciaGrid",gxvar:"AV99AgenciaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV99AgenciaGrid=gx.num.intval(n)},v2z:function(n){gx.O.ZV99AgenciaGrid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vAGENCIAGRID",n||gx.fn.currentGridRowImpl(68),gx.O.AV99AgenciaGrid,0)},c2v:function(){gx.O.AV99AgenciaGrid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vAGENCIAGRID",n||gx.fn.currentGridRowImpl(68),".")},nac:gx.falseFn};n[76]={fld:"DIV2",format:2,grid:0};n[84]={fld:"JS",format:2,grid:0};n[85]={fld:"TABINVISIVEL",grid:0};n[88]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTELA",gxz:"ZV37Tela",gxold:"OV37Tela",gxvar:"AV37Tela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37Tela=gx.num.intval(n)},v2z:function(n){gx.O.ZV37Tela=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTELA",gx.O.AV37Tela,0)},c2v:function(){gx.O.AV37Tela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTELA",".")},nac:gx.falseFn};n[89]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILNOTA",gxz:"ZV50EmailNota",gxold:"OV50EmailNota",gxvar:"AV50EmailNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50EmailNota=n},v2z:function(n){gx.O.ZV50EmailNota=n},v2c:function(){gx.fn.setControlValue("vEMAILNOTA",gx.O.AV50EmailNota,0)},c2v:function(){gx.O.AV50EmailNota=this.val()},val:function(){return gx.fn.getControlValue("vEMAILNOTA")},nac:gx.falseFn};n[90]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV179PessoaId",gxold:"OV179PessoaId",gxvar:"AV179PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV179PessoaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV179PessoaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV179PessoaId,0)},c2v:function(){gx.O.AV179PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",".")},nac:gx.falseFn};this.AV14PessoaCodigoNome="";this.ZV14PessoaCodigoNome="";this.OV14PessoaCodigoNome="";this.AV181ValorFatura=0;this.ZV181ValorFatura=0;this.OV181ValorFatura=0;this.AV32QtdeParcela=0;this.ZV32QtdeParcela=0;this.OV32QtdeParcela=0;this.AV33DtPrimeiroVencimento=gx.date.nullDate();this.ZV33DtPrimeiroVencimento=gx.date.nullDate();this.OV33DtPrimeiroVencimento=gx.date.nullDate();this.AV34QtdeDiasEnt=0;this.ZV34QtdeDiasEnt=0;this.OV34QtdeDiasEnt=0;this.AV184SnReterISS="";this.ZV184SnReterISS="";this.OV184SnReterISS="";this.AV185SnReterIRRF="";this.ZV185SnReterIRRF="";this.OV185SnReterIRRF="";this.AV186SnReterINSS="";this.ZV186SnReterINSS="";this.OV186SnReterINSS="";this.AV187SnReterPIS="";this.ZV187SnReterPIS="";this.OV187SnReterPIS="";this.AV188SnReterCOFINS="";this.ZV188SnReterCOFINS="";this.OV188SnReterCOFINS="";this.AV189SnReterCSLL="";this.ZV189SnReterCSLL="";this.OV189SnReterCSLL="";this.ZV100SeqGrid=0;this.OV100SeqGrid=0;this.ZV95VencimentoGrid=gx.date.nullDate();this.OV95VencimentoGrid=gx.date.nullDate();this.ZV96ValorGrid=0;this.OV96ValorGrid=0;this.ZV97TpCobGrid=0;this.OV97TpCobGrid=0;this.ZV101TpCobDesGrid="";this.OV101TpCobDesGrid="";this.ZV98BancoGrid=0;this.OV98BancoGrid=0;this.ZV99AgenciaGrid=0;this.OV99AgenciaGrid=0;this.AV37Tela=0;this.ZV37Tela=0;this.OV37Tela=0;this.AV50EmailNota="";this.ZV50EmailNota="";this.OV50EmailNota="";this.AV179PessoaId=0;this.ZV179PessoaId=0;this.OV179PessoaId=0;this.AV14PessoaCodigoNome="";this.AV181ValorFatura=0;this.AV32QtdeParcela=0;this.AV33DtPrimeiroVencimento=gx.date.nullDate();this.AV34QtdeDiasEnt=0;this.AV184SnReterISS="";this.AV185SnReterIRRF="";this.AV186SnReterINSS="";this.AV187SnReterPIS="";this.AV188SnReterCOFINS="";this.AV189SnReterCSLL="";this.AV37Tela=0;this.AV50EmailNota="";this.AV179PessoaId=0;this.AV100SeqGrid=0;this.AV95VencimentoGrid=gx.date.nullDate();this.AV96ValorGrid=0;this.AV97TpCobGrid=0;this.AV101TpCobDesGrid="";this.AV98BancoGrid=0;this.AV99AgenciaGrid=0;this.A992TipoCobrancaId=0;this.A991TipoCobrancaEmpresaId="";this.A993TipoCobrancaDescricao="";this.A988TipoCobrancaFormaCob="";this.A1266TransacaoPagRecId="";this.A1175TransacaoPagRecTipo="";this.A1212TransacaoPagRecEmpresaId="";this.A1240TipoCobrancaPagRecId=0;this.A1231TipoCobrancaPagRecDescricao="";this.A1166BancoPagRecBancoId=0;this.A1192BancoPagRecAgenciaId=0;this.A1241TipoCobrancaPagRecEmpresaId="";this.A2983ListaServicoId=0;this.A11712ListaServicoLanPISCodigo=0;this.A11713ListaServicoLanCOFINSCodigo=0;this.A11714ListaServicoLanISSCodigo=0;this.A11715ListaServicoLanINSSCodigo=0;this.A11716ListaServicoLanCSLLCodigo=0;this.A11717ListaServicoLanIRCodigo=0;this.Events={e112fx2_client:["'FECHAR'",!0],e122fx2_client:["ENTER",!0],e152fx2_client:["'OBSERVACAO'",!0],e162fx2_client:["'ACRESCIMODESCONTO'",!0],e182fx2_client:["VTPCOBGRID.ISVALID",!0],e192fx2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"}],[{ctrl:"BTNAVANCAR",prop:"Visible"},{ctrl:"BTNCANCELAR",prop:"Visible"},{ctrl:"BTNCONFIRMAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vQTDEPARCELA","Enabled")',ctrl:"vQTDEPARCELA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vQTDEDIASENT","Enabled")',ctrl:"vQTDEDIASENT",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTPRIMEIROVENCIMENTO","Enabled")',ctrl:"vDTPRIMEIROVENCIMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCOFINS","Enabled")',ctrl:"vSNRETERCOFINS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCSLL","Enabled")',ctrl:"vSNRETERCSLL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERINSS","Enabled")',ctrl:"vSNRETERINSS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERIRRF","Enabled")',ctrl:"vSNRETERIRRF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERISS","Enabled")',ctrl:"vSNRETERISS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERPIS","Enabled")',ctrl:"vSNRETERPIS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABQTDEPAR","Visible")',ctrl:"TABQTDEPAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSEQGRID","Enabled")',ctrl:"vSEQGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVENCIMENTOGRID","Enabled")',ctrl:"vVENCIMENTOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVALORGRID","Enabled")',ctrl:"vVALORGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTPCOBGRID","Enabled")',ctrl:"vTPCOBGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBANCOGRID","Enabled")',ctrl:"vBANCOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vAGENCIAGRID","Enabled")',ctrl:"vAGENCIAGRID",prop:"Enabled"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV37Tela",fld:"vTELA"},{av:"AV32QtdeParcela",fld:"vQTDEPARCELA"}],[{av:'gx.fn.getCtrlProperty("vQTDEPARCELA","Enabled")',ctrl:"vQTDEPARCELA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vQTDEDIASENT","Enabled")',ctrl:"vQTDEDIASENT",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTPRIMEIROVENCIMENTO","Enabled")',ctrl:"vDTPRIMEIROVENCIMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCOFINS","Enabled")',ctrl:"vSNRETERCOFINS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCSLL","Enabled")',ctrl:"vSNRETERCSLL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERINSS","Enabled")',ctrl:"vSNRETERINSS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERIRRF","Enabled")',ctrl:"vSNRETERIRRF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERISS","Enabled")',ctrl:"vSNRETERISS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERPIS","Enabled")',ctrl:"vSNRETERPIS",prop:"Enabled"},{av:"AV37Tela",fld:"vTELA"},{av:"AV36SdtParCPC",fld:"vSDTPARCPC"},{av:"AV32QtdeParcela",fld:"vQTDEPARCELA"},{av:"AV34QtdeDiasEnt",fld:"vQTDEDIASENT"},{av:"AV33DtPrimeiroVencimento",fld:"vDTPRIMEIROVENCIMENTO"}]];this.EvtParms.ENTER=[[{av:"AV37Tela",fld:"vTELA"},{av:"AV38TpErro",fld:"vTPERRO"},{av:"AV179PessoaId",fld:"vPESSOAID"},{av:"AV188SnReterCOFINS",fld:"vSNRETERCOFINS"},{av:"AV189SnReterCSLL",fld:"vSNRETERCSLL"},{av:"AV186SnReterINSS",fld:"vSNRETERINSS"},{av:"AV185SnReterIRRF",fld:"vSNRETERIRRF"},{av:"AV184SnReterISS",fld:"vSNRETERISS"},{av:"AV187SnReterPIS",fld:"vSNRETERPIS"},{av:"AV32QtdeParcela",fld:"vQTDEPARCELA"},{av:"AV33DtPrimeiroVencimento",fld:"vDTPRIMEIROVENCIMENTO"},{av:"AV34QtdeDiasEnt",fld:"vQTDEDIASENT"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A11712ListaServicoLanPISCodigo",fld:"LISTASERVICOLANPISCODIGO"},{av:"A11713ListaServicoLanCOFINSCodigo",fld:"LISTASERVICOLANCOFINSCODIGO"},{av:"A11714ListaServicoLanISSCodigo",fld:"LISTASERVICOLANISSCODIGO"},{av:"A11715ListaServicoLanINSSCodigo",fld:"LISTASERVICOLANINSSCODIGO"},{av:"A11716ListaServicoLanCSLLCodigo",fld:"LISTASERVICOLANCSLLCODIGO"},{av:"A11717ListaServicoLanIRCodigo",fld:"LISTASERVICOLANIRCODIGO"},{av:"AV181ValorFatura",fld:"vVALORFATURA"},{av:"AV44VencCalculado",fld:"vVENCCALCULADO"},{av:"A1212TransacaoPagRecEmpresaId",fld:"TRANSACAOPAGRECEMPRESAID"},{av:"AV42TransacaoPagRecEmpresaId",fld:"vTRANSACAOPAGRECEMPRESAID"},{av:"A1175TransacaoPagRecTipo",fld:"TRANSACAOPAGRECTIPO"},{av:"A1266TransacaoPagRecId",fld:"TRANSACAOPAGRECID"},{av:"A1240TipoCobrancaPagRecId",fld:"TIPOCOBRANCAPAGRECID"},{av:"A1231TipoCobrancaPagRecDescricao",fld:"TIPOCOBRANCAPAGRECDESCRICAO"},{av:"A1166BancoPagRecBancoId",fld:"BANCOPAGRECBANCOID"},{av:"A1192BancoPagRecAgenciaId",fld:"BANCOPAGRECAGENCIAID"},{av:"AV100SeqGrid",fld:"vSEQGRID",grid:68},{av:"AV95VencimentoGrid",fld:"vVENCIMENTOGRID",grid:68},{av:"AV97TpCobGrid",fld:"vTPCOBGRID",grid:68},{av:"AV98BancoGrid",fld:"vBANCOGRID",grid:68},{av:"AV99AgenciaGrid",fld:"vAGENCIAGRID",grid:68},{av:"AV96ValorGrid",fld:"vVALORGRID",grid:68},{av:"A991TipoCobrancaEmpresaId",fld:"TIPOCOBRANCAEMPRESAID"},{av:"AV47TipoCobrancaEmpresaId",fld:"vTIPOCOBRANCAEMPRESAID"},{av:"A992TipoCobrancaId",fld:"TIPOCOBRANCAID"},{av:"A993TipoCobrancaDescricao",fld:"TIPOCOBRANCADESCRICAO"},{av:"AV36SdtParCPC",fld:"vSDTPARCPC"},{av:"AV5DtEmissao",fld:"vDTEMISSAO"},{av:"A988TipoCobrancaFormaCob",fld:"TIPOCOBRANCAFORMACOB"},{av:"AV48TipoCobrancaFormaCob",fld:"vTIPOCOBRANCAFORMACOB"},{av:"AV49ValorTotal",fld:"vVALORTOTAL"},{av:"AV82DataBase",fld:"vDATABASE"},{av:"AV45SnUltDiaMes",fld:"vSNULTDIAMES"}],[{av:"AV37Tela",fld:"vTELA"},{av:"AV17SdtTela",fld:"vSDTTELA"},{av:"AV38TpErro",fld:"vTPERRO"},{av:"AV191ListaServicoLanPISCodigo",fld:"vLISTASERVICOLANPISCODIGO"},{av:"AV192ListaServicoLanCOFINSCodigo",fld:"vLISTASERVICOLANCOFINSCODIGO"},{av:"AV193ListaServicoLanISSCodigo",fld:"vLISTASERVICOLANISSCODIGO"},{av:"AV194ListaServicoLanINSSCodigo",fld:"vLISTASERVICOLANINSSCODIGO"},{av:"AV195ListaServicoLanCSLLCodigo",fld:"vLISTASERVICOLANCSLLCODIGO"},{av:"AV196ListaServicoLanIRCodigo",fld:"vLISTASERVICOLANIRCODIGO"},{av:"AV41TransacaoPagRecId",fld:"vTRANSACAOPAGRECID"},{av:"AV45SnUltDiaMes",fld:"vSNULTDIAMES"},{av:"AV46DataAuxiliar",fld:"vDATAAUXILIAR"},{av:"AV81ValorParcela",fld:"vVALORPARCELA"},{av:"AV80TotalParcela",fld:"vTOTALPARCELA"},{av:"AV36SdtParCPC",fld:"vSDTPARCPC"},{av:"AV39Parcela",fld:"vPARCELA"},{av:"AV40SdtParCPCItem",fld:"vSDTPARCPCITEM"},{av:"AV44VencCalculado",fld:"vVENCCALCULADO"},{av:"AV82DataBase",fld:"vDATABASE"},{av:"AV208GXV1",fld:"vGXV1"},{av:"AV209GXLvl261",fld:"vGXLVL261"},{av:"AV48TipoCobrancaFormaCob",fld:"vTIPOCOBRANCAFORMACOB"},{av:"AV49ValorTotal",fld:"vVALORTOTAL"}]];this.EvtParms["'OBSERVACAO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"},{av:"AV100SeqGrid",fld:"vSEQGRID",grid:68},{av:"AV95VencimentoGrid",fld:"vVENCIMENTOGRID",grid:68},{av:"AV97TpCobGrid",fld:"vTPCOBGRID",grid:68},{av:"AV98BancoGrid",fld:"vBANCOGRID",grid:68},{av:"AV99AgenciaGrid",fld:"vAGENCIAGRID",grid:68},{av:"AV96ValorGrid",fld:"vVALORGRID",grid:68},{av:"A991TipoCobrancaEmpresaId",fld:"TIPOCOBRANCAEMPRESAID"},{av:"AV47TipoCobrancaEmpresaId",fld:"vTIPOCOBRANCAEMPRESAID"},{av:"A992TipoCobrancaId",fld:"TIPOCOBRANCAID"},{av:"A993TipoCobrancaDescricao",fld:"TIPOCOBRANCADESCRICAO"}],[{av:"AV36SdtParCPC",fld:"vSDTPARCPC"},{av:"AV40SdtParCPCItem",fld:"vSDTPARCPCITEM"}]];this.EvtParms["'ACRESCIMODESCONTO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"},{av:"AV20TipoChamada",fld:"vTIPOCHAMADA"},{av:"AV11NotaServicoSeq",fld:"vNOTASERVICOSEQ"},{av:"AV100SeqGrid",fld:"vSEQGRID",grid:68},{av:"AV95VencimentoGrid",fld:"vVENCIMENTOGRID",grid:68},{av:"AV97TpCobGrid",fld:"vTPCOBGRID",grid:68},{av:"AV98BancoGrid",fld:"vBANCOGRID",grid:68},{av:"AV99AgenciaGrid",fld:"vAGENCIAGRID",grid:68},{av:"AV96ValorGrid",fld:"vVALORGRID",grid:68},{av:"A991TipoCobrancaEmpresaId",fld:"TIPOCOBRANCAEMPRESAID"},{av:"AV47TipoCobrancaEmpresaId",fld:"vTIPOCOBRANCAEMPRESAID"},{av:"A992TipoCobrancaId",fld:"TIPOCOBRANCAID"},{av:"A993TipoCobrancaDescricao",fld:"TIPOCOBRANCADESCRICAO"}],[{av:"AV36SdtParCPC",fld:"vSDTPARCPC"},{av:"AV40SdtParCPCItem",fld:"vSDTPARCPCITEM"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV36SdtParCPC",fld:"vSDTPARCPC"},{av:"AV210GXV2",fld:"vGXV2"},{av:"AV40SdtParCPCItem",fld:"vSDTPARCPCITEM"},{av:"AV100SeqGrid",fld:"vSEQGRID"},{av:"AV95VencimentoGrid",fld:"vVENCIMENTOGRID"},{av:"AV96ValorGrid",fld:"vVALORGRID"},{av:"AV97TpCobGrid",fld:"vTPCOBGRID"},{av:"AV101TpCobDesGrid",fld:"vTPCOBDESGRID"},{av:"AV98BancoGrid",fld:"vBANCOGRID"},{av:"AV99AgenciaGrid",fld:"vAGENCIAGRID"}]];this.EvtParms["VTPCOBGRID.ISVALID"]=[[{av:"A991TipoCobrancaEmpresaId",fld:"TIPOCOBRANCAEMPRESAID"},{av:"AV47TipoCobrancaEmpresaId",fld:"vTIPOCOBRANCAEMPRESAID"},{av:"A992TipoCobrancaId",fld:"TIPOCOBRANCAID"},{av:"AV97TpCobGrid",fld:"vTPCOBGRID"},{av:"A993TipoCobrancaDescricao",fld:"TIPOCOBRANCADESCRICAO"}],[{av:"AV101TpCobDesGrid",fld:"vTPCOBDESGRID"}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"}],[{ctrl:"BTNAVANCAR",prop:"Visible"},{ctrl:"BTNCANCELAR",prop:"Visible"},{ctrl:"BTNCONFIRMAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vQTDEPARCELA","Enabled")',ctrl:"vQTDEPARCELA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vQTDEDIASENT","Enabled")',ctrl:"vQTDEDIASENT",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTPRIMEIROVENCIMENTO","Enabled")',ctrl:"vDTPRIMEIROVENCIMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCOFINS","Enabled")',ctrl:"vSNRETERCOFINS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCSLL","Enabled")',ctrl:"vSNRETERCSLL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERINSS","Enabled")',ctrl:"vSNRETERINSS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERIRRF","Enabled")',ctrl:"vSNRETERIRRF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERISS","Enabled")',ctrl:"vSNRETERISS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERPIS","Enabled")',ctrl:"vSNRETERPIS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABQTDEPAR","Visible")',ctrl:"TABQTDEPAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSEQGRID","Enabled")',ctrl:"vSEQGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVENCIMENTOGRID","Enabled")',ctrl:"vVENCIMENTOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVALORGRID","Enabled")',ctrl:"vVALORGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTPCOBGRID","Enabled")',ctrl:"vTPCOBGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBANCOGRID","Enabled")',ctrl:"vBANCOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vAGENCIAGRID","Enabled")',ctrl:"vAGENCIAGRID",prop:"Enabled"}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"}],[{ctrl:"BTNAVANCAR",prop:"Visible"},{ctrl:"BTNCANCELAR",prop:"Visible"},{ctrl:"BTNCONFIRMAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vQTDEPARCELA","Enabled")',ctrl:"vQTDEPARCELA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vQTDEDIASENT","Enabled")',ctrl:"vQTDEDIASENT",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTPRIMEIROVENCIMENTO","Enabled")',ctrl:"vDTPRIMEIROVENCIMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCOFINS","Enabled")',ctrl:"vSNRETERCOFINS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCSLL","Enabled")',ctrl:"vSNRETERCSLL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERINSS","Enabled")',ctrl:"vSNRETERINSS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERIRRF","Enabled")',ctrl:"vSNRETERIRRF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERISS","Enabled")',ctrl:"vSNRETERISS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERPIS","Enabled")',ctrl:"vSNRETERPIS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABQTDEPAR","Visible")',ctrl:"TABQTDEPAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSEQGRID","Enabled")',ctrl:"vSEQGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVENCIMENTOGRID","Enabled")',ctrl:"vVENCIMENTOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVALORGRID","Enabled")',ctrl:"vVALORGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTPCOBGRID","Enabled")',ctrl:"vTPCOBGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBANCOGRID","Enabled")',ctrl:"vBANCOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vAGENCIAGRID","Enabled")',ctrl:"vAGENCIAGRID",prop:"Enabled"}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"}],[{ctrl:"BTNAVANCAR",prop:"Visible"},{ctrl:"BTNCANCELAR",prop:"Visible"},{ctrl:"BTNCONFIRMAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vQTDEPARCELA","Enabled")',ctrl:"vQTDEPARCELA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vQTDEDIASENT","Enabled")',ctrl:"vQTDEDIASENT",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTPRIMEIROVENCIMENTO","Enabled")',ctrl:"vDTPRIMEIROVENCIMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCOFINS","Enabled")',ctrl:"vSNRETERCOFINS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCSLL","Enabled")',ctrl:"vSNRETERCSLL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERINSS","Enabled")',ctrl:"vSNRETERINSS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERIRRF","Enabled")',ctrl:"vSNRETERIRRF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERISS","Enabled")',ctrl:"vSNRETERISS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERPIS","Enabled")',ctrl:"vSNRETERPIS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABQTDEPAR","Visible")',ctrl:"TABQTDEPAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSEQGRID","Enabled")',ctrl:"vSEQGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVENCIMENTOGRID","Enabled")',ctrl:"vVENCIMENTOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVALORGRID","Enabled")',ctrl:"vVALORGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTPCOBGRID","Enabled")',ctrl:"vTPCOBGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBANCOGRID","Enabled")',ctrl:"vBANCOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vAGENCIAGRID","Enabled")',ctrl:"vAGENCIAGRID",prop:"Enabled"}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37Tela",fld:"vTELA"}],[{ctrl:"BTNAVANCAR",prop:"Visible"},{ctrl:"BTNCANCELAR",prop:"Visible"},{ctrl:"BTNCONFIRMAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vQTDEPARCELA","Enabled")',ctrl:"vQTDEPARCELA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vQTDEDIASENT","Enabled")',ctrl:"vQTDEDIASENT",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vDTPRIMEIROVENCIMENTO","Enabled")',ctrl:"vDTPRIMEIROVENCIMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCOFINS","Enabled")',ctrl:"vSNRETERCOFINS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERCSLL","Enabled")',ctrl:"vSNRETERCSLL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERINSS","Enabled")',ctrl:"vSNRETERINSS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERIRRF","Enabled")',ctrl:"vSNRETERIRRF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERISS","Enabled")',ctrl:"vSNRETERISS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSNRETERPIS","Enabled")',ctrl:"vSNRETERPIS",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABQTDEPAR","Visible")',ctrl:"TABQTDEPAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSEQGRID","Enabled")',ctrl:"vSEQGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVENCIMENTOGRID","Enabled")',ctrl:"vVENCIMENTOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVALORGRID","Enabled")',ctrl:"vVALORGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTPCOBGRID","Enabled")',ctrl:"vTPCOBGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBANCOGRID","Enabled")',ctrl:"vBANCOGRID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vAGENCIAGRID","Enabled")',ctrl:"vAGENCIAGRID",prop:"Enabled"}]];this.setPrompt("PROMPT_TPCOBGRID",[72]);this.setPrompt("PROMPT_BANCOGRID",[74]);this.setPrompt("PROMPT_AGENCIAGRID",[75]);this.EnterCtrl=["BTNAVANCAR","BTNCONFIRMAR"];t.addRefreshingVar(this.GXValidFnc[88]);this.InitStandaloneVars()});gx.setParentObj(new hfaturarsempeditempar)